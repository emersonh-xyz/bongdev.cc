import { NextResponse } from 'next/server'
import querystring from 'querystring';

const {
    SPOTIFY_CLIENT_ID: client_id,
    SPOTIFY_CLIENT_SECRET: client_secret,
    SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
        next: { revalidate: 1 }
    });

    return response.json();
};

const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        next: { revalidate: 1 }
    });

};

export async function GET() {
    const response: any = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return NextResponse.json({ isPlaying: false })
    }

    const song = await response.json()
    const data = {
        isPlaying: song.is_playing,
        title: song.item.name,
        artist: song.item.artists,
        album: song.item.album.name,
        albumImageUrl: song.item.album.images[0].url,
        songUrl: song.item.external_urls.spotify,
        duration: song.item.duration_ms,
        progress: song.progress_ms,
    }


    return NextResponse.json({ data: data })
}
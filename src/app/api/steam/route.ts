import { NextResponse } from "next/server";

const getPlayerSummaries = () => {
    const playersummaries_endpoint = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_TOKEN}&steamids=${process.env.STEAM_ID}`;
    return fetch(playersummaries_endpoint, {
        method: 'GET',
        next: { revalidate: 1 }
    });
};

export async function GET() {
    const response: any = await getPlayerSummaries();

    if (response.status != 200) {
        return NextResponse.json({
            steam: {
                personastate: 'Offline',
            },
        });
    }

    const steam = await response.json();

    if (steam.item === null) {
        return NextResponse.json({
            steam: {
                personastate: 'Offline',
            },
        });
    }

    const getPersonName = steam.response.players[0].personaname;
    const getAvatar = steam.response.players[0].avatarfull;
    const getStatus =
        steam.response.players[0].personastate === 1
            ? 'Online '
            : steam.response.players[0].personastate === 2
                ? 'Busy'
                : steam.response.players[0].personastate === 3
                    ? 'Away'
                    : 'Offline';
    const getGames = !steam.response.players[0].gameextrainfo
        ? false
        : `Playing - ${steam.response.players[0].gameextrainfo}`;
    const getprofileUrl = steam.response.players[0].profileurl;

    return NextResponse.json({
        steam: {
            getPersonName,
            getAvatar,
            getStatus,
            getGames,
            getprofileUrl,
        },
    });
}
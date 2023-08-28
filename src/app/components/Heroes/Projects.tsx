'use client';

import { Button, Divider, Pagination, Tabs } from "@nextui-org/react";
import ProjectCard from "../Cards/ProjectCard";
import { useState } from "react";


export default function Projects() {

    const [isShowingMoreProjects, setShowingMoreProjects] = useState(false)

    const projects = [
        {
            title: "Simple SMS",
            content: "A web application for purchasing temporary disposable SMS numbers with instant phone verification.",
            link: "https://simple-sms.io",
            logo: "https://pbs.twimg.com/profile_images/1620568363108892672/Cq1o18fU_400x400.png",
            github: "",
            skills: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]
        },
        {
            title: "Brevity",
            content: "A chrome extension that programmatically ranks your emails based on their urgency and importance.",
            link: "https://devpost.com/software/brevity-sh05n6",
            logo: "https://github.com/noahsmiths/brevity/blob/main/frontend/public/BrevityIcon-128.png?raw=true",
            github: "https://github.com/noahsmiths/brevity",
            skills: ["JavaScript", "Tailwind CSS", "Google OAuth", "GPT-3", "React.js"],
        },
        {
            title: "Bongo Media",
            content: "A web application for creators and users to view and interact with various media-- integrated directly with Patreon.",
            link: "https://studiogek.vercel.app/",
            logo: "https://yt3.googleusercontent.com/Ak5-KfSpjDFpZpLy-QutumUjxE7dFny56-H9hYi4gIsAHGmOowvLAXLnF_Ft8MR2HOpw7OL4=s900-c-k-c0x00ffffff-no-rj",
            github: "",
            skills: ["Next.js", "Tailwind CSS", "MongoDB", "NextUI", "NextAuth", "Patreon OAuth"],
        },
        {
            title: "Inkdrop Discord RPC",
            content: "A plugin for Inkdrop, a note-taking app, that enables Discord rich presence.",
            link: "https://my.inkdrop.app/plugins/discord-rich-presence",
            logo: "https://play-lh.googleusercontent.com/QKuHNPzyKfPKyLJKhRQSiCFOkhB4xRtU1dnSslduvoXcPxO9_t6KGlPDXKbtnd6Ck0bo",
            github: "https://github.com/emersonh-xyz/inkdrop-discord-rpc",
            skills: ["Electron", "Node.js", "JavaScript"]
        }
    ]

    const moreProjects =
        [
            {
                title: "clipit.systems",
                content: "A website designed for users to easily share & upload various gaming clips.",
                link: "https://clipit.systems",
                logo: "https://cdn.discordapp.com/attachments/949488673823551578/1145737138122530826/image.png",
                github: "https://github.com",
                skills: ["Next.js", "Tailwind CSS", "Pocketbase"]
            }
        ]


    return (
        <div className="flex justify-center flex-col items-center">
            <p className="text-3xl font-bold">Projects</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                {projects.map((project, key) => {
                    return (
                        <ProjectCard key={key} props={project} />
                    )
                })}
            </div>

            {isShowingMoreProjects &&
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                    {moreProjects.map((project, key) => {
                        return (
                            <ProjectCard key={key} props={project} />
                        )
                    })}
                </div>
            }

            <Button onClick={() => setShowingMoreProjects(x => !x)} variant="ghost" className="mt-4">{isShowingMoreProjects ? "View less" : "View more"}</Button>


            {/* <Pagination className="mt-8" total={2} initialPage={1} /> */}
        </div>
    )
}
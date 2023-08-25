'use client';

import { Button, Divider, Pagination, Tabs } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";


export default function Projects() {

    const projects = [
        {
            title: "Simple SMS",
            content: "A web application for purchasing temporary disposable SMS numbers with instant phone verification",
            link: "simple-sms.io",
            logo: "https://pbs.twimg.com/profile_images/1620568363108892672/Cq1o18fU_400x400.png",
            github: "",
            skills: ["",]
        },
        {
            title: "Brevity",
            content: "A chrome extension that programmatically ranks your emails based on their urgency and importance.",
            link: "https://devpost.com/software/brevity-sh05n6",
            logo: "https://github.com/noahsmiths/brevity/blob/main/frontend/public/BrevityIcon-128.png?raw=true",
            github: ""
        },
        {
            title: "Bongo Media",
            content: "A web application for creators and users to view and interact with various media-- integrated directly with Patreon.",
            link: "https://devpost.com/software/brevity-sh05n6",
            logo: "https://yt3.googleusercontent.com/Ak5-KfSpjDFpZpLy-QutumUjxE7dFny56-H9hYi4gIsAHGmOowvLAXLnF_Ft8MR2HOpw7OL4=s900-c-k-c0x00ffffff-no-rj",
            github: "",
        },
        {
            title: "Inkdrop Discord RPC",
            content: "A plugin for Inkdrop, a note-taking app, that enables Discord rich presence.",
            link: "https://devpost.com/software/brevity-sh05n6",
            logo: "https://play-lh.googleusercontent.com/QKuHNPzyKfPKyLJKhRQSiCFOkhB4xRtU1dnSslduvoXcPxO9_t6KGlPDXKbtnd6Ck0bo",
            github: ""
        }
    ]
   

    return (
        <div className="flex justify-center flex-col items-center">
            <p className="text-3xl font-bold">My work</p>

            <div className="grid grid-cols-2 gap-5 mt-8">
                <ProjectCard props={projects[0]} />
                <ProjectCard props={projects[1]}/>
                <ProjectCard props={projects[2]}/>
                <ProjectCard props={projects[3]}/>
            </div>

            <Pagination color="success" className="mt-8" total={2} initialPage={1} />
        </div>
    )
}
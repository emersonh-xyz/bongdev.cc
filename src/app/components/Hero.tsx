'use client';

import { Button, Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 p-10">
            <Projects />
            <Skills/>
        </div>
    )
}
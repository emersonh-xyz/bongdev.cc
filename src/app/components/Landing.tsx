'use client';

import { Button, Card, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import ProjectCard from "./Cards/ProjectCard";
import Projects from "./Heroes/Projects";
import Skills from "./Heroes/Skills";
import Experience from "./Heroes/Experiences";
import Footer from "./Footer";

export default function Landing() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 p-10">
            <Projects />
            <Experience />
            <Skills />
            <Footer />
        </div>
    )
}
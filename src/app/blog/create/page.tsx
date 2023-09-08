'use client';


import { Button, Card, CardBody, Textarea } from "@nextui-org/react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from "next-themes";

export default function CreatePost() {

    const [value, setValue] = useState("");

    const { theme } = useTheme();

    return (
        <main className="flex flex-row justify-center m-auto  p-20 w-full h-1/3">
            <div className="w-full h-96">
                <Textarea
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    value={value}
                    onValueChange={setValue}
                />
                <Button className="w-full" color="success" variant="faded">Submit</Button>
            </div>

            {theme}
            <article className={`prose ${theme !== "light" && 'prose-invert'} w-full h-full ml-2`}>
                <Card className="">
                    <CardBody>
                        <ReactMarkdown
                            children={value}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            {...props}
                                            children={String(children).replace(/\n$/, '')}
                                            style={theme === "light" ? materialLight : materialDark}
                                            language={match[1]}
                                            PreTag="div"
                                        />
                                    ) : (
                                        <code {...props} className={className}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        />
                    </CardBody>
                </Card>
            </article>
        </main>
    )
}
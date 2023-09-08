'use client';


import { Button, Card, CardBody, Textarea, Input, Divider } from "@nextui-org/react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from "next-themes";

export default function CreatePost() {

    const createPost = async () => {

        const data = {
            title: title,
            content: content,
            summary: summary
        }

        const response = await fetch('/api/blog/new', {
            method: "POST",
            body: JSON.stringify(data)
        }).then((res) => res.json());

        alert(response);

    }

    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("")

    const { theme } = useTheme();

    return (
        <main className="flex flex-row justify-center m-auto  p-20 w-full h-1/3">
            <div className="w-full h-96">
                <Input
                    isRequired
                    type="text"
                    label="Title"
                    placeholder="My cool new blog"
                    value={title}
                    onValueChange={setTitle}

                />
                <Input
                    isRequired
                    type="text"
                    label="Summary"
                    placeholder="Short and sweet :)"
                    value={summary}
                    onValueChange={setSummary}
                    className="mt-2"

                />
                <Textarea
                    labelPlacement="outside"
                    placeholder="Start writing ✨"
                    value={content}
                    onValueChange={setContent}
                />
                <Button onClick={createPost} className="w-full" color="success" variant="faded">Submit</Button>
            </div>
            <article className={`prose ${theme !== "light" && 'prose-invert'} w-full h-full ml-2`}>

                <Card className="">
                    <CardBody>
                        <a>{title}</a>
                        <a>{new Date().toLocaleString("en-US", { month: '2-digit', day: '2-digit', year: 'numeric' })}</a>
                        <Divider className="mb-1 mt-1" />
                        <ReactMarkdown
                            children={content}
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
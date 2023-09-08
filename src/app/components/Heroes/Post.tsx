import { Card, CardBody, Divider } from "@nextui-org/react"
import { useTheme } from "next-themes"
import ReactMarkdown from "react-markdown"
import { materialDark, materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import Footer from "../Footer"
import timeAgo from "@/app/lib/timeAgo"

export default function Post({ props }: any) {

    const { theme } = useTheme()

    return (
        <div className="flex justify-center flex-col items-center mt-20">
            <p className="text-3xl font-bold text-center">{props.title}</p>
            <p className=" text-center">posted {timeAgo(props.date)}</p>
            <Divider className="mt-4 w-1/3" />
            <div className="mt-8 gap-5">
                <article className={`prose ${theme !== "light" && 'prose-invert'} w-full h-full ml-2`}>
                    <ReactMarkdown
                        children={props.content}
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

                </article>
            </div>
            <Footer />
        </div>
    )
}
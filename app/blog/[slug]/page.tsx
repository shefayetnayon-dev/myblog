import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import ReactMarkdown from "react-markdown"
import { ChevronLeft, Clock, Calendar } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

import { getPostBySlug, getRecommendedPosts } from "@/lib/posts"
import { generateId } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TableOfContents } from "@/components/table-of-contents"
import { BlogCard } from "@/components/blog-card"

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: `${post.title} - Personal Blog`,
        description: post.excerpt,
    }
}

export default async function SingleBlogPage({ params }: PageProps) {
    const { slug } = await params
    const post = getPostBySlug(slug)
    const recommendedPosts = getRecommendedPosts(slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground">
                <Link href="/blog">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to posts
                </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10">
                <div className="space-y-8 min-w-0">
                    <div className="space-y-4">
                        {post.category && (
                            <span className="text-sm font-semibold text-primary">
                                {post.category}
                            </span>
                        )}
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={post.date}>
                                    {format(new Date(post.date), "MMMM d, yyyy")}
                                </time>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted">
                        <Image
                            src={post.coverImage || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <ReactMarkdown
                            components={{
                                code({ className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || "")
                                    return match ? (
                                        // @ts-expect-error - children is a string
                                        <SyntaxHighlighter
                                            {...props}
                                            style={vscDarkPlus}
                                            language={match[1]}
                                            PreTag="div"
                                            className="rounded-md"
                                        >
                                            {String(children).replace(/\n$/, "")}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code {...props} className={className}>
                                            {children}
                                        </code>
                                    )
                                },
                                h1: ({ node, ...props }) => <h1 id={generateId(props.children?.toString() || "")} {...props} />,
                                h2: ({ node, ...props }) => <h2 id={generateId(props.children?.toString() || "")} {...props} />,
                                h3: ({ node, ...props }) => <h3 id={generateId(props.children?.toString() || "")} {...props} />,
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </div>

                <div className="hidden lg:block relative">
                    <div className="sticky top-24">
                        <TableOfContents content={post.content} />
                    </div>
                </div>
            </div>


            {
                recommendedPosts.length > 0 && (
                    <div className="mt-16 border-t pt-10">
                        <h2 className="text-3xl font-bold tracking-tight mb-8">Recommended Posts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recommendedPosts.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                )
            }
        </article >
    )
}

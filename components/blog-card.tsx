"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Calendar } from "lucide-react"
import { format } from "date-fns"

import { Post } from "@/lib/posts"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
    post: Post
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg dark:hover:shadow-primary/10"
        >
            <Link href={`/blog/${post.slug}`} className="relative block aspect-video w-full overflow-hidden">
                <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    {post.category && (
                        <span className="inline-flex items-center rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-semibold text-primary-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                            {post.category}
                        </span>
                    )}
                </div>
            </Link>
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={post.date}>
                            {format(new Date(post.date), "MMMM d, yyyy")}
                        </time>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="line-clamp-2 text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                    </h3>
                </Link>
                <p className="line-clamp-3 text-muted-foreground text-sm flex-1">
                    {post.excerpt}
                </p>
            </div>
        </motion.div>
    )
}

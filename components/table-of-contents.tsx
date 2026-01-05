"use client"

import * as React from "react"
import { cn, generateId } from "@/lib/utils"

interface TableOfContentsProps {
    content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
    const [headings, setHeadings] = React.useState<{ id: string; text: string; level: number }[]>([])
    const [activeId, setActiveId] = React.useState<string>("")

    React.useEffect(() => {
        // Extract headings from markdown content
        const lines = content.split("\n")
        const extractedHeadings: { id: string; text: string; level: number }[] = []

        lines.forEach((line) => {
            const match = line.match(/^(#{1,6})\s+(.+)$/)
            if (match) {
                const level = match[1].length
                const text = match[2].trim()
                const id = generateId(text)
                extractedHeadings.push({ id, text, level })
            }
        })

        setHeadings(extractedHeadings)
    }, [content])

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "0% 0% -80% 0%" }
        )

        headings.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [headings])

    if (headings.length === 0) return null

    return (
        <div className="space-y-2">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">On this page</h3>
            <div className="relative border-l border-muted">
                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={cn(
                            "block pl-4 py-2 text-sm transition-colors border-l-2 -ml-[2px]",
                            heading.level > 2 && "pl-8",
                            activeId === heading.id
                                ? "border-primary text-primary font-medium"
                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
                        )}
                        onClick={(e) => {
                            e.preventDefault()
                            const element = document.getElementById(heading.id)
                            if (element) {
                                window.scrollTo({
                                    top: element.offsetTop - 100,
                                    behavior: 'smooth'
                                })
                            }
                            setActiveId(heading.id)
                        }}
                    >
                        {heading.text}
                    </a>
                ))}
            </div>
        </div>
    )
}

"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Post } from "@/lib/posts"
import { Button } from "@/components/ui/button"

interface HeroSliderProps {
    posts: Post[]
}

export function HeroSlider({ posts }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % posts.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [posts.length])

    if (!posts.length) return null

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % posts.length)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length)

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={posts[currentIndex].coverImage || "/placeholder.svg"}
                        alt={posts[currentIndex].title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                        <div className="container mx-auto">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-3xl"
                            >
                                {posts[currentIndex].category && (
                                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground rounded-full">
                                        {posts[currentIndex].category}
                                    </span>
                                )}
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                    <Link href={`/blog/${posts[currentIndex].slug}`} className="hover:text-primary-foreground/90 transition-colors">
                                        {posts[currentIndex].title}
                                    </Link>
                                </h2>
                                <p className="text-lg text-gray-200 line-clamp-2 md:line-clamp-3 mb-6">
                                    {posts[currentIndex].excerpt}
                                </p>
                                <div className="flex gap-4">
                                    <Button asChild variant="default" size="lg">
                                        <Link href={`/blog/${posts[currentIndex].slug}`}>Read Article</Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 md:hidden">
                {posts.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

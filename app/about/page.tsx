import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "About Me - Personal Blog",
    description: "Learn more about the author.",
}

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold tracking-tight">About Me</h1>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden border">
                        <Image
                            src="https://i.postimg.cc/Yqhcp83K/481275076-2803468196492413-7452040208559358192-n.jpg"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-4 text-lg text-muted-foreground">
                        <p>
                            Hi there! I'm a passionate web developer and writer. I built this blog to share my journey, learnings, and thoughts on the ever-evolving world of technology.
                        </p>
                        <p>
                            I specialize in building modern, performant web applications using tools like Next.js, React, and Tailwind CSS. I believe in the power of clean code and good design.
                        </p>
                        <p>
                            When I'm not coding, you can find me reading, hiking, or exploring new coffee shops in the city.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "About Me - Shefayet Nayon",
    description: "Learn more about Shefayet Nayon, a Web Developer and Tech Enthusiast.",
}

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Introduction Section */}
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-primary/10">
                        <Image
                            src="https://i.postimg.cc/Yqhcp83K/481275076-2803468196492413-7452040208559358192-n.jpg"
                            alt="Shefayet Nayon"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="text-center md:text-left space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Hi, I'm <span className="text-primary">Shefayet Nayon</span>.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Web Developer, Tech Enthusiast, and a believer in building software that makes a difference.
                        </p>
                    </div>
                </div>

                <div className="space-y-12 text-lg text-muted-foreground leading-relaxed">
                    {/* The Journey */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">The Journey</h2>
                        <p>
                            My coding journey didn't start with a computer science degree; it started with curiosity. I was always fascinated by how things worked behind the scenes on the web. That curiosity led me to my first "Hello World," and I haven't looked back since.
                        </p>
                        <p>
                            Over the years, I've fallen in love with correct problem-solving and the endless possibilities of the JavaScript ecosystem. From the simplicity of vanilla JS to the power of <strong>Next.js</strong> and <strong>React</strong>, I enjoy every step of turning ideas into reality.
                        </p>
                    </section>

                    {/* What I Do */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">What I Do</h2>
                        <p>
                            I specialize in building high-performance, scalable web applications that prioritize user experience. Whether it's crafting a pixel-perfect UI or optimizing backend API routes, I thrive on the challenge of creating efficient software.
                        </p>
                        <p>
                            Beyond coding, I am passionate about knowledge sharing. I write technical blogs to simplify complex concepts, helping other developers navigate the sometimes overwhelming world of modern web development.
                        </p>
                    </section>

                    {/* Tech Stack */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-foreground">Tech Stack</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 rounded-xl bg-card border shadow-sm">
                                <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>React.js</li>
                                    <li>Next.js</li>
                                    <li>Tailwind CSS</li>
                                    <li>Framer Motion</li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-card border shadow-sm">
                                <h3 className="font-semibold text-foreground mb-2">Languages</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>TypeScript</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>HTML5 & CSS3</li>
                                </ul>
                            </div>
                            <div className="p-4 rounded-xl bg-card border shadow-sm">
                                <h3 className="font-semibold text-foreground mb-2">Tools</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Git & GitHub</li>
                                    <li>VS Code</li>
                                    <li>Vercel</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Personal Touch */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-foreground">Beyond Code</h2>
                        <p>
                            I'm a lifelong learner. The tech industry moves fast, and I make it a priority to stay updated with the latest trends and best practices. Whether it's contributing to open-source projects or experimenting with a new library, I'm always looking for ways to grow.
                        </p>
                    </section>

                    {/* Call to Action */}
                    <section className="pt-6 border-t">
                        <div className="bg-primary/5 rounded-2xl p-8 text-center space-y-6">
                            <h2 className="text-2xl font-bold text-foreground">Let's Connect!</h2>
                            <p>
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                                >
                                    Read My Blog
                                </Link>
                                <a
                                    href="https://github.com/ShefayetNayon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="https://linkedin.com/in/shefayet-nayon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

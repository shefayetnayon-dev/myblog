import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Facebook, Earth } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold tracking-tight">Code<span className="text-primary">Blog</span></span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            A professional personal blog sharing insights on web development, design, and technology.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground transition-colors">Blogs</Link></li>
                            <li><Link href="/about" className="hover:text-foreground transition-colors">About Me</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Me</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/blog?category=Technology" className="hover:text-foreground transition-colors">Technology</Link></li>
                            <li><Link href="/blog?category=Coding" className="hover:text-foreground transition-colors">Coding</Link></li>
                            <li><Link href="/blog?category=Design" className="hover:text-foreground transition-colors">Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/shefayetnayon-dev" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="https://facebook.com/shefayetnayon" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="https://shefayetnayon.netlify.app" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Earth className="h-5 w-5" />
                                <span className="sr-only">Website</span>
                            </Link>

                            <Link href="mailto:shefayetnayon@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} CodeBlog. All rights reserved By Shefayet Nayon.</p>
                </div>
            </div>
        </footer>
    )
}

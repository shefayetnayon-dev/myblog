import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface Post {
    slug: string
    title: string
    date: string
    excerpt: string
    coverImage?: string
    content: string
    readTime: string
    category?: string
}

export function getAllPosts(): Post[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true })
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "")
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, "utf8")
            const { data, content } = matter(fileContents)

            const readTime = Math.max(1, Math.ceil(content.split(/\s+/).length / 200)) + " min read"

            return {
                slug,
                title: data.title || "Untitled",
                date: data.date || new Date().toISOString(),
                excerpt: data.excerpt || "",
                coverImage: data.coverImage || "/placeholder.svg",
                content,
                readTime,
                category: data.category || "General",
                ...data,
            } as Post
        })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getPaginatedPosts(page: number = 1, limit: number = 9): { posts: Post[], total: number, totalPages: number } {
    const allPosts = getAllPosts();
    const total = allPosts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const posts = allPosts.slice(startIndex, endIndex);

    return {
        posts,
        total,
        totalPages
    };
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)
        const readTime = Math.max(1, Math.ceil(content.split(/\s+/).length / 200)) + " min read"

        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            coverImage: data.coverImage,
            content,
            readTime,
            category: data.category,
            ...data,
        } as Post
    } catch (err) {
        return null
    }
}

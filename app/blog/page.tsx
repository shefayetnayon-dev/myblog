import { BlogCard } from "@/components/blog-card"
import { SearchBar } from "@/components/search-bar"
import { CategoryFilter } from "@/components/category-filter"
import { getAllPosts } from "@/lib/posts"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Blog - Personal Blog",
    description: "Read my latest thoughts on web development and design.",
}

interface BlogPageProps {
    searchParams: Promise<{ query?: string; category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const allPosts = getAllPosts()
    const params = await searchParams;
    const query = params.query?.toLowerCase()
    const category = params.category

    const filteredPosts = allPosts.filter((post) => {
        const matchesQuery = query
            ? post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query)
            : true
        const matchesCategory = category ? post.category === category : true
        return matchesQuery && matchesCategory
    })

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h1 className="text-4xl font-bold tracking-tight">All Posts</h1>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <CategoryFilter />
                    <SearchBar />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)
                ) : (
                    <p className="text-muted-foreground col-span-full text-center py-10">
                        No posts found.
                    </p>
                )}
            </div>
        </div>
    )
}

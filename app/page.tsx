import { HeroSlider } from "@/components/hero-slider"
import { BlogCard } from "@/components/blog-card"
import { getAllPosts, getPaginatedPosts } from "@/lib/posts"
import { Pagination } from "@/components/pagination"

export default async function Home(props: {
  searchParams: Promise<{ page?: string }>
}) {
  const searchParams = await props.searchParams
  const page = Number(searchParams.page) || 1
  const limit = 9 // Number of posts per page
  const { posts: recentPosts, totalPages } = getPaginatedPosts(page, limit)

  // Hero slider always gets the absolute latest 5 posts, unrelated to pagination
  const allPosts = getAllPosts()
  const heroPosts = allPosts.slice(0, 5)

  return (
    <div className="space-y-12 pb-10">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <HeroSlider posts={heroPosts} />
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <Pagination currentPage={page} totalPages={totalPages} baseUrl="/" />
      </section>
    </div>
  )
}

import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codeblogfordeveloper.vercel.app'

  // ১. ব্লগের ফোল্ডার পাথ (Root -> content -> posts)
  const postsDirectory = path.join(process.cwd(), 'content', 'posts')
  
  let blogPosts: MetadataRoute.Sitemap = []
  
  // চেক করছি ফোল্ডারটি আছে কি না
  if (fs.existsSync(postsDirectory)) {
    const fileNames = fs.readdirSync(postsDirectory)
    
    blogPosts = fileNames
      .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx')) // শুধু Markdown ফাইল নিবে
      .map((fileName) => {
        const slug = fileName.replace(/\.md$|\.mdx$/, '') // এক্সটেনশন বাদ দিয়ে স্লাগ তৈরি
        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }
      })
  }

  // ২. তোর স্ট্যাটিক পেজগুলো
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  return [...staticPages, ...blogPosts]
}

import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codeblogfordeveloper.vercel.app'

  // ১. ব্লগের ফোল্ডার থেকে সব পোস্টের নাম (slug) বের করা
  const postsDirectory = path.join(process.cwd(), 'content/posts') // তোর পোস্টের ফোল্ডার অনুযায়ী নাম দিবি
  
  let blogPosts: any[] = []
  
  // চেক করছি ফোল্ডারটা আসলে আছে কি না (এরর এড়াতে)
  if (fs.existsSync(postsDirectory)) {
    const fileNames = fs.readdirSync(postsDirectory)
    blogPosts = fileNames.map((fileName) => {
      return {
        url: `${baseUrl}/blog/${fileName.replace(/\.md$|\.mdx$/, '')}`, // .md বা .mdx বাদ দিয়ে লিঙ্ক তৈরি
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      }
    })
  }

  // ২. স্ট্যাটিক পেজগুলো
  const staticPages = [
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

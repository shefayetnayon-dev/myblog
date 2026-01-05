import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://codeblogfordeveloper.vercel.app'

  // ১. আপনার স্ট্যাটিক পেজগুলো (Home, Blog list, Contact)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // ২. আপনার ব্লগ পোস্টগুলোর জন্য ডাইনামিক স্লাগ (Slug) জেনারেশন
  // দ্রষ্টব্য: এখানে আপনি আপনার Markdown ফাইলগুলো রিড করে পোস্টের স্লাগগুলো আনতে পারেন।
  // আপাতত আমি একটি উদাহরণ দিচ্ছি কিভাবে এটি কাজ করে:
  
  /* const blogPosts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  })) 
  */

  // আপাতত শুধু স্ট্যাটিক পেজগুলো রিটার্ন করা হলো
  return [
    ...staticPages,
    // ...blogPosts, (ব্লগ পোস্টের ডাটা থাকলে এখানে স্প্রেড করবেন)
  ]
}
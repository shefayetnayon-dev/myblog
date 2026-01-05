import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // সব সার্চ ইঞ্জিনের জন্য (Google, Bing, etc.)
      allow: '/',      // পুরো সাইট ক্রল করার অনুমতি দিচ্ছে
      disallow: [
        '/private/',   // যদি কোনো প্রাইভেট ফোল্ডার থাকে যা আপনি গুগলে দেখাতে চান না
        '/admin/',     // অ্যাডমিন প্যানেল থাকলে সেটা হাইড করে রাখা ভালো
      ],
    },
    sitemap: 'https://codeblogfordeveloper.vercel.app/sitemap.xml', // আপনার সাইটম্যাপের লিংক
  }
}
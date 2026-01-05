import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodeBlog for Developers | Coding Tutorials & Tech Insights",
    template: "%s | CodeBlog"
  },
  description: "Advanced coding tutorials, Next.js tips, and web development best practices for modern developers.",
  keywords: ["Next.js", "React", "Web Development", "Coding Tutorials", "JavaScript", "Frontend Development", "Programming Blog", "Shefayet Nayon"],
  authors: [{ name: "Shefayet Nayon", url: "https://shefayetnayon.netlify.app" }],
  creator: "Shefayet Nayon",
  publisher: "Shefayet Nayon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codeblogfordeveloper.vercel.app'),
  alternates: {
    canonical: '/',
  },
  // Google Search Console Verification
  verification: {
    google: "cb13ee32ff977eea",
  },
  // Extra Info for SEO
  other: {
    "contact:email": "shefayetnayon@gmail.com",
    "contact:phone": "+8809696018379",
    "contact:address": "https://maps.app.goo.gl/TcDQB2CCo2WbbV7L9",
  },
  openGraph: {
    title: "CodeBlog for Developers",
    description: "Master the art of coding with in-depth tutorials and tech guides by Shefayet Nayon.",
    url: "https://codeblogfordeveloper.vercel.app",
    siteName: "CodeBlog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeBlog for Developers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeBlog for Developers",
    description: "Deep dive into code and development.",
    creator: "@shefayetnayon", 
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema.org JSON-LD for Personal SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shefayet Nayon",
              "url": "https://codeblogfordeveloper.vercel.app",
              "sameAs": [
                "https://shefayetnayon.netlify.app",
                "https://github.com/shefayetnayon-dev"
              ],
              "jobTitle": "Web Developer",
              "email": "shefayetnayon@gmail.com",
              "telephone": "+8809696018379"
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

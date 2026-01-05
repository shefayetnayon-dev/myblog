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

export const metadata = {
  title: {
    default: "CodeBlog for Developers | Coding Tutorials & Tech Insights",
    template: "%s | CodeBlog"
  },
  description: "Advanced coding tutorials, Next.js tips, and web development best practices for modern developers.",
  keywords: ["Next.js", "React", "Web Development", "Coding Tutorials", "JavaScript", "Frontend Development", "Programming Blog"],
  authors: [{ name: "Shefayet Nayon" }],
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
  // Responsive design er jonno viewport (Next.js 14+ e eita alada vabeo deya jay)
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "CodeBlog for Developers",
    description: "Master the art of coding with in-depth tutorials and tech guides.",
    url: "https://codeblogfordeveloper.vercel.app",
    siteName: "CodeBlog",
    images: [
      {
        url: "/og-image.png", // Public folder-e 1200x630px er ekta chhobi rakhun
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
    creator: "@your_twitter_handle", // Apnar twitter handle thakle din
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
      <body
        className={`${outfit.variable} antialiased`}
      >
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

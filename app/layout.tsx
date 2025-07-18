import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breye Foka L. - Portfolio",
  description: "Breye Foka L. – Computer Science undergraduate & Scientist",
  keywords: ["Breye Foka L", "Breye Foka", "Software Developer", "AI", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Breye Foka L." }],
  robots: "index, follow",
  openGraph: {
    title: "Breye Foka L. - Portfolio",
    description: "Discover the work and projects of Breye Foka L.",
    url: "https://breyefoka.netlify.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "google-site-verification": "bYpXiBG4H2P9IWxI9Bb3zSNnCirPbqsHNJ1nkXNPaQs",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 min-h-screen transition-colors duration-300">
            <div className="flex flex-col min-h-screen backdrop-blur-sm">
              <Navbar />
              <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8">
                {/* Main content */}
                {children}
              </main>
              <Footer/>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

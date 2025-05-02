import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breye Foka | Portfolio",
  description: "Portfolio and blog site for Breye Foka ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">

      <body className={`${inter.className}  flex flex-col min-h-screen bg-gray-300 dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors`}>
        <Navbar />
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8">
          {/* Main content */}
          {children}
          </main>
          <Footer/>
      </body>

    </html>
  );
}

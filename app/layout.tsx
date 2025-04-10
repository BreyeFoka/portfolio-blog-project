import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Navbar from "./components/Navbar";
// import DotGrid from "./components/DotGrids";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breye Foka | Portfolio",
  description: "Portfolio and blog site for Breye Foka – Software Engineer & Tech Creator.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          {/* Background dot grids */}
          {/* <DotGrid position="left" rows={12} cols={8} />
          <DotGrid position="right" rows={12} cols={8} /> */}
          {/* Main content */}
          {children}</main>
      </body>
    </html>
  );
}

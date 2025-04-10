'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 backdrop-blur-md transition-colors duration-300",
        isScrolled
          ? "bg-white/70 dark:bg-zinc-900/70 border-b border-gray-200 dark:border-zinc-800 shadow-sm"
          : "bg-white dark:bg-zinc-900 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            <span className="inline lg:hidden">Br. F.</span>
            <span className="hidden lg:inline">Breye Foka L.</span>
          </Link>

          <Link href="/mission" className="hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-2 rounded-md">Mission</Link>
          <Link href="/about" className="hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-2 rounded-md">About</Link>
          <Link href="/skillset" className="hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-2 rounded-md">Skillset</Link>
          <Link href="/projects" className="hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-2 rounded-md">Projects</Link>
          <Link href="/press" className="hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-2 rounded-md">Press</Link>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:bg-gray-200 dark:hover:bg-zinc-700 px-3 py-2 rounded-md flex items-center"
            >
              Other <span className="ml-1">▾</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-md">
                <Link href="/talks" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700">🎙️ Talks</Link>
                <Link href="/flying" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700">✈️ Flying & Aerospace</Link>
                <Link href="/writing" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700">🖋️ Writing</Link>
                <Link href="/achievements" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700">✔️ Achievements</Link>
              </div>
            )}
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          ? "bg-gray-300/70 dark:bg-zinc-900/70 border-b border-gray-400 dark:border-zinc-800 shadow-sm"
          : "bg-gray-300 dark:bg-zinc-900 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-600">
          <span className="inline lg:hidden">Br.</span>
          <span className="hidden lg:inline">Breye Foka L.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4 font-bold">
          <Link href="/About" className="hover:bg-gray-300 dark:hover:bg-zinc-900 px-3 py-2 rounded-md">About</Link>
          <Link href="/mission" className="hover:bg-gray-300 dark:hover:bg-zinc-900 px-3 py-2 rounded-md">Mission</Link>
          <Link href="/skillset" className="hover:bg-gray-300 dark:hover:bg-zinc-900 px-3 py-2 rounded-md">Skillset</Link>
          <Link href="/projects" className="hover:bg-gray-300 dark:hover:bg-zinc-900 px-3 py-2 rounded-md">Projects</Link>
          <Link href="/posts" className="hover:bg-gray-300 dark:hover:bg-zinc-900 px-3 py-2 rounded-md">Blog</Link>

          {/* Other Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="hover:bg-gray-300 dark:hover:bg-zinc-700 px-3 py-2 rounded-md flex items-center"
            >
              Other <span className="ml-1">▾</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-300 dark:bg-zinc-800 border border-gray-400 dark:border-zinc-700 rounded-lg shadow-md z-20">
                <Link href="/talks" className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-zinc-900">🎙️ Talks</Link>
                <Link href="/achievements" className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-zinc-900">✔️ Achievements</Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right: Theme toggle + Hamburger */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-300 dark:bg-zinc-900 border-t border-gray-400 dark:border-zinc-800 px-4 py-4 space-y-2">
          <Link href="/About" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">About</Link>
          <Link href="/mission" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">Mission</Link>
          <Link href="/skillset" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">Skillset</Link>
          <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">Projects</Link>
          <Link href="/posts" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">Blog</Link>
          {/* Other Pages */}
          <details className="mt-2">
            <summary className="cursor-pointer font-semibold">Other</summary>
            <div className="pl-4 mt-2 space-y-1 text-sm">
              <Link href="/talks" onClick={() => setMobileMenuOpen(false)}>🎙️ Talks</Link>
              <Link href="/achievements" onClick={() => setMobileMenuOpen(false)}>✔️ Achievements</Link>
            </div>
          </details>
        </div>
      )}
    </header>
  );
}

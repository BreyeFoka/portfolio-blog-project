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
        "sticky top-0 z-50 backdrop-blur-lg transition-all duration-300",
        isScrolled
          ? "bg-white/10 dark:bg-zinc-900/30 border-b border-white/20 dark:border-zinc-800/30 shadow-lg"
          : "bg-gray-300/30 dark:bg-zinc-900/20 border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-blue-600 dark:text-blue-500 relative group"
        >
          <span className="inline lg:hidden">Br.</span>
          <span className="hidden lg:inline">Breye Foka L.</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link 
            href="/About" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/mission" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            Mission
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/skillset" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            Skillset
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/projects" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/posts" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/contact" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>

          {/* Other Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group flex items-center"
            >
              Other 
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md border border-gray-300/30 dark:border-zinc-700/30 rounded-lg shadow-xl z-50 overflow-hidden">
                <Link 
                  href="/talks" 
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  🎙️ Talks
                </Link>
                <Link 
                  href="/achievements" 
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  🏆 Achievements
                </Link>
                <Link 
                  href="/gallery" 
                  className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  onClick={() => setDropdownOpen(false)}
                >
                  🖼️ Gallery
                </Link>
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
        <div className="md:hidden bg-white/10 dark:bg-zinc-900/10 backdrop-blur-lg border-t border-white/20 dark:border-zinc-800/20 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-300">
          <Link 
            href="/About" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            About
          </Link>
          <Link 
            href="/mission" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Mission
          </Link>
          <Link 
            href="/skillset" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Skillset
          </Link>
          <Link 
            href="/projects" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link 
            href="/posts" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            Contact
          </Link>
          {/* Other Pages */}
          <details className="mt-2">
            <summary className="cursor-pointer font-medium py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200">
              Other
            </summary>
            <div className="pl-6 mt-2 space-y-2">
              <Link 
                href="/talks" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
              >
                🎙️ Talks
              </Link>
              <Link 
                href="/achievements" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
              >
                🏆 Achievements
              </Link>
              <Link 
                href="/gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
              >
                🖼️ Gallery
              </Link>
            </div>
          </details>
        </div>
      )}
    </header>
  );
}

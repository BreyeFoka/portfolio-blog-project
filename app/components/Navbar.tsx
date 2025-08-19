"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaMicrophone, FaTrophy, FaImage } from "react-icons/fa";

export default function Navbar() {
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
          <Link 
            href="/talks" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            Talks
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/achievements" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            Achievements
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link 
            href="/gallery" 
            className="relative py-2 px-3 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200 group"
          >
            Gallery
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
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
          <Link 
            href="/talks" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            <FaMicrophone className="inline mr-2" />
            Talks
          </Link>
          <Link 
            href="/achievements" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            <FaTrophy className="inline mr-2" />
            Achievements
          </Link>
          <Link 
            href="/gallery" 
            onClick={() => setMobileMenuOpen(false)} 
            className="block py-2 px-3 font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200"
          >
            <FaImage className="inline mr-2" />
            Gallery
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="py-4 px-4 sm:px-6 flex justify-between items-center  border-gray-200 dark:border-zinc-700 shadow-md" >
      <Link href="/" className="text-2xl font-bold hover:opacity-80 transition">
        Breye Foka L.
      </Link>
      <nav className="space-x-4 flex flex-row items-center">
        {[
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
          { href: "/projects", label: "Projects" },
          { href: "/blog", label: "Blog" }
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="no-underline px-3 py-2 rounded-md transition duration-200 hover:bg-gray-300 dark:hover:bg-zinc-700"
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}

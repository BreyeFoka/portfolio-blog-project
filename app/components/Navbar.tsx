"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <header className="py-4 px-4 sm:px-6 flex justify-between items-center border-b border-gray-200 dark:border-zinc-700">
      <Link href="/" className="text-xl font-bold hover:opacity-80 transition">
        Breye Foka
      </Link>
      <nav className="space-x-4">
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}

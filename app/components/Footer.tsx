"use client";
import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaPaperPlane } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
const GitHubCalendar = dynamic(() => import('react-github-calendar'), { ssr: false });

export default function Footer() {
    const pathname = usePathname();

    if (pathname === '/'){
        return null; // Don't render the footer on the home page
    }else {
        return (
    <footer className="bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col items-center">
        {/* Contributions */}
        <div className="w-full hidden  sm:flex flex-col  justify-center items-center mb-6">
          <h2 className="text-2xl font-bold mb-4">GitHub Contributions</h2>
          <GitHubCalendar username="BreyeFoka" />
        </div>

        {/* Socials & Email */}
        <div className="flex flex-col  justify-center sm:flex-row items-center w-full space-x-8 space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            <a href="https://instagram.com/breye_foka" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="https://linkedin.com/in/breyefokalagloire" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="https://twitter.com/breye_foka" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={28} />
            </a>
            <a href="https://github.com/BreyeFoka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPaperPlane size={24} />
            <a href="mailto:breyefokalagloire@gmail.com" className="underline font-medium">
              breyefokalagloire@gmail.com
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700 w-full" />

        {/* Footer Bottom */}
        <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Breye Foka. All Rights Reserved.
          </span>
          <div className="hidden sm:flex space-x-4">
            <a href="https://instagram.com/breye_foka" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com/in/breyefokalagloire" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com/breye_foka" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="https://github.com/BreyeFoka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

}

 

    
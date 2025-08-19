"use client";
import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaPaperPlane } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
const GitHubCalendar = dynamic(() => import('react-github-calendar'), { ssr: false });

export default function Footer() {
  const { theme } = useTheme();
  const pathname = usePathname();

  if (pathname === '/') {
    return null; // Don't render the footer on the home page
  } else {
    return (
      <footer className="bottom-0 left-0 right-0 bg-white/10 dark:bg-zinc-900/10 backdrop-blur-md border-t border-white/20 dark:border-zinc-800/20 text-gray-900 dark:text-white transition-colors">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-10 flex flex-col items-center">
          {/* Contributions */}
          <motion.div 
            className="w-full hidden sm:flex flex-col justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">GitHub Contributions</h2>
            <div className="p-4 rounded-xl bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md border border-white/20 dark:border-zinc-700/20 shadow-xl">
              <GitHubCalendar
                username="BreyeFoka"
                colorScheme={theme === 'dark' ? 'dark' : 'light'}
              />
            </div>
          </motion.div>

          {/* Socials & Email */}
          <div className="flex flex-col justify-center sm:flex-row items-center w-full sm:space-x-10 space-y-6 sm:space-y-0">
            <div className="flex space-x-8">
              <motion.a 
                href="https://instagram.com/breye_foka" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                whileHover={{ scale: 1.1, color: '#E1306C' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FaInstagram size={28} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/breyefokalagloire" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, color: '#0077B5' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FaLinkedin size={28} />
              </motion.a>
              <motion.a 
                href="https://twitter.com/breye_foka" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                whileHover={{ scale: 1.1, color: '#1DA1F2' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FaTwitter size={28} />
              </motion.a>
              <motion.a 
                href="https://github.com/BreyeFoka" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                whileHover={{ scale: 1.1, color: '#333' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <FaGithub size={28} />
              </motion.a>
            </div>
            <motion.div 
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <FaPaperPlane size={20} className="text-blue-600 dark:text-blue-400" />
              <a href="mailto:breyefokalagloire@gmail.com" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                breyefokalagloire@gmail.com
              </a>
            </motion.div>
          </div>

          <hr className="my-6 border-gray-900 dark:border-gray-300 w-full" />

          {/* Footer Bottom */}
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center">
            <span className="text-sm text-gray-700 dark:text-gray-400 text-center sm:text-left">
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




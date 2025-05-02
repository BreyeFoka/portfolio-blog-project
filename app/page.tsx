"use client";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import { FiFile, FiDownload } from 'react-icons/fi';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Breye Foka L.</title>
        <meta
          name="description"
          content="Breye Foka L. – Computer Science undergraduate & Scientist"
        />
        <meta name="keywords" content="Breye Foka L, Breye Foka, Software Developer, AI, Full Stack Developer, Portfolio" />
        <meta name="author" content="Breye Foka L." />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Breye Foka L. - Portfolio" />
        <meta property="og:description" content="Discover the work and projects of Breye Foka L." />
        <meta property="og:url" content="https://breyefoka.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="google-site-verification" content="bYpXiBG4H2P9IWxI9Bb3zSNnCirPbqsHNJ1nkXNPaQs" />
      </Head>

      {/* Outer wrapper to control full height and footer placement */}
      <div className="flex flex-col  bg-gray-300 dark:bg-zinc-900">
        <main className="flex-grow flex flex-col items-center justify-start text-center px-4 pt-8">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-64 h-64  rounded-full overflow-hidden shadow-xl mb-6 border-4 border-blue-600"
          >
            <Image
              src="/profile.png"
              alt="Breye Foka L."
              width={288}
              height={288}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>


          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-2"
          >
            Hi !
            <span
              className="inline-block hover-wiggle"
              role="img"
              aria-label="Waving hand"
            >
              👋
            </span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-2"
          >
            I’m <span className="text-blue-600 ml-2">Breye <span className='hidden  sm:inline'>Foka L.</span></span>
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-2xl text-lg sm:text-xl text-gray-900 dark:text-gray-300 mb-4"
          >
            Computer Science | Cybersecurity | Data Science & AI | Robotics & IoT
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-xl text-md sm:text-lg hidden sm:inline text-gray-600 dark:text-gray-300 mb-4"
          >
            I am a Computer Science student With a passion for technology and a drive to make a positive impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
          >
            <HiLocationMarker className="inline-block mr-2 w-7 h-7" /> Kigali, Rwanda
          </motion.p>
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-4"
          >
            <Link href="/About">
              <Button size="lg" className="dark:bg-zinc-900 bg-gray-300  text-gray-900 border-blue-600 border-2 rounded-full hover:bg-blue-600 dark:text-white">
                About Me <HiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" className="dark:bg-zinc-900 bg-gray-300 text-gray-900 border-blue-600 border-2 rounded-full hover:bg-blue-600 dark:text-white">
                Projects <HiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/Resume_Breye_Foka.pdf" target="_blank" download>
              <Button size="lg" className="dark:bg-zinc-900 bg-gray-300 text-gray-900 border-blue-600 border-2 rounded-full hover:bg-blue-600 dark:text-white">
                <FiFile className='mr-2' /> Resume <FiDownload className="ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center space-x-6 text-2xl text-gray-900 dark:text-white mb-2"
          >
            <a href="mailto:breyefokalagloire@gmail.com" className=" p-2 hover:text-blue-600 rounded-full border-2 border-blue-600">
              <FiMail />
            </a>
            <a href="https://github.com/BreyeFoka" target="_blank" className="p-2 hover:text-blue-600 rounded-full border-2 border-blue-600">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/breyefokalagloire" target="_blank" className="p-2 hover:text-blue-600 rounded-full border-2 border-blue-600">
              <FiLinkedin />
            </a>
          </motion.div>
        </main>

        {/* Sticky footer placed here */}
        <footer className="text-center py-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="text-sm text-gray-400"
          >
            © {new Date().getFullYear()} Breye Foka L. All rights reserved.
          </motion.div>
        </footer>
      </div>
    </>
  );
}

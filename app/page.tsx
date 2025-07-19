"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { FiGithub, FiMail, FiLinkedin, FiFile, FiDownload } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Background with subtle patterns/effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-600/20 dark:bg-blue-600/10 blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/20 dark:bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-start text-center px-4 pt-8 sm:pt-12">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-2xl mb-6 sm:mb-8 border-4 border-blue-600 dark:border-blue-500"
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

        {/* Title and Introduction */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 flex items-center justify-center gap-2"
          >
            Hi!
            <span
              className="inline-block animate-wiggle"
              role="img"
              aria-label="Waving hand"
            >
              👋
            </span>
            <span className="sr-only">Waving hand</span>
          </motion.h1>

          <motion.h2 
            variants={fadeIn}
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
          >
            I'm Breye Foka L.
          </motion.h2>

          <motion.p 
            variants={fadeIn}
            className="text-base sm:text-xl text-gray-800 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto"
          >
            <span className="sm:hidden">CS undergrad & chess enthusiast building innovative solutions...</span>
            <span className="hidden sm:inline">CS undergrad & chess enthusiast, passionate about building innovative solutions that make a difference...</span>
          </motion.p>

          {/* Location */}
          <motion.div 
            variants={fadeIn}
            className="flex items-center justify-center mb-6 text-lg text-gray-700 dark:text-gray-400"
          >
            <HiLocationMarker className="text-blue-600 dark:text-blue-400 mr-2" />
            <span>Kigali, Rwanda</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 mb-6"
          >
            <motion.a
              href="https://github.com/BreyeFoka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 transition-all hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiGithub className="mr-1 sm:mr-2" /> <span className="hidden sm:inline">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/breyefokalagloire"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 transition-all hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiLinkedin className="mr-1 sm:mr-2" /> <span className="hidden sm:inline">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:breyefokalagloire@gmail.com"
              className="flex items-center px-3 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 transition-all hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMail className="mr-1 sm:mr-2" /> <span className="hidden sm:inline">Email</span>
            </motion.a>
            <motion.a
              href="/Resume_Breye_Foka.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 transition-all hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiFile className="mr-1 sm:mr-2" /> <span className="hidden sm:inline">Resume</span> <FiDownload className="ml-1" size={14} />
            </motion.a>
          </motion.div>
          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center gap-3 mb-12 sm:mb-16"
          >
            <Link href="/projects">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-lg font-medium w-full sm:w-auto"
              >
                <span className="sm:hidden">Work</span>
                <span className="hidden sm:inline">My Work</span>
                <HiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/About">
              <Button 
                variant="outline" 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-lg font-medium bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 hover:bg-white/30 dark:hover:bg-zinc-800/30 w-full sm:w-auto"
              >
                About Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Featured Section Previews */}
        <section className="w-full max-w-6xl mx-auto mb-12 sm:mb-16 px-3 sm:px-4">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Project Cards - Just previews */}
            {[
              {
                title: 'Anime Quest',
                image: '/images/anime-quest.png',
                description: 'Anime tracking app',
                shortDesc: 'Anime tracker'
              },{
                title: 'Bachelier',
                image: '/images/bachelier.png',
                description: 'Exam results platform',
                shortDesc: 'Exam platform'
              },
              {
                title: 'Smart Helmet',
                image: '/images/smart-helmet.png',
                description: 'IoT bike safety',
                shortDesc: 'IoT safety'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-xl bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md border border-white/10 dark:border-zinc-700/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 text-xs sm:text-base">
                    <span className="sm:hidden">{project.shortDesc}</span>
                    <span className="hidden sm:inline">{project.description}</span>
                  </p>
                  <Link href="/projects" className="text-blue-600 dark:text-blue-400 flex items-center text-xs sm:text-base font-medium hover:underline">
                    <span className="sm:hidden">View</span>
                    <span className="hidden sm:inline">View Project</span>
                    <HiArrowRight className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-6 sm:mt-8 text-center"
          >
            <Link href="/projects">
              <Button 
                variant="outline" 
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 hover:bg-white/30 dark:hover:bg-zinc-800/30"
              >
                <span className="sm:hidden">All Work</span>
                <span className="hidden sm:inline">All Projects</span>
                <HiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Blog Preview */}
        <section className="w-full max-w-6xl mx-auto mb-16 px-3 sm:px-4">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
          >
            Latest Articles
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeIn}
              className="group relative overflow-hidden rounded-xl bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md border border-white/10 dark:border-zinc-700/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/assets/blog/deeplearning/cover.jpg"
                  alt="Deep Learning"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-6">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">April 29, 2025</div>
                <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-3">Deep Learning Core Concepts</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 text-xs sm:text-base">
                  <span className="sm:hidden">Exploring foundational principles...</span>
                  <span className="hidden sm:inline">Exploring foundational principles with MIT 6.S191...</span>
                </p>
                <Link href="/posts/deeplearning" className="text-blue-600 dark:text-blue-400 flex items-center text-xs sm:text-base font-medium hover:underline">
                  Read <HiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              className="group relative overflow-hidden rounded-xl bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md border border-white/10 dark:border-zinc-700/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src="/assets/blog/nnfromscratch/cover.jpg"
                  alt="Neural Network From Scratch"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-6">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">June 10, 2025</div>
                <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-3">Neural Network from Scratch</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 text-xs sm:text-base">
                  <span className="sm:hidden">Building your own NN...</span>
                  <span className="hidden sm:inline">Building your own NN without frameworks...</span>
                </p>
                <Link href="/posts/buildNNfromScratch" className="text-blue-600 dark:text-blue-400 flex items-center text-xs sm:text-base font-medium hover:underline">
                  Read <HiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-6 sm:mt-8 text-center"
          >
            <Link href="/posts">
              <Button 
                variant="outline" 
                className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 hover:bg-white/30 dark:hover:bg-zinc-800/30"
              >
                <span className="sm:hidden">All Posts</span>
                <span className="hidden sm:inline">All Articles</span>
                <HiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}

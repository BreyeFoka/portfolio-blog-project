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
      <div className="relative flex flex-col items-center justify-start text-center px-4 pt-12">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-64 h-64 rounded-full overflow-hidden shadow-2xl mb-8 border-4 border-blue-600 dark:border-blue-500"
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
            className="text-5xl sm:text-6xl font-extrabold mb-6 flex items-center justify-center gap-2"
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
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
          >
            I'm Breye Foka L.
          </motion.h2>

          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-800 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            A Computer Science undergraduate & Scientist, 
            passionate about creating innovative solutions through code. 
            I specialize in AI, data science, and full-stack web development.
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
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <motion.a
              href="https://github.com/BreyeFoka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 transition-all hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiGithub className="mr-2" /> GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/breyefokalagloire"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 transition-all hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiLinkedin className="mr-2" /> LinkedIn
            </motion.a>
            <motion.a
              href="mailto:breyefokalagloire@gmail.com"
              className="flex items-center px-4 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 transition-all hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMail className="mr-2" /> Email
            </motion.a>
            <motion.a
              href="/Resume_Breye_Foka.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 transition-all hover:bg-white/60 dark:hover:bg-zinc-800/60 hover:scale-105"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiFile className="mr-2" /> Resume <FiDownload className="ml-1" size={14} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-4 mb-20"
          >
            <Link href="/projects">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-5 rounded-lg shadow-lg hover:shadow-xl transition-all text-lg font-medium"
              >
                View My Work <HiArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/About">
              <Button 
                variant="outline" 
                className="px-6 py-5 rounded-lg text-lg font-medium bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 hover:bg-white/30 dark:hover:bg-zinc-800/30"
              >
                More About Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Section Previews */}
        <section className="w-full max-w-6xl mx-auto mb-20">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Project Cards - Just previews */}
            {[
              {
                title: 'Bachelier',
                image: '/images/bachelier.png',
                description: 'Platform for national exam results',
              },
              {
                title: 'Smart Helmet',
                image: '/images/smart-helmet.png',
                description: 'IoT project for bike safety',
              },
              {
                title: 'Anime Quest',
                image: '/images/anime-quest.png',
                description: 'Discover and track anime series',
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
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <Link href="/projects" className="text-blue-600 dark:text-blue-400 flex items-center font-medium hover:underline">
                    See details <HiArrowRight className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-10 text-center"
          >
            <Link href="/projects">
              <Button 
                variant="outline" 
                className="px-5 py-2 rounded-lg font-medium bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 hover:bg-white/30 dark:hover:bg-zinc-800/30"
              >
                View All Projects <HiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Blog Preview */}
        <section className="w-full max-w-6xl mx-auto mb-20">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
          >
            Latest Articles
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
              <div className="p-6">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">April 29, 2025</div>
                <h3 className="text-xl font-bold mb-3">Understanding the Core Concepts of Deep Learning with MIT 6.S191</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Join me on a journey through the foundational principles of deep learning...</p>
                <Link href="/posts/deeplearning" className="text-blue-600 dark:text-blue-400 flex items-center font-medium hover:underline">
                  Read article <HiArrowRight className="ml-1" />
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
              <div className="p-6">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">June 10, 2025</div>
                <h3 className="text-xl font-bold mb-3">Building a Neural Network from Scratch</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Step-by-step guide to creating your own neural network without frameworks...</p>
                <Link href="/posts/buildNNfromScratch" className="text-blue-600 dark:text-blue-400 flex items-center font-medium hover:underline">
                  Read article <HiArrowRight className="ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="mt-10 text-center"
          >
            <Link href="/posts">
              <Button 
                variant="outline" 
                className="px-5 py-2 rounded-lg font-medium bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 hover:bg-white/30 dark:hover:bg-zinc-800/30"
              >
                View All Articles <HiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}

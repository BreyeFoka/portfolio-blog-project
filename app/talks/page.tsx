"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMapPin, FiExternalLink, FiYoutube, FiFileText, FiClock, FiTag } from 'react-icons/fi';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Mock data for talks
const talks = [
  {
    id: 1,
    title: "Building Neural Networks from Scratch: A Beginner's Guide",
    description: "In this talk, I break down the core concepts of neural networks by building one from scratch using only NumPy. Learn how backpropagation works, understand gradient descent visually, and see how to implement a simple neural network without frameworks.",
    date: "June 15, 2025",
    location: "TechConf 2025, Online",
    image: "/assets/blog/nnfromscratch/cover.jpg",
    duration: "45 minutes",
    category: "Machine Learning",
    resources: {
      slides: "#",
      video: "https://www.youtube.com/watch?v=example1",
      code: "https://github.com/BreyeFoka/neural-network-from-scratch"
    }
  },
  {
    id: 2,
    title: "Ethical Considerations in AI Development",
    description: "An exploration of the ethical challenges facing AI developers today. This talk covers bias in algorithms, privacy concerns, transparency in decision-making systems, and practical approaches to developing more ethical AI solutions.",
    date: "April 3, 2025",
    location: "AI Ethics Summit, Kigali",
    image: "/assets/blog/deeplearning/cover.jpg",
    duration: "60 minutes",
    category: "AI Ethics",
    resources: {
      slides: "#",
      video: "https://www.youtube.com/watch?v=example2",
      code: null
    }
  },
  {
    id: 3,
    title: "Full-Stack Development with Next.js and Supabase",
    description: "A hands-on session demonstrating how to build modern, responsive web applications using Next.js for the frontend and Supabase as a backend. I cover authentication, database operations, real-time subscriptions, and deployment strategies.",
    date: "March 12, 2025",
    location: "Web Dev Meetup, Virtual",
    image: "/assets/blog/hello-world/cover.jpg",
    duration: "90 minutes",
    category: "Web Development",
    resources: {
      slides: "#",
      video: null,
      code: "https://github.com/BreyeFoka/nextjs-supabase-demo"
    }
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals for Developers",
    description: "Learn essential security practices every developer should know. This talk covers common vulnerabilities, secure coding practices, authentication systems, and how to integrate security into your development workflow from the start.",
    date: "February 22, 2025",
    location: "SecureDev Conference, Online",
    image: "/assets/blog/dynamic-routing/cover.jpg",
    duration: "50 minutes",
    category: "Cybersecurity",
    resources: {
      slides: "#",
      video: "https://www.youtube.com/watch?v=example4",
      code: "https://github.com/BreyeFoka/secure-dev-examples"
    }
  },
  {
    id: 5,
    title: "Introduction to IoT Development with Arduino and Raspberry Pi",
    description: "A beginner-friendly introduction to IoT development using affordable hardware. I demonstrate how to set up sensors, collect data, and build simple IoT projects that solve real-world problems.",
    date: "January 10, 2025",
    location: "Makers Meetup, Kigali Innovation Center",
    image: "/images/smart-helmet.png",
    duration: "75 minutes",
    category: "IoT",
    resources: {
      slides: "#",
      video: null,
      code: "https://github.com/BreyeFoka/iot-beginner-projects"
    }
  }
];

// Categories for filtering
const categories = [
  "All",
  "Machine Learning",
  "AI Ethics",
  "Web Development",
  "Cybersecurity",
  "IoT"
];

export default function Talks() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedTalk, setExpandedTalk] = useState<number | null>(null);

  // Filter talks based on selected category
  const filteredTalks = activeCategory === "All" 
    ? talks 
    : talks.filter(talk => talk.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
        >
          Talks & Presentations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Sharing knowledge through conference talks, workshops, and community presentations.
        </motion.p>
      </motion.div>

      {/* Category Filters */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-zinc-800/30"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiTag className="mr-2" /> {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Talks Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {filteredTalks.map(talk => (
          <motion.div
            key={talk.id}
            variants={fadeIn}
            className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <Image
                  src={talk.image}
                  alt={talk.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                    <FiTag className="mr-1" /> {talk.category}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    <FiClock className="mr-1" /> {talk.duration}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {talk.title}
                </h2>
                
                <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <div className="flex items-center">
                    <FiCalendar className="mr-2" /> {talk.date}
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="mr-2" /> {talk.location}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {expandedTalk === talk.id ? talk.description : `${talk.description.slice(0, 150)}...`}
                </p>
                
                <div className="flex flex-wrap items-center justify-between">
                  <button
                    onClick={() => setExpandedTalk(expandedTalk === talk.id ? null : talk.id)}
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mb-4 md:mb-0"
                  >
                    {expandedTalk === talk.id ? "Show less" : "Read more"}
                  </button>
                  
                  <div className="flex flex-wrap gap-2">
                    {talk.resources.slides && (
                      <Link href={talk.resources.slides} className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <FiFileText className="mr-1" /> Slides
                      </Link>
                    )}
                    
                    {talk.resources.video && (
                      <Link href={talk.resources.video} className="inline-flex items-center px-3 py-1 bg-red-100 dark:bg-red-900/30 rounded-md text-xs font-medium text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800/30 transition-colors">
                        <FiYoutube className="mr-1" /> Video
                      </Link>
                    )}
                    
                    {talk.resources.code && (
                      <Link href={talk.resources.code} className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-md text-xs font-medium text-green-700 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800/30 transition-colors">
                        <FiExternalLink className="mr-1" /> Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No talks message */}
      {filteredTalks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No talks found in this category.
          </p>
        </motion.div>
      )}

      {/* Interested in booking section */}
      <motion.div 
        className="mt-20 bg-gradient-to-r from-blue-600/10 to-blue-400/10 dark:from-blue-600/20 dark:to-blue-400/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-8 shadow-lg text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Interested in Having Me Speak?</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          I'm available for speaking engagements, workshops, and panel discussions on topics related to 
          machine learning, web development, cybersecurity, and more.
        </p>
        <Link href="/contact">
          <motion.span 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}
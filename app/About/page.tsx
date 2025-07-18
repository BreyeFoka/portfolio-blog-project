"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaGraduationCap, FaTools, FaCode, FaBrain, FaGlobe, FaLaptopCode, FaUserTie, FaRegLightbulb } from 'react-icons/fa';

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
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div 
        className="mb-16 text-center"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent mb-6"
          variants={fadeIn}
        >
          About Me
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Computer Science undergraduate who spends most of his time figuring out how things work — then breaking and fixing them.
        </motion.p>
      </motion.div>

      {/* Profile Card */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image 
              src="/assets/blog/authors/breye.png" 
              alt="Breye Foka L." 
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 hover:scale-110"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Breye Foka L.</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                I like electronics, coding, and exploring systems. Whether I'm writing scripts, building tools, or messing with networks, I enjoy solving real problems.
              </p>
              <p>
                People say I can crack a bug and a joke in the same breath. I take tech seriously, but not myself. My family keeps me grounded, and I'm aiming to get really good at what I do — and help others do the same.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" passHref>
                <motion.span
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.span>
              </Link>
              <Link href="/skillset" passHref>
                <motion.span
                  className="inline-block px-6 py-2 bg-white/10 dark:bg-zinc-700/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-zinc-700/30 font-medium rounded-lg shadow-md cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Skills
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-blue-500 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">🎓</span>
              <span>Studying Computer Science (Bachelor's 2nd Year)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">📜</span>
              <span>Online courses in electronics, networking, pentesting, IoT, web dev, data science, and cybersecurity</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">🧠</span>
              <span>Self-taught robotics and electronics through tinkering</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">💥</span>
              <span>Strong background in math, physics, and chemistry from high school</span>
            </li>
          </ul>
          <p className="italic mt-4 text-gray-600 dark:text-gray-400">
            I grew up inspired by people who build cool stuff — real and fictional.
          </p>
        </motion.div>

        {/* Tech Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <FaTools className="text-green-500 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What I'm Into</h2>
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">Things I spend most of my time learning or doing:</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Ethical Hacking", icon: "🔒", color: "from-red-500 to-orange-500" },
              { name: "Machine Learning", icon: "🤖", color: "from-blue-500 to-purple-500" },
              { name: "Data Science", icon: "📊", color: "from-green-500 to-teal-500" },
              { name: "Competitive Programming", icon: "💻", color: "from-yellow-500 to-amber-500" },
              { name: "Robotics", icon: "🦾", color: "from-indigo-500 to-blue-500" }
            ].map((interest, index) => (
              <motion.div 
                key={index}
                className="flex items-center p-2 rounded-lg bg-gradient-to-r bg-opacity-10 hover:bg-opacity-20 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-xl mr-2">{interest.icon}</span>
                <span className="text-gray-900 dark:text-white font-medium">{interest.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <FaUserTie className="text-purple-500 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-semibold flex items-center">
                <span className="text-purple-500 mr-2">🔧</span>
                Freelance Work
              </h3>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Built websites for local businesses</li>
                <li>Created graphic designs for clients</li>
                <li>Developed data analysis solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold flex items-center">
                <span className="text-green-500 mr-2">🤝</span>
                Mentoring & Support
              </h3>
              <p className="ml-6 mt-2">
                I've spent time debugging, explaining code, and mentoring — because that's how I learned too.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/projects" passHref>
              <motion.span
                className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Project Portfolio
              </motion.span>
            </Link>
          </div>
        </motion.div>

        {/* Working Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center mb-4">
            <FaBrain className="text-amber-500 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How I Work</h2>
          </div>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">🧩</span>
              <span>I solve problems by digging deep and understanding the "why"</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">👥</span>
              <span>I work well alone, but I enjoy building with a small team</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">🎧</span>
              <span>I recharge with music, sports, memes, books, and naps</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">📍</span>
              <span>I don't over-plan — I adjust as I go</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Vision Section */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-blue-600/10 to-blue-400/10 dark:from-blue-600/20 dark:to-blue-400/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center mb-6">
            <FaGlobe className="text-blue-500 text-2xl mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">What's Next</h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              In a few years, I hope to be working in cybersecurity or data science, maybe running my own tech company. 
              I'd love to travel, stay hands-on with tech, and earn a pilot license someday.
            </p>
            <p>
              My bigger goal is to build tools that actually help people where I live — and maybe beyond.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Let's Connect</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Interested in collaborating or just want to say hello? I'm always open to new opportunities and connections.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" passHref>
            <motion.span 
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.span>
          </Link>
          <Link href="/Resume_Breye_Foka.pdf" target="_blank" passHref>
            <motion.span 
              className="inline-block px-8 py-3 bg-white/10 dark:bg-zinc-700/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-zinc-700/30 font-medium rounded-full shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

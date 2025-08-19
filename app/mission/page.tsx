"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEye, FaHeart, FaRocket, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Mission() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const coreValues = [
    { name: "Honesty", description: "Truth in all communication and actions", icon: <FaHeart className="text-red-500" /> },
    { name: "Curiosity", description: "Constant desire to learn and explore", icon: <FaHeart className="text-red-500" /> },
    { name: "Skepticism", description: "Critical thinking and questioning", icon: <FaHeart className="text-red-500" /> },
    { name: "Loyalty", description: "Unwavering commitment to people and principles", icon: <FaHeart className="text-red-500" /> },
    { name: "Clarity of thought", description: "Structured and lucid thinking", icon: <FaHeart className="text-red-500" /> },
    { name: "A sense of humor", description: "Finding joy and levity even in challenges", icon: <FaHeart className="text-red-500" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent mb-6"
          variants={fadeIn}
        >
          My Mission & Vision
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Using my skills in technology to solve real problems, uplift people around me, and grow into someone who gives more than he takes.
        </motion.p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div 
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <span className="text-blue-500 mr-3 text-3xl">🎯</span> My Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I want to build, teach, protect, and inspire—starting where I am, with what I have. My mission is to leverage cutting-edge technology 
            and creative problem-solving to develop solutions that address real-world challenges, particularly for communities that have been left 
            out of the digital wave.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Through continuous learning and innovation, I aim to contribute to the advancement of technology 
            while maintaining a focus on how these advancements can improve people's lives and create 
            sustainable, positive change in the world.
          </p>
        </div>
      </motion.div>

      {/* Who I Serve */}
      <motion.div 
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <FaUsers className="text-green-500 mr-3" /> Who I'm Here For
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm building for students trying to learn without resources, communities left out of the digital wave, 
            and curious minds with no one to guide them. I've been there. I still am. That's who I work for.
          </p>
        </div>
      </motion.div>

      {/* Core Values */}
      <motion.div 
        className="mb-20"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center text-gray-900 dark:text-white">
          <FaHeart className="text-red-500 mr-3" /> Values I Live By
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-2xl mb-3 flex items-center">
                {value.icon}
                <span className="ml-2 font-semibold text-gray-900 dark:text-white">{value.name}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Goals & Vision */}
      <motion.div 
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center text-gray-900 dark:text-white">
          <FaLightbulb className="text-yellow-500 mr-3" /> Goals & Vision
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-6 shadow-lg"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start mb-4">
              <FaEye className="mr-4 mt-1 text-blue-500" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Next Few Years</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 pl-10">
              Graduate in Computer Science. Work in cybersecurity or data science. Build tools that help others, 
              and get my pilot license on the side. Stay learning. Stay useful.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-6 shadow-lg"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-start mb-4">
              <FaRocket className="mr-4 mt-1 text-green-500" size={24} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bigger Picture</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 pl-10">
              Create tech that matters where I'm from. Mentor people. Start a company. Earn global recognition 
              by solving hard problems—without losing myself along the way.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Impact & Motivation */}
      <motion.div 
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-blue-600/10 to-blue-400/10 dark:from-blue-600/20 dark:to-blue-400/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <FaChartLine className="text-purple-500 mr-3" /> Why I Do This
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I was raised by people who gave up a lot so I could have a shot. I owe it to them, and to myself, 
            to go as far as I can. Not just to win, but to open doors for others once I do.
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Let's Connect</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          If you share similar values and are working on projects that align with this mission, 
          I'd love to connect and explore potential collaborations.
        </p>
        <Link href="/contact" passHref>
          <motion.span 
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}

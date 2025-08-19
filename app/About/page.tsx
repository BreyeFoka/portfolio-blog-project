"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaGraduationCap, FaTools, FaCode, FaBrain, FaGlobe, FaLaptopCode, FaUserTie, FaRegLightbulb, FaLanguage, FaPlane, FaMusic, FaBook, FaGamepad, FaFilm, FaFlask, FaChess, FaRobot, FaLaptop, FaWrench, FaHandshake, FaPuzzlePiece, FaUsers, FaHeadphones, FaMapMarkerAlt, FaChurch, FaBolt, FaMosque, FaCog } from 'react-icons/fa';
import { MdTravelExplore } from 'react-icons/md';
import { AiOutlineZhihu } from "react-icons/ai";
import { FcDiploma2, FcElectronics, FcGraduationCap } from "react-icons/fc";
import { HiChartBar } from 'react-icons/hi';
import { GiTowerBridge } from 'react-icons/gi';

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
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      {/* Hero Section */}
      <motion.div 
        className="mb-8 sm:mb-16 text-center"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent mb-4 sm:mb-6"
          variants={fadeIn}
        >
          About Me
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Computer Science undergraduate who spends most of his time figuring out how things work — then breaking and fixing them.
        </motion.p>
      </motion.div>

      {/* Profile Card */}
      <motion.div 
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="w-36 h-36 sm:w-48 sm:h-48 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <Image 
              src="/assets/blog/authors/breye.png" 
              alt="Breye Foka L." 
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 hover:scale-110"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Breye Foka L.</h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                I like electronics, coding, and exploring systems. Whether I'm writing scripts, building tools, or messing with networks, I enjoy solving real problems.
              </p>
              <p>
                People say I can crack a bug and a joke in the same breath. I take tech seriously, but not myself. My family keeps me grounded, and I'm aiming to get really good at what I do — and help others do the same.
              </p>
            </div>
            <div className="mt-5 sm:mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <Link href="/projects" passHref>
                <motion.span
                  className="inline-block px-5 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md cursor-pointer text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.span>
              </Link>
              <Link href="/skillset" passHref>
                <motion.span
                  className="inline-block px-5 sm:px-6 py-2 bg-white/10 dark:bg-zinc-700/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-zinc-700/30 font-medium rounded-lg shadow-md cursor-pointer text-sm sm:text-base"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-5 sm:p-6 shadow-lg"
        >
          <div className="flex items-center mb-3 sm:mb-4">
            <FaGraduationCap className="text-blue-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <FcGraduationCap className="text-xl sm:text-2xl mr-2 sm:mr-3" />
              <span>Studying Computer Science (Bachelor's 2nd Year)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2"><FcDiploma2 className="text-xl sm:text-2xl" /></span>
              <span>Online courses in electronics, networking, pentesting, IoT, web dev, data science, and cybersecurity</span>
            </li>
            <li className="flex items-start">
              <FaBrain className="text-blue-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
              <span>Self-taught robotics and electronics through tinkering</span>
            </li>
            <li className="flex items-start">
              <FaBolt className="text-blue-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
              <span>Strong background in math, physics, and chemistry from high school</span>
            </li>
          </ul>
          <p className="italic mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            I grew up inspired by people who build cool stuff — real and fictional.<br/>
            Now I want to be one of them.
          </p>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            I sincerely believe that specialization is for insects, and I want to be a generalist who can adapt to any challenge.
          </p>
        </motion.div>

        {/* Tech Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-5 sm:p-6 shadow-lg"
        >
          <div className="flex items-center mb-3 sm:mb-4">
            <FaTools className="text-green-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">What I'm Into</h2>
          </div>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">Things I spend most of my time learning or doing:</p>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {[
              { name: "Machine Learning", icon: <FaRobot />, color: "from-blue-500 to-purple-500" },
              { name: "Data Science", icon: <HiChartBar />, color: "from-green-500 to-teal-500" },
              { name: "Competitive Programming", icon: <FaLaptop />, color: "from-yellow-500 to-amber-500" },
              { name: "Robotics", icon: <FaCog />, color: "from-indigo-500 to-blue-500" },
              { name: "Software Development", icon: <FaCode />, color: "from-indigo-500 to-blue-500" },
              { name: "Electronics", icon: <FcElectronics />, color: "from-indigo-500 to-blue-500" },
              { name: "Chess", icon: <FaChess />, color: "from-green-500 to-emerald-500" }
            ].map((interest, index) => (
              <motion.div 
                key={index}
                className="flex items-center p-1.5 sm:p-2 rounded-lg bg-gradient-to-r bg-opacity-10 hover:bg-opacity-20 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-lg sm:text-xl mr-1.5 sm:mr-2">{interest.icon}</span>
                <span className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">{interest.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-5 sm:p-6 shadow-lg"
        >
          <div className="flex items-center mb-3 sm:mb-4">
            <FaUserTie className="text-purple-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
          </div>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold flex items-center">
                <FaWrench className="text-purple-500 text-xl mr-2" />
                Freelance Work
              </h3>
              <ul className="list-disc list-inside ml-4 sm:ml-6 mt-1 sm:mt-2">
                <li>Built websites for local businesses</li>
                <li>Created graphic designs for clients</li>
                <li>Analyzed data for insights and trends</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold flex items-center">
                <FaHandshake className="text-green-500 text-xl mr-2" />
                Mentoring & Support
              </h3>
              <p className="ml-4 sm:ml-6 mt-1 sm:mt-2">
                I've spent time debugging, explaining code, and mentoring — because that's how I learned too.
              </p>
            </div>
          </div>
          <div className="mt-3 sm:mt-4">
            <Link href="/projects" passHref>
              <motion.span
                className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md cursor-pointer text-sm sm:text-base"
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
          className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl p-5 sm:p-6 shadow-lg"
        >
          <div className="flex items-center mb-3 sm:mb-4">
            <FaBrain className="text-amber-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">How I Work</h2>
          </div>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <FaPuzzlePiece className="text-amber-500 text-xl mr-2 sm:mr-3 mt-1" />
              <span>I solve problems by digging deep and understanding the "why"</span>
            </li>
            <li className="flex items-start">
              <FaUsers className="text-amber-500 text-xl mr-2 sm:mr-3 mt-1" />
              <span>I work well alone, but I enjoy building with a small team</span>
            </li>
            <li className="flex items-start">
              <FaHeadphones className="text-amber-500 text-xl mr-2 sm:mr-3 mt-1" />
              <span>I recharge with music, sports, memes, books, and naps</span>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-amber-500 text-xl mr-2 sm:mr-3 mt-1" />
              <span>I don't over-plan — I adjust as I go</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Languages Section */}
      <motion.div 
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center mb-4 sm:mb-6">
            <FaLanguage className="text-green-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Languages</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* French */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GiTowerBridge className="text-xl mr-2 text-blue-600" />
                  <span className="font-semibold text-gray-900 dark:text-white">French</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Native</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
                <motion.div 
                  className="h-2.5 rounded-full bg-green-600 dark:bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>100%</span>
                <span>Native Fluency</span>
              </div>
            </div>
            
            {/* English */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaBook className="text-xl mr-2 text-blue-600" />
                  <span className="font-semibold text-gray-900 dark:text-white">English</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Fluent</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
                <motion.div 
                  className="h-2.5 rounded-full bg-blue-600 dark:bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 1, delay: 0.95 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>~95%</span>
                <span>Professional Proficiency</span>
              </div>
            </div>
            
            {/* Arabic */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaMosque className="text-xl mr-2 text-green-600" />
                  <span className="font-semibold text-gray-900 dark:text-white">Arabic</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Intermediate</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
                <motion.div 
                  className="h-2.5 rounded-full bg-yellow-600 dark:bg-yellow-500"
                  initial={{ width: 0 }}
                  animate={{ width: "30%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>~30%</span>
                <span>Basic Conversation</span>
              </div>
            </div>
            
            {/* Russian */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaChurch className="text-xl mr-2 text-red-600" />
                  <span className="font-semibold text-gray-900 dark:text-white">Russian</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Elementary</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
                <motion.div 
                  className="h-2.5 rounded-full bg-red-600 dark:bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: "20%" }}
                  transition={{ duration: 1, delay: 1.05 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>~20%</span>
                <span>Basic Phrases</span>
              </div>
            </div>
            
            {/* German */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">German</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Elementary</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
                <motion.div 
                  className="h-2.5 rounded-full bg-orange-600 dark:bg-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 1, delay: 1.1 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>~15%</span>
                <span>Beginner Level</span>
              </div>
            </div>
            
            {/* Chinese */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <AiOutlineZhihu className='text-xl mr-2' />
                  <span className="font-semibold text-gray-900 dark:text-white">Chinese</span>
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Beginner</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5">
                <motion.div 
                  className="h-2.5 rounded-full bg-purple-600 dark:bg-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: "5%" }}
                  transition={{ duration: 1, delay: 1.15 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>~5%</span>
                <span>Few Words</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hobbies & Interests Section */}
      <motion.div 
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.85, duration: 0.6 }}
      >
        <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center mb-4 sm:mb-6">
            <FaRegLightbulb className="text-yellow-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Hobbies & Interests</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-yellow-500 text-xl mt-1 mr-3"><FaMusic /></span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Music & Drumming</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <span className="sm:hidden">Passionate about music and drums...</span>
                    <span className="hidden sm:inline">Passionate about music and playing drums. Rhythm is my way of expressing creativity outside of code.</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-blue-500 text-xl mt-1 mr-3"><FaPlane /></span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Aviation Enthusiast</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <span className="sm:hidden">Aviation geek fascinated by aircraft tech...</span>
                    <span className="hidden sm:inline">An avid aviation geek with a fascination for aircraft technology, flight mechanics, and the airline industry.</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-indigo-500 text-xl mt-1 mr-3"><FaChess /></span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Chess</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <span className="sm:hidden">Strategic thinking through chess (ELO: 1500)...</span>
                    <span className="hidden sm:inline">Enjoy strategic thinking through chess with a current ELO rating of 1500. Developing patience and tactical planning skills through regular play.</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-500 text-xl mt-1 mr-3"><FaBook /></span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Reading & Learning</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <span className="sm:hidden">Technical & sci-fi literature reader...</span>
                    <span className="hidden sm:inline">Avid reader with interests in both technical literature and fiction, particularly enjoying sci-fi that explores futuristic technology.</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-red-500 text-xl mt-1 mr-3"><FaFilm /></span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Science Fiction</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <span className="sm:hidden">Sci-fi movies & tech documentaries fan...</span>
                    <span className="hidden sm:inline">Fan of sci-fi movies and documentaries that explore futuristic concepts, space exploration, and technological advancement.</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-indigo-500 text-xl mt-1 mr-3"><FaFlask /></span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Experiments & Tinkering</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    <span className="sm:hidden">Electronics experiments & gadget tinkering...</span>
                    <span className="hidden sm:inline">Love conducting experiments and tinkering with electronics and gadgets to understand how things work from the inside out.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Travel Map Section */}
      <motion.div 
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.875, duration: 0.6 }}
      >
        <div className="bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center mb-4 sm:mb-6">
            <MdTravelExplore className="text-teal-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">My Travels</h2>
          </div>
          
          <p className="mb-4 sm:mb-6 text-sm sm:text-lg text-gray-700 dark:text-gray-300">
            I'm passionate about exploring different cultures and places. Here's a map of some of the places I've visited:
          </p>
          
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden border border-white/20 dark:border-zinc-700/20 mb-4">
            <div className="absolute inset-0 bg-[url('/world-map-light.svg')] dark:bg-[url('/world-map-dark.svg')] bg-contain bg-no-repeat bg-center opacity-80">
              {/* Map Pins - Europe */}
              <div className="absolute top-[33.5%] left-[44.2%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="France"></div>
              <div className="absolute top-[32.8%] left-[43.6%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Belgium"></div>
              <div className="absolute top-[32.1%] left-[44.9%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Germany"></div>
              <div className="absolute top-[33.8%] left-[44.6%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Switzerland"></div>
              <div className="absolute top-[36.5%] left-[53.9%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Turkey"></div>
              
              {/* Map Pins - Africa */}
              <div className="absolute top-[49.5%] left-[48.9%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Chad"></div>
              <div className="absolute top-[50.8%] left-[52.6%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Sudan"></div>
              <div className="absolute top-[53.8%] left-[47.9%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Cameroon"></div>
              <div className="absolute top-[51.6%] left-[46.2%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Nigeria"></div>
              <div className="absolute top-[52.1%] left-[44.7%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Benin"></div>
              <div className="absolute top-[51.8%] left-[44.2%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Togo"></div>
              <div className="absolute top-[51.8%] left-[42.9%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Ghana"></div>
              <div className="absolute top-[52.8%] left-[55.2%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Ethiopia"></div>
              <div className="absolute top-[54.8%] left-[55.9%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Kenya"></div>
              <div className="absolute top-[55.1%] left-[53.7%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Rwanda"></div>
              <div className="absolute top-[48.5%] left-[46.2%] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full pulse-animation" title="Niger"></div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Through my travels across Africa and Europe, I've gained valuable insights into different cultures, languages, and ways of thinking that have shaped both my personal and professional perspectives.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-2">
              My goal is to continue exploring new places while learning from each experience and bringing these diverse perspectives into my work and projects.
            </p>
          </div>
          
          <style jsx>{`
            .pulse-animation {
              animation: pulse 2s infinite;
              box-shadow: 0 0 0 rgba(255, 0, 0, 0.4);
            }
            
            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
              }
              70% {
                box-shadow: 0 0 0 5px rgba(255, 0, 0, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
              }
            }
          `}</style>
        </div>
      </motion.div>
      
      {/* Vision Section */}
      <motion.div 
        className="mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-blue-600/10 to-blue-400/10 dark:from-blue-600/20 dark:to-blue-400/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center mb-4 sm:mb-6">
            <FaGlobe className="text-blue-500 text-xl sm:text-2xl mr-2 sm:mr-3" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">What's Next</h2>
          </div>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              In a few years, I hope to be working in cybersecurity or data science and earn a pilot license someday, maybe running my own tech company. 
              I'd love to travel, stay hands-on with tech, and explore new opportunities.
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
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">Let's Connect</h2>
        <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Interested in collaborating or just want to say hello? I'm always open to new opportunities and connections.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link href="/contact" passHref>
            <motion.span 
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg cursor-pointer text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.span>
          </Link>
          <Link href="/Resume_Breye_Foka.pdf" target="_blank" passHref>
            <motion.span 
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white/10 dark:bg-zinc-700/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-zinc-700/30 font-medium rounded-full shadow-lg cursor-pointer text-sm sm:text-base"
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

"use client";

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, FaAward, FaTrophy, FaCertificate, 
  FaMedal, FaBriefcase, FaLaptopCode, FaChalkboardTeacher 
} from 'react-icons/fa';

// Define types
interface Achievement {
  id: number;
  title: string;
  date: string;
  description: string;
  category: string;
  icon: React.ReactNode;
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const achievementVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
};

const achievements = [
  {
    id: 1,
    title: "Bachelor's Degree in Computer Science",
    date: "Expected 2028",
    description: "Currently pursuing a Bachelor's degree in Computer Science at University of Kigali Rwanda.",
    category: "Education",
    icon: <FaGraduationCap className="text-blue-500" size={24} />
  },
  {
    id: 2,
    title: "High School Diploma with Honors",
    date: "July 2023",
    description: "Graduated with honors, specializing in Mathematics and Physics",
    category: "Education",
    icon: <FaGraduationCap className="text-blue-500" size={24} />
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    date: "July 2024",
    description: "Earned the AWS Certified Cloud Practitioner certification, demonstrating knowledge of AWS Cloud concepts, services, security, and more.",
    category: "Certification",
    icon: <FaCertificate className="text-yellow-500" size={24} />
  },
  {
    id: 4,
    title: "Microsoft Azure Fundamentals (AZ-900)",
    date: "March 2024",
    description: "Obtained certification in Microsoft Azure Fundamentals, showing proficiency in cloud concepts, Azure services, and security.",
    category: "Certification",
    icon: <FaCertificate className="text-yellow-500" size={24} />
  },
  {
    id: 5,
    title: "TensorFlow Developer Certificate",
    date: "November 2023",
    description: "Achieved Google's TensorFlow Developer Certificate, demonstrating ability to build and train models using TensorFlow.",
    category: "Certification",
    icon: <FaCertificate className="text-yellow-500" size={24} />
  },
  {
    id: 6,
    title: "Hackathon Winner - Smart City Solutions",
    date: "April 2023",
    description: "First place at the Regional Hackathon for developing an innovative IoT solution for smart urban mobility.",
    category: "Award",
    icon: <FaTrophy className="text-amber-500" size={24} />
  },
  {
    id: 7,
    title: "Freelance Web Developer",
    date: "2023 - Present",
    description: "Working as a freelance web developer, building responsive websites and web applications for various clients using modern frameworks.",
    category: "Professional",
    icon: <FaBriefcase className="text-purple-500" size={24} />
  },
  {
    id: 8,
    title: "Junior Data Analyst Internship",
    date: "Summer 2024",
    description: "Three-month internship at a tech company where I analyzed customer data and built visualization dashboards.",
    category: "Professional",
    icon: <FaBriefcase className="text-purple-500" size={24} />
  },
  {
    id: 9,
    title: "Kaggle Competition - Top 10%",
    date: "December 2023",
    description: "Ranked in the top 10% in a Kaggle machine learning competition focused on predictive analytics for healthcare outcomes.",
    category: "Award",
    icon: <FaAward className="text-amber-500" size={24} />
  },
  {
    id: 10,
    title: "National Math Olympiad - Silver Medal",
    date: "2021",
    description: "Won a silver medal in the National Mathematics Olympiad, showcasing problem-solving abilities.",
    category: "Award",
    icon: <FaMedal className="text-amber-500" size={24} />
  },
  {
    id: 11,
    title: "Open Source Contributor",
    date: "2022 - Present",
    description: "Active contributor to several open-source projects, primarily focused on Python libraries for data science and machine learning.",
    category: "Professional",
    icon: <FaLaptopCode className="text-green-500" size={24} />
  },
  {
    id: 12,
    title: "Programming Workshop Instructor",
    date: "2023 - Present",
    description: "Volunteer instructor for coding workshops teaching Python and web development basics to high school students.",
    category: "Professional",
    icon: <FaChalkboardTeacher className="text-indigo-500" size={24} />
  }
];

function TimelineItem({ achievement, index }: { achievement: Achievement; index: number }) {
  const isEven = index % 2 === 0;
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${
        isEven ? 'flex-row-reverse' : 'flex-row'
      }`}
      variants={achievementVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-10 flex items-center order-1 bg-blue-600 dark:bg-blue-500 shadow-xl w-8 h-8 rounded-full">
        <div className="mx-auto font-semibold text-lg text-white">{index + 1}</div>
      </div>
      <motion.div 
        className={`order-1 bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 rounded-xl shadow-xl w-5/12 px-6 py-4
          ${isEven ? 'mr-8' : 'ml-8'}`}
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      >
        <div className="flex items-center mb-3">
          <span className="mr-3">{achievement.icon}</span>
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">{achievement.title}</h3>
        </div>
        <div className="mb-2 py-1 px-2 inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold">
          {achievement.date}
        </div>
        <div className="mb-2 py-1 px-2 inline-block rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium ml-2">
          {achievement.category}
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {achievement.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Achievements() {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filteredAchievements, setFilteredAchievements] = useState(achievements);
  const controls = useAnimation();
  
  useEffect(() => {
    if (filterCategory === 'All') {
      setFilteredAchievements(achievements);
    } else {
      setFilteredAchievements(
        achievements.filter(achievement => achievement.category === filterCategory)
      );
    }
    
    // Reset animation when filter changes
    controls.start('hidden').then(() => {
      controls.start('visible');
    });
  }, [filterCategory, controls]);

  const categories = ['All', 'Education', 'Certification', 'Award', 'Professional'];

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
          Achievements & Milestones
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          A chronological journey through my academic and professional accomplishments.
        </motion.p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {categories.map(category => (
          <motion.button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              filterCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-zinc-800/30"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === 'All' && 'All Achievements'}
            {category === 'Education' && (
              <>
                <FaGraduationCap className="mr-2" /> Education
              </>
            )}
            {category === 'Certification' && (
              <>
                <FaCertificate className="mr-2" /> Certifications
              </>
            )}
            {category === 'Award' && (
              <>
                <FaTrophy className="mr-2" /> Awards & Honors
              </>
            )}
            {category === 'Professional' && (
              <>
                <FaBriefcase className="mr-2" /> Professional
              </>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="relative wrap overflow-hidden">
        <div className="absolute h-full border-r-2 border-blue-400 dark:border-blue-700 left-1/2 transform -translate-x-1/2"></div>
        
        <motion.div
          className="mb-8 flex flex-col items-center justify-between w-full"
          variants={timelineVariants}
          initial="hidden"
          animate={controls}
        >
          {filteredAchievements.map((achievement, index) => (
            <TimelineItem key={achievement.id} achievement={achievement} index={index} />
          ))}
        </motion.div>
      </div>

      {/* No achievements message */}
      {filteredAchievements.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No achievements found in this category.
          </p>
        </motion.div>
      )}

      {/* Looking Forward Section */}
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Looking Forward</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I'm constantly pursuing new opportunities to learn, grow, and make an impact.
          My journey continues as I work towards achieving new goals and milestones in the tech industry.
        </p>
      </motion.div>
    </div>
  );
}
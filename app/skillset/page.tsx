"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import CardContent from '../components/CardContent';
import {
  FaReact,
  FaNodeJs,
  FaUnity,
  FaLinux,
  FaGithub,
  FaNetworkWired,
  FaFigma,
  FaJs,
  FaCode,
  FaTools,
  FaDesktop,
  FaDatabase,
  FaRobot,
  FaPalette,
  FaServer,
  FaMobileAlt
} from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiDjango,
  SiFlask,
  SiFlutter,
  SiSwift,
  SiGodotengine,
  SiMetasploit,
  SiBurpsuite,
  SiWireshark,
  SiArduino,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiHomeassistant,
  SiInsomnia,
  SiNotion,
  SiJupyter,
  SiKaggle,
  SiGooglecolab,
  SiVmware,
  SiPython,
  SiCplusplus,
  SiPlotly,
  SiKicad,
  SiRaspberrypi,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiSqlite
} from 'react-icons/si';

// Define skill category interface
interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// Define skill item interface
interface SkillItem {
  name: string;
  icon: React.ReactNode;
  level: number;
  categories: string[];
}

// Define skill group interface
interface SkillGroup {
  title: string;
  items: SkillItem[];
}

// Define skill categories with icons
const skillCategories: SkillCategory[] = [
  { id: 'all', name: 'All Skills', icon: <FaCode /> },
  { id: 'frontend', name: 'Frontend', icon: <FaDesktop /> },
  { id: 'backend', name: 'Backend', icon: <FaServer /> },
  { id: 'mobile', name: 'Mobile', icon: <FaMobileAlt /> },
  { id: 'ai', name: 'AI & ML', icon: <FaRobot /> },
  { id: 'design', name: 'Design', icon: <FaPalette /> },
  { id: 'tools', name: 'Tools', icon: <FaTools /> },
  { id: 'other', name: 'Other', icon: <FaNetworkWired /> }
];

// Define skills with their categories
const skills: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 90, categories: ['frontend', 'backend'] },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, level: 85, categories: ['frontend', 'backend'] },
      { name: 'Python', icon: <SiPython className="text-blue-500" />, level: 90, categories: ['backend', 'ai'] },
      { name: 'C++', icon: <SiCplusplus className="text-blue-600" />, level: 75, categories: ['backend'] },
      { name: 'HTML', icon: <SiHtml5 className="text-orange-500" />, level: 95, categories: ['frontend'] },
      { name: 'CSS', icon: <SiCss3 className="text-blue-400" />, level: 90, categories: ['frontend'] }
    ]
  },
  {
    title: 'Frontend Development',
    items: [
      { name: 'React', icon: <FaReact className="text-blue-400" />, level: 90, categories: ['frontend'] },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 85, categories: ['frontend'] },
      { name: 'Vue.js', icon: <SiVuedotjs className="text-green-500" />, level: 75, categories: ['frontend'] },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" />, level: 90, categories: ['frontend'] }
    ]
  },
  {
    title: 'Backend Development',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 85, categories: ['backend'] },
      { name: 'Django', icon: <SiDjango className="text-green-700" />, level: 80, categories: ['backend'] },
      { name: 'Flask', icon: <SiFlask />, level: 85, categories: ['backend'] },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 80, categories: ['backend'] },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" />, level: 75, categories: ['backend'] },
      { name: 'SQLite', icon: <SiSqlite className="text-blue-400" />, level: 85, categories: ['backend'] }
    ]
  },
  {
    title: 'Mobile Development',
    items: [
      { name: 'Flutter', icon: <SiFlutter className="text-blue-400" />, level: 70, categories: ['mobile'] },
      { name: 'Swift', icon: <SiSwift className="text-orange-500" />, level: 60, categories: ['mobile'] }
    ]
  },
  {
    title: 'AI & Machine Learning',
    items: [
      { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" />, level: 75, categories: ['ai'] },
      { name: 'PyTorch', icon: <SiPytorch className="text-red-500" />, level: 70, categories: ['ai'] },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="text-blue-500" />, level: 80, categories: ['ai'] },
      { name: 'Keras', icon: <SiKeras className="text-red-600" />, level: 75, categories: ['ai'] },
      { name: 'Pandas', icon: <SiPandas className="text-blue-600" />, level: 85, categories: ['ai'] },
      { name: 'NumPy', icon: <SiNumpy className="text-blue-400" />, level: 85, categories: ['ai'] },
      { name: 'Plotly', icon: <SiPlotly className="text-blue-400" />, level: 80, categories: ['ai'] },
      { name: 'Jupyter', icon: <SiJupyter className="text-orange-500" />, level: 90, categories: ['ai', 'tools'] },
      { name: 'Kaggle', icon: <SiKaggle className="text-blue-400" />, level: 75, categories: ['ai', 'tools'] },
      { name: 'Google Colab', icon: <SiGooglecolab className="text-yellow-500" />, level: 85, categories: ['ai', 'tools'] }
    ]
  },
  {
    title: 'Design & Creative',
    items: [
      { name: 'Adobe Photoshop', icon: <SiAdobephotoshop className="text-blue-600" />, level: 70, categories: ['design'] },
      { name: 'Adobe Illustrator', icon: <SiAdobeillustrator className="text-orange-500" />, level: 65, categories: ['design'] },
      { name: 'Canva', icon: <SiCanva className="text-blue-400" />, level: 85, categories: ['design'] },
      { name: 'Figma', icon: <FaFigma className="text-purple-500" />, level: 75, categories: ['design'] }
    ]
  },
  {
    title: 'IoT & Hardware',
    items: [
      { name: 'Arduino', icon: <SiArduino className="text-teal-500" />, level: 80, categories: ['other'] },
      { name: 'Raspberry Pi', icon: <SiRaspberrypi className="text-red-500" />, level: 75, categories: ['other'] },
      { name: 'KiCad', icon: <SiKicad />, level: 60, categories: ['other'] },
      { name: 'Home Assistant', icon: <SiHomeassistant className="text-blue-400" />, level: 70, categories: ['other'] }
    ]
  },
  {
    title: 'Development Tools',
    items: [
      { name: 'Git & GitHub', icon: <FaGithub />, level: 90, categories: ['tools'] },
      { name: 'Linux', icon: <FaLinux />, level: 85, categories: ['tools'] },
      { name: 'Insomnia', icon: <SiInsomnia className="text-purple-500" />, level: 80, categories: ['tools'] },
      { name: 'Notion', icon: <SiNotion />, level: 85, categories: ['tools'] },
      { name: 'VMware', icon: <SiVmware className="text-blue-500" />, level: 70, categories: ['tools'] }
    ]
  },
  {
    title: 'Game Development',
    items: [
      { name: 'Unity', icon: <FaUnity />, level: 65, categories: ['other'] },
      { name: 'Godot', icon: <SiGodotengine className="text-blue-400" />, level: 60, categories: ['other'] }
    ]
  },
  {
    title: 'Cybersecurity',
    items: [
      { name: 'Metasploit', icon: <SiMetasploit className="text-red-500" />, level: 65, categories: ['other'] },
      { name: 'Burp Suite', icon: <SiBurpsuite className="text-orange-500" />, level: 60, categories: ['other'] },
      { name: 'Wireshark', icon: <SiWireshark className="text-blue-400" />, level: 70, categories: ['other'] }
    ]
  }
];

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

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter skills based on the selected category
  const filteredSkills = skills
    .map(skillGroup => {
      if (activeCategory === 'all') {
        return skillGroup;
      }
      
      // Filter items in each group that match the selected category
      const filteredItems = skillGroup.items.filter(item => 
        item.categories.includes(activeCategory)
      );
      
      // Only return skill groups that have matching items
      return filteredItems.length > 0 ? { ...skillGroup, items: filteredItems } : null;
    })
    .filter((group): group is SkillGroup => group !== null); // Remove null entries and help TypeScript understand the type

  return (
    <div className="max-w-6xl mx-auto">
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
          My Skillset
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10"
        >
          A comprehensive overview of my technical skills and competencies across various domains of software development, design, and more.
        </motion.p>
      </motion.div>

      {/* Category Filters */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {skillCategories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-zinc-800/30"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredSkills.map((skillGroup, index) => (
            <Card key={index} title={skillGroup.title}>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: skillIndex * 0.05, duration: 0.5 }}
                    >
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-zinc-700 rounded-full h-2.5 mb-1">
                        <motion.div 
                          className="h-2.5 rounded-full bg-blue-600 dark:bg-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.05) }}
                        />
                      </div>
                      <div className="text-xs text-right text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

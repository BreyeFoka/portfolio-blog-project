"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, User, Layers, BookOpen, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define interface for project
interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  blogSlug?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: 'Bachelier',
    image: '/images/bachelier.png',
    description: 'A platform to help high school students easily check national exam results and get insights.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/BreyeFoka/bachelier.git',
    live: 'https://bachelier.live',
    blogSlug: 'bachelier-project',
    category: 'fullstack'
  },
  {
    title: 'IoT Weather Monitor',
    image: '/images/placeholder.png',
    description: 'An IoT-based system for real-time weather monitoring using sensors and cloud dashboard.',
    tech: ['Arduino', 'NodeMCU', 'Firebase', 'React'],
    github: 'https://github.com/yourusername/iot-weather-monitor',
    live: '',
    blogSlug: 'iot-weather-monitor',
    category: 'iot'
  },
  {
    title: 'Smart Helmet',
    image: '/images/smart-helmet.png',
    description: 'An Arduino project that aims to add Smart features to Bike Helmets.',
    tech: ['Arduino', 'Bluetooth', 'Sensors'],
    github: 'https://github.com/BreyeFoka/SmartHelmet.git',
    live: '',
    blogSlug: 'smart-helmet',
    category: 'iot'
  },
  {
    title: 'Anime Quest',
    image: '/images/anime-quest.png',
    description: 'A web application to discover and track your favorite anime series.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Typescript', 'API', 'Node.js'],
    github: 'http://github.com/BreyeFoka/Anime-Vault.git',
    live: 'https://anime-quest-ts.netlify.app',
    blogSlug: 'anime-quest',
    category: 'frontend'
  },
  {
    title: 'Sarcastic Advisor',
    image: '/images/sarcastic-advisor.png',
    description: 'An app that gives sarcastic advices each time you click on the button',
    tech: ['React', 'Tailwind CSS', 'Typescript', 'API', 'Node.js'],
    github: 'https://github.com/BreyeFoka/Advisor-react.git',
    live: 'https://sarcasticadvisor.netlify.app/',
    blogSlug: 'sarcastic-advisor',
    category: 'frontend'
  },
  {
    title: 'Daddy Laugh',
    image: '/images/daddylaugh.png',
    description: 'A simple web app that displays random dad jokes fetched from an API.',
    tech: ['JavaScript', 'HTML', 'CSS', 'API'],
    github: 'https://github.com/BreyeFoka/Dad-jokes.git',
    live: 'https://daddylaugh.netlify.app',
    blogSlug: 'dad-jokes',
    category: 'frontend'
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

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter projects based on category and search query
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
        >
          A showcase of my work across various technologies and domains. Each project represents my passion for coding and problem-solving.
        </motion.p>
        
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
              icon={<Layers className="w-4 h-4 mr-2" />}
            >
              All
            </FilterButton>
            <FilterButton 
              active={filter === 'frontend'} 
              onClick={() => setFilter('frontend')}
              icon={<Code className="w-4 h-4 mr-2" />}
            >
              Frontend
            </FilterButton>
            <FilterButton 
              active={filter === 'fullstack'} 
              onClick={() => setFilter('fullstack')}
              icon={<BookOpen className="w-4 h-4 mr-2" />}
            >
              Full Stack
            </FilterButton>
            <FilterButton 
              active={filter === 'iot'} 
              onClick={() => setFilter('iot')}
              icon={<User className="w-4 h-4 mr-2" />}
            >
              IoT
            </FilterButton>
          </div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-20"
          >
            <h3 className="text-2xl font-medium mb-4">No matching projects found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Try changing your search terms or filters</p>
            <Button onClick={() => {setFilter('all'); setSearchQuery('');}}>
              Reset Filters
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeIn}
      className="group relative overflow-hidden rounded-xl bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md border border-white/10 dark:border-zinc-700/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Project Image */}
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Technology pills overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((tech, i) => (
              <span 
                key={i} 
                className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm text-white">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-2">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
            </a>
          )}
          {project.blogSlug && (
            <Link 
              href={`/posts/${project.blogSlug}`}
              className="flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <BookOpen className="w-4 h-4 mr-1" /> Read More
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// FilterButton props interface
interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}

// Filter Button Component
function FilterButton({ children, active, onClick, icon }: FilterButtonProps) {
  return (
    <button
      className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-blue-600 text-white"
          : "bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm border border-white/10 dark:border-zinc-700/10 text-gray-900 dark:text-white hover:bg-white/30 dark:hover:bg-zinc-800/30"
      }`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}

"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FiZoomIn, FiX } from 'react-icons/fi';

// Define interface for gallery images
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Gallery images data
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/bachelier.png',
    alt: 'Bachelier Project',
    category: 'projects'
  },
  {
    id: 2,
    src: '/images/smart-helmet.png',
    alt: 'Smart Helmet Project',
    category: 'projects'
  },
  {
    id: 3,
    src: '/images/anime-quest.png',
    alt: 'Anime Quest Project',
    category: 'projects'
  },
  {
    id: 4,
    src: '/images/sarcastic-advisor.png',
    alt: 'Sarcastic Advisor Project',
    category: 'projects'
  },
  {
    id: 5,
    src: '/profile.png',
    alt: 'Profile Picture',
    category: 'personal'
  },
  {
    id: 6,
    src: '/assets/blog/deeplearning/cover.jpg',
    alt: 'Deep Learning',
    category: 'blog'
  },
  {
    id: 7,
    src: '/assets/blog/nnfromscratch/cover.jpg',
    alt: 'Neural Network From Scratch',
    category: 'blog'
  },
  {
    id: 8,
    src: '/assets/blog/dynamic-routing/cover.jpg',
    alt: 'Dynamic Routing',
    category: 'blog'
  },
  // Add more images here
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(galleryImages);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === filter));
    }
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent"
      >
        Image Gallery
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
      >
        A collection of images from my projects, blog posts, and personal collection. Click on any image to view it in full size.
      </motion.p>

      {/* Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        <Button 
          onClick={() => setFilter('all')} 
          variant={filter === 'all' ? 'default' : 'outline'}
          className={`rounded-full px-5 py-2 ${filter === 'all' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm'}`}
        >
          All
        </Button>
        <Button 
          onClick={() => setFilter('projects')} 
          variant={filter === 'projects' ? 'default' : 'outline'}
          className={`rounded-full px-5 py-2 ${filter === 'projects' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm'}`}
        >
          Projects
        </Button>
        <Button 
          onClick={() => setFilter('blog')} 
          variant={filter === 'blog' ? 'default' : 'outline'}
          className={`rounded-full px-5 py-2 ${filter === 'blog' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm'}`}
        >
          Blog
        </Button>
        <Button 
          onClick={() => setFilter('personal')} 
          variant={filter === 'personal' ? 'default' : 'outline'}
          className={`rounded-full px-5 py-2 ${filter === 'personal' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm'}`}
        >
          Personal
        </Button>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            className="group relative overflow-hidden rounded-xl bg-white/30 dark:bg-zinc-800/30 backdrop-blur-md border border-white/10 dark:border-zinc-700/10 shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button 
                className="p-3 rounded-full bg-white/20 backdrop-blur-lg text-white hover:bg-white/40 transition-all"
                aria-label="Zoom in"
              >
                <FiZoomIn size={24} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all z-10"
                onClick={() => setSelectedImage(null)}
              >
                <FiX size={24} />
              </button>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={900}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm text-white">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

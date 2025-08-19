"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  finishLoading: () => void;
}

const Loader = ({ finishLoading }: LoaderProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  // Animate loader and then call finishLoading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      finishLoading();
    }, 2500);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9] 
      } 
    },
  };

  const logoAnimation = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const exit = {
    opacity: 0,
    transition: {
      duration: 0.5
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300 dark:bg-zinc-900"
      initial={{ opacity: 1 }}
      exit={exit}
    >
      <motion.div
        className="flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="w-32 h-32 mb-8 flex items-center justify-center"
          variants={logoAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-blue-600/30 blur-xl"
            />
            <motion.div 
              className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              BF
            </motion.div>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4" 
          variants={item}
        >
          Breye Foka
        </motion.h1>
        
        <motion.div 
          className="flex items-center justify-center mb-8"
          variants={item}
        >
          <div className="h-1 w-12 rounded-full bg-gray-500 dark:bg-gray-600 mx-2"></div>
          <span className="text-gray-900 dark:text-white text-sm uppercase tracking-widest">Portfolio</span>
          <div className="h-1 w-12 rounded-full bg-gray-500 dark:bg-gray-600 mx-2"></div>
        </motion.div>
        
        {/* Loading Progress Bar */}
        <motion.div 
          className="w-48 h-1 bg-gray-500/30 dark:bg-gray-700/30 rounded-full overflow-hidden"
          variants={item}
        >
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;

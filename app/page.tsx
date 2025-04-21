// import Head from 'next/head';

// export default function HomePage() {
//   return (
//     <>
//       <Head>
//         <title>Breye Foka L. | Portfolio</title>
//         <meta
//           name="description"
//           content="Breye Foka L. – Tech-obsessed Computer Science undergrad driven by curiosity, creativity, and impact."
//         />
//       </Head>

//       <div className=" bottom-0 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900 mt-20 sm:mt-0 px-4 sm:px-6 py-10">
//         <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
//           Hello, I’m <span className="text-blue-600">Breye Foka L.</span>
//         </h1>
//         <p className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
//           I am a Computer Science undergraduate passionate about leveraging technology to solve complex challenges and drive innovation.
//         </p>
//         <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">I am committed to continuous learning, professional growth, and
//           applying my skills to benefit my community and beyond.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           <a
//             href="/about"
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
//           >
//             About Me
//           </a>
//           <a
//             href="/skillset"
//             className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
//           >
//             Skillset
//           </a>
//           <a
//             href="/projects"
//             className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
//           >
//             Projects
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }


// src/app/page.tsx (or wherever your homepage is)

"use client";

import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Breye Foka L. | Portfolio</title>
        <meta
          name="description"
          content="Breye Foka L. – Tech-obsessed Computer Science undergrad driven by curiosity, creativity, and impact."
        />
      </Head>

      <main className="flex min-h-screen flex-col justify-center items-center bg-white dark:bg-zinc-900 text-center px-4 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Yo, I’m <span className="text-blue-600">Breye Foka L.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4"
        >
          Computer Science undergrad | Cybersecurity | Data Science | Innovation-obsessed | Making impact with tech
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-xl text-md sm:text-lg text-gray-600 dark:text-gray-400 mb-8"
        >
          Building the future through code, curiosity, and caffeine. Exploring everything from AI and aviation to ethical hacking and impact-driven design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link href="/about">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              About Me <HiArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link href="/skillset">
            <Button variant="outline" size="lg">
              Skillset
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="ghost" size="lg">
              Projects
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center space-x-6 text-2xl text-gray-600 dark:text-gray-300"
        >
          <a href="mailto:breyefokalagloire@gmail.com" className="hover:text-blue-600">
            <FiMail />
          </a>
          <a href="https://github.com/BreyeFoka" target="_blank" className="hover:text-blue-600">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/breyefokalagloire" target="_blank" className="hover:text-blue-600">
            <FiLinkedin />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 text-sm text-gray-400 dark:text-gray-500"
        >
          © {new Date().getFullYear()} Breye Foka L. All rights reserved.
        </motion.div>
      </main>
    </>
  );
}

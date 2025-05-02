'use client'
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Breye Foka L.</title>
        <meta name="description" content="About Me page for Breye Foka L."/>
      </Head>

      <main className="container mx-auto px-6 space-y-24 bg-gray-300 dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors">

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-extrabold">👨‍💻 About Me</h1>
          <div className="space-y-4 text-xl leading-relaxed">
            <p>
              I’m <span className="font-semibold text-primary">Breye Foka L.</span>, a Computer Science undergraduate who spends most of his time figuring out how things work — then breaking and fixing them.
            </p>
            <p>
              I like electronics, coding, and exploring systems. I like writing scripts, building tools, or messing with networks, I enjoy solving real problems.
            </p>
            <p>
              People say I can crack a bug and a joke in the same breath. I take tech seriously, but not myself. My family keeps me grounded, and I’m aiming to get really good at what I do — and help others do the same.
            </p>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">📚 Education</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>🎓 Studying Computer Science (Bachelor’s 2nd Year)</li>
            <li>📜 Took online courses in electronics, networking, pentesting, IoT, web dev, data science, and cybersecurity</li>
            <li>🧠 Taught myself robotics and electronics by tinkering</li>
            <li>💥 Was deep into math, physics, and chemistry in high school — still use that mindset</li>
          </ul>
          <p className="italic text-lg">
            I grew up inspired by people who build cool stuff — real and fictional.
          </p>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          id="tech-stack"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold">🛠 What I’m Into</h2>
          <p className="text-xl">Things I spend most of my time learning or doing:</p>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Ethical hacking</li>
            <li>Machine learning</li>
            <li>Data science</li>
            <li>Competitive programming</li>
            <li>Robotics</li>
          </ul>
        </motion.section>

        {/* Projects & Experience Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">🧪 Work Experiences</h2>
          <div className="space-y-4 text-lg">
            <div>
              <h3 className="text-xl font-semibold">🔧 Freelance Work</h3>
              <ul className="list-disc list-inside">
                <li>Built websites</li>
                <li>Did some graphic design</li>
                <li>Helped with data projects</li>
              </ul>
              <Button className="mt-4 bg-gray-300 dark:bg-zinc-900 hadow-lg hover shadow-xl transition duration-300 dark:shadow-zinc-950 text-gray-900 dark:text-white">
              <Link href="/projects" className="text-blue-500 hover:underline">Check out my projects</Link>
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🤝 Helping Others</h3>
              <p>I’ve spent time debugging, explaining code, and mentoring — because that’s how I learned too.</p>
            </div>
          </div>
        </motion.section>

        {/* Mindset & Personality Section */}
        <motion.section
          id="mindset"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">🧠 How I Work</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>🧩 I like solving problems by digging deep and understanding the “why”</li>
            <li>👥 I work well alone, but I enjoy building with a small team</li>
            <li>🎧 I recharge with music, sports, memes, books, and naps</li>
            <li>📍 I don’t over-plan — I adjust as I go</li>
          </ul>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          id="vision"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-xl leading-relaxed"
        >
          <h2 className="text-4xl font-bold">🌍 What’s Next</h2>
          <p>
            In a few years, I hope to be working in cybersecurity or data science, maybe running my own tech company. I’d love to travel, stay hands-on with tech, and earn a pilot license someday.
          </p>
          <p>
            My bigger goal is to build tools that actually help people where I live — and maybe beyond.
          </p>
        </motion.section>

      </main>
    </>
  );
}

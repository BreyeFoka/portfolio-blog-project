'use client'
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Breye Foka L.</title>
        <meta name="description" content="About Me page for Breye Foka L."/>
      </Head>

      <main className="container mx-auto px-6  space-y-24 bg-gray-300 dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors">
        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-extrabold ">👨‍💻 About Me</h1>
          <div className="space-y-4 text-xl leading-relaxed">
            <p>
              Hey, I’m <span className="font-semibold text-primary">Breye Foka L.</span> — a tech-obsessed Computer Science undergrad driven by curiosity, creativity, and a mission to make a real impact.
            </p>
            <p>
              I’m passionate about science, electronics, programming, and anything that makes systems tick. Grew up tearing stuff apart — now I build things that help people. Whether it’s writing Python for a data pipeline or poking around a network for ethical hacking practice, I’m all in.
            </p>
            <p>
              Known as the guy who’ll debug your stack *and* crack a joke mid-crisis. Driven by my parents’ sacrifices, love for community, and a mission to hit the top 1% of my field—and pull others up with me.
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
          <h2 className="text-4xl font-bold">📚 Education & Self-Learning</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>🎓 <strong>Bachelor’s in Computer Science</strong> (In Progress)</li>
            <li>📜 Certified in electronics, networking, pentesting, IoT, web dev, data science, cybersecurity & more (online programs)</li>
            <li>🧠 Self-taught in electronics and robotics</li>
            <li>💥 Math-Physics-Chemistry nerd from high school — still shapes how I solve stuff today</li>
          </ul>
          <p className="italic text-lg">
            Inspired by legends like Linus Torvalds, Tony Stark, Cisco Ramon, and Peter Parker — I mix technical grit with imagination and heart.
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
          <h2 className="text-4xl font-bold">🛠 Tech Focus</h2>
          <p className="text-xl">🔍 Currently Obsessed With:</p>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Ethical Hacking & Cybersecurity</li>
            <li>Machine Learning & Data Science</li>
            <li>Competitive Programming & DSA</li>
            <li>Robotics & Automation</li>
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
          <h2 className="text-4xl font-bold">🧪 Projects & Experience</h2>
          <div className="space-y-4 text-lg">
            <div>
              <h3 className="text-xl font-semibold">💡 Bachelier</h3>
              <p>A tool I built to help high school students check exam results online — simple, clean, real-world useful.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🔧 Freelance Work</h3>
              <ul className="list-disc list-inside">
                <li>Full-stack web development</li>
                <li>Graphic design</li>
                <li>Data analytics research</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">🤝 Giving Back</h3>
              <p>Answering coding questions, debugging for friends, and mentoring others — because that’s how I grew too.</p>
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
          <h2 className="text-4xl font-bold">🧠 Mindset & Personality</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>🧩 Problem-solving: Think deep, search smart, learn why it works</li>
            <li>👥 Work style: Love solo, thrive in tight-knit teams</li>
            <li>🎧 Recharge: Music. Walks. Sports. Memes. Weird books & naps</li>
            <li>📍 Planning: Just enough to not crash — figure out the rest mid-flight</li>
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
          <h2 className="text-4xl font-bold">🌍 Vision</h2>
          <p>
            In 3–5 years, I see myself working in cybersecurity or data science, doing meaningful work. I want to build my own tech company, travel while working, and — why not — earn my pilot license.
          </p>
          <p>
            Long-term? I want to create tech that solves real problems in my community, and maybe gain global recognition in science or engineering while I’m at it.
          </p>
        </motion.section>
 
      </main>
    </>
  );
}

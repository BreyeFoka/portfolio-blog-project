// import Head from 'next/head';
// // import { SiPython, SiJavascript, SiCplusplus, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiDocker, SiGit } from 'react-icons/si';
// export default function About() {
//   return (
//     <>
//       <Head>
//         <title>About Me - Breye Foka L.</title>
//         <meta name="description" content="About Me page for Breye Foka L., tech-obsessed CS undergrad" />
//       </Head>
//       <main className="container mx-auto px-6 py-10 space-y-16">
//         {/* About Section */}
//         <section id="about">
//           <h1 className="text-4xl font-bold">👨‍💻 About Me</h1>
//           <p className="mt-4 text-lg leading-relaxed">
//             Hey, I am <span className="font-semibold">Breye Foka L.</span>, a tech-obsessed Computer Science undergrad driven by curiosity, creativity, and a mission to make a real impact.
//           </p>
//           <p className="mt-4 text-lg leading-relaxed">
//             I’m passionate about science, electronics, programming, and pretty much anything that makes systems tick. I grew up tearing things apart to see how they worked—and now I’m building things that help people. Whether it’s writing Python for a data science pipeline or poking around a network for ethical hacking practice, I’m in my element when I’m solving real-world problems with code.
//           </p>
//           <p className="mt-4 text-lg leading-relaxed">
//             People know me as the guy who’ll either debug your stack or make you laugh mid-crisis (usually both). I’m deeply motivated by the sacrifices of my parents, the love for my community, and a desire to help others by climbing to the top 1% of my field—and dragging as many people up with me as I can.
//           </p>
//         </section>

//         {/* Education Section */}
//         <section id="education">
//           <h2 className="text-3xl font-bold">📚 Education &amp; Self-Learning</h2>
//           <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
//             <li>🎓 <strong>Bachelor’s in Computer Science</strong> (In Progress)</li>
//             <li>📜 Certified in electronics, networking, pentesting, IoT, web development, data science, cybersecurity, and more (via online programs)</li>
//             <li>🧠 Self-taught in electronics and robotics</li>
//             <li>💥 High school background in math, physics, and chemistry — still a huge part of how I think and approach problems</li>
//           </ul>
//           <p className="mt-4 italic">
//             Influenced by great minds and fictional legends like Linus Torvalds, Tony Stark, Cisco Ramon, and Peter Parker — I try to bring a mix of technical rigor, innovation, and heart into every project I touch.
//           </p>
//         </section>

//         {/* Tech Stack Section */}
//         <section id="tech-stack">
//           {/* <h2 className="text-3xl font-bold">🛠 Tech Stack &amp; Tools</h2>
//           <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
//             <div className="flex flex-col items-center">
//               <SiPython size={48} />
//               <span className="mt-2">Python</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiJavascript size={48} />
//               <span className="mt-2">JavaScript</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiCplusplus size={48} />
//               <span className="mt-2">C++</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiTypescript size={48} />
//               <span className="mt-2">TypeScript</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiReact size={48} />
//               <span className="mt-2">React</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiNodedotjs size={48} />
//               <span className="mt-2">Node.js</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiNextdotjs size={48} />
//               <span className="mt-2">Next.js</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiTailwindcss size={48} />
//               <span className="mt-2">Tailwind CSS</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiDocker size={48} />
//               <span className="mt-2">Docker</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <SiGit size={48} />
//               <span className="mt-2">Git</span>
//             </div>
//           </div> */}
//           <div className="mt-6 text-lg space-y-2">
//             <p>🔍 Currently Obsessed With:</p>
//             <ul className="list-disc list-inside">
//               <li>Ethical Hacking &amp; Cybersecurity</li>
//               <li>Machine Learning &amp; Data Science</li>
//               <li>Competitive Programming &amp; DSA</li>
//               <li>Robotics &amp; Automation</li>
//             </ul>
//           </div>
//         </section>

//         {/* Projects & Experience Section */}
//         <section id="projects">
//           <h2 className="text-3xl font-bold">🧪 Projects &amp; Experience</h2>
//           <div className="mt-4 space-y-4 text-lg">
//             <div>
//               <h3 className="font-semibold text-xl">💡 Bachelier</h3>
//               <p>A tool I built to help high school students check their national exam results online—simple, but powerful. It solved a real pain point and taught me how impactful tech can be.</p>
//             </div>
//             <div>
//               <h3 className="font-semibold text-xl">🔧 Freelance Work</h3>
//               <ul className="list-disc list-inside">
//                 <li>Full-stack web development</li>
//                 <li>Graphic design</li>
//                 <li>Data analytics research</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-xl">🤝 Giving Back</h3>
//               <p>From answering people’s coding questions to diving into their bugs personally, I’ve helped others learn and solve problems—because that’s how I got here too.</p>
//             </div>
//           </div>
//         </section>

//         {/* Mindset & Personality Section */}
//         <section id="mindset">
//           <h2 className="text-3xl font-bold">🧠 Mindset &amp; Personality</h2>
//           <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
//             <li>Problem-solving style: Think first, search smart, learn why the answer works.</li>
//             <li>Work style: Solo is fine, but I <strong>thrive</strong> in small teams with real collaboration.</li>
//             <li>Recharge mode: Music. Walks. Sports. Memes. Deep naps and weirder books.</li>
//             <li>Planning: I like to plan enough to not crash, but I believe you figure most of it out mid-flight.</li>
//           </ul>
//         </section>

//         {/* Vision Section */}
//         <section id="vision">
//           <h2 className="text-3xl font-bold">🌍 Vision</h2>
//           <p className="mt-4 text-lg leading-relaxed">
//             In 3–5 years, I see myself as a graduate working in either cybersecurity or data science—doing work that actually matters. I want to build my own company, explore the world while working, and eventually earn a pilot license (because why not fly literally, too?).
//           </p>
//           <p className="mt-4 text-lg leading-relaxed">
//             Long-term, I want to create tech that solves real problems in my community—and maybe earn global recognition in science or engineering along the way. Whatever it takes to push the limits and help others do the same, I’m in.
//           </p>
//         </section>

//         {/* Call to Action */}
//         <section id="contact">
//           <h2 className="text-3xl font-bold">🚀 Let Us Connect</h2>
//           <p className="mt-4 text-lg">If you are looking to collaborate, nerd out, or just talk tech over memes—hit me up!</p>
//         </section>
//       </main>

//     </>
//   );
// }

"use client";
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Breye Foka L.</title>
        <meta name="description" content="About Me page for Breye Foka L., tech-obsessed CS undergrad" />
      </Head>

      <main className="container mx-auto px-6 py-16 space-y-24 text-neutral-800 dark:text-neutral-200">
        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-extrabold tracking-tight">👨‍💻 About Me</h1>
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

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-4xl font-bold">🚀 Let’s Connect</h2>
          <p className="text-lg">
            Wanna collaborate, geek out, or chat tech over memes? Hit me up!
          </p>
        </motion.section>
      </main>
    </>
  );
}

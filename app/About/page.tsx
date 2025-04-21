import Head from 'next/head';
import { SiPython, SiJavascript, SiCplusplus, SiTypescript, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiDocker, SiGit } from 'react-icons/si';
export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Breye Foka L.</title>
        <meta name="description" content="About Me page for Breye Foka L., tech-obsessed CS undergrad" />
      </Head>
      <main className="container mx-auto px-6 py-10 space-y-16">
        {/* About Section */}
        <section id="about">
          <h1 className="text-4xl font-bold">👨‍💻 About Me</h1>
          <p className="mt-4 text-lg leading-relaxed">
            Hey, I am <span className="font-semibold">Breye Foka L.</span>, a tech-obsessed Computer Science undergrad driven by curiosity, creativity, and a mission to make a real impact.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I’m passionate about science, electronics, programming, and pretty much anything that makes systems tick. I grew up tearing things apart to see how they worked—and now I’m building things that help people. Whether it’s writing Python for a data science pipeline or poking around a network for ethical hacking practice, I’m in my element when I’m solving real-world problems with code.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            People know me as the guy who’ll either debug your stack or make you laugh mid-crisis (usually both). I’m deeply motivated by the sacrifices of my parents, the love for my community, and a desire to help others by climbing to the top 1% of my field—and dragging as many people up with me as I can.
          </p>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="text-3xl font-bold">📚 Education &amp; Self-Learning</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
            <li>🎓 <strong>Bachelor’s in Computer Science</strong> (In Progress)</li>
            <li>📜 Certified in electronics, networking, pentesting, IoT, web development, data science, cybersecurity, and more (via online programs)</li>
            <li>🧠 Self-taught in electronics and robotics</li>
            <li>💥 High school background in math, physics, and chemistry — still a huge part of how I think and approach problems</li>
          </ul>
          <p className="mt-4 italic">
            Influenced by great minds and fictional legends like Linus Torvalds, Tony Stark, Cisco Ramon, and Peter Parker — I try to bring a mix of technical rigor, innovation, and heart into every project I touch.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack">
          {/* <h2 className="text-3xl font-bold">🛠 Tech Stack &amp; Tools</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center">
              <SiPython size={48} />
              <span className="mt-2">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript size={48} />
              <span className="mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiCplusplus size={48} />
              <span className="mt-2">C++</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript size={48} />
              <span className="mt-2">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact size={48} />
              <span className="mt-2">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNodedotjs size={48} />
              <span className="mt-2">Node.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs size={48} />
              <span className="mt-2">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={48} />
              <span className="mt-2">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiDocker size={48} />
              <span className="mt-2">Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGit size={48} />
              <span className="mt-2">Git</span>
            </div>
          </div> */}
          <div className="mt-6 text-lg space-y-2">
            <p>🔍 Currently Obsessed With:</p>
            <ul className="list-disc list-inside">
              <li>Ethical Hacking &amp; Cybersecurity</li>
              <li>Machine Learning &amp; Data Science</li>
              <li>Competitive Programming &amp; DSA</li>
              <li>Robotics &amp; Automation</li>
            </ul>
          </div>
        </section>

        {/* Projects & Experience Section */}
        <section id="projects">
          <h2 className="text-3xl font-bold">🧪 Projects &amp; Experience</h2>
          <div className="mt-4 space-y-4 text-lg">
            <div>
              <h3 className="font-semibold text-xl">💡 Bachelier</h3>
              <p>A tool I built to help high school students check their national exam results online—simple, but powerful. It solved a real pain point and taught me how impactful tech can be.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">🔧 Freelance Work</h3>
              <ul className="list-disc list-inside">
                <li>Full-stack web development</li>
                <li>Graphic design</li>
                <li>Data analytics research</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl">🤝 Giving Back</h3>
              <p>From answering people’s coding questions to diving into their bugs personally, I’ve helped others learn and solve problems—because that’s how I got here too.</p>
            </div>
          </div>
        </section>

        {/* Mindset & Personality Section */}
        <section id="mindset">
          <h2 className="text-3xl font-bold">🧠 Mindset &amp; Personality</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-lg">
            <li>Problem-solving style: Think first, search smart, learn why the answer works.</li>
            <li>Work style: Solo is fine, but I <strong>thrive</strong> in small teams with real collaboration.</li>
            <li>Recharge mode: Music. Walks. Sports. Memes. Deep naps and weirder books.</li>
            <li>Planning: I like to plan enough to not crash, but I believe you figure most of it out mid-flight.</li>
          </ul>
        </section>

        {/* Vision Section */}
        <section id="vision">
          <h2 className="text-3xl font-bold">🌍 Vision</h2>
          <p className="mt-4 text-lg leading-relaxed">
            In 3–5 years, I see myself as a graduate working in either cybersecurity or data science—doing work that actually matters. I want to build my own company, explore the world while working, and eventually earn a pilot license (because why not fly literally, too?).
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Long-term, I want to create tech that solves real problems in my community—and maybe earn global recognition in science or engineering along the way. Whatever it takes to push the limits and help others do the same, I’m in.
          </p>
        </section>

        {/* Call to Action */}
        <section id="contact">
          <h2 className="text-3xl font-bold">🚀 Let's Connect</h2>
          <p className="mt-4 text-lg">If you're looking to collaborate, nerd out, or just talk tech over memes—hit me up!</p>
        </section>
      </main>

    </>
  );
}

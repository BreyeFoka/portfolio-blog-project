import { GithubIcon, Twitter, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <section className="space-y-8 top-10 flex flex-col items-center justify-center h-screen relative z-10">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hey, I’m Breye Foka 👋</h1>
        <p className="text-lg sm:text-xl mb-2 max-w-3xl">
          I am a Programmer, Mechatronics Engineer, and Scientific Researcher dedicated to advancing technology
          by developing inventions and conducting eclectic scientific research.
        </p>
        <p className="text-lg sm:text-xl mb-2 max-w-3xl">
          I am a Programmer, Mechatronics Engineer, and Scientific Researcher dedicated to advancing technology
          by developing inventions and conducting eclectic scientific research.
        </p>
        <p className="text-md sm:text-lg text-zinc-500 dark:text-zinc-400">
          I’m passionate about creating innovative solutions and sharing insights through my projects and blog. Join me on this journey of discovery and growth.
        </p>
        <div className="mt-6 flex justify-center gap-4 ">
          <a href="/projects" className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            View My Work
          </a>
          <a href="/about" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
            <strong>Who Am I?</strong>
          </a>
          <a href="/blog" className="px-5 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
            Explore My Thoughts
          </a>
        </div>
        {/* Social Icons */}
        <div className="flex space-x-6 mt-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-2xl hover:text-gray-600"
          >
            <GithubIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-2xl hover:text-gray-600"
          >
            <Twitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl hover:text-gray-600"
          >
            <Linkedin />
          </a>
        </div>

      </div>
    </section>
  );
}

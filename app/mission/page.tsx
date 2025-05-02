
'use client'
import Head from 'next/head';
import { FaEye, FaHeart, FaRocket } from 'react-icons/fa';

export default function Mission() {
  return (
    <>
      <Head>
        <title>Mission - Breye Foka L.</title>
        <meta name="description" content="Mission page for Breye Foka L., outlining goals, values, and direction." />
      </Head>

      <main className="container mx-auto px-6 py-10 space-y-16 bg-gray-300 dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors">
        
        {/* Mission Statement */}
        <section id="mission">
          <h1 className="text-4xl font-bold">🎯 Mission</h1>
          <p className="mt-4 text-lg leading-relaxed">
            Use my skills in technology to solve real problems, uplift people around me, and grow into someone who gives more than he takes. I want to build, teach, protect, and inspire—starting where I am, with what I have.
          </p>
        </section>

        {/* Who I Serve */}
        <section id="who">
          <h2 className="text-3xl font-bold">👥 Who I’m Here For</h2>
          <p className="mt-4 text-lg leading-relaxed">
            I’m building for students trying to learn without resources, communities left out of the digital wave, and curious minds with no one to guide them. I’ve been there. I still am. That’s who I work for.
          </p>
        </section>

        {/* Core Values */}
        <section id="values">
          <h2 className="text-3xl font-bold">❤️ Values I Live By</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Honesty</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Curiosity</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Skepticism</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Loyalty</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Clarity of thought</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />A sense of humor</li>
          </ul>
        </section>

        {/* Goals & Vision */}
        <section id="vision">
          <h2 className="text-3xl font-bold">🌍 Goals</h2>
          <div className="mt-4 space-y-6 text-lg">
            <div className="flex items-start">
              <FaEye className="mr-4 mt-1 text-blue-500" size={24} />
              <div>
                <h3 className="font-semibold">Next Few Years</h3>
                <p>
                  Graduate in Computer Science. Work in cybersecurity or data science. Build tools that help others, and get my pilot license on the side. Stay learning. Stay useful.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaRocket className="mr-4 mt-1 text-green-500" size={24} />
              <div>
                <h3 className="font-semibold">Bigger Picture</h3>
                <p>
                  Create tech that matters where I’m from. Mentor people. Start a company. Earn global recognition by solving hard problems—without losing myself along the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Motivation */}
        <section id="impact">
          <h2 className="text-3xl font-bold">🧭 Why I Do This</h2>
          <p className="mt-4 text-lg leading-relaxed">
            I was raised by people who gave up a lot so I could have a shot. I owe it to them,and to myself, to go as far as I can. Not just to win, but to open doors for others once I do.
          </p>
        </section>
      </main>
    </>
  );
}

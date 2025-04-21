
import Head from 'next/head';
import { FaEye, FaHeart, FaRocket } from 'react-icons/fa';


export default function Mission() {
  return (
    <>
      <Head>
        <title>Mission - Breye Foka L.</title>
        <meta name="description" content="Mission page for Breye Foka L., outlining goals, values, and vision" />
      </Head>

      <main className="container mx-auto px-6 py-10 space-y-16">
        {/* Mission Statement */}
        <section id="mission">
          <h1 className="text-4xl font-bold">🎯 My Mission</h1>
          <p className="mt-4 text-lg leading-relaxed">
            To honor  and empower my community by mastering technology, climbing into the top 1% of my field, and bringing others along for the journey.
          </p>
        </section>

        {/* Core Values */}
        <section id="values">
          <h2 className="text-3xl font-bold">❤️ Core Values</h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Honesty</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Creativity</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Skepticism</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Loyalty</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Logical Reasoning</li>
            <li className="flex items-center"><FaHeart className="mr-2 text-red-500" />Curiosity &amp; Humor</li>
          </ul>
        </section>

        {/* Goals & Vision */}
        <section id="vision">
          <h2 className="text-3xl font-bold">🌍 Goals &amp; Vision</h2>
          <div className="mt-4 space-y-6 text-lg">
            <div className="flex items-start">
              <FaEye className="mr-4 mt-1 text-blue-500" size={24} />
              <div>
                <h3 className="font-semibold">Short-Term (3–5 Years)</h3>
                <p>Graduate with a Computer Science degree and work in cybersecurity or data science. Build my own company, travel while working, and earn my pilot license.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaRocket className="mr-4 mt-1 text-green-500" size={24} />
              <div>
                <h3 className="font-semibold">Long-Term</h3>
                <p>Contribute to global scientific progress by earning international recognition, and create technology solutions that address real community challenges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact & Motivation */}
        <section id="impact">
          <h2 className="text-3xl font-bold">🚀 Impact &amp; Motivation</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Motivated by my family’s sacrifices, my country, and the drive to make a tangible difference. I channel my passion for math, physics, and programming to tackle real-world problems—because tech without impact is just code.
          </p>
        </section>

        {/* Connect Section */}
        <section id="connect">
          <h2 className="text-3xl font-bold">🤝 Let’Us Collaborate</h2>
          <p className="mt-4 text-lg">
            Whether it’s cybersecurity, data science, or robotics, I’m always up for meaningful projects. Want to partner? Have a challenge? Let’s talk.
          </p>
        </section>
      </main>
    </>
  );
}

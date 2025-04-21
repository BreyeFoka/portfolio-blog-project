import { FaInstagram, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa';
import Head from 'next/head';

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

      <div className=" bottom-0 flex flex-col items-center justify-center text-center bg-white dark:bg-zinc-900 mt-20 sm:mt-0 px-4 sm:px-6 py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Hello, I’m <span className="text-blue-600">Breye Foka L.</span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
          I am a Computer Science undergraduate passionate about leveraging technology to solve complex challenges and drive innovation.
        </p>


        <p className="max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6">I am committed to continuous learning, professional growth, and
          applying my skills to benefit my community and beyond.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="/about"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            About Me
          </a>
          <a
            href="/skillset"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Skillset
          </a>
          <a
            href="/projects"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Projects
          </a>
        </div>

        <div className='flex items-center my-7 gap-6 space-x-7'>
          <div className="flex space-x-4  justify-center">
            <a href="https://instagram.com/breye_foka" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={28} />
            </a>
            <a href="https://linkedin.com/in/breyefokalagloire" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="https://twitter.com/breye_foka" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={28} />
            </a>
            <a href="https://github.com/BreyeFoka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

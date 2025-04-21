import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react'; // Optional icons

const projects = [
  {
    title: 'Bachelier',
    image: '/images/bachelier.png',
    description: 'A platform to help high school students easily check national exam results and get insights.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/BreyeFoka/bachelier.git',
    live: 'https://bachelier.live',
    blogSlug: 'bachelier-project',
  },
  {
    title: 'IoT Weather Monitor',
    image: '/images/weather-monitor.png',
    description: 'An IoT-based system for real-time weather monitoring using sensors and cloud dashboard.',
    tech: ['Arduino', 'NodeMCU', 'Firebase', 'React'],
    github: 'https://github.com/yourusername/iot-weather-monitor',
    live: '',
    blogSlug: 'iot-weather-monitor',
  },
  {
    title: 'Smart Helmet',
    image: '/images/smart-helmet.png',
    description: 'An Arduino project that aims to add Smart features to Bike Helmets.',
    tech: ['Arduino', 'Bluetooth', 'Sensors'],
    github: 'https://github.com/BreyeFoka/SmartHelmet.git',
    live: '',
    blogSlug: 'smart-helmet',
  },
  {
    title: 'Anime Quest',
    image: '/images/anime-quest.png',
    description: 'A web application to discover and track your favorite anime series.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Typescript', 'API', 'Node.js'],
    github: 'http://github.com/BreyeFoka/Anime-Vault.git',
    live: 'https://anime-quest-ts.netlify.app',
    blogSlug: 'anime-quest',
  },
  {
    title: 'Sarcastic Advisor',
    image: '/images/sarcastic-advisor.png',
    description: 'An app that gives sarcastic advices each time you click on the button',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Typescript', 'API', 'Node.js'],
    github: 'hhttps://github.com/BreyeFoka/Advisor-react.git',
    live: 'https://sarcasticadvisor.netlify.app/',
    blogSlug: 'sarcastic-advisor',
  }
];

export default function ProjectsPage() {
  return (
    <section className="px-4 py-12 bg-gray-100 dark:bg-zinc-900">
  <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">My Projects</h1>
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-gray-200 dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
      >
        <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5 flex flex-col justify-between flex-1">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.description}{' '}
              <Link
                href={`/blog/${project.blogSlug}`}
                className="text-blue-500 hover:underline"
              >
                Read more →
              </Link>
            </p>
            <div className="mb-4">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Tech Stack</span>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-white dark:bg-zinc-700 text-gray-800 dark:text-white px-2 py-1 text-xs rounded-full shadow-sm"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-700"
            >
              <Github size={16} />
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-500"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}

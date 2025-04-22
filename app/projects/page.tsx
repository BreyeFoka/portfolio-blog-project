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
    tech: ['React', 'Tailwind CSS', 'Typescript', 'API', 'Node.js'],
    github: 'hhttps://github.com/BreyeFoka/Advisor-react.git',
    live: 'https://sarcasticadvisor.netlify.app/',
    blogSlug: 'sarcastic-advisor',
  },
  {
    title: 'Daddy Laugh',
    image: '/images/daddylaugh.png',
    description: 'A simple web application built with React that fetches random dad jokes from an API and displays them in a glassmorphism-styled card.',
    tech: ['React', 'Tailwind CSS','Axios', 'API', 'Node.js'],
    github: 'hhttps://github.com/BreyeFoka/daddylaugh.git',
    live: 'https://daddylaugh.netlify.app/',
    blogSlug: 'daddylaugh',
  },
  {
    title: 'Daddy Laugh',
    image: '/images/shop.png',
    description: 'Shop-management-System built using php and mysal and runs on Xampp',
    tech: ['PHP', 'MySQL', 'XAMPP'],
    github: 'hhttps://github.com/BreyeFoka/shop.git',
    live: '',
    blogSlug: 'shop-management-system',
  },
  {
    title: 'Morse Code Translator',
    image: '/images/morse-code.png',
    descrption: 'A simple app that converts the normal message to morse code and vice versa, entirely written in python with a tk user interface..',
    tech: ['Python', 'Tkinter'],
    github: 'https://github.com/BreyeFoka/text_to_morse_code.git',
    live: '',
    blogSlug: 'morse-code-translator'
  },
  {
    title: 'Arduino Self Driving Robot',
    image: '/images/self-driving-robot.png',
    description: 'An Arduino-based self-driving robot that uses ultrasonic sensors and infrared sensors for obstacle detection and avoidance.',
    tech: ['Arduino', 'Ultrasonic Sensor', 'Infrared Sensor'],
    github: 'https://github.com/BreyeFoka/Arduino_Follow_Me_Robot.git',
    live: '',
    blogSlug: 'self-driving-robot',
  },
  {
    title: 'Expense Tracker',
    image: '/images/expense-tracker.png',
    description: 'A mobile  application(flutter & dart) that helps users track their expenses and manage their budget effectively.',
    tech: ['Flutter', 'Dart'],
    github: 'https://github.com/BreyeFoka/expense_tracker.git',
    live: '',
    blogSlug: 'expense-tracker',
  },
  {
    title: 'Python Air Painting',
    image: '/images/air-painting.png',
    description: 'A Python project that uses OpenCV and MediaPipe to create an air painting application.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'numpy'],
    github: 'https://github.com/BreyeFoka/hand_detection/tree/master.git',
    live: '',
    blogSlug: 'air-painting',
  },
  {
    title: 'Sticker Smash',
    image: '/images/sticker-smash.png',
    description: 'A mobile app built with Expo and react native that allows users to create, edit and share stickers and photos.',
    tech: ['React Native', 'Expo'],
    github: 'https://github.com/BreyeFoka/StickerSmash.git',
    live:'',
    blogSlug: 'sticker-smash',
  },
  {
    title: 'Enigma Encryption',
    image: '/images/enigma.png',
    description: 'A Python project that implements the Enigma machine encryption algorithm.',
    tech: ['Python', 'tkinter'],
    github:'https://github.com/BreyeFoka/enigma-machine',
    live: '',
    blogSlug: 'enigma-machine',
  },
  {
    title: 'Tic-Tac-Toe Swift',
    image: '/images/tictactoe.png',
    description:'Simple tictac toe game using swift ui',
    tech: ['Swift UI'],
    github: 'https://github.com/BreyeFoka/Tic-Tac-Toe_Swift.git',
    live: '',
    blogslug: 'SwiftUI Game',

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
                href={`/posts/${project.blogSlug}`}
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

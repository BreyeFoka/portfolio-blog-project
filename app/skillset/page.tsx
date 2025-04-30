import React from 'react';
 import Card from '../components/Card';
import CardContent  from '../components/CardContent';
import {
    FaReact,
    FaNodeJs,
    FaUnity,
    FaLinux,
    FaGithub,
    FaNetworkWired,
    FaFigma,
    FaJs
  } from 'react-icons/fa';
  import {
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiCanva,
    SiNextdotjs,
    SiVuedotjs,
    SiTailwindcss,
    SiDjango,
    SiFlask,
    SiRubyonrails,
    SiLaravel,
    SiFastapi,
    SiFlutter,
    SiSwift,
    SiGodotengine,
    SiMetasploit,
    SiBurpsuite,
    SiWireshark,
    SiArduino,
    SiTensorflow,
    SiPytorch,
    SiScikitlearn,
    SiKeras,
    SiPandas,
    SiNumpy,
    SiHomeassistant,
    SiInsomnia,
    SiNotion,
    SiJupyter,
    SiKaggle,
    SiGooglecolab,
    SiVmware,
    SiPython,
    SiCplusplus,
    SiPlotly, 
  } from 'react-icons/si';
const skills = [, 
  {
    title: 'Graphic Design',
    purpose: 'Creating digital graphics, illustrations, and UI designs.',
    tools: [
      { name: 'Adobe Photoshop', icon: <SiAdobephotoshop /> },
      { name: 'Adobe Illustrator', icon: <SiAdobeillustrator /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Canva', icon: <SiCanva /> },
    ]
  },
  {
    title: 'Full-Stack Web Development',
    purpose: 'Building and deploying responsive and scalable web applications.',
    tools: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Vue.js', icon: <SiVuedotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Express.js', icon: <FaNodeJs /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Ruby on Rails', icon: <SiRubyonrails /> },
      { name: 'Laravel', icon: <SiLaravel /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
    ]
  },
  {
    title: 'Mobile Development',
    purpose: 'Developing cross-platform and native mobile applications.',
    tools: [
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'SwiftUI', icon: <SiSwift /> },
      { name: 'Kivy', icon: <SiPython/> },
      { name: 'React Native', icon: <FaReact /> },
    ]
  },
  {
    title: 'Game Development',
    purpose: 'Creating 2D/3D games for various platforms.',
    tools: [
      { name: 'Unity', icon: <FaUnity /> },
      { name: 'Godot', icon: <SiGodotengine /> },
      { name: 'Pygame', icon: <SiPython /> },
    ]
  },
  {
    title: 'Cybersecurity & Ethical Hacking',
    purpose: 'Securing systems, testing vulnerabilities, and strengthening infrastructure.',
    tools: [
      { name: 'Metasploit', icon: <SiMetasploit /> },
      { name: 'Burp Suite', icon: <SiBurpsuite /> },
      { name: 'Nmap', icon: <FaNetworkWired/> },
      { name: 'Wireshark', icon: <SiWireshark /> },
    ]
  },
  {
    title: 'Software Development',
    purpose: 'Designing and building software tools and desktop apps.',
    tools: [
      { name: 'Electron', icon: <FaJs /> },
      { name: 'Qt', icon: <SiCplusplus /> },
      { name: 'Tkinter', icon: <SiPython /> },
    ]
  },
  {
    title: 'Data Analysis & Data Science',
    purpose: 'Extracting insights and building intelligent models using data.',
    tools: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Matplotlib', icon: <SiPlotly /> },
    //   { name: 'Seaborn', icon: <SiSeaborn /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Keras', icon: <SiKeras /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
    //   { name: 'Plotly', icon: <FaTable /> },
    //   { name: 'Tableau', icon: <SiTableau /> },
    //   { name: 'Power BI', icon: <SiPowerbi /> },
    ]
  },
  {
    title: 'Electronics / Embedded Systems',
    purpose: 'Building embedded systems and tinkering with microcontrollers.',
    tools: [
      { name: 'Arduino IDE', icon: <SiArduino /> },
      { name: 'ESP-IDF', icon: <SiArduino /> },
    //   { name: 'KiCad', icon: <FaTable /> },
    //   { name: 'Fritzing', icon: <FaTable /> },
    //   { name: 'Raspberry Pi', icon: <SiRaspberrypi /> },
    //   { name: 'MicroPython', icon: <FaPython /> },
    ]
  },
  {
    title: 'Networking & IoT',
    purpose: 'Creating connected systems and learning networking protocols.',
    tools: [
    //   { name: 'Cisco Packet Tracer', icon: <SiCisco /> },
      { name: 'Wireshark', icon: <SiWireshark /> },
      { name: 'Home Assistant', icon: <SiHomeassistant /> },
    //   { name: 'Blynk', icon: <FaTable /> },
    ]
  },
  {
    title: 'Tooling & Productivity',
    purpose: 'Daily tools for development, testing, planning, and documentation.',
    tools: [
    //   { name: 'VS Code', icon: <SiVisualstudiocode /> },
    //   { name: 'JetBrains IDEs', icon: <FaTable /> },
      { name: 'GitHub / GitLab', icon: <FaGithub /> },
      { name: 'Insomnia (API Testing)', icon: <SiInsomnia /> },
    //   { name: 'Linux / Bash', icon: <SiLinux /> },
      { name: 'VirtualBox / VMware', icon: <SiVmware /> },
      { name: 'Notion', icon: <SiNotion /> },
      { name: 'JupyterLab', icon: <SiJupyter /> },
      { name: 'Kaggle', icon: <SiKaggle /> },
      { name: 'Google Colab', icon: <SiGooglecolab /> },
      { name: 'Kali / Parrot OS', icon: <FaLinux /> },
    //   { name: 'MS Office Suite', icon: <SiMicrosoftoffice /> },
    ]
  }
];

export default function SkillsetPage() {
  return (
    <div className="p-6 md:p-12 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {skills.map((skill, index) => (
        <Card key={index} className="rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">{skill?.title}</h2>
            <p className="mb-4 text-gray-600">{skill?.purpose}</p>
            <div className="flex flex-wrap gap-4">
              {skill?.tools.map((tool, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm bg-gray-100  dark:bg-zinc-700 px-3 py-1 rounded-full">
                  {tool.icon}
                  {tool.name}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

import React, { useState } from 'react';
import myImage from './assets/self.png';
import { Github, Facebook, Mail, Code, Server, Database, Globe, ExternalLink, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Capstone Project",
      description: "Interactive Game-Based System with Motion Tracking for ADHD Kids",
      tech: ["Godot", "GDScript", "Firebase"],
      github: "https://github.com/Kugayuma1/MindMotion-Godot",
      images: [
        "Home.png",
        "Complete.png",
        "Motion.png",
        "Students.png"
      ]
    },
    {
      title: "X Trends Analytic Webpage",
      description: "Real-Time Webpage that Displays the Most Trending Topics on X",
      tech: ["HTML", "Javascript", "Chart.js", "Bootstrap"],
      github: "https://github.com/Kugayuma1/fcbdataviz",
      images:[
        "Twitter Trend.png"
      ]
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "PHP",  "REST APIs", ] },
    { category: "Database", items: ["MySQL", "Firebase"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "Figma"] }
  ];

  const certificates = [
    {
      title: "National Skills Competitor",
      issuer: "TESDA Region IV-A",
      date: "August 2024",
      image: "TESDA_REGIONIVA.jpg"
    },
    {
      title: "National Skills Competitor",
      issuer: "TESDA",
      date: "August 2024",
      image: "TESDA.jpg"
    },
    {
      title: "Regional Skills Competitor",
      issuer: "TESDA Region IV-A",
      date: "December 2023",
      image: "REGIONAL_FIRST.jpg"
    },
    {
      title: "Regional Skills Competitor",
      issuer: "TESDA Region IV-A",
      date: "December 2023",
      image: "TESDA_REGIONAL.jpg"
    },
    { 
      title: "Quezon Provincial Skills Competitor",
      issuer: "TESDA Quezon",
      date: "November 2023",
      image: "PROVINCIAL.jpg"
    },
    { 
      title: "Data Visualization Workshop",
      issuer: "Zuitt",
      date: "February 2025",
      image: "Zuitt.png"
    },
    { 
      title: "Data Visualization Workshop",
      issuer: "CSTC - School of Information Technology",
      date: "November 2025",
      image: "SYNTAX.jpg"
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              &lt;John Christopher R. Feria/&gt;
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Certificates'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-purple-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto overflow-hidden rounded-full flex items-center justify-center">
              <img src={myImage} alt='Author Picture' className="w-full h-full object-cover object-center"></img>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            IT Student & Software Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Building innovative solutions with modern technologies
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://github.com/Kugayuma1" className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.facebook.com/johnchristopher.feria/" className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors">
              <Facebook size={24} />
            </a>
            <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=jcferia12@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <a href="/Resume_John_Christopher_Feria.pdf" download className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all inline-block">
            Download Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-4">
                I'm a passionate IT student specializing in web development. 
                Currently pursuing my degree while building real-world projects and 
                expanding my technical skill set.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                I love solving complex problems and turning ideas into functional, 
                user-friendly applications. My goal is to contribute to innovative 
                projects that make a positive impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <Code className="mx-auto mb-2 text-purple-400" size={32} />
                <h3 className="font-semibold">Clean Code</h3>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <Server className="mx-auto mb-2 text-pink-400" size={32} />
                <h3 className="font-semibold">Backend</h3>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <Database className="mx-auto mb-2 text-purple-400" size={32} />
                <h3 className="font-semibold">Databases</h3>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <Globe className="mx-auto mb-2 text-pink-400" size={32} />
                <h3 className="font-semibold">Web Apps</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-9xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
                {project.images.length === 1 ? (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-48 p-1 bg-slate-900 grid grid-cols-2 gap-1">
                    {project.images.map((img, i) => (
                      <div key={i} className="overflow-hidden rounded">
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="flex items-center gap-1 text-purple-400 hover:text-purple-300">
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillSet, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certificates & Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificates.map((cert, idx) => (
              <div key={idx} className="bg-slate-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all group">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-900 to-slate-900">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Award size={64} className="text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-purple-400">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-purple-500/20">
        <div className="max-w-10xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 John Christopher Feria. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'E-COMMERCE WEBSITE',
      description: 'Fully functional e-commerce platform built with React',
      image: "src/assets/ecommerce.png",
      tech: ['React'],
      demo: "https://jiyaaggarwal267-maker.github.io/website/"
    },
    {
      title: 'WEATHER APPLICATION',
      description: 'Real-time weather app with API integration',
      image: 'src/assets/weatherapp.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      demo: "https://jiyaaggarwal267-maker.github.io/weather-app/"
    },
    {
      title: 'TODO LIST MANAGER',
      description: 'Interactive task management application',
      image: 'src/assets/todolist.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      demo: "https://jiyaaggarwal267-maker.github.io/todo-app/"
    },
    {
      title: 'AUTHENTICATION SYSTEM',
      description: 'Sign up and login page with form validation',
      image: 'src/assets/signup.png',
      tech: ['React'],
      demo: "https://jiyaaggarwal267-maker.github.io/react-app/"
    },
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + projects.length) % projects.length;
  const getNextIndex = () => (currentIndex + 1) % projects.length;

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 lg:px-32 relative py-20">
      <div className="max-w-7xl w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-gray-400 mb-8">Click on Projects to explore!</p>

          <button className="border-2 border-white text-white px-8 py-3 rounded-sm font-semibold hover:bg-white hover:text-black transition-all">
            ALL PROJECTS
          </button>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-8">

          {/* Left Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-0 lg:left-10 z-20 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          {/* Project Circles */}
          <div className="flex items-center justify-center gap-8 w-full max-w-5xl">

            {/* Left Project */}
            <motion.div
              key={`left-${getPrevIndex()}`}
              className="hidden lg:block w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 opacity-50 cursor-pointer"
              onClick={prevProject}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            >
              <img
                src={projects[getPrevIndex()].image}
                alt={projects[getPrevIndex()].title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Center Project */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-[#0066FF] shadow-2xl shadow-[#0066FF]/50">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Area */}
                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {projects[currentIndex].title}
                  </h3>

                  <p className="text-gray-400 mb-4">
                    {projects[currentIndex].description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex gap-2 justify-center flex-wrap">
                    {projects[currentIndex].tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 text-[#FF6B2C] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* DEMO LINK */}
                  <a
                    href={projects[currentIndex].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-lg text-white font-semibold tracking-wide hover:scale-105 transition-transform"
                  >
                    Demo →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Project */}
            <motion.div
              key={`right-${getNextIndex()}`}
              className="hidden lg:block w-64 h-64 rounded-full overflow-hidden border-4 border-gray-700 opacity-50 cursor-pointer"
              onClick={nextProject}
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            >
              <img
                src={projects[getNextIndex()].image}
                alt={projects[getNextIndex()].title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-0 lg:right-10 z-20 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Decorative Element */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-6 h-6 border-2 border-[#FF6B2C] rounded-full"
        />
      </div>
    </section>
  );
}

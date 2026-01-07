import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A fully functional e-commerce platform with product listings, shopping cart, and checkout features. Built with modern React practices and responsive design.',
      tech: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/your-username/ecommerce',
      demo: 'https://your-ecommerce-live-link.vercel.app',
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather app that fetches data from weather APIs. Features location search, current weather conditions, and 5-day forecast display.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/your-username/weather-app',
      demo: 'https://your-weather-live.vercel.app',
    },
    {
      title: 'Todo List Manager',
      description: 'An interactive todo list application with add, edit, delete, and mark complete functionality. Clean UI with local storage implementation.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/your-username/todo',
      demo: 'https://your-todo-live.vercel.app',
    },
    {
      title: 'Authentication System',
      description: 'User authentication interface with sign-up and login pages. Includes form validation, password strength indicator, and responsive design.',
      tech: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/your-username/auth-system',
      demo: 'https://your-auth-live.vercel.app',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔥 CLICKABLE LINKS — ALWAYS WORK */}
              <div className="flex gap-6 z-10 relative">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </a>

                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

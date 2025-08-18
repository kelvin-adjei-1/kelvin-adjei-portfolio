const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "https://via.placeholder.com/400x300?text=E-Commerce+Platform",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/400x300?text=Task+Management",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts using external APIs with beautiful data visualizations.",
      image: "https://via.placeholder.com/400x300?text=Weather+Dashboard",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills, built with modern web technologies and optimized for performance.",
      image: "https://via.placeholder.com/400x300?text=Portfolio+Website",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with group messaging, file sharing, and emoji support. Built with modern web technologies.",
      image: "https://via.placeholder.com/400x300?text=Chat+Application",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Blog CMS",
      description: "A content management system for bloggers with markdown support, SEO optimization, and analytics dashboard.",
      image: "https://via.placeholder.com/400x300?text=Blog+CMS",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
        
        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other Projects */}
        <h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <h4 className="text-lg font-semibold mb-3 text-primary">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-gray-500">+{project.technologies.length - 3} more</span>
                )}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

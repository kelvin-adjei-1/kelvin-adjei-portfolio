import { useState, useEffect } from 'react';
import smartEnergyImage from "../assets/images/smart-home-energy_setup-1.png";
import theTaskManagerImage from "../assets/images/the-task-manager.png";
import sportsPerformanceAnalyzerImage from "../assets/images/sports-performance-analyzer.png";
import lockedinImage from "../assets/images/locked-in.png";
import goldenSyncImage from "../assets/images/golden-sync.png";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const projects = [
    {
      title: "Smart Home Energy Monitoring System",
      description:
        "IOT device tracking power usage in real-time with historical data storage. Uses machine learning for consumption predictions and anomaly alerts. Integrates IoT hardware, cloud services, and web dashboard.",
      image: smartEnergyImage,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com/kelvin-adjei-1",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Stock price predictor - LockedIn",
      description:
        "Stock price prediction application using historical data and machine learning algorithms.",
      image: lockedinImage,
      technologies: ["Python", "FastAPI ", "Docker", "Angular"],
      githubUrl: "https://github.com/kelvin-adjei-1",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "- The Task Manager - TTM",
      description:
        "Collaborative task management application with real-time updates and features. Includes drag-and-drop functionality and team collaboration tools.",
      image: theTaskManagerImage,
      technologies: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/kelvin-adjei-1",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "GoldenGate Replication Visualizer",
      description:
        "Visualize and manage GoldenGate replication setups with ease. Provides real-time monitoring and analytics.",
      image: goldenSyncImage,
      technologies: ["Python", "XGBoost ", "FastAPI", "Statsmodels"],
      githubUrl: "https://github.com/kelvin-adjei-1",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Sports Performance Analyzer",
      description:
        "Analyzes and visualizes sports performance data using advanced analytics and machine learning.",
    image: sportsPerformanceAnalyzerImage,
      technologies: ["Python", "Pandas", "Matplotlib", "Scikit-learn"],
      githubUrl: "https://github.com/kelvin-adjei-1",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with group messaging and file sharing. Features emoji support built with modern web technologies.",
      image: "https://via.placeholder.com/400x300?text=Chat+Application",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/kelvin-adjei-1",
      liveUrl: "https://example.com",
      featured: false,
    },
    {
      title: "Blog CMS",
      description:
        "Content management system for bloggers with markdown support. Includes SEO optimization and comprehensive analytics dashboard.",
      image: "https://via.placeholder.com/400x300?text=Blog+CMS",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      githubUrl: "https://github.com/kelvin-adjei-1",
      liveUrl: "https://example.com",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  // Slideshow navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || featuredProjects.length <= 1) return;
    
    const interval = setInterval(nextSlide, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        {/* Featured Projects Slideshow */}
        <div 
          className="relative mb-16 max-w-[65%] mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-96">
                    <div className="lg:flex h-full">
                      <div className="lg:w-2/5">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 lg:h-full object-cover"
                        />
                      </div>
                      <div className="lg:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-primary">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-4 mt-auto">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white px-4 py-3 rounded-lg transition-all duration-300 text-base font-medium"
                          >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Code
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-primary text-white hover:bg-primary-dark px-4 py-3 rounded-lg transition-all duration-300 text-base font-medium"
                          >
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {featuredProjects.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Slide indicators */}
          {featuredProjects.length > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <h4 className="text-lg font-semibold mb-3 text-primary">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-gray-500">
                    +{project.technologies.length - 3} more
                  </span>
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

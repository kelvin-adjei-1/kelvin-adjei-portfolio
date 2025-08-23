import { useState, useEffect } from 'react';

const Skills = () => {
  // Enhanced state management for slideshow
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced skill categories with detailed information
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Vue.js", level: 78, icon: "💚" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 92, icon: "🟢" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "Express.js", level: 90, icon: "🚂" },
        { name: "FastAPI", level: 85, icon: "⚡" },
        { name: "GraphQL", level: 80, icon: "📊" },
        { name: "REST APIs", level: 95, icon: "🔄" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "☁️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PostgreSQL", level: 88, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "AWS", level: 82, icon: "☁️" },
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "Firebase", level: 80, icon: "🔥" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Jest", level: 88, icon: "🃏" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "Kubernetes", level: 75, icon: "⚓" }
      ]
    }
  ];

  // Enhanced scroll visibility effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play slideshow functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const totalSlides = Math.ceil(skillCategories.length / 2);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, skillCategories.length]);

  // Slideshow control functions
  const nextSlide = () => {
    const totalSlides = Math.ceil(skillCategories.length / 2);
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    const totalSlides = Math.ceil(skillCategories.length / 2);
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Enhanced function to get color based on skill level
  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-emerald-500 via-emerald-600 to-green-600';
    if (level >= 80) return 'from-blue-500 via-blue-600 to-indigo-600';
    if (level >= 70) return 'from-yellow-500 via-amber-500 to-orange-500';
    return 'from-orange-500 via-red-500 to-pink-500';
  };

  // Enhanced function to get skill level text
  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Learning';
  };

  // Enhanced function to get text color based on skill level
  const getSkillTextColor = (level: number) => {
    if (level >= 90) return 'text-emerald-600 dark:text-emerald-400';
    if (level >= 80) return 'text-blue-600 dark:text-blue-400';
    if (level >= 70) return 'text-amber-600 dark:text-amber-400';
    return 'text-orange-600 dark:text-orange-400';
  };

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Enhanced Geometric Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-secondary/40 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 transform rotate-12 animate-pulse"></div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 4 === 0 ? 'w-3 h-3 bg-primary/30 animate-bounce' :
              i % 4 === 1 ? 'w-2 h-2 bg-secondary/40 animate-ping' :
              i % 4 === 2 ? 'w-1 h-1 bg-primary/50 animate-pulse' :
              'w-2 h-2 bg-gradient-to-r from-primary/30 to-secondary/30 animate-spin'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Orbiting skill icons */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-2xl">⚛️</div>
            </div>
            <div className="absolute inset-8 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl">🔷</div>
            </div>
            <div className="absolute inset-16 animate-spin" style={{ animationDuration: '35s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-lg">🟨</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
            <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Technical Expertise & Proficiency</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-900 via-primary via-secondary to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
            Skills & Technologies
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              A comprehensive slideshow showcase of my technical skills, displaying 2 skillsets at a time with interactive controls.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Navigate through my expertise across Frontend, Backend, Database & Cloud, and DevOps technologies.
            </p>
          </div>
        </div>

        {/* Slideshow Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skills Showcase
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isAutoPlaying 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600'
                }`}
                title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isAutoPlaying ? (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Skill Level Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 shadow-lg"></div>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Expert (90%+)</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 shadow-lg"></div>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Advanced (80-89%)</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 shadow-lg"></div>
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">Intermediate (70-79%)</span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg"></div>
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">Learning (60-69%)</span>
          </div>
        </div>

        {/* Slideshow Container */}
        <div className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Generate slides with 2 categories each */}
            {Array.from({ length: Math.ceil(skillCategories.length / 2) }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid md:grid-cols-2 gap-8 px-4">
                  {skillCategories.slice(slideIndex * 2, slideIndex * 2 + 2).map((category, categoryIndex) => (
                    <div key={categoryIndex} className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2">
                      {/* Category Header */}
                      <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-4 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <span className="text-3xl">{category.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-3 transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                      </div>
                      
                      {/* Skills List */}
                      <div className="space-y-6">
                        {category.skills.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex} 
                            className="group/skill"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                          >
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center space-x-3">
                                <span className="text-lg transition-transform duration-300 group-hover/skill:scale-125">{skill.icon}</span>
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                  {skill.name}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${getSkillTextColor(skill.level)} bg-current bg-opacity-10 border border-current border-opacity-20`}>
                                  {getSkillLevelText(skill.level)}
                                </span>
                                <span className="text-xs font-bold text-gray-600 dark:text-gray-400 min-w-[35px] text-right">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                            <div className="relative">
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                                <div
                                  className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-3 rounded-full transition-all duration-1000 ease-out transform group-hover/skill:scale-105 shadow-lg relative overflow-hidden`}
                                  style={{ width: `${skill.level}%` }}
                                >
                                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                                </div>
                              </div>
                              <div className="absolute top-0 left-0 w-full h-3 rounded-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000"></div>
                              
                              {/* Enhanced Tooltip on Hover */}
                              {hoveredSkill === skill.name && (
                                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900/95 text-white text-xs py-2 px-4 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700/50 z-10 whitespace-nowrap">
                                  <div className="text-center">
                                    <div className="font-semibold">{skill.name}</div>
                                    <div className="text-gray-300">{skill.level}% proficiency</div>
                                  </div>
                                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900/95"></div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {Array.from({ length: Math.ceil(skillCategories.length / 2) }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-gradient-to-r from-primary to-secondary shadow-lg transform scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>Slide {currentSlide + 1} of {Math.ceil(skillCategories.length / 2)}</span>
            <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${((currentSlide + 1) / Math.ceil(skillCategories.length / 2)) * 100}%` }}
            />
          </div>
        </div>

        {/* Enhanced Certifications & Learning */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 text-secondary rounded-full text-sm font-medium mb-8 border border-secondary/20 backdrop-blur-sm">
            <svg className="w-4 h-4 animate-spin" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Certifications & Continuous Learning</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Professional Credentials
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg px-6 py-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">AWS Certified</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Cloud Developer Associate</p>
            </div>
            
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg px-6 py-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">React Specialist</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Advanced React Development</p>
            </div>
            
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg px-6 py-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Scrum Master</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Certified Agile Practitioner</p>
            </div>
            
            <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg px-6 py-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Google Cloud</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Platform Engineer</p>
            </div>
          </div>
          
          {/* Learning Progress Indicator */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Currently Learning</h4>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-700">
                  🔥 Rust Programming
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 rounded-full text-sm font-medium border border-green-200 dark:border-green-700">
                  ⚡ WebAssembly
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700">
                  🧠 Machine Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

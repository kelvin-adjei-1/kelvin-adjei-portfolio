const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 75 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Docker", level: 78 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 82 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jest", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "CI/CD", level: 75 },
        { name: "Figma", level: 70 },
        { name: "Agile", level: 90 }
      ]
    }
  ];

  // Function to get color based on skill level
  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-emerald-500 to-emerald-600'; // Expert - Green
    if (level >= 80) return 'from-blue-500 to-blue-600'; // Advanced - Blue
    if (level >= 70) return 'from-yellow-500 to-yellow-600'; // Intermediate - Yellow
    return 'from-orange-500 to-orange-600'; // Beginner - Orange
  };

  // Function to get skill level text
  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  // Function to get text color based on skill level
  const getSkillTextColor = (level: number) => {
    if (level >= 90) return 'text-emerald-600 dark:text-emerald-400';
    if (level >= 80) return 'text-blue-600 dark:text-blue-400';
    if (level >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-orange-600 dark:text-orange-400';
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-dark-950 dark:via-dark-900 dark:to-primary-950/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            My technical expertise across different domains and proficiency levels
          </p>
        </div>
        
        {/* Skill Level Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
            <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Expert (90%+)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Advanced (80-89%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
            <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Intermediate (70-79%)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">Learning (60-69%)</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl p-6 shadow-soft dark:shadow-dark-soft border border-secondary-200/50 dark:border-secondary-700/50 hover:shadow-medium dark:hover:shadow-dark-medium transition-all duration-300 card-hover">
              <h3 className="text-xl font-semibold mb-6 text-center text-primary-600 dark:text-primary-400">
                {category.title}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-secondary-700 dark:text-secondary-300">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getSkillTextColor(skill.level)} bg-current bg-opacity-10`}>
                          {getSkillLevelText(skill.level)}
                        </span>
                        <span className="text-sm font-bold text-secondary-600 dark:text-secondary-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-3 rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105 shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications or Additional Info */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="gradient-text">Certifications & Learning</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm px-6 py-4 rounded-xl shadow-soft dark:shadow-dark-soft border border-secondary-200/50 dark:border-secondary-700/50 hover:shadow-medium dark:hover:shadow-dark-medium transition-all duration-300 card-hover">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <span className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">
                AWS Certified Developer
              </span>
            </div>
            <div className="bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm px-6 py-4 rounded-xl shadow-soft dark:shadow-dark-soft border border-secondary-200/50 dark:border-secondary-700/50 hover:shadow-medium dark:hover:shadow-dark-medium transition-all duration-300 card-hover">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <span className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">
                React Specialist
              </span>
            </div>
            <div className="bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm px-6 py-4 rounded-xl shadow-soft dark:shadow-dark-soft border border-secondary-200/50 dark:border-secondary-700/50 hover:shadow-medium dark:hover:shadow-dark-medium transition-all duration-300 card-hover">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <span className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">
                Scrum Master Certified
              </span>
            </div>
            <div className="bg-white/70 dark:bg-dark-800/70 backdrop-blur-sm px-6 py-4 rounded-xl shadow-soft dark:shadow-dark-soft border border-secondary-200/50 dark:border-secondary-700/50 hover:shadow-medium dark:hover:shadow-dark-medium transition-all duration-300 card-hover">
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <span className="text-sm font-semibold text-secondary-700 dark:text-secondary-300">
                Google Cloud Platform
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

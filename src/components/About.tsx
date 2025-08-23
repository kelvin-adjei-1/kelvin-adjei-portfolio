import aboutImage from '../assets/images/kelvin-about.jpeg';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Technologies' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const highlights = [
    {
      icon: '🚀',
      title: 'Performance Focused',
      description: 'I optimize every line of code for maximum performance and user experience.'
    },
    {
      icon: '🎨',
      title: 'Design-Driven',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.'
    },
    {
      icon: '🔧',
      title: 'Problem Solver',
      description: 'I enjoy tackling complex challenges and finding elegant solutions.'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Building responsive applications that work seamlessly across all devices.'
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto text-balance">
              A passionate developer who loves creating innovative solutions and building meaningful digital experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
                    Hi there! I'm Kelvin 👋
                  </h3>
                  <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    I'm a passionate <span className="text-primary-600 dark:text-primary-400 font-semibold">Full Stack Developer</span> with 
                    over 3 years of experience creating digital solutions that make a difference. I specialize in building 
                    scalable web applications using modern technologies like React, Node.js, and TypeScript.
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    My journey in software development started with a curiosity about how things work under the hood. 
                    Today, I'm driven by the opportunity to solve complex problems and create intuitive user experiences 
                    that help businesses achieve their goals.
                  </p>
                </div>

                <div>
                  <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or sharing knowledge with the developer community. I believe in continuous learning and staying 
                    up-to-date with the latest industry trends.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary group"
                >
                  <span>Let's Work Together</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-1 shadow-strong">
                  <img
                    src={aboutImage}
                    alt="Kelvin Adjei - About"
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-500/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-secondary-100 dark:border-secondary-800">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-secondary-100 dark:border-secondary-800 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100 mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

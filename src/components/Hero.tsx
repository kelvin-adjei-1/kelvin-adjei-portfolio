import React, { useEffect, useState } from 'react';
import profileImage from '../assets/images/kelvin-profile-photo.jpeg';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white bg-opacity-20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
          
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            
            {/* Profile picture for mobile - shows above text on small screens */}
            <div className={`lg:hidden mb-8 transition-all duration-1000 ${isVisible ? 'animate-scale-up' : 'opacity-0 scale-95'}`}>
              <div className="relative w-48 h-48 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <img
                      src={profileImage}
                      alt="Kelvin Adjei"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-gentle">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Greeting */}
            <div className={`mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <span className="text-lg text-gray-300 font-light">Hello, I'm</span>
            </div>

            {/* Name with gradient */}
            <div className={`mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-accent-300 to-accent-500 bg-clip-text text-transparent mb-2">
                Kelvin Adjei
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"></div>
            </div>

            {/* Role */}
            <div className={`mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                Mid-Level Software Developer
              </h2>
              <p className="text-lg text-gray-400 mt-2">
                Passionate about creating innovative solutions and beautiful user experiences
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-1000 delay-800 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <a
                href="#contact"
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-accent-600 hover:to-accent-700 hover:shadow-lg hover:shadow-accent-500 hover:shadow-opacity-30 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10 hover:border-opacity-50 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className={`flex space-x-6 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <a
                href="https://linkedin.com/in/kelvin-adjei"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-accent-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/kelvin-adjei-1/kelvin-adjei-1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-accent-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:kpkadjei1@gmail.com"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-accent-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM20 8l-8 5L4 8V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Profile picture for desktop */}
          <div className={`hidden lg:block lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-up' : 'opacity-0 scale-95'}`}>
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src={profileImage}
                    alt="Kelvin Adjei"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center shadow-xl animate-bounce-gentle">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Floating skills indicators */}
              <div className="absolute -top-4 -left-4 bg-primary-600 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium animate-float">
                Full-stack
              </div>
              <div className="absolute top-8 -right-8 bg-accent-600 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium animate-float" style={{animationDelay: '2s'}}>
                IOT & Cloud Dev
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary-700 bg-opacity-90 text-white px-3 py-1 rounded-full text-sm font-medium animate-float" style={{animationDelay: '4s'}}>
                AI/ML Engineer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full p-1">
          <div className="w-1 h-3 bg-white bg-opacity-50 rounded-full mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

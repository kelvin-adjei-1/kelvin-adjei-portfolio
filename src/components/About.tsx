const About = () => (
  <section id="about" className="section-padding bg-white dark:bg-dark-900" aria-labelledby="about-heading">
    <div className="container-custom grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div className="section-heading mb-0">
        <p className="section-kicker">A little about me</p>
        <h2 id="about-heading">Thoughtful solutions, built to scale.</h2>
      </div>
      <div className="space-y-5 text-lg leading-relaxed text-secondary-700 dark:text-secondary-300">
        <p>I'm Kelvin Adjei, a software engineer based in Charlotte, North Carolina. My work spans full-stack development, cloud deployment, and data integration.</p>
        <p>I've worked on agent performance, healthcare, billing, and customer service solutions, including AI-assisted coaching and tools that connect people with the information they need.</p>
        <p>Outside of software development, I enjoy soccer, running, movies, and hiking.</p>
      </div>
    </div>
  </section>
);

export default About;

import profilePhoto from '../assets/kelvin-profile-photo.jpeg';
import { contact } from '../data/portfolio';

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-teal-50/50 pb-20 pt-32 dark:bg-dark-950 lg:pb-28 lg:pt-40">
    <div className="pointer-events-none absolute right-0 top-10 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl dark:bg-violet-700/20" aria-hidden="true" />
    <div className="container-custom relative grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
      <div>
        <p className="section-kicker">Software engineer · Full-stack developer</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-secondary-950 dark:text-white sm:text-6xl lg:text-7xl">Hi, I'm Kelvin<span className="text-primary-600 dark:text-violet-300">.</span></h1>
        <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-secondary-800 dark:text-secondary-200 sm:text-2xl">I build useful software for people and the problems they face.</p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-secondary-600 dark:text-secondary-400">From enterprise applications to AI-assisted tools, I bring together full-stack development, cloud platforms, and data to make ideas work.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">Explore my projects <span className="ml-2" aria-hidden="true">→</span></a>
          <a href="#contact" className="btn-secondary">Get in touch</a>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
          <span className="text-secondary-600 dark:text-secondary-400">{contact.location}</span>
          <a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className="text-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <div className="relative rounded-[2rem] bg-gradient-to-br from-primary-600 to-secondary-900 p-2 shadow-strong dark:from-violet-500 dark:to-fuchsia-950">
          <img src={profilePhoto} alt="Kelvin Adjei" className="aspect-[4/5] w-full rounded-[1.6rem] object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

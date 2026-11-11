import { experiences } from '../data/portfolio';

const Experience = () => (
  <section id="experience" className="section-padding bg-white dark:bg-dark-900" aria-labelledby="experience-heading">
    <div className="container-custom max-w-6xl">
      <div className="section-heading">
        <p className="section-kicker">My background</p>
        <h2 id="experience-heading">Experience & education.</h2>
        <p>Building enterprise applications and solving problems across healthcare, customer service, and banking.</p>
      </div>
      <div className="space-y-5">
        {experiences.map((experience) => (
          <article key={experience.title} className="portfolio-card grid gap-5 md:grid-cols-[220px_1fr] md:gap-10">
            <div>
              <p className="font-semibold text-primary-700 dark:text-violet-300">{experience.period}</p>
              <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">{experience.location}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{experience.title}</h3>
              <p className="mt-1 font-medium text-secondary-600 dark:text-secondary-400">{experience.company}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-secondary-700 dark:text-secondary-300">
                {experience.highlights.map((highlight) => <li key={highlight} className="leading-relaxed">{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
        <article className="portfolio-card grid gap-5 md:grid-cols-[220px_1fr] md:gap-10">
          <div>
            <p className="font-semibold text-primary-700 dark:text-violet-300">Sep 2017 – May 2021</p>
            <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">Swarthmore, PA</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white">Bachelor of Science in Engineering & Computer Science</h3>
            <p className="mt-1 font-medium text-secondary-600 dark:text-secondary-400">Swarthmore College</p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Experience;

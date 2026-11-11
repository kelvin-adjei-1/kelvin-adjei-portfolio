import { contact, projects } from '../data/portfolio';

const Projects = () => (
  <section id="projects" className="section-padding bg-white dark:bg-dark-900" aria-labelledby="projects-heading">
    <div className="container-custom max-w-6xl">
      <div className="section-heading">
        <p className="section-kicker">Selected work</p>
        <h2 id="projects-heading">Projects built with purpose.</h2>
        <p>From real estate and student communities to connected devices and robotics, here are the projects featured on my resume.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="portfolio-card flex flex-col">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="category-label">{project.category}</span>
              <span className="font-mono text-sm text-secondary-400" aria-hidden="true">0{index + 1}</span>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 dark:text-white">{project.title}</h3>
            <p className="mt-4 leading-relaxed text-secondary-700 dark:text-secondary-300">{project.description}</p>
            <p className="mt-3 leading-relaxed text-secondary-600 dark:text-secondary-400">{project.details}</p>
            {project.link && (
              <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 pt-6">
                <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">{project.linkLabel} <span aria-hidden="true">↗</span></a>
                {project.secondaryLink && <a className="text-link" href={project.secondaryLink} target="_blank" rel="noopener noreferrer">{project.secondaryLabel} <span aria-hidden="true">↗</span></a>}
              </div>
            )}
          </article>
        ))}
      </div>
      <p className="mt-8 text-secondary-600 dark:text-secondary-400">Explore more of my work on <a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>.</p>
    </div>
  </section>
);

export default Projects;

import {
  CircleStackIcon,
  CloudIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  RectangleGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { skills } from '../data/portfolio';

const categoryStyles: Record<(typeof skills)[number]['title'], { icon: typeof CodeBracketIcon; color: string }> = {
  Languages: { icon: CodeBracketIcon, color: 'bg-primary-100 text-primary-800 dark:bg-primary-500/20 dark:text-primary-200' },
  'Frameworks & UI': { icon: RectangleGroupIcon, color: 'bg-primary-100 text-primary-800 dark:bg-primary-500/20 dark:text-primary-200' },
  Databases: { icon: CircleStackIcon, color: 'bg-primary-100 text-primary-800 dark:bg-primary-500/20 dark:text-primary-200' },
  'Data & reporting': { icon: ChartBarIcon, color: 'bg-primary-100 text-primary-800 dark:bg-primary-500/20 dark:text-primary-200' },
  'Cloud & DevOps': { icon: CloudIcon, color: 'bg-primary-100 text-primary-800 dark:bg-primary-500/20 dark:text-primary-200' },
  'Engineering practices': { icon: Cog6ToothIcon, color: 'bg-primary-100 text-primary-800 dark:bg-primary-500/20 dark:text-primary-200' },
};

const Skills = () => (
  <section id="skills" className="section-padding bg-primary-50/60 dark:bg-dark-950" aria-labelledby="skills-heading">
    <div className="container-custom max-w-6xl">
      <div className="section-heading">
        <p className="section-kicker">The toolkit</p>
        <h2 id="skills-heading">Skills & technologies.</h2>
        <p>A closer look at the languages, platforms, and practices I use to build, deliver, and maintain software.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => {
          const { icon: Icon, color } = categoryStyles[category.title];
          return (
            <article key={category.title} className="portfolio-card flex h-full flex-col">
              <div className="flex items-start gap-4">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-secondary-900 dark:text-white">{category.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-secondary-600 dark:text-secondary-300">{category.description}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2 border-t border-secondary-200 pt-5 dark:border-white/10" aria-label={`${category.title} skills`}>
                {category.items.map((skill) => <li key={skill} className="skill-tag">{skill}</li>)}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;

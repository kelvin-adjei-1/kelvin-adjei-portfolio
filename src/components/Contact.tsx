import { contact } from '../data/portfolio';

const Contact = () => (
  <section id="contact" className="section-padding bg-primary-950 text-white dark:bg-violet-950" aria-labelledby="contact-heading">
    <div className="container-custom max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary-300 dark:text-violet-300">Let's connect</p>
          <h2 id="contact-heading" className="text-4xl font-bold tracking-tight sm:text-5xl">Have an idea or opportunity?</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-100 dark:text-violet-100">I'd love to hear about it. Reach out by email or connect with me on LinkedIn or GitHub.</p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <a href={`mailto:${contact.email}`} className="inline-flex max-w-full break-all rounded-xl bg-white px-6 py-3 font-semibold text-primary-950 hover:bg-primary-50 dark:text-violet-950 dark:hover:bg-violet-100 focus-ring">{contact.email} <span className="ml-2" aria-hidden="true">↗</span></a>
          <div className="flex gap-6">
            <a className="font-semibold text-white underline underline-offset-4 hover:text-primary-200 dark:hover:text-violet-200 focus-ring" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="font-semibold text-white underline underline-offset-4 hover:text-primary-200 dark:hover:text-violet-200 focus-ring" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
          <p className="text-sm text-primary-200 dark:text-violet-200">{contact.location}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;

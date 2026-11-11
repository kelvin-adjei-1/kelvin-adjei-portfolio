const Footer = () => (
  <footer className="bg-secondary-950 py-7 text-secondary-300 dark:bg-dark-950">
    <div className="container-custom flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm">
      <p>© {new Date().getFullYear()} Kelvin Adjei. Built with React & Tailwind CSS.</p>
      <a href="#home" className="focus-ring rounded text-white underline underline-offset-4">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;

import { useState } from 'react';
import emblem from '../assets/geometric-emblem.png';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-100 bg-white/95 backdrop-blur-md dark:border-violet-400/20 dark:bg-dark-950/95">
      <nav className="container-custom max-w-6xl" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#home" className="focus-ring flex items-center gap-3 rounded-lg font-bold text-secondary-900 dark:text-white" onClick={() => setIsMenuOpen(false)}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-700 dark:bg-violet-700"><img src={emblem} alt="" className="h-7 w-7 object-contain" /></span>
            <span>Kelvin Adjei<span className="text-primary-600 dark:text-violet-300">.</span></span>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} className="nav-link">{item.label}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={toggleDarkMode} className="focus-ring rounded-lg border border-secondary-200 px-3 py-2 text-sm font-medium hover:bg-secondary-100 dark:border-secondary-700 dark:hover:bg-secondary-800" aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              <span aria-hidden="true">{darkMode ? '☀' : '☾'}</span>
            </button>
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus-ring rounded-lg border border-secondary-200 px-3 py-2 text-sm font-semibold dark:border-secondary-700 lg:hidden" aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
              {isMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div id="mobile-navigation" className="grid gap-1 border-t border-secondary-200 py-3 dark:border-secondary-800 lg:hidden">
            {navItems.map((item) => <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} className="nav-link">{item.label}</a>)}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

# Kelvin Adjei - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This website showcases my skills, experience, projects, and provides an easy way to get in touch.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Supports system theme preferences
- **Interactive Components**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form for inquiries
- **Project Showcase**: Detailed project cards with links to live demos and code
- **Skills Visualization**: Progress bars showing proficiency levels

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Hero Icons** - Beautiful SVG icons

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About me section
│   ├── Experience.tsx   # Work experience timeline
│   ├── Skills.tsx       # Skills and technologies
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── App.tsx              # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Sections

1. **Hero** - Introduction and call-to-action buttons
2. **About** - Personal information and quick facts
3. **Experience** - Professional timeline with descriptions
4. **Skills** - Technical skills with proficiency levels
5. **Projects** - Featured and other projects with links
6. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kelvin-adjei-portfolio.git
cd kelvin-adjei-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Customization

To customize this portfolio for your own use:

1. **Personal Information**: Update the content in all component files with your information
2. **Images**: Replace placeholder images with your own photos and project screenshots
3. **Links**: Update social media links and project URLs
4. **Styling**: Modify colors in `tailwind.config.js` and component styles
5. **Content**: Add or remove sections as needed

## 🎯 Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the built files to an S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Kelvin Adjei - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/kelvin-adjei-portfolio](https://github.com/yourusername/kelvin-adjei-portfolio)

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

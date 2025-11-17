# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing professional experience, projects, skills, education, and achievements. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Dark/Light Theme Toggle** - Switch between dark and light modes with persistent preference
- **Responsive Design** - Optimized for desktop and mobile devices
- **Smooth Scrolling** - Seamless navigation between sections
- **Modern UI** - Clean, professional design with hover effects and transitions
- **Sections**:
  - Hero section with professional summary
  - Work experience timeline
  - Selected projects
  - Technical skills
  - Education background
  - Awards and achievements
  - Contact information

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Context** - Theme management

## Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bivanalhar/bivanalhar.github.io.git
cd bivanalhar.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # React components
│   ├── Hero.tsx      # Hero section
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Awards.tsx
│   ├── Contact.tsx
│   └── Layout.tsx    # Main layout with header and footer
├── contexts/         # React contexts
│   └── ThemeContext.tsx  # Theme management
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Deployment

This repository is configured for GitHub Pages deployment. The site is automatically deployed when changes are pushed to the main branch.

## License

This project is private and personal.

# Git Repository Description

Antigravity Website is a modern React + Vite CRM-inspired dashboard application featuring sales pipeline management, contact tracking, and AI copilot integration. Built with a scalable component architecture, responsive UI, and modern frontend tooling for fast performance and seamless user experience.

---

# README.md

# Antigravity Website

A modern CRM-style dashboard application built using React and Vite, designed for sales teams, customer relationship management workflows, and AI-assisted productivity.

## Features

* Modern responsive dashboard UI
* Contact management system
* Sales pipeline tracking
* AI Copilot integration page
* React Router based navigation
* Fast Vite-powered development environment
* Scalable component-based architecture
* Clean and minimal user experience

## Tech Stack

### Frontend

* React 19
* React Router DOM
* Vite
* CSS3
* Lucide React Icons

### Tooling

* ESLint
* Vite Build System

---

# Project Structure

```bash
Antigravity_Website/
│
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/               # Application pages
│   ├── App.jsx              # Main application routes
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Pages Included

| Route       | Description             |
| ----------- | ----------------------- |
| `/`         | Dashboard overview      |
| `/contacts` | Contacts management     |
| `/pipeline` | Sales pipeline tracking |
| `/copilot`  | AI copilot interface    |
| `/settings` | Settings panel          |
| `/help`     | Help center             |

---

# Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd Antigravity_Website
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

# Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Future Improvements

* Authentication & authorization
* Backend API integration
* Real-time analytics
* AI-powered sales insights
* Team collaboration tools
* Notification system
* Dark/light theme switching
* Database integration

---

# Deployment

This project can be deployed easily on:

* Vercel
* Netlify
* Render
* GitHub Pages

Recommended platform: Vercel for optimized Vite deployment.

---

# Development Philosophy

Antigravity Website focuses on:

* Performance-first frontend architecture
* Minimalistic and professional UI design
* Scalable React component structure
* Smooth navigation and user experience
* AI-enhanced productivity workflows

---

# License

This project is licensed under the MIT License.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

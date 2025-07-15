# PORTFOLIO-ADMIN-PANEL

Empower Your Vision with Seamless Control

![last commit](https://img.shields.io/github/last-commit/diyornv/portfolio-admin-panel)
![typescript](https://img.shields.io/badge/typescript-64.3%25-blue)
![languages](https://img.shields.io/github/languages/count/diyornv/portfolio-admin-panel)

Built with the tools and technologies:

![JSON](https://img.shields.io/badge/-JSON-informational?style=flat-square&logo=json)
![Markdown](https://img.shields.io/badge/-Markdown-informational?style=flat-square&logo=markdown)
![npm](https://img.shields.io/badge/-npm-informational?style=flat-square&logo=npm)
![Prettier](https://img.shields.io/badge/-Prettier-informational?style=flat-square&logo=prettier)
![JavaScript](https://img.shields.io/badge/-JavaScript-informational?style=flat-square&logo=javascript)
![React](https://img.shields.io/badge/-React-informational?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/-TypeScript-informational?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/-Vite-informational?style=flat-square&logo=vite)
![ESLint](https://img.shields.io/badge/-ESLint-informational?style=flat-square&logo=eslint)
![Axios](https://img.shields.io/badge/-Axios-informational?style=flat-square&logo=axios)

---

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Features](#features)
- [Project Structure](#project-structure)
- [License](#license)

---

## Overview

**portfolio-admin-panel** is a modern, scalable React-based admin interface built with Vite, Tailwind CSS, and TypeScript, designed to accelerate development and ensure maintainability. It provides a robust foundation for building feature-rich administrative dashboards with a focus on performance, code quality, and developer experience.

### Core Features
- 🚀 **Fast & Modern Setup:** Vite, React, Tailwind CSS, and TypeScript for rapid development and hot module replacement.
- 🔒 **Secure API Integration:** Centralized Axios-based request handler with authentication support for consistent server communication.
- 🧩 **Reusable UI Components:** Modular components like project cards, skills cards, and modals to streamline UI development.
- 🧹 **Code Quality & Standards:** Enforced with ESLint and strict TypeScript configurations for maintainable, error-free code.
- 🏗️ **Scalable Architecture:** Organized project structure with clear separation of concerns, layouts, routing, and context management.
- 🛠️ **Extensible & Customizable:** Designed for easy extension with additional features and integrations.

---

## Getting Started

### Prerequisites
- **Programming Language:** TypeScript
- **Package Manager:** npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/diyornv/portfolio-admin-panel
   ```
2. **Navigate to the project directory:**
   ```bash
   cd portfolio-admin-panel
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```

### Usage

Run the project with:
```bash
npm run dev
```

### Testing

Portfolio-admin-panel uses the `{test_framework}` test framework. Run the test suite with:
```bash
npm test
```

---

## Features
- Modern React + Vite + TypeScript + Tailwind CSS stack
- Modular and reusable component structure
- Centralized API handler with Axios
- Authentication with Zustand and js-cookie
- Responsive and accessible UI
- ESLint, Prettier, and strict TypeScript for code quality

---

## Project Structure
```
src/
  api/         # API request handlers (Axios instances, hooks)
  assets/      # Static assets (images, icons)
  components/  # Reusable UI components
  config/      # App-wide configuration files
  constants/   # Constant values and enums
  context/     # React context providers
  layout/      # Layout components (Sidebar, Header, etc.)
  pages/       # Page components (Dashboard, Skills, Projects, etc.)
  providers/   # App-wide providers (theme, query, etc.)
  router/      # Routing configuration
  store/       # Zustand stores (auth, etc.)
  styles/      # Global and Tailwind styles
  types/       # TypeScript type definitions
  utils/       # Utility functions
  widgets/     # Widget components
```

---

# Seependra Singh Portfolio Website

A professional portfolio website built with Node.js, Express, and EJS to showcase Seependra Singh's profile, skills, projects, resume, and contact information in a clean responsive layout.

## Overview

This project is a server-rendered portfolio website designed for recruiters, hiring managers, and collaborators. It includes dedicated pages for home, about, projects, and contact, along with SEO-ready metadata, resume support, and a configurable contact form powered by Formspree.

## Features

- Server-rendered pages using Express and EJS
- Dedicated routes for Home, About, Projects, Contact, and a custom 404 page
- Responsive portfolio layout with reusable partials
- SEO-friendly metadata support for titles, descriptions, canonical URLs, and social preview image
- Resume download integration from the `public/docs` directory
- Contact form integration using `FORMSPREE_ENDPOINT`
- Social profile links for GitHub, LinkedIn, and email

## Tech Stack

- Node.js
- Express.js
- EJS
- CSS
- JavaScript
- Nodemon
- Dotenv

## Project Structure

```text
portfolio-website/
|-- public/
|   |-- css/
|   |-- docs/
|   `-- js/
|-- img/
|-- routes/
|-- views/
|   |-- partials/
|   `-- *.ejs
|-- server.js
`-- package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and add:

```env
PORT=3000
SITE_URL=http://localhost:3000
FORMSPREE_ENDPOINT=your_formspree_endpoint
```

### 3. Run the project

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

Then open `http://localhost:3000` in your browser.

## Available Scripts

- `npm start` - Starts the Express server
- `npm run dev` - Starts the app with Nodemon for development

## Customization

- Update portfolio content in the files inside `views/`
- Replace images in `img/`
- Replace the resume file at `public/docs/seependra_resume.pdf`
- Update profile links and metadata in `routes/mainRoutes.js`

## Live Project

- Live URL: `https://portfolio-three-woad-mc7sjhmhls.vercel.app`
- Repository: `https://github.com/seependra-yadav/portfolio-website`

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

Made with ❤️ by seependra singh

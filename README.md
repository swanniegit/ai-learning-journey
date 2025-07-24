# AI Learning Journey – Next.js Edition

This project implements a dynamic, gamified learning portal for your AI journey. Built with **Next.js** and **React**, it demonstrates how to incorporate progress tracking, quizzes, a leaderboard and a theme switcher. It also uses **localStorage** to persist user progress on the client side.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

3. Build for production and deploy to Vercel:

   ```bash
   npm run build
   npm start
   ```

   Or connect the project to Vercel. Vercel will detect it’s a Next.js project and build accordingly.

## Features

- **Soft green theme** with optional dark mode toggle.
- **Dynamic routes**: each lesson is served from `/lessons/[id]`.
- **Persistent progress**: quiz completion state is saved in localStorage.
- **Quizzes**: each lesson has a simple multiple‑choice quiz with immediate feedback.
- **Leaderboard**: an example API route returns a static leaderboard.

Feel free to expand the `lessons` array in `data/lessons.js` and add your own quizzes or pages.
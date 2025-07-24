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

## Supabase integration (optional)

This project includes optional hooks to persist user progress and fetch the leaderboard from a [Supabase](https://supabase.com) database. To enable it:

1. **Create a Supabase project** and generate tables:
   - **users**: `id` (UUID, primary key), `name` (text), `created_at` (timestamp).
   - **progress**: `id` (bigint, primary key), `user_id` (UUID, foreign key to users.id), `lesson_id` (integer), `correct` (boolean), `created_at` (timestamp with default `now()`).
2. **Insert some test users** into the `users` table (or adjust the code to handle anonymous users).
3. Obtain your **project URL**, **Anon/public key** and **Service role key** from the Supabase dashboard. Create a `.env.local` file at the root of the project with the following variables:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

   - The `NEXT_PUBLIC_` variables are used client‑side to submit progress. The `SUPABASE_SERVICE_ROLE_KEY` is used server‑side in the leaderboard API route and should remain secret (do not expose it to the browser).

4. **Redeploy to Vercel** with these environment variables. When a learner completes a quiz, the result is stored in the `progress` table, and the leaderboard API aggregates scores across all users.

Supabase integration is entirely optional—if you omit the environment variables, the app will continue using `localStorage` for progress and a static leaderboard.

Feel free to expand the `lessons` array in `data/lessons.js` and add your own quizzes or pages.
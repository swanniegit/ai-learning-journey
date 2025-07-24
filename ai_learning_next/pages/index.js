import NavBar from '../components/NavBar';
import ProgressBar from '../components/ProgressBar';
import lessons from '../data/lessons';
import { useEffect, useState } from 'react';

/**
 * Home page introduces the AI learning journey. It shows overall progress
 * computed from localStorage and presents the after‑hours study schedule.
 */
export default function Home({ theme, toggleTheme }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate the number of completed quizzes stored in localStorage
    if (typeof window === 'undefined') return;
    const total = lessons.length;
    let completed = 0;
    lessons.forEach(lesson => {
      const saved = localStorage.getItem(`quiz-${lesson.id}`);
      if (saved) {
        const { completed: done } = JSON.parse(saved);
        if (done) completed++;
      }
    });
    setProgress(total > 0 ? completed / total : 0);
  }, []);

  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <h1>AI Learning Journey</h1>
        <p>
          Welcome to your personalised AI adventure! This programme is designed to
          guide you from an AI newcomer to building your own autonomous agents.
          We’ve structured the content into bite‑sized lessons you can complete
          after work or on weekends.
        </p>
        <h2>Your Progress</h2>
        <ProgressBar progress={progress} />
        <p>
          You have completed {Math.round(progress * lessons.length)}/
          {lessons.length} lessons.
        </p>
        <h2>After‑hours Study Plan</h2>
        <ul>
          <li>
            <strong>Weeks 1–2:</strong> Spend 2–3 evenings chatting with AI
            models. Explore prompt engineering and get comfortable with
            conversation design.
          </li>
          <li>
            <strong>Weeks 3–4:</strong> Dedicate 3–4 evenings and a weekend
            afternoon to coding fundamentals. Work through Python notebooks and
            small JavaScript projects.
          </li>
          <li>
            <strong>Weeks 5–6:</strong> On weekends and occasional weekday
            evenings, start building agents by combining language models with
            planning and tool use. Complete the challenges to earn your badges.
          </li>
          <li>
            <strong>Weeks 7–8:</strong> Deepen your understanding of data
            ethics, fairness and bias. Spend a couple of evenings reading case
            studies and discussing ethical dilemmas with peers, then design
            your own capstone project and deploy it as a demo application.
          </li>
        </ul>
        <h2>Get Started</h2>
        <p>
          Head over to the <strong>Lessons</strong> section to begin. Each
          lesson contains a short description and a quiz. Collect points and
          badges as you progress!
        </p>
      </div>
    </>
  );
}
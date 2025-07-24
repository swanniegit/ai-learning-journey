import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import ProgressBar from '../../components/ProgressBar';
import Quiz from '../../components/Quiz';
import lessons from '../../data/lessons';

/**
 * Dynamic lesson page. It fetches the lesson based on the `id` parameter. A quiz
 * is rendered for each lesson and stored in localStorage under `quiz-{id}`.
 */
export default function LessonPage({ theme, toggleTheme }) {
  const router = useRouter();
  const { id } = router.query;
  const [lesson, setLesson] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    if (!id) return;
    const num = parseInt(id.toString(), 10);
    const found = lessons.find(l => l.id === num);
    setLesson(found || null);
    if (typeof window !== 'undefined' && found) {
      const saved = localStorage.getItem(`quiz-${found.id}`);
      if (saved) {
        const { isCorrect } = JSON.parse(saved);
        setQuizComplete(isCorrect);
      }
    }
  }, [id]);

  function handleQuizComplete(correct) {
    setQuizComplete(correct);
  }

  if (!lesson) {
    return (
      <>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <div className="container">
          <h1>Lesson Not Found</h1>
          <p>Sorry, we couldn’t find the lesson you’re looking for.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
        <h2>Quiz</h2>
        <Quiz
          quiz={lesson.quiz}
          onComplete={handleQuizComplete}
          storageKey={`quiz-${lesson.id}`}
        />
        {quizComplete && <p>You have completed this quiz!</p>}
        <hr />
        <div>
          {lesson.id > 1 && (
            <button
              className="theme-toggle"
              onClick={() => router.push(`/lessons/${lesson.id - 1}`)}
            >
              Previous Lesson
            </button>
          )}
          {lesson.id < lessons.length && (
            <button
              className="theme-toggle"
              onClick={() => router.push(`/lessons/${lesson.id + 1}`)}
              style={{ marginLeft: '1rem' }}
            >
              Next Lesson
            </button>
          )}
        </div>
      </div>
    </>
  );
}
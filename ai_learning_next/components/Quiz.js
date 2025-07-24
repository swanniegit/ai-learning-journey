import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

/**
 * Quiz component supporting multiple questions and question types.
 *
 * Each question can have:
 * - type: 'single' (default), 'multi' for multiple answers, or 'text' for short answer.
 * - question: The prompt to display.
 * - options: Array of answer strings (for 'single' and 'multi').
 * - answer: Index of the correct option (for 'single').
 * - answers: Array of indices of correct options (for 'multi').
 * - correctAnswer: String representing the correct text (for 'text').
 */
export default function Quiz({ questions = [], onComplete, storageKey, userId, lessonId }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState([]);
  const [textAnswer, setTextAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[current];
  const type = question.type || 'single';

  // Load saved result if quiz completed previously
  useEffect(() => {
    if (typeof window !== 'undefined' && storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.completed) {
          setCompleted(true);
          setScore(parsed.score);
          setCurrent(questions.length - 1);
        }
      }
    }
  }, [storageKey, questions.length]);

  function toggleOption(idx) {
    if (submitted) return;
    if (type === 'multi') {
      setSelected(prev => {
        if (prev.includes(idx)) {
          return prev.filter(i => i !== idx);
        }
        return [...prev, idx];
      });
    } else {
      setSelected([idx]);
    }
  }

  function handleSubmit() {
    if (submitted) return;
    let correct = false;
    if (type === 'multi') {
      const sortedSel = [...selected].sort();
      const sortedAns = [...(question.answers || [])].sort();
      correct = sortedSel.length > 0 && sortedSel.every((v, i) => v === sortedAns[i]) && sortedSel.length === sortedAns.length;
    } else if (type === 'text') {
      correct = textAnswer.trim().toLowerCase() === (question.correctAnswer || '').trim().toLowerCase();
    } else {
      correct = selected[0] === question.answer;
    }
    if (correct) {
      setScore(prev => prev + 1);
    }
    setSubmitted(true);
  }

  function handleNext() {
    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
      setSelected([]);
      setTextAnswer('');
      setSubmitted(false);
    } else {
      // Quiz complete
      const result = { completed: true, score, total: questions.length };
      if (typeof window !== 'undefined' && storageKey) {
        localStorage.setItem(storageKey, JSON.stringify(result));
      }
      if (supabase && userId) {
        try {
          supabase
            .from('progress')
            .insert({ user_id: userId, lesson_id: lessonId ?? null, correct: true, score: score })
            .then(() => {});
        } catch (err) {
          console.error('Failed to write progress to Supabase', err);
        }
      }
      setCompleted(true);
      if (onComplete) {
        onComplete(true);
      }
    }
  }

  if (completed) {
    return (
      <div className="quiz-container">
        <p>
          Quiz completed! You answered {score} out of {questions.length} questions correctly.
        </p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-question">
        {current + 1}. {question.question}
      </div>
      {type !== 'text' && (
        <div className="quiz-options">
          {question.options.map((option, idx) => {
            const isSelected = selected.includes(idx);
            let bg = 'var(--card-bg)';
            if (submitted) {
              if (type === 'multi') {
                if (isSelected && (question.answers || []).includes(idx)) bg = 'var(--secondary)';
                else if (isSelected && !(question.answers || []).includes(idx)) bg = '#f8d7da';
              } else {
                if (isSelected && idx === question.answer) bg = 'var(--secondary)';
                else if (isSelected && idx !== question.answer) bg = '#f8d7da';
              }
            } else {
              if (isSelected) bg = 'var(--progress-bg)';
            }
            return (
              <button
                key={idx}
                onClick={() => toggleOption(idx)}
                style={{ backgroundColor: bg }}
                disabled={submitted}
              >
                {option}
                {type === 'multi' && isSelected && !submitted && ' ✓'}
              </button>
            );
          })}
        </div>
      )}
      {type === 'text' && (
        <div style={{ marginTop: '0.5rem' }}>
          <input
            type="text"
            value={textAnswer}
            onChange={e => setTextAnswer(e.target.value)}
            style={{ padding: '0.5rem', width: '100%', borderRadius: '4px', border: '1px solid var(--secondary)' }}
            disabled={submitted}
          />
        </div>
      )}
      {!submitted && (
        <button
          className="theme-toggle"
          style={{ marginTop: '0.5rem' }}
          onClick={handleSubmit}
          disabled={(type === 'multi' && selected.length === 0) || (type === 'single' && selected.length === 0) || (type === 'text' && textAnswer.trim() === '')}
        >
          Submit Answer
        </button>
      )}
      {submitted && (
        <div style={{ marginTop: '0.5rem' }}>
          <div className="quiz-result">
            {(() => {
              if (type === 'multi') {
                const sortedSel = [...selected].sort();
                const sortedAns = [...(question.answers || [])].sort();
                const correct = sortedSel.length > 0 && sortedSel.every((v, i) => v === sortedAns[i]) && sortedSel.length === sortedAns.length;
                return correct ? 'Correct!' : 'Incorrect.';
              } else if (type === 'text') {
                return textAnswer.trim().toLowerCase() === (question.correctAnswer || '').trim().toLowerCase() ? 'Correct!' : 'Incorrect.';
              } else {
                return selected[0] === question.answer ? 'Correct!' : 'Incorrect.';
              }
            })()}
          </div>
          <button className="theme-toggle" style={{ marginTop: '0.5rem' }} onClick={handleNext}>
            {current + 1 < questions.length ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      )}
    </div>
  );
}
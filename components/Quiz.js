import { useState, useEffect } from 'react';

/**
 * Quiz component presents a single multiple-choice question. When the user
 * selects an answer, it reveals whether the choice was correct and triggers
 * an optional callback. Passing a `storageKey` will persist the quiz result
 * in localStorage so the user doesn’t lose progress on page reloads.
 */
export default function Quiz({ quiz, onComplete, storageKey }) {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    // Check if the quiz has previously been completed and restore state.
    if (typeof window !== 'undefined' && storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSelected(parsed.selected);
        setIsCorrect(parsed.isCorrect);
      }
    }
  }, [storageKey]);

  function handleSelect(index) {
    if (selected !== null) return; // prevent re-answering
    const correct = index === quiz.answer;
    setSelected(index);
    setIsCorrect(correct);
    if (typeof window !== 'undefined' && storageKey) {
      localStorage.setItem(storageKey, JSON.stringify({ selected: index, isCorrect: correct }));
    }
    if (onComplete) {
      onComplete(correct);
    }
  }

  return (
    <div className="quiz-container">
      <div className="quiz-question">{quiz.question}</div>
      <div className="quiz-options">
        {quiz.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            style={{
              backgroundColor:
                selected === null
                  ? 'var(--card-bg)'
                  : idx === selected
                  ? idx === quiz.answer
                    ? 'var(--secondary)'
                    : '#f8d7da'
                  : 'var(--card-bg)'
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="quiz-result">
          {isCorrect ? 'Correct! Great job.' : 'Incorrect. Try again next time.'}
        </div>
      )}
    </div>
  );
}
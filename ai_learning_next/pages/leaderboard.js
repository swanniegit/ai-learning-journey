import NavBar from '../components/NavBar';
import lessons from '../data/lessons';
import { useEffect, useState } from 'react';

/**
 * Leaderboard page. Without a backend, we simulate a real‑time leaderboard using
 * localStorage and storage events. The current user’s score is calculated from
 * the number of correct quiz answers. We also include a few static entries for
 * demonstration.
 */
export default function Leaderboard({ theme, toggleTheme }) {
  const [entries, setEntries] = useState([]);

  // Helper to compute the local user's score by counting correct answers.
  function computeLocalScore() {
    if (typeof window === 'undefined') return 0;
    let score = 0;
    lessons.forEach(l => {
      const saved = localStorage.getItem(`quiz-${l.id}`);
      if (saved) {
        const { score: s } = JSON.parse(saved);
        if (typeof s === 'number') {
          score += s;
        }
      }
    });
    return score;
  }

  function updateLeaderboard() {
    const localScore = computeLocalScore();
    // Base entries to compete against. These could be replaced with data from a server.
    const base = [
      { name: 'Ada Lovelace', score: 9 },
      { name: 'Alan Turing', score: 8 },
      { name: 'Grace Hopper', score: 7 }
    ];
    const userEntry = { name: 'You', score: localScore };
    const all = [...base, userEntry];
    all.sort((a, b) => b.score - a.score);
    setEntries(all);
  }

  useEffect(() => {
    updateLeaderboard();
    // Listen for storage events to update scores across tabs in real time.
    function handleStorage() {
      updateLeaderboard();
    }
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <h1>Leaderboard</h1>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Rank</th>
              <th style={{ textAlign: 'left' }}>Name</th>
              <th style={{ textAlign: 'left' }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, idx) => (
              <tr key={entry.name + idx} style={{ borderBottom: '1px solid var(--progress-bg)' }}>
                <td>{idx + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
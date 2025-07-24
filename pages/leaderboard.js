import NavBar from '../components/NavBar';
import { useEffect, useState } from 'react';

/**
 * Leaderboard page. It fetches leaderboard entries from the API route at
 * `/api/leaderboard`. Entries are displayed in descending order of score.
 */
export default function Leaderboard({ theme, toggleTheme }) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const res = await fetch('/api/leaderboard');
        const data = await res.json();
        setEntries(data.sort((a, b) => b.score - a.score));
      } catch (err) {
        console.error('Failed to fetch leaderboard', err);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboard();
  }, []);

  return (
    <>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <h1>Leaderboard</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
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
                <tr key={entry.name} style={{ borderBottom: '1px solid var(--progress-bg)' }}>
                  <td>{idx + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
export default function handler(req, res) {
  // For demonstration purposes, we return a static leaderboard. In a real
  // application you would fetch scores from a database or other persistent
  // storage. Scores could reflect completed quizzes or coding challenges.
  const leaderboard = [
    { name: 'Ada Lovelace', score: 9 },
    { name: 'Alan Turing', score: 8 },
    { name: 'Grace Hopper', score: 7 },
    { name: 'User', score: 0 }
  ];
  res.status(200).json(leaderboard);
}
import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // If Supabase credentials are available, compute leaderboard dynamically.
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && serviceKey) {
    const supabase = createClient(supabaseUrl, serviceKey);
    try {
      const { data, error } = await supabase
        .from('progress')
        .select('user_id, correct');
      if (error) throw error;
      // Aggregate scores by user. Each correct answer yields 1 point.
      const scores = {};
      data.forEach(row => {
        if (!scores[row.user_id]) scores[row.user_id] = 0;
        if (row.correct) scores[row.user_id] += 1;
      });
      // Convert to array for response.
      const leaderboard = Object.entries(scores).map(([name, score]) => ({ name, score }));
      // Sort descending by score.
      leaderboard.sort((a, b) => b.score - a.score);
      return res.status(200).json(leaderboard);
    } catch (err) {
      console.error(err);
      // Fall back to static data on error.
    }
  }
  // Fallback: static leaderboard for demonstration.
  const fallback = [
    { name: 'Ada Lovelace', score: 9 },
    { name: 'Alan Turing', score: 8 },
    { name: 'Grace Hopper', score: 7 },
    { name: 'User', score: 0 }
  ];
  res.status(200).json(fallback);
}
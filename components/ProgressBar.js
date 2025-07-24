/**
 * ProgressBar renders a horizontal bar indicating completion percentage. The
 * `progress` prop should be a number between 0 and 1. Values greater than 1 are
 * clamped to 1 for safety.
 */
export default function ProgressBar({ progress = 0 }) {
  const clamped = Math.min(Math.max(progress, 0), 1);
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${clamped * 100}%` }} />
    </div>
  );
}
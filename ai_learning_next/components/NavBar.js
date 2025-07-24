import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * Top navigation bar. Displays links to key sections and a theme toggle. The
 * active link is styled via inline class names. Accepts `theme` and
 * `toggleTheme` props from the _app.
 */
export default function NavBar({ theme, toggleTheme }) {
  const router = useRouter();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/lessons/1', label: 'Lessons' },
    { href: '/leaderboard', label: 'Leaderboard' }
  ];

  return (
    <nav>
      <div className="nav-links">
        {links.map(link => (
          <Link key={link.href} href={link.href} legacyBehavior>
            <a
              style={{
                color: router.pathname === link.href || router.asPath.startsWith(link.href + '/') ? 'var(--primary)' : 'var(--text)'
              }}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </nav>
  );
}
import { Suspense, useEffect, useMemo, useState } from 'react';
import { allRoutes, exampleRoutes } from './routes';
import { applicationBaseUrl, applicationRouteUrl } from '../shared/app-base';

function normalizePath() {
  const hashPath = window.location.hash.replace(/^#\/?|\/+$/g, '');
  if (hashPath) {
    return hashPath;
  }

  const pathname = window.location.pathname.startsWith(applicationBaseUrl.pathname)
    ? window.location.pathname.slice(applicationBaseUrl.pathname.length)
    : window.location.pathname;

  return pathname.replace(/^\/+|\/+$/g, '') || 'basic';
}

export function App() {
  const [path, setPath] = useState(() => normalizePath());

  useEffect(() => {
    const syncPath = () => setPath(normalizePath());
    window.addEventListener('popstate', syncPath);
    window.addEventListener('hashchange', syncPath);
    return () => {
      window.removeEventListener('popstate', syncPath);
      window.removeEventListener('hashchange', syncPath);
    };
  }, []);

  const route = useMemo(
    () => allRoutes.find((item) => item.slug === path) || exampleRoutes[0],
    [path]
  );
  const CurrentExample = route.component;

  function navigate(slug: string) {
    window.history.pushState(null, '', applicationRouteUrl(slug));
    setPath(slug);
    window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <main className="page shell-page">
      <header className="topbar">
        <p className="eyebrow">React 19.2.8 runtime</p>
        <h1>@stackline/react-multiselect-dropdown 19.1.5</h1>
      </header>

      <section className="docs-main">
        <Suspense fallback={<section className="skin-section">Loading React example...</section>}>
          <CurrentExample />
        </Suspense>
      </section>

      <footer className="example-footer" aria-label="React 19 example routes">
        <div className="footer-heading">
          <p className="eyebrow">Example routes</p>
          <h2>Open a focused React 19 example</h2>
        </div>

        <nav className="footer-link-grid">
          {exampleRoutes.map((item) => (
            <a
              key={item.slug}
              href={applicationRouteUrl(item.slug).href}
              className={item.slug === route.slug ? 'active' : ''}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.slug);
              }}>
              <span className="route-title">{item.title}</span>
              <span className="route-path">/{item.slug}</span>
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}

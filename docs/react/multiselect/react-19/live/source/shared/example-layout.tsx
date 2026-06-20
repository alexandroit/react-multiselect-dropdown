import { useCallback, useState, type ReactNode } from 'react';
import { ExampleSourcePanel } from './example-source';

const STACKBLITZ_BASE_URL = 'https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19';

function labelFor(value: unknown) {
  if (Array.isArray(value)) {
    return value.length + ' items';
  }
  if (value && typeof value === 'object' && 'itemName' in value) {
    return String((value as { itemName: unknown }).itemName);
  }
  return String(value ?? '');
}

export function stackBlitzUrl(slug: string) {
  const filePath = `src/examples/${slug}/${slug}.component.tsx`;
  return STACKBLITZ_BASE_URL + '?file=' + encodeURIComponent(filePath) + '&startScript=start&initialpath=' + encodeURIComponent('/' + slug);
}

export function useExampleEvents(initialEvent = 'ready') {
  const [events, setEvents] = useState<string[]>([initialEvent]);
  const record = useCallback((type: string, value: unknown) => {
    setEvents((current) => [type + ': ' + labelFor(value), ...current].slice(0, 10));
  }, []);
  return { events, record };
}

export function ExampleLayout({
  slug,
  eyebrow,
  title,
  description,
  children,
  events
}: {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  events: string[];
}) {
  return (
    <>
      <section className="skin-section">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="example-copy">{description}</p>
          <a className="stackblitz-row-link" href={stackBlitzUrl(slug)} target="_blank" rel="noopener">
            Open this route in StackBlitz
          </a>
        </div>

        <article className="example-row">
          <div className="demo-cell">{children}</div>
          <div className="code-cell"><ExampleSourcePanel slug={slug} /></div>
        </article>
      </section>

      <section className="activity">
        <h2>Event log</h2>
        {events.map((event, index) => <p key={event + index}>{event}</p>)}
      </section>
    </>
  );
}

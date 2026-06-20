import { useEffect, useState } from 'react';

type ExampleSource = {
  tsx: string;
  data: string;
  css: string;
};

const EMPTY_SOURCE: ExampleSource = { tsx: '', data: '', css: '' };

async function loadText(path: string) {
  const response = await fetch(path);
  return response.ok ? response.text() : '';
}

export function ExampleSourcePanel({ slug }: { slug: string }) {
  const [source, setSource] = useState<ExampleSource>(EMPTY_SOURCE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    Promise.all([
      loadText('/source/examples/' + slug + '/' + slug + '.component.tsx'),
      loadText('/source/examples/' + slug + '/' + slug + '.data.ts'),
      loadText('/source/examples/' + slug + '/' + slug + '.component.css')
    ]).then(([tsx, data, css]) => {
      if (!mounted) {
        return;
      }
      setSource({ tsx, data, css });
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) {
    return <div className="source-loading">Loading source files...</div>;
  }

  return (
    <div className="code-grid">
      <div className="code-card"><strong>TSX</strong><pre>{source.tsx}</pre></div>
      <div className="code-card"><strong>Data</strong><pre>{source.data}</pre></div>
      <div className="code-card"><strong>CSS</strong><pre>{source.css}</pre></div>
    </div>
  );
}

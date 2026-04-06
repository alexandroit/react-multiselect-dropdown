import { useMemo, useState } from 'react';
import type { ExampleDefinition } from './examples';
import { EXAMPLES } from './examples';

export type DocsMeta = {
  badge: string;
  reactLine: string;
  packageVersion: string;
  packageRange: string;
  docsPath: string;
};

type AppProps = {
  docsMeta: DocsMeta;
};

type LogEntry = {
  id: number;
  text: string;
};

function stamp(message: string) {
  return `${new Date().toLocaleTimeString('en-US', { hour12: false })}  ${message}`;
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="code-card">
      <div className="code-card-head">
        <strong>{label}</strong>
        <button
          className="copy-button"
          type="button"
          onClick={async () => {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1200);
          }}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export function App({ docsMeta }: AppProps) {
  const [activeId, setActiveId] = useState(EXAMPLES[0]?.id ?? 'basic');
  const [logEntries, setLogEntries] = useState<LogEntry[]>([
    { id: 1, text: stamp(`Demo loaded for React ${docsMeta.reactLine}.`) }
  ]);

  const activeExample =
    EXAMPLES.find((example) => example.id === activeId) ??
    EXAMPLES[0];

  const exampleGroups = useMemo(() => {
    const groups = new Map<string, ExampleDefinition[]>();

    for (const example of EXAMPLES) {
      const current = groups.get(example.group) ?? [];
      current.push(example);
      groups.set(example.group, current);
    }

    return Array.from(groups.entries());
  }, []);

  const pushLog = (message: string) => {
    setLogEntries((current) => [
      { id: Date.now() + Math.random(), text: stamp(message) },
      ...current
    ].slice(0, 10));
  };

  const installCode = `npm install @revivejs/react-multiselect-dropdown@${docsMeta.packageRange}`;
  const setupCode = [
    `const [selectedItems, setSelectedItems] = useState([]);`,
    ``,
    `const settings = {`,
    `  text: 'Select Countries',`,
    `  enableSearchFilter: true,`,
    `  primaryKey: 'id',`,
    `  labelKey: 'itemName'`,
    `};`
  ].join('\n');
  const renderCode = [
    `<MultiSelectDropdown`,
    `  data={countries}`,
    `  selectedItems={selectedItems}`,
    `  onChange={setSelectedItems}`,
    `  settings={settings}`,
    `/>`
  ].join('\n');

  return (
    <div className="shell">
      <section className="hero">
        <div className="hero-card hero-main">
          <span className="badge">{docsMeta.badge}</span>
          <h1>@revivejs/react-multiselect-dropdown</h1>
          <p>
            A maintained React multiselect dropdown with Angular-friendly settings,
            render props for custom rows and badges, event callbacks, and dedicated docs
            lines for React 17, 18, and 19.
          </p>

          <div className="feature-grid">
            <div className="feature">
              <strong>Angular-friendly migration</strong>
              Keep the familiar <code>data</code>, <code>settings</code>, and selection callbacks
              while moving to React state.
            </div>
            <div className="feature">
              <strong>React-first controls</strong>
              Controlled and uncontrolled modes, render functions, and <code>ref</code>-based methods.
            </div>
            <div className="feature">
              <strong>Rich dropdown behavior</strong>
              Search, grouping, limit selection, add-new, lazy loading, and remote data flows.
            </div>
            <div className="feature">
              <strong>Versioned docs</strong>
              Each maintained React line ships with its own docs build and compiled history.
            </div>
          </div>

          <div className="cta-row">
            <a className="btn" href="#demos">
              See demos
            </a>
            <a
              className="btn secondary"
              href="https://github.com/alexandroit/react-multiselect-dropdown#readme"
              target="_blank"
              rel="noreferrer">
              README
            </a>
          </div>
        </div>

        <div className="hero-card hero-setup">
          <h2>Setup in 3 steps</h2>

          <div className="step">
            <span className="step-num">1</span>
            <div>
              <strong>Install</strong>
              <pre>{installCode}</pre>
            </div>
          </div>

          <div className="step">
            <span className="step-num">2</span>
            <div>
              <strong>Configure settings</strong>
              <pre>{setupCode}</pre>
            </div>
          </div>

          <div className="step">
            <span className="step-num">3</span>
            <div>
              <strong>Render the dropdown</strong>
              <pre>{renderCode}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="layout" id="demos">
        <div className="panels">
          <article className="panel">
            <div className="panel-header">
              <h2>Example gallery</h2>
              <p>
                Browse the maintained React examples that map directly to the Angular line:
                forms, templates, grouping, lazy loading, remote data, and ref methods.
              </p>
            </div>

            <div className="example-shell">
              <nav className="example-nav" aria-label="React multiselect examples">
                {exampleGroups.map(([group, items]) => (
                  <div className="example-group" key={group}>
                    <h3>{group}</h3>
                    {items.map((example) => (
                      <button
                        type="button"
                        key={example.id}
                        className={`example-link${example.id === activeExample.id ? ' active' : ''}`}
                        onClick={() => {
                          setActiveId(example.id);
                          pushLog(`Opened example: ${example.label}`);
                        }}>
                        {example.label}
                      </button>
                    ))}
                  </div>
                ))}
              </nav>

              <div className="example-stage">
                <div className="example-stage-header">
                  <div>
                    <h3>{activeExample.label}</h3>
                    <p>{activeExample.description}</p>
                  </div>
                  <span className="stage-pill">React {docsMeta.reactLine}</span>
                </div>

                <div className="example-preview">
                  <activeExample.Demo pushLog={pushLog} reactLine={docsMeta.reactLine} />
                </div>

                <div className="code-grid">
                  {activeExample.code.map((snippet) => (
                    <CodeBlock key={`${activeExample.id}-${snippet.label}`} {...snippet} />
                  ))}
                </div>
              </div>
            </div>
          </article>

          <article className="panel ref-panel">
            <div className="panel-header">
              <h2>Quick API reference</h2>
              <p>
                The package keeps the Angular-style surface area while documenting the
                most common React entry points in one place.
              </p>
            </div>

            <div className="ref-grid">
              <div className="ref-card">
                <h4>Core props</h4>
                <table className="api-table">
                  <tbody>
                    <tr><td><code>data</code></td><td>Array of dropdown options.</td></tr>
                    <tr><td><code>selectedItems</code></td><td>Controlled selection state.</td></tr>
                    <tr><td><code>defaultSelectedItems</code></td><td>Uncontrolled initial selection.</td></tr>
                    <tr><td><code>settings</code></td><td>Angular-friendly settings object.</td></tr>
                    <tr><td><code>onChange</code></td><td>Receives the next selected items array.</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="ref-card">
                <h4>Callbacks</h4>
                <table className="api-table">
                  <tbody>
                    <tr><td><code>onSelect</code></td><td>Item selected.</td></tr>
                    <tr><td><code>onDeSelect</code></td><td>Item removed.</td></tr>
                    <tr><td><code>onSelectAll</code></td><td>Visible items selected.</td></tr>
                    <tr><td><code>onDeSelectAll</code></td><td>Selections cleared.</td></tr>
                    <tr><td><code>onScrollToEnd</code></td><td>Lazy-load hook for remote chunks.</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="ref-card">
                <h4>Render props and refs</h4>
                <table className="api-table">
                  <tbody>
                    <tr><td><code>renderItem</code></td><td>Custom menu row rendering.</td></tr>
                    <tr><td><code>renderBadge</code></td><td>Custom selected badge rendering.</td></tr>
                    <tr><td><code>renderSearch</code></td><td>Custom search control surface.</td></tr>
                    <tr><td><code>ref</code></td><td>Expose <code>openDropdown</code>, <code>closeDropdown</code>, <code>clearSelection</code>, and <code>focusSearch</code>.</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </div>

        <aside className="log-panel">
          <div className="log-card">
            <div className="log-head">
              <h2>Event Log</h2>
              <button className="clear-log" type="button" onClick={() => setLogEntries([])}>
                Clear
              </button>
            </div>

            <p>
              Inspect selection callbacks, menu open/close events, and async data flow from the
              active example.
            </p>

            <div className="log-list">
              {logEntries.map((entry) => (
                <div className="log-entry" key={entry.id}>
                  {entry.text}
                </div>
              ))}
            </div>
          </div>

          <div className="log-card">
            <h2>Release line</h2>
            <p>
              This docs build stays aligned with the maintained React compatibility line and
              the published npm package.
            </p>

            <div className="log-list">
              <div className="log-entry">Package line: {docsMeta.packageVersion}</div>
              <div className="log-entry">React compatibility: {docsMeta.reactLine}</div>
              <div className="log-entry">Docs path: /{docsMeta.docsPath}/</div>
              <div className="log-entry">Pattern: versioned docs-src + compiled docs history</div>
              <div className="log-entry">Coverage: forms, templates, grouping, lazy loading, remote data</div>
            </div>
          </div>
        </aside>
      </section>

      <footer className="footer">
        <p>
          React wrapper, docs curation, versioned compatibility releases, and ongoing maintenance
          by ReviveJS.
        </p>
      </footer>
    </div>
  );
}

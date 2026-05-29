import { useEffect, useMemo, useRef, useState } from 'react';
import {
  MultiSelectDropdown,
  type MultiSelectDropdownHandle
} from '@stackline/react-multiselect-dropdown';
import { PEOPLE_SOURCE } from './demoData';
import {
  LIVE_EXAMPLES,
  createCountryItemFromQuery,
  getSkinSettings,
  type CountryOption,
  type LiveExampleDefinition,
  type SkinName
} from './examples';

export type DocsMeta = {
  badge: string;
  reactLine: string;
  reactFamily: string;
  reactRuntime: string;
  packageVersion: string;
  packageRange: string;
  docsPath: string;
  stackBlitzBaseUrl?: string;
};

type AppProps = {
  docsMeta: DocsMeta;
};

type DocsRoute = {
  path: string;
  label: string;
  example: LiveExampleDefinition<any>;
};

function exampleById(id: string) {
  const example = LIVE_EXAMPLES.find((item) => item.id === id);
  if (!example) {
    throw new Error(`Missing React docs example: ${id}`);
  }
  return example;
}

const ROUTES: DocsRoute[] = [
  { path: 'basic', label: 'Basic example', example: exampleById('basic-counter') },
  { path: 'single-selection', label: 'Single selection', example: exampleById('single-selection') },
  { path: 'search-filter', label: 'Search filter', example: exampleById('search-filter') },
  { path: 'custom-search-api', label: 'Custom Search from API', example: exampleById('custom-search-api') },
  { path: 'search-filter-by-property', label: 'Search Filter By Property', example: exampleById('search-by') },
  { path: 'search-add-new-item', label: 'Search and Add New Item', example: exampleById('add-filter-item') },
  { path: 'group-by', label: 'Group By', example: exampleById('grouped') },
  { path: 'templating', label: 'Templating', example: exampleById('custom-rendering') },
  { path: 'template-driven-forms', label: 'Template-driven forms', example: exampleById('template-driven-forms') },
  { path: 'reactive-forms', label: 'Reactive forms', example: exampleById('form-validation') },
  { path: 'virtual-scrolling', label: 'Virtual Scrolling', example: exampleById('long-list') },
  { path: 'lazy-loading-api', label: 'Lazy Loading from API', example: exampleById('lazy-loading') },
  { path: 'remote-data', label: 'Data from remote API', example: exampleById('remote-data') },
  { path: 'list-loop', label: 'Using in List for loop', example: exampleById('list-loop') },
  { path: 'dialog', label: 'Using Inside Dialog', example: exampleById('body-overlay') },
  { path: 'multiple-dropdowns', label: 'Multiple dropdowns', example: exampleById('multiple-dropdowns') },
  { path: 'dynamic-data', label: 'Load dynamic data', example: exampleById('dynamic-data') },
  { path: 'methods', label: 'Methods', example: exampleById('methods') },
  { path: 'events', label: 'Events', example: exampleById('events') },
  { path: 'disabled', label: 'Disabled state', example: exampleById('disabled-toggle') },
  { path: 'limit-selection', label: 'Limit selection', example: exampleById('limit-selection') },
  { path: 'limit-badges', label: 'Limit badges', example: exampleById('limit-badges') },
  { path: 'custom-placeholder', label: 'Custom placeholder', example: exampleById('custom-placeholder') },
  { path: 'styling', label: 'Styling', example: exampleById('styling') },
  { path: 'body-overlay-auto', label: 'Body Overlay Auto', example: exampleById('body-overlay-top') }
];

const ROUTE_ALIASES: Record<string, string> = {
  allvisible: 'limit-badges',
  singleselection: 'single-selection',
  searchfilter: 'search-filter',
  groupby: 'group-by',
  limitselection: 'limit-selection',
  searchfilterAddNewItem: 'search-add-new-item',
  disabledstate: 'disabled',
  usinginform: 'reactive-forms',
  virtualscrolling: 'virtual-scrolling',
  lazyloading: 'lazy-loading-api',
  usingInDialog: 'dialog',
  bodyOverlayTop: 'body-overlay-auto',
  dropdownMethods: 'methods'
};

function normalizeHashPath() {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  return ROUTE_ALIASES[raw] || raw || 'basic';
}

const STACKBLITZ_ROUTE_PATHS: Record<string, string> = {
  basic: 'basic',
  allvisible: 'limit-badges',
  singleselection: 'single-selection',
  searchfilter: 'search-filter',
  groupby: 'group-by',
  limitselection: 'limit-selection',
  templating: 'templating',
  searchfilterAddNewItem: 'search-add-new-item',
  disabledstate: 'disabled',
  usinginform: 'reactive-forms',
  virtualscrolling: 'virtual-scrolling',
  lazyloading: 'lazy-loading-api',
  usingInDialog: 'dialog',
  bodyOverlayTop: 'body-overlay-auto',
  dropdownMethods: 'methods'
};

function buildStackBlitzUrl(baseUrl: string, routePath: string) {
  const stackBlitzRoute = STACKBLITZ_ROUTE_PATHS[routePath] || routePath;
  const filePath = `src/examples/${stackBlitzRoute}/${stackBlitzRoute}.component.tsx`;
  return `${baseUrl}?file=${encodeURIComponent(filePath)}&startScript=start&initialpath=${encodeURIComponent(`/${stackBlitzRoute}`)}`;
}

function CountryRow({ item }: { item: CountryOption }) {
  return (
    <div className="country-row">
      <span className="country-flag">{item.flag}</span>
      <span>
        <strong>{item.itemName}</strong>
        <small>{item.capital}</small>
      </span>
    </div>
  );
}

function CountryBadge({ item }: { item: CountryOption }) {
  return (
    <span className="country-badge">
      {item.flag} {item.name}
    </span>
  );
}

function ExamplePreview<T extends Record<string, any>>({
  example,
  skin,
  pushLog
}: {
  example: LiveExampleDefinition<T>;
  skin: SkinName;
  pushLog: (message: string) => void;
}) {
  const ref = useRef<MultiSelectDropdownHandle<T>>(null);
  const [data, setData] = useState<T[]>(example.data);
  const [selectedItems, setSelectedItems] = useState<T[]>(example.initialSelected);
  const [disabled, setDisabled] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('ascasc@aa.com');
  const settings = useMemo(
    () => getSkinSettings(example.settings, skin, example.allowDisabledToggle ? disabled : false),
    [disabled, example, skin]
  );
  const isValidationExample = example.id === 'form-validation';
  const formIsValid = formEmail.trim().length > 0 && selectedItems.length > 0;
  const renderItem =
    example.customRenderer === 'country'
      ? (item: T) => <CountryRow item={item as unknown as CountryOption} />
      : undefined;
  const renderBadge =
    example.customRenderer === 'country'
      ? (item: T) => <CountryBadge item={item as unknown as CountryOption} />
      : undefined;

  const appendNextChunk = () => {
    if (!example.lazy) {
      return;
    }

    const nextChunk = PEOPLE_SOURCE.slice(data.length, data.length + 20) as T[];
    if (!nextChunk.length) {
      pushLog(`${example.title}: no more lazy rows`);
      return;
    }

    setData((current) => current.concat(nextChunk));
    pushLog(`${example.title}: appended ${nextChunk.length} rows`);
  };

  const renderDropdown = () => (
    <MultiSelectDropdown
      ref={ref}
      data={data}
      selectedItems={selectedItems}
      onChange={(items) => {
        setSelectedItems(items);
        pushLog(`${example.title}: ${items.length} selected`);
      }}
      settings={settings}
      renderItem={renderItem}
      renderBadge={renderBadge}
      onAddFilterNewItem={
        example.addFromFilter
          ? (query) => {
              const next = createCountryItemFromQuery(query, data.length) as T;
              setData((current) => current.concat(next));
              pushLog(`${example.title}: created ${query}`);
              return next;
            }
          : undefined
      }
      onScrollToEnd={example.lazy ? appendNextChunk : undefined}
      onOpen={() => pushLog(`${example.title}: opened`)}
      onClose={() => pushLog(`${example.title}: closed`)}
      onSelect={(item) => pushLog(`${example.title}: selected ${JSON.stringify(item)}`)}
      onDeSelect={(item) => pushLog(`${example.title}: removed ${JSON.stringify(item)}`)}
    />
  );

  if (isValidationExample) {
    const formValue = {
      name: formName,
      email: formEmail,
      skills: selectedItems
    };

    return (
      <div className="preview-example">
        <div className="example-live">
          <form
            className="docs-form"
            onSubmit={(event) => {
              event.preventDefault();
              pushLog(`${example.title}: submitted`);
            }}>
            <label className="form-field">
              <span>Name</span>
              <input value={formName} onChange={(event) => setFormName(event.target.value)} />
            </label>

            <label className="form-field">
              <span>
                Email Address <em>* required</em>
              </span>
              <input value={formEmail} onChange={(event) => setFormEmail(event.target.value)} />
            </label>

            <div className="form-field">
              <span>
                Skills <em>* required</em>
              </span>
              {renderDropdown()}
            </div>

            <button className="submit-button" type="submit" disabled={!formIsValid}>
              Submit
            </button>
          </form>

          <table className="form-output">
            <tbody>
              <tr>
                <td>
                  <label>Name</label>
                </td>
                <td>{formName}</td>
              </tr>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>{formEmail}</td>
              </tr>
              <tr>
                <td>
                  <label>Skills</label>
                </td>
                <td>{selectedItems.map((item) => String((item as Record<string, unknown>).itemName)).join(', ')}</td>
              </tr>
            </tbody>
          </table>

          <p className="form-json">{JSON.stringify(formValue)}</p>
          <p className="form-json">Form status: "{formIsValid ? 'VALID' : 'INVALID'}"</p>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-example">
      <div className="example-live">
        {example.allowDisabledToggle ? (
          <div className="method-bar">
            <button
              className="small-button"
              type="button"
              onClick={() => {
                setDisabled((value) => !value);
                pushLog(`${example.title}: disabled ${!disabled ? 'on' : 'off'}`);
              }}>
              {disabled ? 'Enable' : 'Disable'}
            </button>
          </div>
        ) : null}

        {example.showMethods ? (
          <div className="method-bar">
            <button type="button" onClick={() => ref.current?.openDropdown()}>
              Open
            </button>
            <button type="button" onClick={() => ref.current?.closeDropdown()}>
              Close
            </button>
            <button type="button" onClick={() => ref.current?.focusSearch()}>
              Focus search
            </button>
            <button type="button" onClick={() => ref.current?.selectAll()}>
              Select all
            </button>
            <button type="button" onClick={() => ref.current?.clearSelection()}>
              Clear
            </button>
          </div>
        ) : null}

        <div className={example.overflowDemo ? 'overflow-lab' : undefined}>
          {example.overflowDemo ? (
            <div className="overflow-label">
              Simulated dialog surface with <code>overflow: hidden</code>
            </div>
          ) : null}
          {renderDropdown()}
        </div>
      </div>
    </div>
  );
}

export function App({ docsMeta }: AppProps) {
  const skin: SkinName = 'classic';
  const [currentPath, setCurrentPath] = useState(() => normalizeHashPath());

  useEffect(() => {
    const syncHash = () => setCurrentPath(normalizeHashPath());
    window.addEventListener('hashchange', syncHash);

    if (!window.location.hash) {
      window.history.replaceState(null, '', '#/basic');
      setCurrentPath('basic');
    }

    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const currentRoute = ROUTES.find((route) => route.path === currentPath) ?? ROUTES[0];
  const stackBlitzHomeUrl = docsMeta.stackBlitzBaseUrl
    ? buildStackBlitzUrl(docsMeta.stackBlitzBaseUrl, 'basic')
    : undefined;
  const currentStackBlitzUrl = docsMeta.stackBlitzBaseUrl
    ? buildStackBlitzUrl(docsMeta.stackBlitzBaseUrl, currentRoute.path)
    : undefined;

  const pushLog = (message: string) => {
    void message;
  };

  const installCode = `npm install @stackline/react-multiselect-dropdown@${docsMeta.packageVersion} --save-exact`;
  const setupCode = [
    `import { useMemo, useState } from 'react';`,
    `import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';`,
    ``,
    `type Country = { id: number; itemName: string; capital: string };`
  ].join('\n');
  const settingsCode = [
    `const settings = useMemo(() => ({`,
    `  text: 'Select countries',`,
    `  primaryKey: 'id',`,
    `  labelKey: 'itemName',`,
    `  enableSearchFilter: true,`,
    `  badgeShowLimit: 3,`,
    `  clearAll: true,`,
    `  skin: '${skin}'`,
    `}), []);`
  ].join('\n');
  const renderCode = [
    `const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);`,
    ``,
    `<MultiSelectDropdown`,
    `  data={countries}`,
    `  selectedItems={selectedCountries}`,
    `  onChange={setSelectedCountries}`,
    `  settings={settings}`,
    `/>`
  ].join('\n');
  const featurePills = [
    'Controlled state',
    'Search',
    'Grouping',
    'Custom renderers',
    'Lazy loading',
    'Ref methods',
    'ADA-compliant keyboard/ARIA',
    'appendToBody',
    'Centered placeholder line',
    'Classic and modern skins'
  ];
  const apiCards = [
    {
      kicker: 'Component',
      title: '<MultiSelectDropdown />',
      copy: 'Use a controlled React state array through selectedItems and onChange while keeping the settings object familiar.'
    },
    {
      kicker: 'Settings',
      title: 'settings.skin',
      copy: 'Use settings.skin for classic, material, dark, custom, and brand visual modes. The legacy theme alias stays compatibility-only.'
    },
    {
      kicker: 'Events',
      title: 'onSelect and onDeSelect',
      copy: 'React callbacks expose selection changes, select-all, clear-all, lazy scrolling, and custom item creation.'
    },
    {
      kicker: 'Rendering',
      title: 'renderItem and renderBadge',
      copy: 'Pass React render functions for option rows and selected chips instead of framework templates.'
    },
    {
      kicker: 'Accessibility',
      title: 'ADA-compliant keyboard and ARIA support',
      copy: 'The trigger, clear-all action, option rows, lazy lists, selected chips, and listbox states expose keyboard flow and ARIA metadata.'
    },
    {
      kicker: 'Dialogs',
      title: 'appendToBody / tagToBody',
      copy: 'Set appendToBody inside modals, drawers, and overflow containers so the list is portaled to document.body and avoids clipping.'
    },
    {
      kicker: 'Layout',
      title: 'Placeholder alignment',
      copy: 'Empty placeholders and single values stay left aligned while remaining vertically centered inside the trigger on desktop and mobile.'
    }
  ];

  return (
    <div className="docs-shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">R</div>
          <div>
            <div className="topbar-eyebrow">Stackline maintained line</div>
            <h1>@stackline/react-multiselect-dropdown</h1>
          </div>
        </div>

        <div className="topbar-meta">
          <span className="meta-pill">React {docsMeta.reactFamily}</span>
          <span className="meta-pill primary">v{docsMeta.packageVersion}</span>
        </div>
      </header>

      <div className="docs-layout">
        <aside className="rail">
          <section className="rail-card">
            <div className="rail-label">Overview</div>
            <a className="rail-link" href="#install">Install</a>
            <a className="rail-link" href="#preview">Preview</a>
            <a className="rail-link" href="live/" target="_blank" rel="noopener">
              Live project
            </a>
            {stackBlitzHomeUrl ? (
              <a className="rail-link" href={stackBlitzHomeUrl} target="_blank" rel="noopener">
                StackBlitz
              </a>
            ) : null}
            <a className="rail-link" href="#api">API</a>
          </section>

          <section className="rail-card">
            <div className="rail-label">Examples</div>
            <nav className="example-nav" aria-label="React multiselect examples">
              {ROUTES.map((route) => (
                <a
                  key={route.path}
                  className={route.path === currentRoute.path ? 'example-link active' : 'example-link'}
                  href={`#/${route.path}`}>
                  {route.label}
                </a>
              ))}
            </nav>
          </section>

          <section className="rail-card">
            <div className="rail-label">Release line</div>
            <div className="release-item">
              <strong>Package</strong>
              <span>{docsMeta.packageVersion}</span>
            </div>
            <div className="release-item">
              <strong>React</strong>
              <span>{docsMeta.reactRuntime}</span>
            </div>
            <div className="release-item">
              <strong>Docs path</strong>
              <span>/{docsMeta.docsPath}/</span>
            </div>
            <div className="release-item">
              <strong>Promise</strong>
              <span>ADA-compliant keyboard/ARIA support</span>
            </div>
          </section>
        </aside>

        <main className="docs-main">
          <section className="preview-card" id="preview">
            <div className="preview-head">
              <div>
                <div className="setup-label">Live preview</div>
                <h3>{currentRoute.label}</h3>
                <p>
                  Running against package line <code>{docsMeta.packageVersion}</code> and React{' '}
                  <code>{docsMeta.reactRuntime}</code>.
                </p>
              </div>
              <div className="preview-actions">
                <span className="status-pill">Classic selector preserved</span>
                {currentStackBlitzUrl ? (
                  <a className="stackblitz-button" href={currentStackBlitzUrl} target="_blank" rel="noopener">
                    Open in StackBlitz
                  </a>
                ) : null}
              </div>
            </div>

            {currentStackBlitzUrl ? (
              <div className="preview-example-link-row">
                <span>StackBlitz example</span>
                <a href={currentStackBlitzUrl} target="_blank" rel="noopener">
                  {currentRoute.label}
                </a>
              </div>
            ) : null}

            <div className="preview-canvas">
              <ExamplePreview key={currentRoute.path} example={currentRoute.example} skin={skin} pushLog={pushLog} />
            </div>
          </section>

          <section className="hero-card">
            <span className="hero-badge">{docsMeta.badge}</span>
            <h2>Material-inspired multiselect, shaped for controlled React applications.</h2>
            <p className="hero-copy">
              This React {docsMeta.reactFamily} line keeps the familiar Stackline settings contract while using
              idiomatic React state, render functions, refs, and callback events. Version{' '}
              <code>{docsMeta.packageVersion}</code> includes ADA-compliant keyboard and ARIA behavior, accurate badge
              counters, clear-all controls, dialog-safe body overlays, left-aligned vertically centered placeholders, and
              matching classic/material/dark/custom/brand skins.
            </p>

            <div className="pill-row">
              {featurePills.map((pill) => (
                <span className="feature-pill" key={pill}>
                  {pill}
                </span>
              ))}
            </div>

            <div className="compat-grid">
              <div className="compat-card">
                <strong>React state first</strong>
                Keep selection in component state through <code>selectedItems</code> and <code>onChange</code>.
              </div>
              <div className="compat-card">
                <strong>Consistent behavior where it matters</strong>
                Skins, counters, keyboard behavior, and body overlays follow the validated Stackline behavior.
              </div>
              <div className="compat-card">
                <strong>Render functions instead of templates</strong>
                Customize option rows and selected chips with React functions, not string templates.
              </div>
            </div>
          </section>

          <section className="setup-grid" id="install">
            <article className="setup-card">
              <div className="setup-label">Step 1</div>
              <h3>Install the package</h3>
              <pre>{installCode}</pre>
            </article>

            <article className="setup-card">
              <div className="setup-label">Step 2</div>
              <h3>Import the component</h3>
              <pre>{setupCode}</pre>
            </article>

            <article className="setup-card">
              <div className="setup-label">Step 3</div>
              <h3>Create settings</h3>
              <pre>{settingsCode}</pre>
            </article>

            <article className="setup-card">
              <div className="setup-label">Step 4</div>
              <h3>Render with controlled state</h3>
              <pre>{renderCode}</pre>
            </article>
          </section>

          <section className="api-grid" id="api">
            {apiCards.map((card) => (
              <article className="api-card" key={card.title}>
                <div className="setup-label">{card.kicker}</div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </section>

        </main>
      </div>
    </div>
  );
}

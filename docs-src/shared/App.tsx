import { useEffect, useMemo, useRef, useState } from 'react';
import {
  MultiSelectDropdown,
  useMultiSelectDropdown,
  useMultiSelectState,
  type MultiSelectDropdownHandle,
  type MultiSelectDropdownSlots
} from '@stackline/react-multiselect-dropdown';
import { COUNTRIES, PEOPLE_SOURCE, countryFlagClass } from './demoData';
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

const HEADLESS_COUNTRIES: CountryOption[] = COUNTRIES;

const headlessInstallCode = [
  `import 'flag-icons/css/flag-icons.min.css';`,
  `import { useMultiSelectDropdown } from '@stackline/react-multiselect-dropdown';`,
  ``,
  `const countries = [`,
  `  { id: 1, itemName: 'Brazil', flag: 'BR', capital: 'Brasilia', region: 'Americas' },`,
  `  { id: 2, itemName: 'Canada', flag: 'CA', capital: 'Ottawa', region: 'Americas' },`,
  `  { id: 3, itemName: 'Portugal', flag: 'PT', capital: 'Lisbon', region: 'Europe' }`,
  `];`,
  ``,
  `function flagClass(code) {`,
  `  return 'fi fi-' + code.toLowerCase();`,
  `}`,
  ``,
  `const dropdown = useMultiSelectDropdown({`,
  `  data: countries,`,
  `  selectedItems,`,
  `  onChange: setSelectedItems,`,
  `  settings: {`,
  `    text: 'Choose countries',`,
  `    enableSearchFilter: true,`,
  `    groupBy: 'region',`,
  `    primaryKey: 'id',`,
  `    labelKey: 'itemName'`,
  `  }`,
  `});`
].join('\n');

const headlessMarkupCode = [
  `<div className="country-picker" {...dropdown.getRootProps()}>`,
  `  <button className="country-trigger" {...dropdown.getTriggerProps()}>`,
  `    <span>{dropdown.label}</span>`,
  `    <strong>{dropdown.isOpen ? 'Close' : 'Open'}</strong>`,
  `  </button>`,
  `  <div className="country-chips">`,
  `    {dropdown.selectedItems.map((item) => (`,
  `      <span className="country-chip" key={dropdown.getItemKey(item)}>`,
  `        <span className={'country-flag ' + flagClass(item.flag)} aria-hidden="true" />`,
  `        {dropdown.getItemLabel(item)}`,
  `        <button {...dropdown.getRemoveButtonProps(item)}>x</button>`,
  `      </span>`,
  `    ))}`,
  `  </div>`,
  ``,
  `  {dropdown.isOpen ? (`,
  `    <div className="country-panel" {...dropdown.getListboxProps()}>`,
  `      <input className="country-search" {...dropdown.getSearchInputProps()} />`,
  ``,
  `      {dropdown.visibleOptions.map((option) => (`,
  `        <div`,
  `          key={option.key}`,
  `          {...dropdown.getOptionProps(option, {`,
  `            className: option.selected ? 'country-option selected' : 'country-option'`,
  `          })}>`,
  `          <span className={'country-flag ' + flagClass(option.item.flag)} aria-hidden="true" />`,
  `          <span>`,
  `            <strong>{option.label}</strong>`,
  `            <small>{option.item.capital} - {option.item.region}</small>`,
  `          </span>`,
  `          <input type="checkbox" checked={option.selected} readOnly />`,
  `        </div>`,
  `      ))}`,
  `    </div>`,
  `  ) : null}`,
  `</div>`
].join('\n');

const headlessStateCode = [
  `import { useMultiSelectState } from '@stackline/react-multiselect-dropdown';`,
  ``,
  `const state = useMultiSelectState({`,
  `  data: countries,`,
  `  selectedItems,`,
  `  onChange: setSelectedItems,`,
  `  settings: {`,
  `    primaryKey: 'id',`,
  `    labelKey: 'itemName',`,
  `    enableSearchFilter: true`,
  `  }`,
  `});`,
  ``,
  `// Own the layout while reusing selection/filtering rules.`,
  `state.selectItem(country);`,
  `state.removeItem(country);`
].join('\n');

const headlessAriaHookCode = [
  `const [selectedItems, setSelectedItems] = useState(countries.slice(0, 3));`,
  ``,
  `const dropdown = useMultiSelectDropdown({`,
  `  data: countries,`,
  `  selectedItems,`,
  `  onChange: setSelectedItems,`,
  `  settings: {`,
  `    text: 'Build your own picker',`,
  `    enableSearchFilter: true,`,
  `    searchPlaceholderText: 'Search country or capital',`,
  `    groupBy: 'region',`,
  `    selectGroup: true,`,
  `    badgeShowLimit: 2,`,
  `    primaryKey: 'id',`,
  `    labelKey: 'itemName',`,
  `    clearAll: true,`,
  `    ariaLabel: 'Custom country multiselect',`,
  `    listboxAriaLabel: 'Custom country options'`,
  `  }`,
  `});`
].join('\n');

const headlessAriaMarkupCode = [
  `<section {...dropdown.getRootProps({ className: 'country-shell' })}>`,
  `  <button {...dropdown.getTriggerProps({ className: 'country-trigger' })}>`,
  `    <span>{dropdown.label}</span>`,
  `    <strong>{dropdown.isOpen ? 'Expanded' : 'Collapsed'}</strong>`,
  `  </button>`,
  ``,
  `  <div className="country-selected" aria-live="polite">`,
  `    {dropdown.visibleBadges.map((item) => (`,
  `      <span key={dropdown.getItemKey(item)}>`,
  `        {dropdown.getItemLabel(item)}`,
  `        <button {...dropdown.getRemoveButtonProps(item)}>Remove</button>`,
  `      </span>`,
  `    ))}`,
  `    {dropdown.hiddenBadgeCount ? <b>+{dropdown.hiddenBadgeCount}</b> : null}`,
  `  </div>`,
  ``,
  `  {dropdown.isOpen ? (`,
  `    <div className="country-panel">`,
  `      <input {...dropdown.getSearchInputProps({ className: 'country-search' })} />`,
  `      <div {...dropdown.getListboxProps({ className: 'country-listbox' })}>`,
  `        {dropdown.groups.map((group) => (`,
  `          <div key={group.name} role="group" aria-label={group.name}>`,
  `            <header>{group.name}</header>`,
  `            {group.items.map((option) => (`,
  `              <div key={option.key} {...dropdown.getOptionProps(option)}>`,
  `                <span aria-hidden>{option.selected ? 'selected' : ''}</span>`,
  `                <strong>{option.label}</strong>`,
  `              </div>`,
  `            ))}`,
  `          </div>`,
  `        ))}`,
  `      </div>`,
  `    </div>`,
  `  ) : null}`,
  `</section>`
].join('\n');

const headlessAriaContractCode = [
  `getTriggerProps()`,
  `  role="combobox"`,
  `  aria-expanded`,
  `  aria-controls`,
  `  aria-activedescendant`,
  ``,
  `getListboxProps()`,
  `  role="listbox"`,
  `  aria-multiselectable`,
  `  stable id`,
  ``,
  `getOptionProps(option)`,
  `  role="option"`,
  `  aria-selected`,
  `  aria-checked`,
  `  tabIndex and keyboard handlers`,
  ``,
  `The app owns the tags, classes, layout, icons, and copy.`,
  `Stackline owns the state machine and accessibility contract.`
].join('\n');

const slotsSetupCode = [
  `import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';`,
  `import type { MultiSelectDropdownSlots } from '@stackline/react-multiselect-dropdown';`,
  ``,
  `const slots: MultiSelectDropdownSlots<Country> = {`,
  `  Trigger: ({ props, children, state }) => (`,
  `    <div {...props} className={props.className + ' country-trigger'}>`,
  `      <span>{state.selectedItems.length || 'No'} selected</span>`,
  `      {children}`,
  `    </div>`,
  `  ),`,
  `  Option: ({ props, option, checkbox }) => (`,
  `    <div {...props} className={props.className + ' country-option'}>`,
  `      {checkbox}`,
  `      <strong>{option.label}</strong>`,
  `      <small>{option.item.capital}</small>`,
  `    </div>`,
  `  ),`,
  `  MenuFooter: ({ props, state }) => (`,
  `    <div {...props}>{state.filteredItems.length} visible options</div>`,
  `  )`,
  `};`
].join('\n');

const slotsUsageCode = [
  `<MultiSelectDropdown`,
  `  data={countries}`,
  `  selectedItems={selectedCountries}`,
  `  onChange={setSelectedCountries}`,
  `  settings={settings}`,
  `  slots={slots}`,
  `/>`,
  ``,
  `// Always spread slot props. They carry refs, ARIA, ids,`,
  `// keyboard handlers, click handlers, classes, and overlay styles.`
].join('\n');

const typedFactoryCode = [
  `import { createMultiSelectDropdown } from '@stackline/react-multiselect-dropdown';`,
  ``,
  `type Country = {`,
  `  id: number;`,
  `  itemName: string;`,
  `  capital: string;`,
  `  region: string;`,
  `};`,
  ``,
  `const CountryMultiselect = createMultiSelectDropdown<Country>();`,
  ``,
  `const settings = CountryMultiselect.defineSettings({`,
  `  text: 'Choose countries',`,
  `  primaryKey: 'id',`,
  `  labelKey: 'itemName',`,
  `  searchBy: ['itemName', 'capital'],`,
  `  groupBy: 'region',`,
  `  enableSearchFilter: true`,
  `});`,
  ``,
  `const slots = CountryMultiselect.defineSlots({`,
  `  Option: ({ props, option, checkbox }) => (`,
  `    <div {...props}>`,
  `      {checkbox}`,
  `      <strong>{option.item.itemName}</strong>`,
  `      <small>{option.item.capital} - {option.item.region}</small>`,
  `    </div>`,
  `  )`,
  `});`,
  ``,
  `<CountryMultiselect.Dropdown`,
  `  data={countries}`,
  `  selectedItems={selectedCountries}`,
  `  onChange={setSelectedCountries}`,
  `  settings={settings}`,
  `  slots={slots}`,
  `/>`
].join('\n');

function exampleById(id: string) {
  const example = LIVE_EXAMPLES.find((item) => item.id === id);
  if (!example) {
    throw new Error(`Missing React docs example: ${id}`);
  }
  return example;
}

const ROUTES: DocsRoute[] = [
  { path: 'basic', label: 'Basic usage', example: exampleById('basic-counter') },
  { path: 'single-selection', label: 'Single selection', example: exampleById('single-selection') },
  { path: 'search-filter', label: 'Search filter', example: exampleById('search-filter') },
  { path: 'custom-search-api', label: 'Custom Search from API', example: exampleById('custom-search-api') },
  { path: 'search-filter-by-property', label: 'Search Filter By Property', example: exampleById('search-by') },
  { path: 'search-add-new-item', label: 'Search and Add New Item', example: exampleById('add-filter-item') },
  { path: 'group-by', label: 'Group By', example: exampleById('grouped') },
  { path: 'templating', label: 'Templating', example: exampleById('custom-rendering') },
  { path: 'template-driven-forms', label: 'Template-driven forms', example: exampleById('template-driven-forms') },
  { path: 'reactive-forms', label: 'Reactive forms', example: exampleById('form-validation') },
  { path: 'virtual-scrolling', label: 'Long List Keyboard Scroll', example: exampleById('long-list') },
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

function buildLiveProjectUrl(routePath: string) {
  const liveRoutePath = routePath === 'basic' ? 'classic' : routePath;

  if (typeof window === 'undefined') {
    return `live/#/${liveRoutePath}`;
  }

  const { protocol, hostname, port, pathname } = window.location;

  if (['4358', '4362'].includes(port)) {
    return `${protocol}//${hostname}:4324/#/${liveRoutePath}`;
  }

  const livePathIndex = pathname.indexOf('/live/');
  const basePath =
    livePathIndex >= 0
      ? pathname.slice(0, livePathIndex + 1)
      : pathname.endsWith('/')
        ? pathname
        : `${pathname}/`;

  return `${basePath}live/#/${liveRoutePath}`;
}

function CountryRow({ item }: { item: CountryOption }) {
  return (
    <div className="country-row">
      <span className={`country-flag ${countryFlagClass(item.flag)}`} aria-hidden="true" />
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

function StateHookShowcase() {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>([
    HEADLESS_COUNTRIES[0],
    HEADLESS_COUNTRIES[2]
  ]);
  const state = useMultiSelectState<CountryOption>({
    data: HEADLESS_COUNTRIES,
    selectedItems,
    onChange: setSelectedItems,
    settings: {
      text: 'State hook countries',
      enableSearchFilter: true,
      searchPlaceholderText: 'Filter state options',
      groupBy: 'region',
      badgeShowLimit: 2,
      primaryKey: 'id',
      labelKey: 'itemName',
      clearAll: true
    }
  });

  return (
    <article className="state-hook-card">
      <div className="setup-label">State hook</div>
      <h3>useMultiSelectState escape hatch</h3>
      <p>
        Keep the tested selection, filtering, grouping, badge limits, and async-safe add flow while building
        the combobox shell yourself.
      </p>

      <div className="state-hook-control">
        <div className="state-hook-actions">
          <button
            type="button"
            onClick={() => state.selectAll(state.selectableItems, Boolean(state.filter))}
            disabled={!state.selectableItems.length || state.allFilteredSelected}>
            Select all visible
          </button>
          <button type="button" onClick={() => state.clearSelection()} disabled={!state.selectedItems.length}>
            Clear all
          </button>
          <button type="button" onClick={() => state.removeLastSelectedItem()} disabled={!state.selectedItems.length}>
            Remove last
          </button>
        </div>

        <div className="state-hook-selected">
          {state.visibleBadges.map((item) => (
            <button
              key={state.getItemKey(item)}
              type="button"
              onClick={() => state.removeItem(item)}
              onKeyDown={(event) => {
                if (event.key === 'Backspace' || event.key === 'Delete') {
                  event.preventDefault();
                  state.removeItem(item);
                }
              }}>
              {state.getItemLabel(item)}
            </button>
          ))}
          {state.hiddenBadgeCount > 0 ? <span>+{state.hiddenBadgeCount}</span> : null}
        </div>

        <input
          value={state.filter}
          placeholder="Filter state options"
          onChange={(event) => state.setFilter(event.target.value)}
        />
      </div>

      <div className="state-hook-options" aria-label="State hook countries">
        {state.filteredItems.map((item) => (
          <button
            key={state.getItemKey(item)}
            type="button"
            className={state.isSelected(item) ? 'selected' : ''}
            onClick={() => state.selectItem(item)}>
            {state.isSelected(item) ? 'Selected' : 'Select'} {state.getItemLabel(item)}
          </button>
        ))}
      </div>
    </article>
  );
}

function SlotsShowcase({ packageVersion }: { packageVersion: string }) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>([
    HEADLESS_COUNTRIES[0],
    HEADLESS_COUNTRIES[1],
    HEADLESS_COUNTRIES[2]
  ]);
  const settings = useMemo(
    () => ({
      text: 'Custom slot shell',
      enableSearchFilter: true,
      searchPlaceholderText: 'Search country',
      groupBy: 'region',
      selectGroup: true,
      badgeShowLimit: 2,
      primaryKey: 'id',
      labelKey: 'itemName',
      clearAll: true,
      maxHeight: 230,
      skin: 'classic'
    }),
    []
  );
  const slots = useMemo<MultiSelectDropdownSlots<CountryOption>>(
    () => ({
      Trigger: ({ props, children, state }) => (
        <div {...props} className={`${props.className ?? ''} slot-doc-trigger`}>
          <span className="slot-doc-trigger-copy">
            <strong>{state.selectedItems.length || 'No'} selected</strong>
            <small>Guided custom HTML, built on the tested component behavior.</small>
          </span>
          {children}
        </div>
      ),
      Badge: ({ props, item, removeButton }) => (
        <span {...props} className={`${props.className ?? ''} slot-doc-badge`}>
          <span className={`slot-doc-flag ${countryFlagClass(item.flag)}`} aria-hidden="true" />
          <strong>{item.itemName}</strong>
          {removeButton}
        </span>
      ),
      Search: ({ props, inputProps, clearButtonProps, query, icon, clearIcon }) => (
        <div {...props} className={`${props.className ?? ''} slot-doc-search`}>
          {icon}
          <input {...inputProps} />
          {query ? <button {...clearButtonProps}>{clearIcon}</button> : null}
        </div>
      ),
      GroupHeader: ({ props, group, action }) => (
        <div {...props} className={`${props.className ?? ''} slot-doc-group-head`}>
          <span>{group.name}</span>
          <small>{group.items.length} options</small>
          {action}
        </div>
      ),
      Option: ({ props, option, checkbox }) => (
        <div {...props} className={`${props.className ?? ''} slot-doc-option`}>
          {checkbox}
          <span className={`slot-doc-flag ${countryFlagClass(option.item.flag)}`} aria-hidden="true" />
          <span>
            <strong>{option.label}</strong>
            <small>{option.item.capital} - {option.item.region}</small>
          </span>
        </div>
      ),
      MenuFooter: ({ props, state }) => (
        <div {...props} className={`${props.className ?? ''} slot-doc-footer`}>
          <span>{state.filteredItems.length} visible options</span>
          <span aria-hidden="true"> | </span>
          <span>{state.selectedItems.length} selected</span>
        </div>
      )
    }),
    []
  );

  return (
    <section className="slots-section" id="slots">
      <div className="slots-intro">
        <div>
          <div className="setup-label">New in {packageVersion}</div>
          <h2>Slots API</h2>
          <p>
            Slots are the middle path: keep the production combobox behavior and replace only the HTML pieces your
            design system needs to own. It is friendlier than a full headless build, but more flexible than
            <code> renderItem</code> and <code>renderBadge</code>.
          </p>
        </div>
        <div className="slot-principles">
          <span>Spread props</span>
          <span>Keep ARIA</span>
          <span>Own structure</span>
          <span>Keep keyboard</span>
        </div>
      </div>

      <div className="slots-layout">
        <article className="slots-demo">
          <div className="setup-label">Live custom slot shell</div>
          <MultiSelectDropdown
            data={HEADLESS_COUNTRIES}
            selectedItems={selectedItems}
            onChange={setSelectedItems}
            settings={settings}
            slots={slots}
          />
        </article>

        <div className="slots-code-grid">
          <article>
            <div className="setup-label">Define slots</div>
            <pre>{slotsSetupCode}</pre>
          </article>
          <article>
            <div className="setup-label">Use slots</div>
            <pre>{slotsUsageCode}</pre>
          </article>
        </div>
      </div>
    </section>
  );
}

function TypedFactoryShowcase({ packageVersion }: { packageVersion: string }) {
  return (
    <section className="setup-grid typed-factory-section" id="typed-factory">
      <article className="setup-card">
        <div className="setup-label">New in {packageVersion}</div>
        <h3>Type-safe factory</h3>
        <p>
          Use <code>createMultiSelectDropdown&lt;T&gt;()</code> when a feature or design-system wrapper should bind the
          item type once and reuse it across the component, settings, slots, and hooks.
        </p>
        <pre>{typedFactoryCode}</pre>
      </article>

      <article className="setup-card">
        <div className="setup-label">Compile-time checks</div>
        <h3>Settings and slots stay tied to the same item type</h3>
        <ul>
          <li>
            <code>data</code>, <code>selectedItems</code>, <code>onChange</code>, events, slots, and hooks use the same
            item type.
          </li>
          <li>
            <code>primaryKey</code>, <code>labelKey</code>, <code>searchBy</code>, and <code>groupBy</code> are checked
            against <code>keyof T</code> for object data.
          </li>
          <li>
            <code>defineSlots</code> gives each slot a typed <code>option.item</code> and typed selection actions.
          </li>
          <li>
            Calling <code>createMultiSelectDropdown()</code> without a generic defaults to <code>never</code>, so teams
            are guided to choose a real item type for reusable wrappers.
          </li>
        </ul>
      </article>
    </section>
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

function HeadlessAriaShowcase({ packageVersion }: { packageVersion: string }) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>([
    HEADLESS_COUNTRIES[0],
    HEADLESS_COUNTRIES[1],
    HEADLESS_COUNTRIES[2]
  ]);
  const dropdown = useMultiSelectDropdown<CountryOption>({
    data: HEADLESS_COUNTRIES,
    selectedItems,
    onChange: setSelectedItems,
    settings: {
      text: 'Build your own picker',
      enableSearchFilter: true,
      searchPlaceholderText: 'Search country or capital',
      groupBy: 'region',
      selectGroup: true,
      badgeShowLimit: 2,
      primaryKey: 'id',
      labelKey: 'itemName',
      clearAll: true,
      ariaLabel: 'Custom country multiselect',
      listboxAriaLabel: 'Custom country options',
      searchAriaLabel: 'Search custom country options',
      clearAllAriaLabel: 'Clear custom country selection'
    }
  });
  const selectedSummary = dropdown.selectedItems.length
    ? `${dropdown.selectedItems.length} selected`
    : 'No selected countries';

  return (
    <section className="headless-aria-section" id="headless-aria">
      <div className="headless-aria-intro">
        <div>
          <div className="setup-label">New in {packageVersion}</div>
          <h2>100% Custom HTML With ARIA</h2>
          <p>
            Use <code>useMultiSelectDropdown</code> when your design system needs to own every tag, class,
            wrapper, icon, and layout decision. The hook returns prop getters that carry the combobox contract
            into your custom HTML.
          </p>
        </div>
        <div className="headless-aria-badges" aria-label="Headless ARIA scope">
          <span>Custom trigger</span>
          <span>Custom chips</span>
          <span>Custom listbox</span>
          <span>ARIA props</span>
          <span>Keyboard flow</span>
        </div>
      </div>

      <div className="headless-aria-layout">
        <div
          {...dropdown.getRootProps({
            className: 'headless-aria-demo',
            'aria-label': 'Custom country multiselect demo'
          })}>
          <header className="headless-aria-demo-head">
            <span>Product-owned markup</span>
            <button {...dropdown.getClearAllButtonProps({ className: 'headless-aria-clear' })}>
              Clear all
            </button>
          </header>

          <button {...dropdown.getTriggerProps({ className: 'headless-aria-trigger' })}>
            <span>
              <small>Deployment markets</small>
              <strong>{dropdown.label}</strong>
            </span>
            <b>{dropdown.isOpen ? 'Expanded' : 'Collapsed'}</b>
          </button>

          <div className="headless-aria-selected" aria-live="polite" aria-label={selectedSummary}>
            {dropdown.visibleBadges.length ? (
              dropdown.visibleBadges.map((item) => (
                <span className="headless-aria-chip" key={dropdown.getItemKey(item)}>
                  <span className={`headless-aria-flag ${countryFlagClass(item.flag)}`} aria-hidden="true" />
                  {dropdown.getItemLabel(item)}
                  <button {...dropdown.getRemoveButtonProps(item)} aria-label={`Remove ${item.itemName}`}>
                    <span aria-hidden="true">x</span>
                  </button>
                </span>
              ))
            ) : (
              <span className="headless-aria-empty">No selected countries</span>
            )}
            {dropdown.hiddenBadgeCount > 0 ? (
              <span className="headless-aria-counter">+{dropdown.hiddenBadgeCount}</span>
            ) : null}
          </div>

          {dropdown.isOpen ? (
            <div className="headless-aria-panel">
              <label className="headless-aria-search-label" htmlFor="headless-aria-search-docs">
                Search countries
              </label>
              <input
                {...dropdown.getSearchInputProps({
                  className: 'headless-aria-search',
                  id: 'headless-aria-search-docs'
                })}
              />

              <div className="headless-aria-actions">
                <button
                  type="button"
                  onClick={() => dropdown.selectAll(dropdown.visibleOptions.map((option) => option.item))}
                  disabled={!dropdown.visibleOptions.length || dropdown.allFilteredSelected}>
                  Select visible
                </button>
                <button {...dropdown.getClearAllButtonProps({ className: 'headless-aria-action-clear' })}>
                  Clear selected
                </button>
              </div>

              <div
                {...dropdown.getListboxProps({
                  className: 'headless-aria-listbox',
                  'aria-label': 'Grouped custom country options'
                })}>
                {dropdown.groups.map((group) => (
                  <section className="headless-aria-group" key={group.name} role="group" aria-label={group.name}>
                    <header className="headless-aria-group-head">
                      <span>{group.name}</span>
                      <button
                        type="button"
                        disabled={group.disabled}
                        onClick={() => dropdown.toggleGroup(group.name, group.items.map((option) => option.item))}>
                        {group.selected ? 'Clear group' : 'Select group'}
                      </button>
                    </header>
                    {group.items.map((option) => (
                      <div
                        key={option.key}
                        {...dropdown.getOptionProps(option, {
                          className: option.selected ? 'headless-aria-option selected' : 'headless-aria-option'
                        })}>
                        <span className="headless-aria-check" data-checked={option.selected} aria-hidden="true" />
                        <span
                          className={`headless-aria-flag ${countryFlagClass(option.item.flag)}`}
                          aria-hidden="true"
                        />
                        <span className="headless-aria-option-copy">
                          <strong>{option.label}</strong>
                          <small>{option.item.capital} - {option.item.region}</small>
                        </span>
                        <span className="headless-aria-state">
                          aria-selected={String(option.selected)}
                          <br />
                          aria-checked={String(option.selected)}
                        </span>
                      </div>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          ) : null}

          <dl className="headless-aria-audit">
            <div>
              <dt>Trigger</dt>
              <dd>role combobox</dd>
            </div>
            <div>
              <dt>Listbox id</dt>
              <dd>{dropdown.listboxId}</dd>
            </div>
            <div>
              <dt>Active option</dt>
              <dd>{dropdown.activeDescendantId || 'none'}</dd>
            </div>
            <div>
              <dt>Visible</dt>
              <dd>{dropdown.visibleOptions.length} options</dd>
            </div>
          </dl>
        </div>

        <div className="headless-aria-code-grid">
          <article>
            <div className="setup-label">Hook</div>
            <pre>{headlessAriaHookCode}</pre>
          </article>
          <article>
            <div className="setup-label">Custom HTML</div>
            <pre>{headlessAriaMarkupCode}</pre>
          </article>
          <article>
            <div className="setup-label">ARIA contract</div>
            <pre>{headlessAriaContractCode}</pre>
          </article>
        </div>
      </div>
    </section>
  );
}

function HeadlessShowcase({ packageVersion }: { packageVersion: string }) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>([
    HEADLESS_COUNTRIES[0],
    HEADLESS_COUNTRIES[1]
  ]);
  const dropdown = useMultiSelectDropdown<CountryOption>({
    data: HEADLESS_COUNTRIES,
    selectedItems,
    onChange: setSelectedItems,
    settings: {
      text: 'Choose countries',
      enableSearchFilter: true,
      searchPlaceholderText: 'Search country',
      groupBy: 'region',
      selectGroup: true,
      badgeShowLimit: 2,
      primaryKey: 'id',
      labelKey: 'itemName',
      clearAll: true,
      ariaLabel: 'Headless countries'
    }
  });

  return (
    <section className="headless-section" id="headless">
      <div className="headless-intro">
        <div>
          <div className="setup-label">New in {packageVersion}</div>
          <h2>Headless API</h2>
          <p>
            Use <code>useMultiSelectDropdown</code> when your app needs headless-style control over
            markup and CSS while keeping Stackline selection, filtering, grouping, keyboard behavior,
            callbacks, and ARIA prop getters.
          </p>
        </div>
        <div className="headless-badges" aria-label="Headless feature scope">
          <span>Own markup</span>
          <span>Own CSS</span>
          <span>ARIA getters</span>
          <span>Keyboard flow</span>
          <span>State hook</span>
          <span>Async-safe</span>
        </div>
      </div>

      <div className="headless-layout">
        <div className="headless-demo" {...dropdown.getRootProps()}>
          <div className="headless-demo-header">
            <span>Live headless dropdown</span>
            <button {...dropdown.getClearAllButtonProps({ className: 'headless-clear' })}>
              Clear
            </button>
          </div>

          <button {...dropdown.getTriggerProps({ className: 'headless-trigger' })}>
            <span>{dropdown.label}</span>
            <strong>{dropdown.isOpen ? 'Close' : 'Open'}</strong>
          </button>

          <div className="headless-selected">
            {dropdown.selectedItems.length ? (
              dropdown.selectedItems.map((item) => (
                <span className="headless-chip" key={dropdown.getItemKey(item)}>
                  <span className={`headless-flag ${countryFlagClass(item.flag)}`} aria-hidden="true" />
                  {dropdown.getItemLabel(item)}
                  <button {...dropdown.getRemoveButtonProps(item)}>&times;</button>
                </span>
              ))
            ) : (
              <span className="headless-empty">No selected countries</span>
            )}
          </div>

          {dropdown.isOpen ? (
            <div className="headless-panel" {...dropdown.getListboxProps()}>
              <input className="headless-search" {...dropdown.getSearchInputProps()} />

              {dropdown.groups.length ? (
                dropdown.groups.map((group) => (
                  <div className="headless-group" key={group.name}>
                    <div className="headless-group-head">
                      <span>{group.name}</span>
                      <button
                        type="button"
                        disabled={group.disabled}
                        onClick={() => dropdown.toggleGroup(group.name, group.items.map((option) => option.item))}>
                        {group.selected ? 'Clear group' : 'Select group'}
                      </button>
                    </div>

                    {group.items.map((option) => (
                      <div
                        key={option.key}
                        {...dropdown.getOptionProps(option, {
                          className: option.selected ? 'headless-option selected' : 'headless-option'
                        })}>
                        <span className="headless-check" data-checked={option.selected}>
                          {option.selected ? '' : ''}
                        </span>
                        <span className={`headless-flag ${countryFlagClass(option.item.flag)}`} aria-hidden="true" />
                        <span>
                          <strong>{option.label}</strong>
                          <small>{option.item.capital} - {option.item.region}</small>
                        </span>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="headless-empty">No matching options</div>
              )}
            </div>
          ) : null}
        </div>

        <div className="headless-code-grid">
          <article>
            <div className="setup-label">Hook</div>
            <pre>{headlessInstallCode}</pre>
          </article>
          <article>
            <div className="setup-label">Markup</div>
            <pre>{headlessMarkupCode}</pre>
          </article>
          <article>
            <div className="setup-label">State only</div>
            <pre>{headlessStateCode}</pre>
          </article>
        </div>
      </div>

      <div className="contract-grid">
        <article>
          <div className="setup-label">Combobox contract</div>
          <h3>Keyboard behavior that stays predictable</h3>
          <ul>
            <li>Focus returns to search or trigger after select, remove, clear, and select-all actions.</li>
            <li>Multiselect options expose matching <code>aria-selected</code> and <code>aria-checked</code> values.</li>
            <li>Space, Tab, arrows, Escape, and focused badge Backspace/Delete are enabled by default.</li>
            <li>Each keyboard behavior can be disabled through <code>settings.keyboard</code>.</li>
            <li><code>settings.keyboard.spaceOptionAction</code> chooses whether Space keeps focus on the current option or moves to the next enabled option.</li>
            <li>Empty-query Backspace in search is off by default so selected values are not removed accidentally.</li>
            <li>Focused badge remove buttons support Backspace/Delete for intentional removal.</li>
            <li>Escape closes the list without clearing selected values.</li>
            <li>Late async add-item responses are ignored when a newer request has already won.</li>
            <li>Selected object values stay available even when async option data refreshes.</li>
          </ul>
        </article>

        <StateHookShowcase />
      </div>
    </section>
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
  const liveProjectUrl = buildLiveProjectUrl(currentRoute.path);

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
    'Slots API',
    'Custom renderers',
    'Lazy loading',
    'Ref methods',
    'Headless hook',
    'State hook',
    'Accessibility-focused and keyboard/ARIA tested',
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
      title: 'slots, renderItem and renderBadge',
      copy: 'Use render functions for inner content, or slots when the trigger, menu, search shell, badges, options, groups, and footer need custom HTML.'
    },
    {
      kicker: 'Slots',
      title: 'Guided structural customization',
      copy: 'Replace component pieces while preserving supplied refs, ARIA attributes, keyboard handlers, ids, classes, and body-overlay positioning.'
    },
    {
      kicker: 'Headless',
      title: 'useMultiSelectDropdown and useMultiSelectState',
      copy: 'Use prop getters for a full custom combobox shell, or use the state hook when your app wants to own every element.'
    },
    {
      kicker: 'Accessibility',
      title: 'Accessibility-focused and keyboard/ARIA tested support',
      copy: 'The trigger, clear-all action, option rows, lazy lists, selected chips, and listbox states expose keyboard flow, aria-selected, aria-checked, and ARIA metadata.'
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
            <a className="rail-link" href="#typed-factory">Type-safe factory</a>
            <a className="rail-link" href="#slots">Slots API</a>
            <a className="rail-link" href="#headless-aria">Headless HTML</a>
            <a className="rail-link" href="#headless">Headless API</a>
            <a className="rail-link" href={liveProjectUrl} target="_blank" rel="noopener">
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
              <span>Accessibility-focused and keyboard/ARIA tested support</span>
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
              <code>{docsMeta.packageVersion}</code> includes accessibility-focused and keyboard/ARIA tested behavior, accurate badge
              counters, clear-all controls, dialog-safe body overlays, a headless hook, left-aligned vertically centered
              placeholders, a guided Slots API, and matching classic/material/dark/custom/brand skins.
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

          <TypedFactoryShowcase packageVersion={docsMeta.packageVersion} />

          <SlotsShowcase packageVersion={docsMeta.packageVersion} />

          <HeadlessAriaShowcase packageVersion={docsMeta.packageVersion} />

          <HeadlessShowcase packageVersion={docsMeta.packageVersion} />

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

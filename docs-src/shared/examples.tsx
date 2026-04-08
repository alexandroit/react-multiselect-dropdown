import { useEffect, useMemo, useRef, useState, type ComponentType } from 'react';
import {
  MultiSelectDropdown,
  type DropdownRenderContext,
  type DropdownSettings,
  type MultiSelectDropdownHandle
} from '@stackline/react-multiselect-dropdown';
import type {
  CountryOption,
  PersonOption,
  SkillOption,
  SpecialtyOption
} from './demoData';
import {
  COUNTRIES,
  CUSTOMERS,
  DIRECTORY_SPECIALTIES,
  FRUITS,
  PEOPLE_SOURCE,
  SKILLS,
  USE_CASES,
  delay,
  fetchCountries,
  fetchPeopleChunk,
  searchCountries
} from './demoData';

export type DemoProps = {
  pushLog: (message: string) => void;
  reactLine: string;
};

export type ExampleDefinition = {
  id: string;
  label: string;
  description: string;
  group: string;
  code: Array<{ label: string; code: string }>;
  Demo: ComponentType<DemoProps>;
};

function previewCode(lines: string[]) {
  return lines.join('\n');
}

function eventCallbacks<T>(
  pushLog: (message: string) => void,
  name: string
) {
  return {
    onSelect: (item: T) => pushLog(`${name} select: ${JSON.stringify(item)}`),
    onDeSelect: (item: T) => pushLog(`${name} deselect: ${JSON.stringify(item)}`),
    onSelectAll: (items: T[]) => pushLog(`${name} select all: ${items.length} items`),
    onDeSelectAll: () => pushLog(`${name} deselect all`),
    onOpen: () => pushLog(`${name} opened`),
    onClose: () => pushLog(`${name} closed`)
  };
}

function DemoCard({
  title,
  description,
  children,
  controls
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  controls?: React.ReactNode;
}) {
  return (
    <div className="demo-card">
      <div className="demo-card-head">
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        {controls ? <div className="demo-controls">{controls}</div> : null}
      </div>
      {children}
    </div>
  );
}

function countrySettings(extra?: Partial<DropdownSettings<CountryOption>>) {
  return {
    text: 'Select Countries',
    enableSearchFilter: true,
    primaryKey: 'id',
    labelKey: 'itemName',
    tagToBody: false,
    ...extra
  } satisfies DropdownSettings<CountryOption>;
}

function BasicExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 4));

  return (
    <DemoCard
      title="Basic example"
      description="Object data, search, select all, and the Angular-style settings object.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 6)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings()}
        {...eventCallbacks<CountryOption>(pushLog, 'Basic example')}
      />
    </DemoCard>
  );
}

function SingleSelectionExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 1));

  return (
    <DemoCard
      title="Single selection"
      description="Keeps only one value, stays searchable, and allows adding a new item from the filter.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 6)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({
          singleSelection: true,
          addNewItemOnFilter: true,
          text: 'Select Country'
        })}
        onAddFilterNewItem={(query) => {
          pushLog(`Single selection add item: ${query}`);
          return {
            id: Date.now(),
            itemName: query,
            name: query.toUpperCase().slice(0, 2),
            capital: query,
            category: 'Custom',
            region: 'Custom',
            flag: '✨'
          };
        }}
        {...eventCallbacks<CountryOption>(pushLog, 'Single selection')}
      />
    </DemoCard>
  );
}

function SearchFilterExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 4));

  return (
    <DemoCard
      title="Search filter"
      description="Search in the menu and keep only a few badges visible in the trigger.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 6)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({ badgeShowLimit: 3 })}
        {...eventCallbacks<CountryOption>(pushLog, 'Search filter')}
      />
    </DemoCard>
  );
}

function SearchByPropertyExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 4));

  return (
    <DemoCard
      title="Search by one property"
      description="Restrict matching to the display name and present a custom search placeholder.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 6)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({
          badgeShowLimit: 3,
          searchBy: ['itemName'],
          searchPlaceholderText: 'Search by country name'
        })}
        {...eventCallbacks<CountryOption>(pushLog, 'Search by one property')}
      />
    </DemoCard>
  );
}

function SearchFromApiExample({ pushLog }: DemoProps) {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<CountryOption[]>(COUNTRIES.slice(0, 6));
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    searchCountries(query).then((result) => {
      if (!active) {
        return;
      }
      setData(result);
      setLoading(false);
      pushLog(`Search from API: “${query || 'all'}” returned ${result.length} items`);
    });

    return () => {
      active = false;
    };
  }, [pushLog, query]);

  return (
    <DemoCard
      title="Custom search from API"
      description="A React-style external search input can drive the dropdown data source.">
      <div className="demo-inline-controls">
        <input
          className="demo-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type a country or capital"
        />
      </div>
      <MultiSelectDropdown
        data={data}
        loading={loading}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({
          labelKey: 'itemName',
          enableSearchFilter: false,
          noDataLabel: 'Search countries…'
        })}
        {...eventCallbacks<CountryOption>(pushLog, 'Custom search from API')}
      />
    </DemoCard>
  );
}

function SearchAndAddItemExample({ pushLog }: DemoProps) {
  const [data, setData] = useState(COUNTRIES.slice(0, 6));
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 2));

  return (
    <DemoCard
      title="Search and add new item"
      description="Keep the filter inside the dropdown and append a new object when nothing matches.">
      <MultiSelectDropdown
        data={data}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({
          addNewItemOnFilter: true,
          enableFilterSelectAll: true
        })}
        onAddFilterNewItem={(query) => {
          const next = {
            id: data.length + 100,
            itemName: query,
            name: query.toUpperCase().slice(0, 2),
            capital: query,
            category: 'Custom',
            region: 'Custom',
            flag: '✨'
          };
          setData((items) => [...items, next]);
          pushLog(`Added “${query}” from filter`);
          return next;
        }}
        {...eventCallbacks<CountryOption>(pushLog, 'Search and add')}
      />
    </DemoCard>
  );
}

function GroupByExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>([COUNTRIES[0], COUNTRIES[4]]);

  return (
    <DemoCard
      title="Group by"
      description="Render grouped sections and allow whole groups to be selected or cleared.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 8)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({
          groupBy: 'category',
          selectGroup: true,
          searchBy: ['itemName']
        })}
        onGroupSelect={(group, items) => pushLog(`Group select: ${group} (${items.length})`)}
        onGroupDeSelect={(group, items) => pushLog(`Group deselect: ${group} (${items.length})`)}
        {...eventCallbacks<CountryOption>(pushLog, 'Group by')}
      />
    </DemoCard>
  );
}

function TemplatingExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 4));

  return (
    <DemoCard
      title="Custom rendering"
      description="Render rich menu rows and badges with the country flag and capital.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 8)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({
          groupBy: 'category',
          showCheckbox: true
        })}
        renderItem={(item) => (
          <div className="country-row">
            <span className="country-flag">{item.flag}</span>
            <div className="country-copy">
              <strong>{item.itemName}</strong>
              <span>{item.capital}</span>
            </div>
          </div>
        )}
        renderBadge={(item) => (
          <span className="country-badge">
            {item.flag} {item.name}
          </span>
        )}
        {...eventCallbacks<CountryOption>(pushLog, 'Custom rendering')}
      />
    </DemoCard>
  );
}

function StylingExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 4));

  return (
    <DemoCard
      title="Custom styling"
      description="The classic classes setting is still supported, so the wrapper can be themed from outside.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 6)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({
          classes: 'custom-class-example'
        })}
        {...eventCallbacks<CountryOption>(pushLog, 'Custom styling')}
      />
    </DemoCard>
  );
}

function ControlledFormExample({ pushLog }: DemoProps) {
  const [formModel, setFormModel] = useState({
    name: '',
    email: 'developer@stackline.dev',
    skills: [SKILLS[0]]
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <DemoCard
      title="Controlled form"
      description="A React form can keep the selected items directly inside component state.">
      <form
        className="demo-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
          pushLog(`Controlled form submit: ${JSON.stringify(formModel)}`);
        }}>
        <input
          className="demo-input"
          value={formModel.name}
          onChange={(event) => setFormModel((current) => ({ ...current, name: event.target.value }))}
          placeholder="Name"
        />
        <input
          className="demo-input"
          value={formModel.email}
          onChange={(event) => setFormModel((current) => ({ ...current, email: event.target.value }))}
          placeholder="Email"
        />
        <MultiSelectDropdown
          data={SKILLS}
          selectedItems={formModel.skills}
          onChange={(skills) => setFormModel((current) => ({ ...current, skills }))}
          settings={{
            text: 'Select Skills',
            selectAllText: 'Select All',
            unSelectAllText: 'Unselect All',
            groupBy: 'category',
            enableSearchFilter: true
          }}
          {...eventCallbacks<SkillOption>(pushLog, 'Controlled form')}
        />
        <button className="demo-button" type="submit">
          Submit
        </button>
      </form>
      {submitted ? (
        <pre className="demo-json">{JSON.stringify(formModel, null, 2)}</pre>
      ) : null}
    </DemoCard>
  );
}

function ValidationFormExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<SkillOption[]>([]);
  const isValid = selectedItems.length > 0;

  return (
    <DemoCard
      title="Validation"
      description="Use your own form validation rules and show errors when nothing is selected.">
      <div className="demo-form">
        <MultiSelectDropdown
          data={SKILLS}
          selectedItems={selectedItems}
          onChange={setSelectedItems}
          settings={{
            text: 'Select Skills',
            enableSearchFilter: true,
            groupBy: 'category'
          }}
          {...eventCallbacks<SkillOption>(pushLog, 'Validation')}
        />
        <div className={`demo-validation${isValid ? ' ok' : ''}`}>
          {isValid ? 'Looks good.' : 'Select at least one skill to continue.'}
        </div>
      </div>
    </DemoCard>
  );
}

function LimitBadgesExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 5));

  return (
    <DemoCard
      title="Limit badge count"
      description="Keep the trigger compact by showing only a few badges and a +count indicator.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 8)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({ badgeShowLimit: 3 })}
        {...eventCallbacks<CountryOption>(pushLog, 'Limit badges')}
      />
    </DemoCard>
  );
}

function LimitSelectionExample({ pushLog }: DemoProps) {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 2));

  return (
    <DemoCard
      title="Limit selection"
      description="Stop the user after a fixed number of choices without special adapters.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 8)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({ limitSelection: 2 })}
        {...eventCallbacks<CountryOption>(pushLog, 'Limit selection')}
      />
    </DemoCard>
  );
}

function DisableModeExample({ pushLog }: DemoProps) {
  const [disabled, setDisabled] = useState(true);
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 4));

  return (
    <DemoCard
      title="Disable mode"
      description="Toggle the dropdown disabled state without losing the selected values.">
      <MultiSelectDropdown
        data={COUNTRIES.slice(0, 6)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({ disabled })}
        {...eventCallbacks<CountryOption>(pushLog, 'Disable mode')}
      />
      <div className="demo-inline-controls">
        <button
          className="demo-button secondary"
          type="button"
          onClick={() => {
            setDisabled((value) => !value);
            pushLog(`Disable mode toggled: ${!disabled}`);
          }}>
          {disabled ? 'Enable dropdown' : 'Disable dropdown'}
        </button>
      </div>
    </DemoCard>
  );
}

function DynamicDataSetsExample({ pushLog }: DemoProps) {
  const [datasetName, setDatasetName] = useState<'countries' | 'fruits'>('countries');
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const dataset = datasetName === 'countries' ? COUNTRIES.slice(0, 6) : FRUITS;

  return (
    <DemoCard
      title="Dynamic datasets"
      description="Switch the source list without remounting the dropdown component.">
      <div className="demo-inline-controls">
        <button
          className="demo-button secondary"
          type="button"
          onClick={() => {
            setDatasetName('countries');
            setSelectedItems([]);
            pushLog('Loaded country dataset');
          }}>
          Countries
        </button>
        <button
          className="demo-button secondary"
          type="button"
          onClick={() => {
            setDatasetName('fruits');
            setSelectedItems([]);
            pushLog('Loaded fruit dataset');
          }}>
          Fruits
        </button>
      </div>
      <MultiSelectDropdown
        data={dataset}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={{
          text: datasetName === 'countries' ? 'Select Countries' : 'Select Produce',
          enableSearchFilter: true,
          labelKey: 'itemName',
          primaryKey: 'id'
        }}
      />
    </DemoCard>
  );
}

function MethodsExample({ pushLog }: DemoProps) {
  const ref = useRef<MultiSelectDropdownHandle<CountryOption>>(null);
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 4));

  return (
    <DemoCard
      title="Methods"
      description="Use a ref to open, close, clear, focus, or select all from external controls."
      controls={
        <div className="demo-inline-controls">
          <button className="demo-button secondary" type="button" onClick={() => ref.current?.openDropdown()}>
            Open
          </button>
          <button className="demo-button secondary" type="button" onClick={() => ref.current?.closeDropdown()}>
            Close
          </button>
          <button className="demo-button secondary" type="button" onClick={() => ref.current?.focusSearch()}>
            Focus search
          </button>
          <button className="demo-button secondary" type="button" onClick={() => ref.current?.clearSelection()}>
            Clear
          </button>
        </div>
      }>
      <MultiSelectDropdown
        ref={ref}
        data={COUNTRIES.slice(0, 6)}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings()}
        {...eventCallbacks<CountryOption>(pushLog, 'Methods')}
      />
    </DemoCard>
  );
}

function MultipleDropdownsExample({ pushLog }: DemoProps) {
  const [selectedDirectorySpecialties, setSelectedDirectorySpecialties] = useState<SpecialtyOption[]>(
    DIRECTORY_SPECIALTIES.slice(0, 2)
  );
  const [selectedUseCases, setSelectedUseCases] = useState<CountryOption[]>([]);

  return (
    <DemoCard
      title="Multiple dropdowns"
      description="Two independent dropdowns can live side by side with separate state and callbacks.">
      <div className="demo-grid-two">
        <MultiSelectDropdown
          data={DIRECTORY_SPECIALTIES}
          selectedItems={selectedDirectorySpecialties}
          onChange={setSelectedDirectorySpecialties}
          settings={{
            text: 'Directory specialties',
            enableSearchFilter: true,
            labelKey: 'name',
            primaryKey: 'id'
          }}
          onOpen={() => pushLog('Directory specialties opened')}
          onClose={() => pushLog('Directory specialties closed')}
        />
        <MultiSelectDropdown
          data={USE_CASES as CountryOption[]}
          selectedItems={selectedUseCases}
          onChange={setSelectedUseCases}
          settings={countrySettings({ text: 'Use cases' })}
          onOpen={() => pushLog('Use cases opened')}
          onClose={() => pushLog('Use cases closed')}
        />
      </div>
    </DemoCard>
  );
}

function RemoteDataExample({ pushLog }: DemoProps) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CountryOption[]>([]);
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>([]);

  useEffect(() => {
    let active = true;
    fetchCountries().then((items) => {
      if (!active) {
        return;
      }
      setData(items);
      setLoading(false);
      pushLog(`Remote data loaded: ${items.length} countries`);
    });

    return () => {
      active = false;
    };
  }, [pushLog]);

  return (
    <DemoCard
      title="Remote data"
      description="Fetch the option list asynchronously and render it as soon as the request resolves.">
      <MultiSelectDropdown
        data={data}
        loading={loading}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={countrySettings({
          labelKey: 'itemName',
          groupBy: 'region',
          searchBy: ['itemName', 'capital']
        })}
        {...eventCallbacks<CountryOption>(pushLog, 'Remote data')}
      />
    </DemoCard>
  );
}

function LazyLoadingExample({ pushLog }: DemoProps) {
  const [data, setData] = useState<PersonOption[]>(PEOPLE_SOURCE.slice(0, 40));
  const [selectedItems, setSelectedItems] = useState<PersonOption[]>([]);

  const appendChunk = async () => {
    const nextChunk = await fetchPeopleChunk(data.length, 20);
    if (!nextChunk.length) {
      return;
    }
    setData((items) => items.concat(nextChunk));
    pushLog(`Lazy loading appended ${nextChunk.length} items`);
  };

  return (
    <DemoCard
      title="Lazy loading"
      description="Append more rows as the dropdown list reaches the bottom.">
      <MultiSelectDropdown
        data={data}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={{
          text: 'Select People',
          enableSearchFilter: true,
          lazyLoading: true,
          labelKey: 'name',
          primaryKey: 'id'
        }}
        onScrollToEnd={appendChunk}
        {...eventCallbacks<PersonOption>(pushLog, 'Lazy loading')}
      />
    </DemoCard>
  );
}

function LazyLoadingRemoteDataExample({ pushLog }: DemoProps) {
  const [data, setData] = useState<PersonOption[]>([]);
  const [selectedItems, setSelectedItems] = useState<PersonOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetchPeopleChunk(0, 20).then((chunk) => {
      if (!active) {
        return;
      }
      setData(chunk);
      setLoading(false);
      pushLog(`Initial remote lazy chunk loaded: ${chunk.length} items`);
    });

    return () => {
      active = false;
    };
  }, [pushLog]);

  const appendChunk = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const nextChunk = await fetchPeopleChunk(data.length, 20);
    setData((items) => items.concat(nextChunk));
    setLoading(false);
    pushLog(`Remote lazy loading appended ${nextChunk.length} items`);
  };

  return (
    <DemoCard
      title="Lazy loading remote data"
      description="Combine scroll-to-end loading with a remote request and selection limits.">
      <MultiSelectDropdown
        data={data}
        loading={loading}
        selectedItems={selectedItems}
        onChange={setSelectedItems}
        settings={{
          text: 'Select Items',
          enableSearchFilter: true,
          lazyLoading: true,
          labelKey: 'name',
          primaryKey: 'id',
          limitSelection: 3
        }}
        onScrollToEnd={appendChunk}
        {...eventCallbacks<PersonOption>(pushLog, 'Lazy loading remote')}
      />
    </DemoCard>
  );
}

function ListLoopExample({ pushLog }: DemoProps) {
  const [customers, setCustomers] = useState(CUSTOMERS);

  return (
    <DemoCard
      title="Using in a list"
      description="Render one dropdown per row and keep each row selection in its own state slice.">
      <div className="list-loop">
        {customers.map((customer) => (
          <div className="list-loop-row" key={customer.id}>
            <strong>{customer.name}</strong>
            <MultiSelectDropdown
              data={COUNTRIES.slice(0, 8)}
              selectedItems={customer.countries}
              onChange={(countries) => {
                setCustomers((current) =>
                  current.map((entry) =>
                    entry.id === customer.id ? { ...entry, countries } : entry
                  )
                );
                pushLog(`List loop updated ${customer.name}`);
              }}
              settings={countrySettings({ text: `${customer.name} countries` })}
            />
          </div>
        ))}
      </div>
    </DemoCard>
  );
}

function DialogExample({ pushLog }: DemoProps) {
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(COUNTRIES.slice(0, 6));

  return (
    <DemoCard
      title="Using inside a dialog"
      description="The dropdown stays anchored and usable inside a modal layout.">
      <button
        className="demo-button"
        type="button"
        onClick={() => {
          setOpen(true);
          pushLog('Dialog opened');
        }}>
        Open dialog
      </button>

      {open ? (
        <div className="dialog-backdrop" onClick={() => setOpen(false)}>
          <div className="dialog-card" onClick={(event) => event.stopPropagation()}>
            <div className="dialog-head">
              <h4>Dialog content</h4>
              <button className="demo-button secondary" type="button" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <MultiSelectDropdown
              data={COUNTRIES.slice(0, 8)}
              selectedItems={selectedItems}
              onChange={setSelectedItems}
              settings={countrySettings()}
              {...eventCallbacks<CountryOption>(pushLog, 'Dialog example')}
            />
          </div>
        </div>
      ) : null}
    </DemoCard>
  );
}

export const EXAMPLES: ExampleDefinition[] = [
  {
    id: 'basic',
    label: 'Basic example',
    description: 'Object data, search, select all, and the familiar Angular-style settings object.',
    group: 'Core',
    Demo: BasicExample,
    code: [
      {
        label: 'basic.tsx',
        code: previewCode([
          `const [selectedItems, setSelectedItems] = useState(countries.slice(0, 4));`,
          ``,
          `<MultiSelectDropdown`,
          `  data={countries}`,
          `  selectedItems={selectedItems}`,
          `  onChange={setSelectedItems}`,
          `  settings={{`,
          `    text: 'Select Countries',`,
          `    enableSearchFilter: true,`,
          `    primaryKey: 'id',`,
          `    labelKey: 'itemName'`,
          `  }}`,
          `/>`
        ])
      }
    ]
  },
  {
    id: 'single-selection',
    label: 'Single selection',
    description: 'Keep only one value selected and allow add-new flows from the filter.',
    group: 'Core',
    Demo: SingleSelectionExample,
    code: [
      {
        label: 'singleSelection.tsx',
        code: previewCode([
          `<MultiSelectDropdown`,
          `  data={countries}`,
          `  selectedItems={selectedItems}`,
          `  onChange={setSelectedItems}`,
          `  onAddFilterNewItem={(query) => ({ id: Date.now(), itemName: query })}`,
          `  settings={{`,
          `    singleSelection: true,`,
          `    addNewItemOnFilter: true,`,
          `    text: 'Select Country'`,
          `  }}`,
          `/>`
        ])
      }
    ]
  },
  {
    id: 'search-filter',
    label: 'Search filter',
    description: 'Use the built-in filter and collapse badges when many items are selected.',
    group: 'Core',
    Demo: SearchFilterExample,
    code: [{ label: 'searchFilter.tsx', code: `<MultiSelectDropdown settings={{ enableSearchFilter: true, badgeShowLimit: 3 }} />` }]
  },
  {
    id: 'search-by-property',
    label: 'Search by one property',
    description: 'Restrict matching to a specific key such as itemName.',
    group: 'Core',
    Demo: SearchByPropertyExample,
    code: [{ label: 'searchByOneProperty.tsx', code: `<MultiSelectDropdown settings={{ searchBy: ['itemName'], searchPlaceholderText: 'Search by country name' }} />` }]
  },
  {
    id: 'custom-search-api',
    label: 'Custom search from API',
    description: 'Drive the data source from external React state and fetch results asynchronously.',
    group: 'Data flows',
    Demo: SearchFromApiExample,
    code: [{ label: 'customSearch.tsx', code: `const results = await searchCountries(query);\nsetData(results);` }]
  },
  {
    id: 'search-add-item',
    label: 'Search and add new item',
    description: 'Append custom entries when the filter does not match anything.',
    group: 'Data flows',
    Demo: SearchAndAddItemExample,
    code: [{ label: 'searchFilterAddNewItem.tsx', code: `<MultiSelectDropdown settings={{ addNewItemOnFilter: true }} onAddFilterNewItem={handleCreate} />` }]
  },
  {
    id: 'group-by',
    label: 'Group by',
    description: 'Group the menu and select or unselect whole groups.',
    group: 'Advanced behavior',
    Demo: GroupByExample,
    code: [{ label: 'groupBy.tsx', code: `<MultiSelectDropdown settings={{ groupBy: 'category', selectGroup: true }} />` }]
  },
  {
    id: 'templating',
    label: 'Custom rendering',
    description: 'Render rich rows and badges with React render functions.',
    group: 'Advanced behavior',
    Demo: TemplatingExample,
    code: [{ label: 'templating.tsx', code: `<MultiSelectDropdown renderItem={(item) => <CountryRow item={item} />} renderBadge={(item) => <Badge item={item} />} />` }]
  },
  {
    id: 'styling',
    label: 'Custom styling',
    description: 'Apply a custom classes string and theme the dropdown from your app CSS.',
    group: 'Advanced behavior',
    Demo: StylingExample,
    code: [{ label: 'styling.tsx', code: `<MultiSelectDropdown settings={{ classes: 'custom-class-example' }} />` }]
  },
  {
    id: 'controlled-form',
    label: 'Controlled form',
    description: 'Keep the selected values in your own form state and submit plain JSON.',
    group: 'Forms',
    Demo: ControlledFormExample,
    code: [{ label: 'controlledForm.tsx', code: `const [formModel, setFormModel] = useState({ name: '', email: '', skills: [] });` }]
  },
  {
    id: 'validation',
    label: 'Validation',
    description: 'Use the component inside your own validation rules without wrappers.',
    group: 'Forms',
    Demo: ValidationFormExample,
    code: [{ label: 'validation.tsx', code: `const isValid = selectedItems.length > 0;` }]
  },
  {
    id: 'limit-badges',
    label: 'Limit badges',
    description: 'Keep the trigger compact when many values are selected.',
    group: 'Advanced behavior',
    Demo: LimitBadgesExample,
    code: [{ label: 'limitBadges.tsx', code: `<MultiSelectDropdown settings={{ badgeShowLimit: 3 }} />` }]
  },
  {
    id: 'limit-selection',
    label: 'Limit selection',
    description: 'Block new selections once the user reaches the configured limit.',
    group: 'Advanced behavior',
    Demo: LimitSelectionExample,
    code: [{ label: 'limitSelection.tsx', code: `<MultiSelectDropdown settings={{ limitSelection: 2 }} />` }]
  },
  {
    id: 'disable-mode',
    label: 'Disable mode',
    description: 'Toggle the disabled state while preserving the current value.',
    group: 'Advanced behavior',
    Demo: DisableModeExample,
    code: [{ label: 'disableMode.tsx', code: `<MultiSelectDropdown settings={{ disabled }} />` }]
  },
  {
    id: 'dynamic-datasets',
    label: 'Dynamic datasets',
    description: 'Swap datasets at runtime and reset selection intentionally.',
    group: 'Data flows',
    Demo: DynamicDataSetsExample,
    code: [{ label: 'dynamicDataSets.tsx', code: `setDatasetName('fruits');\nsetSelectedItems([]);` }]
  },
  {
    id: 'methods',
    label: 'Methods by ref',
    description: 'Open, close, clear, or focus the dropdown from imperative controls.',
    group: 'Advanced behavior',
    Demo: MethodsExample,
    code: [{ label: 'resetDropdown.tsx', code: `const ref = useRef<MultiSelectDropdownHandle>(null);\nref.current?.openDropdown();` }]
  },
  {
    id: 'multiple-dropdowns',
    label: 'Multiple dropdowns',
    description: 'Manage more than one dropdown in the same screen without collisions.',
    group: 'Data flows',
    Demo: MultipleDropdownsExample,
    code: [{ label: 'multipleDropdowns.tsx', code: `<MultiSelectDropdown data={directorySpecialties} />\n<MultiSelectDropdown data={useCases} />` }]
  },
  {
    id: 'remote-data',
    label: 'Remote data',
    description: 'Load a full dataset asynchronously and render it when ready.',
    group: 'Data flows',
    Demo: RemoteDataExample,
    code: [{ label: 'remoteData.tsx', code: `useEffect(() => {\n  fetchCountries().then(setData);\n}, []);` }]
  },
  {
    id: 'lazy-loading',
    label: 'Lazy loading',
    description: 'Append a new chunk when the menu scroll reaches the end.',
    group: 'Data flows',
    Demo: LazyLoadingExample,
    code: [{ label: 'lazyLoading.tsx', code: `<MultiSelectDropdown settings={{ lazyLoading: true }} onScrollToEnd={appendChunk} />` }]
  },
  {
    id: 'lazy-loading-remote',
    label: 'Lazy loading remote data',
    description: 'Combine remote chunks, a loading state, and selection limits.',
    group: 'Data flows',
    Demo: LazyLoadingRemoteDataExample,
    code: [{ label: 'lazyLoadingRemoteData.tsx', code: `<MultiSelectDropdown loading={loading} settings={{ lazyLoading: true, limitSelection: 3 }} />` }]
  },
  {
    id: 'list-loop',
    label: 'Using in a list',
    description: 'Render the dropdown inside a repeated list item and keep row-level state.',
    group: 'Forms',
    Demo: ListLoopExample,
    code: [{ label: 'usingInList.tsx', code: `customers.map((customer) => <MultiSelectDropdown selectedItems={customer.countries} />)` }]
  },
  {
    id: 'dialog',
    label: 'Using inside a dialog',
    description: 'Open the dropdown in a modal layout and keep the menu anchored.',
    group: 'Forms',
    Demo: DialogExample,
    code: [{ label: 'usingWithinDialog.tsx', code: `<Modal><MultiSelectDropdown data={countries} /></Modal>` }]
  }
];

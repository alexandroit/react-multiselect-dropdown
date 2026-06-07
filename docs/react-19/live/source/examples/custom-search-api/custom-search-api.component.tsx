import { useMemo, useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { remoteCountries, apiSelectedInitial, apiSettings } from './custom-search-api.data';
import './custom-search-api.component.css';

export default function CustomSearchApiExample() {
  const [query, setQuery] = useState('');
  const [apiSelected, setApiSelected] = useState(() => [...apiSelectedInitial]);
  const { events, record } = useExampleEvents();
  const filteredCountries = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return remoteCountries;
    return remoteCountries.filter((item) => [item.itemName, item.capital, item.region].some((value) => String(value || '').toLowerCase().includes(needle)));
  }, [query]);

  return (
    <ExampleLayout slug="custom-search-api" eyebrow="Remote search" title="Custom search from API" description="Replace the search control with a React input and feed the dropdown with API-filtered data." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={filteredCountries}
          selectedItems={apiSelected}
          onChange={(items) => {
            setApiSelected(items);
            record('change', items);
          }}
          settings={apiSettings}
          renderSearch={({ closeDropdown }) => (
            <div className="api-search-row">
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search API" aria-label="Search API" />
              <button type="button" onClick={closeDropdown}>Done</button>
            </div>
          )}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
        />
        <p className="route-note">Simulated API results: {filteredCountries.length}</p>
      </div>
    </ExampleLayout>
  );
}

import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries as countrySeed, createdSelectedInitial, createdSettings, createCountryFromQuery } from './search-add-new-item.data';
import './search-add-new-item.component.css';

export default function SearchAddNewItemExample() {
  const [availableCountries, setAvailableCountries] = useState(() => [...countrySeed]);
  const [createdSelected, setCreatedSelected] = useState(() => [...createdSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="search-add-new-item" eyebrow="Dynamic input" title="Search and Add New Item" description="Create a new item from the current search query and keep it in local React state." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={availableCountries}
          selectedItems={createdSelected}
          onChange={(items) => {
            setCreatedSelected(items);
            record('change', items);
          }}
          settings={createdSettings}
          onAddFilterNewItem={(query) => {
            const next = createCountryFromQuery(query, availableCountries.length);
            setAvailableCountries((current) => current.concat(next));
            record('created', next);
            return next;
          }}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
      </div>
    </ExampleLayout>
  );
}

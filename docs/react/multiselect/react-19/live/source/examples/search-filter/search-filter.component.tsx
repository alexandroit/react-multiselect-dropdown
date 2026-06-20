import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, searchSelectedInitial, searchSettings } from './search-filter.data';
import './search-filter.component.css';

export default function SearchFilterExample() {
  const [searchSelected, setSearchSelected] = useState(() => [...searchSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="search-filter" eyebrow="Search" title="Search filter" description="Search across country names and capitals while keeping controlled React state." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={searchSelected}
          onChange={(items) => {
            setSearchSelected(items);
            record('change', items);
          }}
          settings={searchSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="settings-preview">skin: {searchSettings.skin}</p>
      </div>
    </ExampleLayout>
  );
}

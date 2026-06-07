import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { countries, propertySelectedInitial, propertySettings } from './search-filter-by-property.data';
import './search-filter-by-property.component.css';

export default function SearchFilterByPropertyExample() {
  const [propertySelected, setPropertySelected] = useState(() => [...propertySelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="search-filter-by-property" eyebrow="Search fields" title="Search filter by property" description="Use settings.searchBy so the filter checks name, capital, and region fields." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown data={countries} selectedItems={propertySelected} onChange={setPropertySelected} settings={propertySettings} onSelect={(item) => record('select', item)} onDeSelect={(item) => record('deselect', item)} />
        <p className="route-note">Try searching for Ottawa, Europe, or Bogota.</p>
      </div>
    </ExampleLayout>
  );
}

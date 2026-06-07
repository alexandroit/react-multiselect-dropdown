import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { countries, limitSelectedInitial, limitSettings } from './limit-selection.data';
import './limit-selection.component.css';

export default function LimitSelectionExample() {
  const [limitSelectionSelected, setLimitSelectionSelected] = useState(() => [...limitSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="limit-selection" eyebrow="Selection rules" title="Limit selection" description="Prevent choosing more than the configured maximum." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={limitSelectionSelected}
          onChange={(items) => {
            setLimitSelectionSelected(items);
            record('change', items);
          }}
          settings={limitSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="route-note">limitSelection: {limitSettings.limitSelection}</p>
      </div>
    </ExampleLayout>
  );
}

import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, limitSelectedInitial, limitSettings } from './selection-limit.data';
import './selection-limit.component.css';

export default function SelectionLimitExample() {
  const [limitSelected, setLimitSelected] = useState(() => [...limitSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="selection-limit" eyebrow="Limit" title="Selection limit" description="Limit the selected item count and keep badge overflow accurate." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={limitSelected}
          onChange={(items) => {
            setLimitSelected(items);
            record('change', items);
          }}
          settings={limitSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="settings-preview">skin: {limitSettings.skin}</p>
      </div>
    </ExampleLayout>
  );
}

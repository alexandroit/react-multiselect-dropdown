import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, basicSelectedInitial, basicSettings } from './basic.data';
import './basic.component.css';

export default function BasicExample() {
  const [basicSelected, setBasicSelected] = useState(() => [...basicSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="basic" eyebrow="Basic" title="Basic usage" description="Classic multi-select with chips, clear all, and selected counters." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={basicSelected}
          onChange={(items) => {
            setBasicSelected(items);
            record('change', items);
          }}
          settings={basicSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="settings-preview">skin: {basicSettings.skin}</p>
      </div>
    </ExampleLayout>
  );
}

import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, singleSelectedInitial, singleSettings } from './single-selection.data';
import './single-selection.component.css';

export default function SingleSelectionExample() {
  const [singleSelected, setSingleSelected] = useState(() => [...singleSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="single-selection" eyebrow="Single mode" title="Single selection" description="Single-value selection with checkbox-free option rows." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={singleSelected}
          onChange={(items) => {
            setSingleSelected(items);
            record('change', items);
          }}
          settings={singleSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="settings-preview">skin: {singleSettings.skin}</p>
      </div>
    </ExampleLayout>
  );
}

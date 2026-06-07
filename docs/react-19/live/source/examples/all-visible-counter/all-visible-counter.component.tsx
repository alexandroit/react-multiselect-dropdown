import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, counterSelectedInitial, counterSettings } from './all-visible-counter.data';
import './all-visible-counter.component.css';

export default function AllVisibleCounterExample() {
  const [counterSelected, setCounterSelected] = useState(() => [...counterSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="all-visible-counter" eyebrow="Counter" title="All visible counter" description="Selected badges stay visible and the overflow counter disappears when no selected items are hidden." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={counterSelected}
          onChange={(items) => {
            setCounterSelected(items);
            record('change', items);
          }}
          settings={counterSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="settings-preview">skin: {counterSettings.skin}</p>
      </div>
    </ExampleLayout>
  );
}

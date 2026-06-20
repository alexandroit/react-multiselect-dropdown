import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { people, peopleSelectedInitial, peopleSettings } from './virtual-scrolling.data';
import './virtual-scrolling.component.css';

export default function VirtualScrollingExample() {
  const [peopleSelected, setPeopleSelected] = useState(() => [...peopleSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="virtual-scrolling" eyebrow="Long lists" title="Virtual Scrolling" description="Constrain a long list with keyboard-friendly scrolling and a fixed dropdown height." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={people}
          selectedItems={peopleSelected}
          onChange={(items) => {
            setPeopleSelected(items);
            record('change', items);
          }}
          settings={peopleSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="settings-preview">skin: {peopleSettings.skin}</p>
      </div>
    </ExampleLayout>
  );
}

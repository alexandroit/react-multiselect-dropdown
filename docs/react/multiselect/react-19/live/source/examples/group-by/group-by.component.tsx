import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, groupSelectedInitial, groupSettings } from './group-by.data';
import './group-by.component.css';

export default function GroupByExample() {
  const [groupSelected, setGroupSelected] = useState(() => [...groupSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="group-by" eyebrow="Grouping" title="Group By" description="Group options by a field and allow group-level selection." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={groupSelected}
          onChange={(items) => {
            setGroupSelected(items);
            record('change', items);
          }}
          settings={groupSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="settings-preview">skin: {groupSettings.skin}</p>
      </div>
    </ExampleLayout>
  );
}

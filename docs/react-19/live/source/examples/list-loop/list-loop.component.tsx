import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { dropdownGroups, loopSettings } from './list-loop.data';
import './list-loop.component.css';

export default function ListLoopExample() {
  const [selectedByGroup, setSelectedByGroup] = useState<Record<string, DemoItem[]>>({});
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="list-loop" eyebrow="Loop" title="Using in list for loop" description="Render multiple dropdowns from an array of configuration objects." events={events}>
      <div className="loop-stack">
        {dropdownGroups.map((group) => (
          <label key={group.id}>{group.label}<MultiSelectDropdown data={group.items} selectedItems={selectedByGroup[group.id] || []} onChange={(items) => setSelectedByGroup((current) => ({ ...current, [group.id]: items }))} settings={{ ...loopSettings, text: group.label }} onSelect={(item) => record(group.id + ' select', item)} /></label>
        ))}
      </div>
    </ExampleLayout>
  );
}

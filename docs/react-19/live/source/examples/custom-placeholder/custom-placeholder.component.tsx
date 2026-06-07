import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, placeholderSelectedInitial, placeholderSettings } from './custom-placeholder.data';
import './custom-placeholder.component.css';

export default function CustomPlaceholderExample() {
  const [placeholderSelected, setPlaceholderSelected] = useState(() => [...placeholderSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="custom-placeholder" eyebrow="Placeholder" title="Custom placeholder" description="Keep an empty controlled value while showing project-specific placeholder and empty labels." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={placeholderSelected}
          onChange={(items) => {
            setPlaceholderSelected(items);
            record('change', items);
          }}
          settings={placeholderSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
        />
        <p className="route-note">The selected array starts empty; the placeholder text comes from settings.text.</p>
      </div>
    </ExampleLayout>
  );
}

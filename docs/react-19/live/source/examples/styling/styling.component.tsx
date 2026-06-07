import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { countries, stylingSelectedInitial, stylingSettings } from './styling.data';
import './styling.component.css';

export default function StylingExample() {
  const [stylingSelected, setStylingSelected] = useState(() => [...stylingSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="styling" eyebrow="CSS" title="Styling" description="Apply a custom class while keeping the package skin contract intact." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={stylingSelected}
          onChange={(items) => {
            setStylingSelected(items);
            record('change', items);
          }}
          settings={stylingSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="route-note">The wrapper class comes from settings.classes.</p>
      </div>
    </ExampleLayout>
  );
}

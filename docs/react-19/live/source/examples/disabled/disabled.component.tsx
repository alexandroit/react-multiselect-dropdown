import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { countries, disabledSelectedInitial, disabledSettings } from './disabled.data';
import './disabled.component.css';

export default function DisabledExample() {
  const [disabledSelected, setDisabledSelected] = useState(() => [...disabledSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="disabled" eyebrow="State" title="Disabled state" description="Render a disabled dropdown while preserving the current value." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={disabledSelected}
          onChange={(items) => {
            setDisabledSelected(items);
            record('change', items);
          }}
          settings={disabledSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        
      </div>
    </ExampleLayout>
  );
}

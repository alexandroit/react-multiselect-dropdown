import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, disabledSelectedInitial, disabledSettings } from './disabled-state.data';
import './disabled-state.component.css';

export default function DisabledStateExample() {
  const [disabled, setDisabled] = useState(false);
  const [disabledSelected, setDisabledSelected] = useState(() => [...disabledSelectedInitial]);
  const { events, record } = useExampleEvents();
  const settings = { ...disabledSettings, disabled };

  return (
    <ExampleLayout slug="disabled-state" eyebrow="Disabled" title="Disabled state" description="Toggle the disabled setting without replacing the selected data model." events={events}>
      <div className="method-bar">
        <button type="button" onClick={() => setDisabled((value) => !value)}>
          {disabled ? 'Enable dropdown' : 'Disable dropdown'}
        </button>
      </div>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={disabledSelected}
          onChange={(items) => {
            setDisabledSelected(items);
            record('change', items);
          }}
          settings={settings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
      </div>
    </ExampleLayout>
  );
}

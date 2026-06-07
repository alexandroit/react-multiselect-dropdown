import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { overlayCountries, dialogSelectedInitial, dialogSettings } from './using-inside-dialog.data';
import './using-inside-dialog.component.css';

export default function UsingInsideDialogExample() {
  const [dialogSelected, setDialogSelected] = useState(() => [...dialogSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="using-inside-dialog" eyebrow="Dialog support" title="Using Inside Dialog" description="Portal the dropdown panel to document.body so overflow containers do not clip the list." events={events}>
      <div className="overflow-dialog-frame">
        <div className="demo-dialog-surface">
          <div className="dialog-copy">
            <strong>Simulated dialog surface</strong>
            <span>overflow hidden, stacking context, and a dropdown near the edge.</span>
          </div>
          <MultiSelectDropdown
            data={overlayCountries}
            selectedItems={dialogSelected}
            onChange={(items) => {
              setDialogSelected(items);
              record('change', items);
            }}
            settings={dialogSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
          />
        </div>
      </div>
      <p className="settings-preview">tagToBody: true | appendToBody: true</p>
    </ExampleLayout>
  );
}

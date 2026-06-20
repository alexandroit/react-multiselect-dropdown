import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { overlayCountries, dialogSelectedInitial, dialogSettings } from './dialog.data';
import './dialog.component.css';

export default function DialogExample() {
  const [dialogSelected, setDialogSelected] = useState(() => [...dialogSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="dialog" eyebrow="Dialog" title="Using inside dialog" description="Append the panel to document.body so overflow containers do not clip it." events={events}>
      <div className="overflow-dialog-frame">
        <div className="demo-dialog-surface">
          <div className="dialog-copy"><strong>Simulated dialog surface</strong><span>overflow hidden and a dropdown near the edge.</span></div>
          <MultiSelectDropdown data={overlayCountries} selectedItems={dialogSelected} onChange={setDialogSelected} settings={dialogSettings} onSelect={(item) => record('select', item)} onDeSelect={(item) => record('deselect', item)} />
        </div>
      </div>
      <p className="route-note">tagToBody: true | appendToBody: true</p>
    </ExampleLayout>
  );
}

import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { overlayCountries, overlaySelectedInitial, overlaySettings } from './body-overlay-auto.data';
import './body-overlay-auto.component.css';

export default function BodyOverlayAutoExample() {
  const [overlaySelected, setOverlaySelected] = useState(() => [...overlaySelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="body-overlay-auto" eyebrow="Auto direction" title="Body Overlay Auto" description="Prefer opening upward only when the viewport really needs it." events={events}>
      <div className="overflow-dialog-frame">
        <div className="demo-dialog-surface opens-up">
          <div className="dialog-copy">
            <strong>Simulated dialog surface</strong>
            <span>overflow hidden, stacking context, and a dropdown near the edge.</span>
          </div>
          <MultiSelectDropdown
            data={overlayCountries}
            selectedItems={overlaySelected}
            onChange={(items) => {
              setOverlaySelected(items);
              record('change', items);
            }}
            settings={overlaySettings}
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

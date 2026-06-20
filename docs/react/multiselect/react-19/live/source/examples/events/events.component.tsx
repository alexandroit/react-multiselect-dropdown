import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { countries, eventsSelectedInitial, eventsSettings } from './events.data';
import './events.component.css';

export default function EventsExample() {
  const [eventsSelected, setEventsSelected] = useState(() => [...eventsSelectedInitial]);
  const { events, record } = useExampleEvents('open the dropdown to record events');

  return (
    <ExampleLayout slug="events" eyebrow="Events" title="Events" description="Record open, close, select, deselect, select-all, and clear-all callbacks." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown data={countries} selectedItems={eventsSelected} onChange={setEventsSelected} settings={eventsSettings} onOpen={() => record('open', 'dropdown')} onClose={() => record('close', 'dropdown')} onSelect={(item) => record('select', item)} onDeSelect={(item) => record('deselect', item)} onSelectAll={(items) => record('selectAll', items)} onDeSelectAll={(items) => record('deselectAll', items)} />
      </div>
    </ExampleLayout>
  );
}

import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { baseCountries, expandedCountries, dynamicSelectedInitial, dynamicSettings } from './dynamic-data.data';
import './dynamic-data.component.css';

export default function DynamicDataExample() {
  const [expanded, setExpanded] = useState(false);
  const [dynamicSelected, setDynamicSelected] = useState(() => [...dynamicSelectedInitial]);
  const { events, record } = useExampleEvents();
  const data = expanded ? expandedCountries : baseCountries;

  return (
    <ExampleLayout slug="dynamic-data" eyebrow="Dynamic" title="Load dynamic data" description="Change the option collection after the component is already mounted." events={events}>
      <div className="method-bar"><button type="button" onClick={() => { setExpanded((value) => !value); record('data expanded', !expanded); }}>{expanded ? 'Use small data' : 'Use full data'}</button></div>
      <MultiSelectDropdown data={data} selectedItems={dynamicSelected} onChange={setDynamicSelected} settings={dynamicSettings} onSelect={(item) => record('select', item)} onDeSelect={(item) => record('deselect', item)} />
      <p className="route-note">Rows available: {data.length}</p>
    </ExampleLayout>
  );
}

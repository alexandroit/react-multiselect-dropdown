import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { countries, skills, countrySelectedInitial, skillSelectedInitial, countrySettings, skillSettings } from './multiple-dropdowns.data';
import './multiple-dropdowns.component.css';

export default function MultipleDropdownsExample() {
  const [countrySelected, setCountrySelected] = useState(() => [...countrySelectedInitial]);
  const [skillSelected, setSkillSelected] = useState(() => [...skillSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="multiple-dropdowns" eyebrow="Multiple" title="Multiple dropdowns" description="Use independent controlled state for each dropdown instance." events={events}>
      <div className="loop-stack">
        <label>Countries<MultiSelectDropdown data={countries} selectedItems={countrySelected} onChange={setCountrySelected} settings={countrySettings} onSelect={(item) => record('country select', item)} /></label>
        <label>Skills<MultiSelectDropdown data={skills} selectedItems={skillSelected} onChange={setSkillSelected} settings={skillSettings} onSelect={(item) => record('skill select', item)} /></label>
      </div>
    </ExampleLayout>
  );
}

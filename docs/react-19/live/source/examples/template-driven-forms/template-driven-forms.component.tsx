import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { skills, formSelectedInitial, formSettings } from './template-driven-forms.data';
import './template-driven-forms.component.css';

export default function TemplateDrivenFormsExample() {
  const [name, setName] = useState('Alex');
  const [formSelected, setFormSelected] = useState(() => [...formSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="template-driven-forms" eyebrow="Forms" title="Template-style form" description="React keeps the form values in state while the dropdown stays controlled." events={events}>
      <form className="route-form" onSubmit={(event) => { event.preventDefault(); record('submit', name); }}>
        <label>Name<input value={name} onChange={(event) => setName(event.target.value)} /></label>
        <label>Skills<MultiSelectDropdown data={skills} selectedItems={formSelected} onChange={setFormSelected} settings={formSettings} /></label>
        <button className="route-submit" type="submit">Submit</button>
      </form>
      <p className="route-note">Selected: {formSelected.map((item) => item.itemName).join(', ') || 'none'}</p>
    </ExampleLayout>
  );
}

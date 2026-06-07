import { useMemo, useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { skills, reactiveSelectedInitial, reactiveSettings } from './reactive-forms.data';
import './reactive-forms.component.css';

export default function ReactiveFormsExample() {
  const [email, setEmail] = useState('ascasc@aa.com');
  const [reactiveSelected, setReactiveSelected] = useState(() => [...reactiveSelectedInitial]);
  const { events, record } = useExampleEvents();
  const valid = useMemo(() => email.includes('@') && reactiveSelected.length > 0, [email, reactiveSelected]);

  return (
    <ExampleLayout slug="reactive-forms" eyebrow="Forms" title="Reactive form validation" description="Derive validity from React state and selected dropdown items." events={events}>
      <form className="route-form" onSubmit={(event) => { event.preventDefault(); record('submit valid', valid); }}>
        <label>Email<input value={email} onChange={(event) => setEmail(event.target.value)} /></label>
        <label>Skills<MultiSelectDropdown data={skills} selectedItems={reactiveSelected} onChange={setReactiveSelected} settings={reactiveSettings} /></label>
        <button className="route-submit" type="submit" disabled={!valid}>Submit</button>
      </form>
      <p className={valid ? 'route-valid' : 'route-invalid'}>{valid ? 'Form status: VALID' : 'Form status: INVALID'}</p>
    </ExampleLayout>
  );
}

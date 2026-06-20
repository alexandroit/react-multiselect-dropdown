import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { skills, skillSelectedInitial, skillSettings } from './using-in-forms.data';
import './using-in-forms.component.css';

export default function UsingInFormsExample() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('ascasc@aa.com');
  const [skillSelected, setSkillSelected] = useState(() => [...skillSelectedInitial]);
  const { events, record } = useExampleEvents();
  const formIsValid = email.trim().length > 0 && skillSelected.length > 0;

  return (
    <ExampleLayout slug="using-in-forms" eyebrow="Forms" title="Using in Forms" description="Keep selected items in React form state and derive validation from the selected array." events={events}>
      <form
        className="form-panel"
        onSubmit={(event) => {
          event.preventDefault();
          record('submit', formIsValid ? 'valid' : 'invalid');
        }}>
        <label className="form-field">
          <span>Name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="form-field">
          <span>Email Address <em>* required</em></span>
          <input value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <div className="form-field">
          <span>Skills <em>* required</em></span>
          <MultiSelectDropdown
            data={skills}
            selectedItems={skillSelected}
            onChange={(items) => {
              setSkillSelected(items);
              record('change', items);
            }}
            settings={skillSettings}
          onSelect={(item) => record('skills select', item)}
          onDeSelect={(item) => record('skills deselect', item)}
          onSelectAll={(items) => record('skills selectAll', items)}
          onDeSelectAll={(items) => record('skills deselectAll', items)}
          />
        </div>
        <button className="submit-button" type="submit" disabled={!formIsValid}>Submit</button>
      </form>
      <table className="form-output">
        <tbody>
          <tr><td>Name</td><td>{name}</td></tr>
          <tr><td>Email</td><td>{email}</td></tr>
          <tr><td>Skills</td><td>{skillSelected.map((item) => item.itemName).join(', ')}</td></tr>
        </tbody>
      </table>
      <p className="form-json">Form status: {formIsValid ? 'VALID' : 'INVALID'}</p>
    </ExampleLayout>
  );
}

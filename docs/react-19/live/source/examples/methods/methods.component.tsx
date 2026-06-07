import { useRef, useState } from 'react';
import { MultiSelectDropdown, type MultiSelectDropdownHandle } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { countries, methodSelectedInitial, methodSettings } from './methods.data';
import './methods.component.css';

export default function MethodsExample() {
  const dropdownRef = useRef<MultiSelectDropdownHandle<DemoItem>>(null);
  const [methodSelected, setMethodSelected] = useState(() => [...methodSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="methods" eyebrow="Ref methods" title="Methods" description="Call the public ref API for open, close, focus, select all, and clear selection." events={events}>
      <div className="method-bar">
        <button type="button" onClick={() => dropdownRef.current?.openDropdown()}>Open</button>
        <button type="button" onClick={() => dropdownRef.current?.closeDropdown()}>Close</button>
        <button type="button" onClick={() => dropdownRef.current?.focusSearch()}>Focus search</button>
        <button type="button" onClick={() => dropdownRef.current?.selectAll()}>Select all</button>
        <button type="button" onClick={() => dropdownRef.current?.clearSelection()}>Clear</button>
      </div>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          ref={dropdownRef}
          data={countries}
          selectedItems={methodSelected}
          onChange={(items) => {
            setMethodSelected(items);
            record('change', items);
          }}
          settings={methodSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
      </div>
    </ExampleLayout>
  );
}

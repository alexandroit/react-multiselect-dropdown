import { useRef, useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import { ariaCountries, ariaSelectedInitial, ariaSettings } from './aria-state.data';
import './aria-state.component.css';

type AriaSnapshot = {
  text: string;
  role: string;
  selected: string;
  checked: string;
};

const emptySnapshot: AriaSnapshot = {
  text: 'Open the dropdown and choose Refresh ARIA audit.',
  role: '-',
  selected: '-',
  checked: '-'
};

export default function AriaStateExample() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [selectedItems, setSelectedItems] = useState<DemoItem[]>(() => [...ariaSelectedInitial]);
  const [snapshot, setSnapshot] = useState<AriaSnapshot>(emptySnapshot);
  const { events, record } = useExampleEvents('aria audit ready');

  function refreshAudit() {
    const option =
      rootRef.current?.querySelector<HTMLElement>('.rmsd-option[aria-selected="true"]') ||
      rootRef.current?.querySelector<HTMLElement>('.rmsd-option') ||
      document.querySelector<HTMLElement>('.rmsd-option[aria-selected="true"]') ||
      document.querySelector<HTMLElement>('.rmsd-option');

    if (!option) {
      setSnapshot(emptySnapshot);
      return;
    }

    setSnapshot({
      text: option.textContent?.trim() || '-',
      role: option.getAttribute('role') || '-',
      selected: option.getAttribute('aria-selected') || '-',
      checked: option.getAttribute('aria-checked') || '-'
    });
  }

  return (
    <ExampleLayout
      slug="aria-state"
      eyebrow="ARIA audit"
      title="aria-selected plus aria-checked"
      description="Open the list and confirm the active multiselect option exposes both values for screen reader compatibility."
      events={events}>
      <div ref={rootRef} className="aria-demo">
        <button className="aria-audit-button" type="button" onClick={refreshAudit}>
          Refresh ARIA audit
        </button>

        <MultiSelectDropdown
          data={ariaCountries}
          selectedItems={selectedItems}
          onChange={(items) => {
            setSelectedItems(items);
            record('change', items);
          }}
          settings={ariaSettings}
          onOpen={() => window.setTimeout(refreshAudit, 0)}
          onSelect={(item) => {
            record('select', item);
            window.setTimeout(refreshAudit, 0);
          }}
          onDeSelect={(item) => {
            record('deselect', item);
            window.setTimeout(refreshAudit, 0);
          }}
        />

        <dl className="aria-audit-grid">
          <div><dt>Option</dt><dd>{snapshot.text}</dd></div>
          <div><dt>Role</dt><dd>{snapshot.role}</dd></div>
          <div><dt>aria-selected</dt><dd>{snapshot.selected}</dd></div>
          <div><dt>aria-checked</dt><dd>{snapshot.checked}</dd></div>
        </dl>
      </div>
    </ExampleLayout>
  );
}

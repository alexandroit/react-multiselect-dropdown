import { useRef, useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import {
  asyncAlternateCountries,
  asyncBaseCountries,
  asyncSelectedInitial,
  asyncSettings
} from './async-object-preservation.data';
import './async-object-preservation.component.css';

export default function AsyncObjectPreservationExample() {
  const requestIdRef = useRef(0);
  const [data, setData] = useState<DemoItem[]>(asyncBaseCountries);
  const [selectedItems, setSelectedItems] = useState<DemoItem[]>(() => [...asyncSelectedInitial]);
  const [sourceName, setSourceName] = useState('base source');
  const { events, record } = useExampleEvents('async source ready');

  function loadBase() {
    setData(asyncBaseCountries);
    setSourceName('base source');
    record('data refresh', 'base source');
  }

  function loadAlternate() {
    setData(asyncAlternateCountries);
    setSourceName('alternate source');
    record('data refresh', 'alternate source');
  }

  async function addFromSearch(query: string) {
    const requestId = requestIdRef.current + 1;
    requestIdRef.current = requestId;
    record('async add start', query);

    await new Promise((resolve) => window.setTimeout(resolve, query.length > 5 ? 500 : 150));

    const item: DemoItem = {
      id: 9000 + requestId,
      itemName: query,
      name: query,
      capital: 'Created locally',
      region: 'Async result',
      category: 'Custom'
    };
    record('async add resolved', item);
    return item;
  }

  return (
    <ExampleLayout
      slug="async-object-preservation"
      eyebrow="Async contract"
      title="Async object preservation"
      description="Refresh the option source while selected objects stay intact, then add a new item from search."
      events={events}>
      <div className="async-demo">
        <div className="method-bar">
          <button type="button" onClick={loadBase}>Base source</button>
          <button type="button" onClick={loadAlternate}>Alternate source</button>
        </div>

        <MultiSelectDropdown
          data={data}
          selectedItems={selectedItems}
          onChange={(items) => {
            setSelectedItems(items);
            record('change', items);
          }}
          settings={asyncSettings}
          onAddFilterNewItem={addFromSearch}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
        />

        <p className="settings-preview">
          data: {sourceName} | selected: {selectedItems.map((item) => item.itemName).join(', ')}
        </p>
      </div>
    </ExampleLayout>
  );
}

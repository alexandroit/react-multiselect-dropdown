import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { initialPeople as initialPeopleSeed, allPeople, lazySelectedInitial, lazySettings } from './lazy-loading-api.data';
import './lazy-loading-api.component.css';

export default function LazyLoadingApiExample() {
  const [loadedPeople, setLoadedPeople] = useState(() => [...initialPeopleSeed]);
  const [lazySelected, setLazySelected] = useState(() => [...lazySelectedInitial]);
  const { events, record } = useExampleEvents();

  function appendNextChunk() {
    const next = allPeople.slice(loadedPeople.length, loadedPeople.length + 20);
    if (!next.length) {
      record('lazy', 'no more rows');
      return;
    }
    setLoadedPeople((current) => current.concat(next));
    record('lazy', next.length + ' rows');
  }

  return (
    <ExampleLayout slug="lazy-loading-api" eyebrow="Lazy API" title="Lazy loading from API" description="Append more remote rows when the dropdown scroll reaches the end." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown data={loadedPeople} selectedItems={lazySelected} onChange={setLazySelected} settings={lazySettings} onScrollToEnd={appendNextChunk} onSelect={(item) => record('select', item)} onDeSelect={(item) => record('deselect', item)} />
        <p className="route-note">Loaded rows: {loadedPeople.length}</p>
      </div>
    </ExampleLayout>
  );
}

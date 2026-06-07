import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { firstPage, secondPage, remoteSelectedInitial, remoteSettings } from './remote-data.data';
import './remote-data.component.css';

export default function RemoteDataExample() {
  const [items, setItems] = useState(() => [...firstPage]);
  const [loading, setLoading] = useState(false);
  const [remoteSelected, setRemoteSelected] = useState(() => [...remoteSelectedInitial]);
  const { events, record } = useExampleEvents();

  function loadNextPage() {
    setLoading(true);
    window.setTimeout(() => {
      setItems((current) => current.length > firstPage.length ? [...firstPage] : firstPage.concat(secondPage));
      setLoading(false);
      record('remote load', 'page toggled');
    }, 250);
  }

  return (
    <ExampleLayout slug="remote-data" eyebrow="Remote API" title="Data from remote API" description="Swap remote result sets while preserving the controlled selected array." events={events}>
      <div className="method-bar"><button type="button" onClick={loadNextPage}>Load remote data</button></div>
      <MultiSelectDropdown data={items} loading={loading} selectedItems={remoteSelected} onChange={setRemoteSelected} settings={remoteSettings} onSelect={(item) => record('select', item)} onDeSelect={(item) => record('deselect', item)} />
      <p className="route-note">Rows available: {items.length}</p>
    </ExampleLayout>
  );
}

import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { countries, badgeSelectedInitial, badgeSettings } from './limit-badges.data';
import './limit-badges.component.css';

export default function LimitBadgesExample() {
  const [limitBadgesSelected, setLimitBadgesSelected] = useState(() => [...badgeSelectedInitial]);
  const { events, record } = useExampleEvents();

  return (
    <ExampleLayout slug="limit-badges" eyebrow="Badge counter" title="Limit badges" description="Show only a fixed number of chips and move the rest into the + counter." events={events}>
      <div className="dropdown-stack">
        <MultiSelectDropdown
          data={countries}
          selectedItems={limitBadgesSelected}
          onChange={(items) => {
            setLimitBadgesSelected(items);
            record('change', items);
          }}
          settings={badgeSettings}
          onSelect={(item) => record('select', item)}
          onDeSelect={(item) => record('deselect', item)}
          onSelectAll={(items) => record('selectAll', items)}
          onDeSelectAll={(items) => record('deselectAll', items)}
        />
        <p className="route-note">badgeShowLimit: {badgeSettings.badgeShowLimit}</p>
      </div>
    </ExampleLayout>
  );
}

import { useState } from 'react';
import { useMultiSelectState } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import type { DemoItem } from '../../shared/types';
import {
  stateHookCountries,
  stateHookSelectedInitial,
  stateHookSettings
} from './state-hook.data';
import './state-hook.component.css';

export default function StateHookExample() {
  const [selectedItems, setSelectedItems] = useState<DemoItem[]>(() => [...stateHookSelectedInitial]);
  const { events, record } = useExampleEvents('state hook ready');
  const state = useMultiSelectState<DemoItem>({
    data: stateHookCountries,
    selectedItems,
    onChange: (items) => {
      setSelectedItems(items);
      record('change', items);
    },
    settings: stateHookSettings,
    onSelect: (item) => record('select', item),
    onDeSelect: (item) => record('deselect', item),
    onSelectAll: (items) => record('selectAll', items),
    onDeSelectAll: (items) => record('clearAll', items)
  });

  return (
    <ExampleLayout
      slug="state-hook"
      eyebrow="State hook"
      title="useMultiSelectState"
      description="Use the Stackline selection, filtering, grouping, badge counter, and callbacks while rendering your own controls."
      events={events}>
      <div className="state-hook-demo">
        <input
          className="state-hook-search"
          value={state.filter}
          onChange={(event) => state.setFilter(event.target.value)}
          placeholder="Filter countries"
        />

        <div className="state-hook-actions">
          <button type="button" onClick={() => state.selectAll()}>Select filtered</button>
          <button type="button" onClick={() => state.clearSelection()}>Clear all</button>
          <button type="button" onClick={() => state.removeLastSelectedItem()}>Remove last</button>
        </div>

        <div className="state-hook-chips" aria-label="Selected countries">
          {state.visibleBadges.map((item) => (
            <button key={state.getItemKey(item)} type="button" onClick={() => state.removeItem(item)}>
              {state.getItemLabel(item)} x
            </button>
          ))}
          {state.hiddenBadgeCount > 0 ? <span>+{state.hiddenBadgeCount}</span> : null}
        </div>

        <div className="state-hook-options">
          {state.filteredItems.slice(0, 12).map((item) => (
            <button
              key={state.getItemKey(item)}
              type="button"
              className={state.isSelected(item) ? 'selected' : ''}
              disabled={state.isDisabled(item)}
              onClick={() => state.selectItem(item)}>
              {state.getItemLabel(item)}
            </button>
          ))}
        </div>
      </div>
    </ExampleLayout>
  );
}

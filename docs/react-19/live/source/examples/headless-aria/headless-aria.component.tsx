import { useState } from 'react';
import { useMultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { flagClass } from '../../shared/flag-utils';
import type { DemoItem } from '../../shared/types';
import {
  headlessCountries,
  headlessSelectedInitial,
  headlessSettings
} from './headless-aria.data';
import './headless-aria.component.css';

export default function HeadlessAriaExample() {
  const [selectedItems, setSelectedItems] = useState<DemoItem[]>(() => [...headlessSelectedInitial]);
  const { events, record } = useExampleEvents('headless ready');
  const dropdown = useMultiSelectDropdown<DemoItem>({
    data: headlessCountries,
    selectedItems,
    onChange: (items) => {
      setSelectedItems(items);
      record('change', items);
    },
    settings: headlessSettings,
    onSelect: (item) => record('select', item),
    onDeSelect: (item) => record('deselect', item),
    onSelectAll: (items) => record('selectAll', items),
    onDeSelectAll: (items) => record('clearAll', items)
  });

  return (
    <ExampleLayout
      slug="headless-aria"
      eyebrow="Headless HTML"
      title="100% custom HTML with ARIA getters"
      description="Use Stackline state, filtering, grouping, keyboard handling, ARIA ids, and callbacks while owning every element and class."
      events={events}>
      <div className="headless-shell" {...dropdown.getRootProps()}>
        <div className="headless-toolbar">
          <span>{dropdown.selectedItems.length} selected</span>
          <button {...dropdown.getClearAllButtonProps()} disabled={!dropdown.selectedItems.length}>
            Clear all
          </button>
        </div>

        <button className="headless-trigger" {...dropdown.getTriggerProps()}>
          <span>
            <small>Country filter</small>
            <strong>{dropdown.label}</strong>
          </span>
          <b>{dropdown.isOpen ? 'Close' : 'Open'}</b>
        </button>

        <div className="headless-chips">
          {dropdown.visibleBadges.map((item) => (
            <span className="headless-chip" key={dropdown.getItemKey(item)}>
              <span className={flagClass(item.flag)} aria-hidden="true" />
              {dropdown.getItemLabel(item)}
              <button {...dropdown.getRemoveButtonProps(item)}>x</button>
            </span>
          ))}
          {dropdown.hiddenBadgeCount > 0 ? <span className="headless-counter">+{dropdown.hiddenBadgeCount}</span> : null}
        </div>

        {dropdown.isOpen ? (
          <div className="headless-panel">
            <label className="headless-search-label" htmlFor={dropdown.listboxId + '-search'}>Search</label>
            <input
              className="headless-search"
              {...dropdown.getSearchInputProps({ id: dropdown.listboxId + '-search' })}
            />

            <div className="headless-listbox" {...dropdown.getListboxProps()}>
              {dropdown.groups.map((group) => (
                <section className="headless-group" key={group.name}>
                  <div className="headless-group-head">
                    <span>{group.name}</span>
                    <button type="button" onClick={() => dropdown.toggleGroup(group.name, group.items.map((option) => option.item))}>
                      {group.selected ? 'Clear group' : 'Select group'}
                    </button>
                  </div>

                  {group.items.map((option) => (
                    <div
                      key={option.key}
                      className={option.selected ? 'headless-option selected' : 'headless-option'}
                      {...dropdown.getOptionProps(option)}>
                      <span className="headless-check" data-checked={option.selected} aria-hidden="true" />
                      <span className={flagClass(option.item.flag)} aria-hidden="true" />
                      <span className="headless-option-copy">
                        <strong>{option.label}</strong>
                        <small>{option.item.capital} · {option.item.region}</small>
                      </span>
                      <code>selected={String(option.selected)}</code>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </ExampleLayout>
  );
}

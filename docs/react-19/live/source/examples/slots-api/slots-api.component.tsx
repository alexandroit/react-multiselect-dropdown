import { useMemo, useState } from 'react';
import { MultiSelectDropdown, type MultiSelectDropdownSlots } from '@stackline/react-multiselect-dropdown';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { flagClass } from '../../shared/flag-utils';
import type { DemoItem } from '../../shared/types';
import { slotsCountries, slotsSelectedInitial, slotsSettings } from './slots-api.data';
import './slots-api.component.css';

export default function SlotsApiExample() {
  const [selectedItems, setSelectedItems] = useState<DemoItem[]>(() => [...slotsSelectedInitial]);
  const { events, record } = useExampleEvents('slots ready');

  const slots = useMemo<MultiSelectDropdownSlots<DemoItem>>(
    () => ({
      Trigger: ({ props, children, state }) => (
        <div {...props} className={`${props.className || ''} slot-trigger`}>
          <span className="slot-summary">
            <small>Selected countries</small>
            <strong>{state.selectedItems.length ? `${state.selectedItems.length} selected` : state.settings.text}</strong>
          </span>
          {children}
        </div>
      ),
      Badge: ({ props, item, label, removeButton }) => (
        <span {...props} className={`${props.className || ''} slot-badge`}>
          <span className={flagClass(item.flag)} aria-hidden="true" />
          {label}
          {removeButton}
        </span>
      ),
      Search: ({ props, inputProps, clearButtonProps }) => (
        <div {...props} className={`${props.className || ''} slot-search`}>
          <input {...inputProps} />
          <button {...clearButtonProps}>Clear</button>
        </div>
      ),
      GroupHeader: ({ props, group, action }) => (
        <div {...props} className={`${props.className || ''} slot-group-head`}>
          <span>{group.name}</span>
          <small>{group.enabledItems.length} enabled</small>
          {action}
        </div>
      ),
      Option: ({ props, option, checkbox }) => (
        <div {...props} className={`${props.className || ''} slot-option`}>
          {checkbox}
          <span className={flagClass(option.item.flag)} aria-hidden="true" />
          <span className="slot-option-copy">
            <strong>{option.label}</strong>
            <small>{option.item.capital} · {option.item.region}</small>
          </span>
          <span className="slot-option-state">{option.selected ? 'Selected' : 'Available'}</span>
        </div>
      ),
      MenuFooter: ({ props, state }) => (
        <div {...props} className="slot-footer">
          {state.filteredItems.length} visible options · {state.selectedItems.length} selected
        </div>
      )
    }),
    []
  );

  return (
    <ExampleLayout
      slug="slots-api"
      eyebrow="Slots API"
      title="Custom HTML slots"
      description="Replace the trigger, badges, search shell, group header, options, and footer while preserving package behavior."
      events={events}>
      <MultiSelectDropdown
        data={slotsCountries}
        selectedItems={selectedItems}
        onChange={(items) => {
          setSelectedItems(items);
          record('change', items);
        }}
        settings={slotsSettings}
        slots={slots}
        onSelect={(item) => record('select', item)}
        onDeSelect={(item) => record('deselect', item)}
      />
    </ExampleLayout>
  );
}

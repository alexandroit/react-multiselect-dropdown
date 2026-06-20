import { useMemo, useState } from 'react';
import { ExampleLayout, useExampleEvents } from '../../shared/example-layout';
import { flagClass } from '../../shared/flag-utils';
import {
  CountryMultiselect,
  factoryCountries,
  factorySelectedInitial,
  factorySettings,
  type CountryOption
} from './type-safe-factory.data';
import './type-safe-factory.component.css';

export default function TypeSafeFactoryExample() {
  const [selectedItems, setSelectedItems] = useState<CountryOption[]>(() => [...factorySelectedInitial]);
  const { events, record } = useExampleEvents('factory ready');

  const slots = useMemo(
    () =>
      CountryMultiselect.defineSlots({
        Option: ({ props, option, checkbox }) => (
          <div {...props} className={`${props.className || ''} factory-option`}>
            {checkbox}
            <span className={flagClass(option.item.flag)} aria-hidden="true" />
            <span>
              <strong>{option.item.itemName}</strong>
              <small>{option.item.capital} · {option.item.region}</small>
            </span>
          </div>
        )
      }),
    []
  );

  return (
    <ExampleLayout
      slug="type-safe-factory"
      eyebrow="Type-safe factory"
      title="createMultiSelectDropdown<T>()"
      description="Bind the object type once, then reuse typed settings, typed slots, and the typed component."
      events={events}>
      <CountryMultiselect.Dropdown
        data={factoryCountries}
        selectedItems={selectedItems}
        onChange={(items) => {
          setSelectedItems(items);
          record('change', items);
        }}
        settings={factorySettings}
        slots={slots}
        onSelect={(item) => record('select', item)}
        onDeSelect={(item) => record('deselect', item)}
      />
    </ExampleLayout>
  );
}

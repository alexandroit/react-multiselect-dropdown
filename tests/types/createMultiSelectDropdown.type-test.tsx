import { useState } from 'react';
import { createMultiSelectDropdown } from '../../src';

type Country = {
  id: number;
  itemName: string;
  capital: string;
  region: string;
  disabled?: boolean;
};

const countries: Country[] = [
  { id: 1, itemName: 'Brazil', capital: 'Brasilia', region: 'Americas' },
  { id: 2, itemName: 'Canada', capital: 'Ottawa', region: 'Americas' }
];

const CountrySelect = createMultiSelectDropdown<Country>();

const settings = CountrySelect.defineSettings({
  text: 'Countries',
  primaryKey: 'id',
  labelKey: 'itemName',
  searchBy: ['itemName', 'capital'],
  groupBy: 'region'
});

CountrySelect.defineSettings({
  // @ts-expect-error labelKey must be a key of Country.
  labelKey: 'missing'
});

CountrySelect.defineSettings({
  // @ts-expect-error searchBy entries must be keys of Country.
  searchBy: ['itemName', 'missing']
});

CountrySelect.defineSettings({
  // @ts-expect-error groupBy must be a key of Country or a function.
  groupBy: 'continent'
});

const slots = CountrySelect.defineSlots({
  Option: ({ props, option, checkbox }) => {
    option.item.capital.toUpperCase();
    // @ts-expect-error option.item is typed as Country.
    option.item.missing;

    return (
      <div {...props}>
        {checkbox}
        {option.item.itemName}
      </div>
    );
  }
});

function CountryExample() {
  const [selectedItems, setSelectedItems] = useState<Country[]>([]);
  const dropdown = CountrySelect.useDropdown({
    data: countries,
    selectedItems,
    onChange: setSelectedItems,
    settings
  });

  dropdown.selectItem(countries[0]);
  // @ts-expect-error selectItem accepts only Country objects.
  dropdown.selectItem({ id: 'wrong', itemName: 'Wrong' });

  return (
    <CountrySelect.Dropdown
      data={countries}
      selectedItems={selectedItems}
      onChange={setSelectedItems}
      settings={settings}
      slots={slots}
    />
  );
}

function BadDataExample() {
  const badData = [{ sku: 1, label: 'Bad' }];

  return (
    // @ts-expect-error typed dropdown only accepts Country items.
    <CountrySelect.Dropdown data={badData} />
  );
}

const UntypedSelect = createMultiSelectDropdown();

UntypedSelect.defineSettings({
  // @ts-expect-error createMultiSelectDropdown needs a generic type for typed keys.
  primaryKey: 'id'
});

void CountryExample;
void BadDataExample;

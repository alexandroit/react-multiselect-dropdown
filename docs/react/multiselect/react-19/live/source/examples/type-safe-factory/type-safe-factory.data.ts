import { createMultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export type CountryOption = Required<Pick<DemoItem, 'id' | 'itemName' | 'name' | 'flag' | 'capital' | 'region' | 'category'>>;

export const CountryMultiselect = createMultiSelectDropdown<CountryOption>();

export const factoryCountries = countryOptions.slice(0, 24) as CountryOption[];
export const factorySelectedInitial: CountryOption[] = [factoryCountries[0], factoryCountries[3]];

export const factorySettings = CountryMultiselect.defineSettings({
  text: 'Typed countries',
  enableSearchFilter: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  searchBy: ['itemName', 'capital', 'region'],
  groupBy: 'category',
  badgeShowLimit: 2,
  maxHeight: 240,
  showCheckbox: true,
  clearAll: true,
  skin: 'custom'
});

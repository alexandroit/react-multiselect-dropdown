import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const asyncBaseCountries: DemoItem[] = countryOptions.slice(0, 18);
export const asyncAlternateCountries: DemoItem[] = countryOptions.slice(10, 34).reverse();
export const asyncSelectedInitial: DemoItem[] = [countryOptions[0], countryOptions[2]];

export const asyncSettings: DropdownSettings<DemoItem> = {
  text: 'Async countries',
  enableSearchFilter: true,
  searchPlaceholderText: 'Search or add',
  addNewItemOnFilter: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  searchBy: ['itemName', 'capital', 'region'],
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  clearAll: true,
  skin: 'brand'
};

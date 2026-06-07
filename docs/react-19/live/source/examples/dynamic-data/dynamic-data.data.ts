import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const baseCountries: DemoItem[] = countryOptions;
export const expandedCountries: DemoItem[] = [...countryOptions].reverse();

export const dynamicSelectedInitial: DemoItem[] = countryOptions.slice(0, 1);

export const dynamicSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Dynamic data',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: 'Search',
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic'
};

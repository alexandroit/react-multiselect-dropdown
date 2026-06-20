import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const remoteCountries: DemoItem[] = countryOptions;

export const apiSelectedInitial: DemoItem[] = [remoteCountries[1]];

export const apiSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Search remote API',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  enableSearchFilter: true,
  searchPlaceholderText: 'Type to query API'
};

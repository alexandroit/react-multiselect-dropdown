import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const firstPage: DemoItem[] = countryOptions.slice(0, 54);
export const secondPage: DemoItem[] = countryOptions.slice(10);

export const remoteSelectedInitial: DemoItem[] = [];

export const remoteSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Remote countries',
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
  skin: 'classic',
  loadingText: 'Loading countries'
};

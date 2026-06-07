import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const dropdownGroups = [
  { id: 'countries', label: 'Countries', items: countryOptions },
  { id: 'regions', label: 'Regions', items: [{ id: 101, itemName: 'Americas' }, { id: 102, itemName: 'Europe' }] },
  { id: 'skills', label: 'Skills', items: [{ id: 201, itemName: 'React' }, { id: 202, itemName: 'TypeScript' }, { id: 203, itemName: 'CSS' }] }
];

export const loopSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: 'Select values',
  selectAllText: 'Select all',
  unSelectAllText: 'Clear all',
  enableCheckAll: true,
  searchPlaceholderText: 'Search',
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: 'No data',
  clearAll: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  skin: 'classic',
  enableSearchFilter: false
};

import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const ariaCountries: DemoItem[] = countryOptions;
export const ariaSelectedInitial: DemoItem[] = [countryOptions[0], countryOptions[2]];

export const ariaSettings: DropdownSettings<DemoItem> = {
  text: 'ARIA countries',
  enableSearchFilter: true,
  searchPlaceholderText: 'Search ARIA rows',
  primaryKey: 'id',
  labelKey: 'itemName',
  searchBy: ['itemName', 'capital', 'region'],
  badgeShowLimit: 2,
  maxHeight: 220,
  showCheckbox: true,
  clearAll: true,
  skin: 'material'
};

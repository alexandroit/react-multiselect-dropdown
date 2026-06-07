import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const slotsCountries: DemoItem[] = countryOptions.slice(0, 28);
export const slotsSelectedInitial: DemoItem[] = [countryOptions[0], countryOptions[1], countryOptions[5]];

export const slotsSettings: DropdownSettings<DemoItem> = {
  text: 'Slot-rendered countries',
  enableSearchFilter: true,
  searchPlaceholderText: 'Search custom rows',
  primaryKey: 'id',
  labelKey: 'itemName',
  searchBy: ['itemName', 'capital', 'region'],
  groupBy: 'category',
  badgeShowLimit: 2,
  maxHeight: 260,
  showCheckbox: true,
  clearAll: true,
  skin: 'classic'
};

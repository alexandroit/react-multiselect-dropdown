import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const stateHookCountries: DemoItem[] = countryOptions.slice(0, 30);
export const stateHookSelectedInitial: DemoItem[] = [countryOptions[0], countryOptions[1]];

export const stateHookSettings: DropdownSettings<DemoItem> = {
  text: 'State hook countries',
  enableSearchFilter: true,
  primaryKey: 'id',
  labelKey: 'itemName',
  searchBy: ['itemName', 'capital', 'region'],
  groupBy: 'category',
  badgeShowLimit: 3,
  clearAll: true
};

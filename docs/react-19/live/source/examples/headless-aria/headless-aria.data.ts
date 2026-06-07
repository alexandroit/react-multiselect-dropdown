import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const headlessCountries: DemoItem[] = countryOptions.slice(0, 40);
export const headlessSelectedInitial: DemoItem[] = [countryOptions[0], countryOptions[1], countryOptions[2]];

export const headlessSettings: DropdownSettings<DemoItem> = {
  text: 'Choose countries',
  enableSearchFilter: true,
  searchPlaceholderText: 'Search countries',
  primaryKey: 'id',
  labelKey: 'itemName',
  searchBy: ['itemName', 'capital', 'region'],
  groupBy: 'category',
  badgeShowLimit: 2,
  maxHeight: 260,
  clearAll: true,
  keyboard: {
    space: true,
    spaceOptionAction: 'toggle',
    tab: true,
    arrows: true,
    escape: true,
    backspaceRemovesLastWhenSearchEmpty: false,
    deleteRemovesFocusedBadge: true
  }
};

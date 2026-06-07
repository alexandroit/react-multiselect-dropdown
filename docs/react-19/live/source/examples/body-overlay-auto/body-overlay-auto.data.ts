import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const overlayCountries: DemoItem[] = countryOptions;

export const overlaySelectedInitial: DemoItem[] = countryOptions.slice(2, 4);

export const overlaySettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Dialog dropdown top",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: "Search",
  badgeShowLimit: 2,
  maxHeight: 180,
  showCheckbox: true,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "material",
  appendToBody: true,
  tagToBody: true,
  autoPosition: true,
  position: "top"
};

import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';
import { countryOptions } from '../../shared/country-data';

export const overlayCountries: DemoItem[] = countryOptions;

export const dialogSelectedInitial: DemoItem[] = countryOptions.slice(1, 2);

export const dialogSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Dialog dropdown",
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
  position: "bottom"
};

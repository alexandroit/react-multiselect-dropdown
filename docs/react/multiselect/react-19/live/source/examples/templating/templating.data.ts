import type { DropdownSettings } from '@stackline/react-multiselect-dropdown';
import type { DemoItem } from '../../shared/types';

export const metrics: DemoItem[] = [
  {
    id: 1,
    itemName: "Revenue",
    detail: "Finance metric",
    color: "#2563eb"
  },
  {
    id: 2,
    itemName: "Retention",
    detail: "Customer metric",
    color: "#0f766e"
  },
  {
    id: 3,
    itemName: "Risk",
    detail: "Operations metric",
    color: "#b45309"
  },
  {
    id: 4,
    itemName: "Quality",
    detail: "Product metric",
    color: "#7c3aed"
  },
  {
    id: 5,
    itemName: "Support",
    detail: "Service metric",
    color: "#dc2626"
  }
];

export const templateSelectedInitial: DemoItem[] = [
  {
    id: 1,
    itemName: "Revenue",
    detail: "Finance metric",
    color: "#2563eb"
  },
  {
    id: 2,
    itemName: "Retention",
    detail: "Customer metric",
    color: "#0f766e"
  }
];

export const templateSettings: DropdownSettings<DemoItem> = {
  singleSelection: false,
  text: "Custom rendering",
  selectAllText: "Select all",
  unSelectAllText: "Clear all",
  enableCheckAll: true,
  enableSearchFilter: true,
  searchPlaceholderText: "Search",
  badgeShowLimit: 3,
  maxHeight: 220,
  showCheckbox: true,
  noDataLabel: "No data",
  clearAll: true,
  primaryKey: "id",
  labelKey: "itemName",
  skin: "classic"
};

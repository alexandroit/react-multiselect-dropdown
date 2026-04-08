# `@stackline/react-multiselect-dropdown`

A maintained React multiselect dropdown built for teams migrating from Angular-style settings objects while still feeling natural in React apps.

## Why this package exists

`@stackline/react-multiselect-dropdown` keeps the familiar mental model from `@stackline/angular2-multiselect-dropdown`:

- pass `data`
- pass a `settings` object
- bind `selectedItems`
- listen to `onSelect`, `onDeSelect`, `onSelectAll`, and `onDeSelectAll`

At the same time, the React version adds the patterns React developers expect:

- controlled and uncontrolled selection
- render functions for items and badges
- imperative methods through `ref`
- versioned docs for React 17, 18, and 19

## Install

```bash
npm install @stackline/react-multiselect-dropdown
```

## Quick start

```tsx
import { useState } from 'react';
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';

const items = [
  { id: 1, itemName: 'India' },
  { id: 2, itemName: 'Singapore' },
  { id: 3, itemName: 'Australia' }
];

export function Example() {
  const [selectedItems, setSelectedItems] = useState([items[0]]);

  return (
    <MultiSelectDropdown
      data={items}
      selectedItems={selectedItems}
      onChange={setSelectedItems}
      settings={{
        text: 'Select Countries',
        enableSearchFilter: true,
        primaryKey: 'id',
        labelKey: 'itemName'
      }}
    />
  );
}
```

## Angular migration mapping

| Angular usage | React usage |
| --- | --- |
| `[data]="items"` | `data={items}` |
| `[(ngModel)]="selectedItems"` | `selectedItems={selectedItems}` + `onChange={setSelectedItems}` |
| `[settings]="settings"` | `settings={settings}` |
| `(onSelect)="..."` | `onSelect={(item) => ...}` |
| `(onDeSelect)="..."` | `onDeSelect={(item) => ...}` |
| `(onSelectAll)="..."` | `onSelectAll={(items) => ...}` |
| `(onDeSelectAll)="..."` | `onDeSelectAll={(items) => ...}` |
| `@ViewChild(...)` methods | `ref` + `openDropdown()`, `closeDropdown()`, `clearSelection()`, `focusSearch()` |

## Supported settings

The React version keeps the commonly used Angular settings keys:

- `singleSelection`
- `text`
- `enableCheckAll`
- `selectAllText`
- `unSelectAllText`
- `filterSelectAllText`
- `filterUnSelectAllText`
- `enableFilterSelectAll`
- `enableSearchFilter`
- `searchBy`
- `maxHeight`
- `badgeShowLimit`
- `classes`
- `limitSelection`
- `disabled`
- `searchPlaceholderText`
- `groupBy`
- `showCheckbox`
- `noDataLabel`
- `searchAutofocus`
- `lazyLoading`
- `labelKey`
- `primaryKey`
- `position`
- `loading`
- `selectGroup`
- `addNewItemOnFilter`
- `addNewButtonText`
- `escapeToClose`
- `clearAll`

## Docs by React line

| React line | Package line | Docs |
| --- | --- | --- |
| React 17 | `17.x` | https://alexandroit.github.io/react-multiselect-dropdown/react-17/ |
| React 18 | `18.x` | https://alexandroit.github.io/react-multiselect-dropdown/react-18/ |
| React 19 | `19.x` | https://alexandroit.github.io/react-multiselect-dropdown/react-19/ |

## Version history

| Package version | React line | Status |
| --- | --- | --- |
| `17.0.0` | React 17 | maintained docs line |
| `18.0.0` | React 18 | maintained docs line |
| `19.0.0` | React 19 | latest |

## License

MIT

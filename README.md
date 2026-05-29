# @stackline/react-multiselect-dropdown

> A maintained React multiselect dropdown for React 19 applications, with controlled React state, searchable/grouped options, lazy loading hooks, custom render functions, skins, body-overlay positioning, and ADA-compliant keyboard/ARIA behavior.

[![npm version](https://img.shields.io/npm/v/@stackline/react-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/react-multiselect-dropdown)
[![npm downloads](https://img.shields.io/npm/dt/@stackline/react-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/react-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/react-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/react-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@stackline/react-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/react-multiselect-dropdown/blob/main/LICENSE)
[![React 19](https://img.shields.io/badge/React-19.x-61dafb?style=flat-square&logo=react)](https://alexandro.net/docs/react/multiselect/react-19/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![GitHub stars](https://img.shields.io/github/stars/alexandroit/react-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/react-multiselect-dropdown/stargazers)

**[Documentation & Live Demos](https://alexandro.net/docs/react/multiselect/)** | **[React 19 Demo](https://alexandro.net/docs/react/multiselect/react-19/)** | **[React 19 StackBlitz](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fbasic)** | **[npm](https://www.npmjs.com/package/@stackline/react-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/react-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/react-multiselect-dropdown)**

**Latest tested package release:** `19.0.1` for React `19.x`

---

> **Credits:** Current maintenance, React line stewardship, publishing, and documentation by [Alexandro Paixao Marques](https://github.com/alexandroit/react-multiselect-dropdown).

---

## Why this library?

`@stackline/react-multiselect-dropdown` provides a maintained React multiselect component for applications that need predictable selection state, search, grouping, skins, keyboard support, and live tested examples.

The package is built around a controlled React API: pass `data`, bind `selectedItems`, receive updates through `onChange`, and customize behavior through a `settings` object. It also supports custom React render functions for option rows and selected badges, lazy loading callbacks, imperative `ref` methods, and body-overlay positioning for dialogs or clipped containers.

The current package release is `19.0.1` for React 19.x applications. It was tested in a clean React `19.2.4` application before public npm publication.

## Features

| Feature | Supported |
| :--- | :---: |
| React 19 tested release line | Yes |
| Multi-select and single-select modes | Yes |
| Controlled and uncontrolled selection | Yes |
| Search and filter | Yes |
| Group by field | Yes |
| Custom item render functions | Yes |
| Custom badge render functions | Yes |
| Lazy loading hooks | Yes |
| Add-new-item from search text | Yes |
| Ref methods for open, close, focus, select all, and clear | Yes |
| Built-in `classic`, `material`, `dark`, `custom`, and `brand` skins | Yes |
| ADA-compliant keyboard navigation, focus states, and ARIA labels | Yes |
| Dialog and overflow-container support through `appendToBody` / `tagToBody` | Yes |
| Versioned docs builds per React line | Yes |

## Table of Contents

1. [React Version Compatibility](#react-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Styling and Skins](#styling-and-skins)
5. [Basic Usage](#basic-usage)
6. [React 19 StackBlitz Playground](#react-19-stackblitz-playground)
7. [Official React 19 Test Matrix](#official-react-19-test-matrix)
8. [Custom Render Functions](#custom-render-functions)
9. [Forms and Controlled State](#forms-and-controlled-state)
10. [Lazy Loading and Dynamic Data](#lazy-loading-and-dynamic-data)
11. [Dialogs and Overflow Containers](#dialogs-and-overflow-containers)
12. [Events](#events)
13. [Ref Methods](#ref-methods)
14. [Run Locally](#run-locally)
15. [License](#license)

## React Version Compatibility

Each package family installs on its matching React family. Keep the package family aligned with the React major used by your application.

| Package family | React family | Peer range | Tested release window | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **17.x** | **React 17 only** | **`>=17.0.0 <18.0.0`** | **17.0.0 -> 17.0.2** | [React 17 family docs](https://alexandro.net/docs/react/multiselect/react-17/) |
| **18.x** | **React 18 only** | **`>=18.0.0 <19.0.0`** | **18.0.0 -> 18.3.1** | [React 18 family docs](https://alexandro.net/docs/react/multiselect/react-18/) |
| **19.x** | **React 19 only** | **`>=19.0.0 <20.0.0`** | **19.0.1 -> 19.2.4** | [React 19 family docs](https://alexandro.net/docs/react/multiselect/react-19/) |

## Installation

```bash
npm install @stackline/react-multiselect-dropdown@19.0.1 --save-exact
```

Install `19.0.1` for React 19.x applications. The package includes its component styles and injects them at runtime, so no extra CSS import is required for the default experience.

## Setup

### 1. Import the component

```tsx
import { MultiSelectDropdown } from '@stackline/react-multiselect-dropdown';
import type {
  DropdownSettings,
  MultiSelectDropdownHandle
} from '@stackline/react-multiselect-dropdown';
```

### 2. Keep selection in React state

```tsx
const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
```

### 3. Pass a stable settings object

```tsx
const settings = useMemo<DropdownSettings<Country>>(
  () => ({
    text: 'Select countries',
    enableSearchFilter: true,
    primaryKey: 'id',
    labelKey: 'itemName',
    badgeShowLimit: 3,
    skin: 'classic'
  }),
  []
);
```

## Styling and Skins

Use `settings.skin` to switch the visual mode:

```ts
setSettings((current) => ({
  ...current,
  skin: 'material'
}));
```

Built-in skins:

| Skin | Usage |
| :--- | :--- |
| `classic` | Compact classic dropdown styling. |
| `material` | Material-style rounded controls and chips. |
| `dark` | Dark UI surfaces. |
| `custom` | CSS-variable starter skin for custom projects. |
| `brand` | Stackline brand skin. |

`settings.theme` is accepted as a legacy alias, but new React usage should configure only `settings.skin`.

## Basic Usage

```tsx
import { useMemo, useState } from 'react';
import {
  MultiSelectDropdown,
  type DropdownSettings
} from '@stackline/react-multiselect-dropdown';

type Country = {
  id: number;
  itemName: string;
  capital: string;
  region: string;
};

const countries: Country[] = [
  { id: 1, itemName: 'Brazil', capital: 'Brasilia', region: 'South America' },
  { id: 2, itemName: 'Canada', capital: 'Ottawa', region: 'North America' },
  { id: 3, itemName: 'Portugal', capital: 'Lisbon', region: 'Europe' },
  { id: 4, itemName: 'United States', capital: 'Washington, DC', region: 'North America' },
  { id: 5, itemName: 'Argentina', capital: 'Buenos Aires', region: 'South America' },
  { id: 6, itemName: 'Mexico', capital: 'Mexico City', region: 'North America' }
];

export function CountrySelector() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([
    countries[1]
  ]);

  const settings = useMemo<DropdownSettings<Country>>(
    () => ({
      singleSelection: false,
      text: 'Select countries',
      selectAllText: 'Select all',
      unSelectAllText: 'Clear all',
      enableSearchFilter: true,
      searchPlaceholderText: 'Search',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 4,
      maxHeight: 260,
      showCheckbox: true,
      noDataLabel: 'No data',
      skin: 'classic',
      appendToBody: false
    }),
    []
  );

  return (
    <MultiSelectDropdown
      data={countries}
      selectedItems={selectedCountries}
      onChange={setSelectedCountries}
      settings={settings}
      onSelect={(item) => console.log('selected', item)}
      onDeSelect={(item) => console.log('removed', item)}
      onSelectAll={(items) => console.log('selected all', items)}
      onDeSelectAll={(items) => console.log('cleared all', items)}
    />
  );
}
```

## React 19 StackBlitz Playground

Use the dedicated React 19 StackBlitz project when you want a fast editable example without importing the full package repository:

**[Open the React 19 playground](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fbasic)**

| Example | StackBlitz |
| :--- | :--- |
| Basic example | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fbasic) |
| All visible counter | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fallvisible) |
| Single selection | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fsingleselection) |
| Search filter | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fsearchfilter) |
| Group By | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fgroupby) |
| Selection limit | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Flimitselection) |
| Templating | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Ftemplating) |
| Search and Add New Item | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2FsearchfilterAddNewItem) |
| Disabled state | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fdisabledstate) |
| Using in Forms | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fusinginform) |
| Virtual Scrolling | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Fvirtualscrolling) |
| Lazy Loading | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2Flazyloading) |
| Using Inside Dialog | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2FusingInDialog) |
| Body Overlay Auto | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2FbodyOverlayTop) |
| Methods | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?startScript=start&initialpath=%2F%23%2FdropdownMethods) |

## Official React 19 Test Matrix

The React 19 release was tested in a clean React `19.2.4` application with `@stackline/react-multiselect-dropdown@19.0.1`. The docs use the same examples from that test app, including keyboard navigation, focus, ARIA behavior, badge counters, responsive action buttons, scrollable lists, and dialog-safe body overlays.

The same core scenarios are validated for the visual skins:

| # | Scenario | Main settings tested |
| :---: | :--- | :--- |
| 01 | Basic multi | `{ enableSearchFilter: true }` |
| 02 | All selected badges visible | `{ badgeShowLimit: 10 }` |
| 03 | Single selection | `{ singleSelection: true }` |
| 04 | Search by fields | `{ searchBy: ['itemName', 'capital'] }` |
| 05 | Grouped options | `{ groupBy: 'category', selectGroup: true }` |
| 06 | Selection limit | `{ limitSelection: 2, badgeShowLimit: 2 }` |
| 07 | Custom rendering | `renderItem` and `renderBadge` |
| 08 | Search and add item | `{ addNewItemOnFilter: true }` |
| 09 | Disabled state | `{ disabled: true }` |
| 10 | Controlled form validation | React state and derived validation |
| 11 | Long list with keyboard scroll | `{ maxHeight: 140 }` |
| 12 | Local lazy loading | `{ lazyLoading: true }` |
| 13 | Dialog and overflow container | `{ appendToBody: true, tagToBody: true }` |
| 14 | Body overlay auto direction | `{ autoPosition: true, position: 'top' }` |
| 15 | Ref methods | `openDropdown`, `closeDropdown`, `selectAll`, `clearSelection` |

## Custom Render Functions

Use `renderItem` for option rows and `renderBadge` for selected chips:

```tsx
<MultiSelectDropdown
  data={countries}
  selectedItems={selectedCountries}
  onChange={setSelectedCountries}
  settings={settings}
  renderItem={(item, context) => (
    <span>
      <strong>{context.label}</strong>
      <small>{item.capital}</small>
    </span>
  )}
  renderBadge={(item) => (
    <span>{item.itemName}</span>
  )}
/>
```

## Forms and Controlled State

Keep the selected array in React state and derive validity from that state:

```tsx
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

const formIsValid = email.trim().length > 0 && selectedSkills.length > 0;

return (
  <form onSubmit={(event) => event.preventDefault()}>
    <input value={name} onChange={(event) => setName(event.target.value)} />
    <input value={email} onChange={(event) => setEmail(event.target.value)} />

    <MultiSelectDropdown
      data={skills}
      selectedItems={selectedSkills}
      onChange={setSelectedSkills}
      settings={skillSettings}
    />

    <button type="submit" disabled={!formIsValid}>
      Submit
    </button>
  </form>
);
```

## Lazy Loading and Dynamic Data

Enable lazy loading through the settings object and append more rows when the list reaches the end:

```tsx
const settings = {
  text: 'Select people',
  enableSearchFilter: true,
  lazyLoading: true,
  labelKey: 'name',
  primaryKey: 'id',
  maxHeight: 140
};

<MultiSelectDropdown
  data={people}
  selectedItems={selectedPeople}
  onChange={setSelectedPeople}
  settings={settings}
  onScrollToEnd={() => {
    setPeople((current) => current.concat(loadMorePeople()));
  }}
/>
```

## Dialogs and Overflow Containers

Use `appendToBody: true` or `tagToBody: true` when the dropdown is inside dialogs, modals, drawers, or containers that set `overflow: hidden` or `overflow: auto`.

```tsx
const settings = {
  text: 'Dialog dropdown',
  enableSearchFilter: true,
  skin: 'material',
  appendToBody: true,
  tagToBody: true,
  autoPosition: true
};
```

With body overlay enabled, the open panel is rendered against `document.body`, aligned to the original trigger, sized to the trigger, recalculated on open, scroll, resize, and content changes, and cleaned up when the dropdown closes or the component unmounts.

`autoPosition: true` treats `position` as a preferred direction. The menu opens upward only when there is meaningfully less room below and enough room above; otherwise it opens below and shrinks the scrollable list height to stay visible without covering the trigger.

## Events

Available callbacks:

- `onChange`
- `onSelect`
- `onDeSelect`
- `onSelectAll`
- `onDeSelectAll`
- `onOpen`
- `onClose`
- `onScrollToEnd`
- `onAddFilterNewItem`
- `onGroupSelect`
- `onGroupDeSelect`

## Ref Methods

```tsx
const dropdownRef = useRef<MultiSelectDropdownHandle<Country>>(null);

dropdownRef.current?.openDropdown();
dropdownRef.current?.closeDropdown();
dropdownRef.current?.focusSearch();
dropdownRef.current?.selectAll();
dropdownRef.current?.deSelectAll();
dropdownRef.current?.clearSelection();
```

## Run Locally

```bash
npm install
npm run build
npm test
```

React 19 docs:

```bash
cd docs-src/react-19
npm install
npm run build
```

## License

MIT

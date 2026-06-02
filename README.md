# @stackline/react-multiselect-dropdown

> A maintained React multiselect dropdown for React 19 applications, with controlled React state, custom slots, headless/state hooks, searchable/grouped options, lazy loading hooks, custom render functions, skins, body-overlay positioning, and accessibility-focused and keyboard/ARIA tested behavior.

[![npm version](https://img.shields.io/npm/v/@stackline/react-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/react-multiselect-dropdown)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/react-multiselect-dropdown.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/react-multiselect-dropdown)
[![license](https://img.shields.io/npm/l/@stackline/react-multiselect-dropdown.svg?style=flat-square)](https://github.com/alexandroit/react-multiselect-dropdown/blob/main/LICENSE)
[![React 19](https://img.shields.io/badge/React-19.x-61dafb?style=flat-square&logo=react)](https://alexandro.net/docs/react/multiselect/react-19/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation & Live Demos](https://alexandro.net/docs/react/multiselect/)** | **[React 19 Demo](https://alexandro.net/docs/react/multiselect/react-19/)** | **[React 19 StackBlitz](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fbasic%2Fbasic.component.tsx&startScript=start&initialpath=%2Fbasic)** | **[npm](https://www.npmjs.com/package/@stackline/react-multiselect-dropdown)** | **[Issues](https://github.com/alexandroit/react-multiselect-dropdown/issues)** | **[Repository](https://github.com/alexandroit/react-multiselect-dropdown)** | **[Community Discussions](https://www.reddit.com/r/Stackline/)**

<p align="center">
  <img src="https://alexandro.net/images/public/2026/06/dropdownlist.gif" alt="@stackline/react-multiselect-dropdown live dropdown preview" width="420">
</p>

**Latest React 19 release:** `19.1.1` for React `19.x`

---

> **Credits:** Current maintenance, React line stewardship, publishing, and documentation by [Alexandro Paixao Marques](https://github.com/alexandroit/react-multiselect-dropdown).

---

## Why this library?

`@stackline/react-multiselect-dropdown` provides a maintained React multiselect component for applications that need predictable selection state, search, grouping, skins, keyboard support, and live tested examples.

The package is built around a controlled React API: pass `data`, bind `selectedItems`, receive updates through `onChange`, and customize behavior through a `settings` object. It also supports a Slots API for replacing component structure without losing ARIA/focus behavior, a headless `useMultiSelectDropdown` hook, a lower-level `useMultiSelectState` hook, custom React render functions for option rows and selected badges, lazy loading callbacks, imperative `ref` methods, and body-overlay positioning for dialogs or clipped containers.

The current stable React 19 release is `19.1.1`. It adds guided structural slots, a headless hook, a state hook, a type-safe factory helper, and a strengthened combobox contract while keeping the styled `<MultiSelectDropdown />` component compatible with the existing visual contract.

## Features

| Feature | Supported |
| :--- | :---: |
| React 19 tested release line | Yes |
| Multi-select and single-select modes | Yes |
| Controlled and uncontrolled selection | Yes |
| Guided Slots API for custom HTML structure | Yes |
| Headless `useMultiSelectDropdown` hook | Yes |
| State-only `useMultiSelectState` hook | Yes |
| Search and filter | Yes |
| Group by field | Yes |
| Custom item render functions | Yes |
| Custom badge render functions | Yes |
| Lazy loading hooks | Yes |
| Add-new-item from search text | Yes |
| Ref methods for open, close, focus, select all, and clear | Yes |
| Built-in `classic`, `material`, `dark`, `custom`, and `brand` skins | Yes |
| Accessibility-focused and keyboard/ARIA tested navigation, focus states, and ARIA labels | Yes |
| Multiselect options expose both `aria-selected` and `aria-checked` | Yes |
| Backspace/Escape combobox contract | Yes |
| Async add-item stale response protection | Yes |
| Selected object preservation across async data refreshes | Yes |
| Dialog and overflow-container support through `appendToBody` / `tagToBody` | Yes |
| Left-aligned, vertically centered placeholder and single-value text | Yes |
| Versioned docs builds per React line | Yes |

## Table of Contents

1. [React Version Compatibility](#react-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Styling and Skins](#styling-and-skins)
5. [Basic Usage](#basic-usage)
6. [Customization Paths](#customization-paths)
7. [Slots API](#slots-api)
8. [Headless Usage](#headless-usage)
9. [Combobox Contract](#combobox-contract)
10. [React 19 StackBlitz Playground](#react-19-stackblitz-playground)
11. [Official React 19 Test Matrix](#official-react-19-test-matrix)
12. [Custom Render Functions](#custom-render-functions)
13. [Forms and Controlled State](#forms-and-controlled-state)
14. [Lazy Loading and Dynamic Data](#lazy-loading-and-dynamic-data)
15. [Dialogs and Overflow Containers](#dialogs-and-overflow-containers)
16. [Events](#events)
17. [Ref Methods](#ref-methods)
18. [Run Locally](#run-locally)
19. [License](#license)

## React Version Compatibility

Each package family installs on its matching React family. Keep the package family aligned with the React major used by your application.

| Package family | React family | Peer range | Tested release window | Demo link |
| :---: | :---: | :---: | :---: | :--- |
| **17.x** | **React 17 only** | **`>=17.0.0 <18.0.0`** | **17.0.0 -> 17.0.2** | [React 17 family docs](https://alexandro.net/docs/react/multiselect/react-17/) |
| **18.x** | **React 18 only** | **`>=18.0.0 <19.0.0`** | **18.0.0 -> 18.3.1** | [React 18 family docs](https://alexandro.net/docs/react/multiselect/react-18/) |
| **19.x** | **React 19 only** | **`>=19.0.0 <20.0.0`** | **19.1.1 -> 19.2.4** | [React 19 family docs](https://alexandro.net/docs/react/multiselect/react-19/) |

## Installation

```bash
npm install @stackline/react-multiselect-dropdown@19.1.1 --save-exact
```

Install `19.1.1` for React 19.x applications. The styled component includes its component styles and injects them at runtime. The headless hook does not inject CSS and lets your application own the markup and styling.

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
import { useState } from 'react';
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

## Customization Paths

Use the API layer that matches the amount of control your team needs:

| Layer | Best for | What you own |
| :--- | :--- | :--- |
| `<MultiSelectDropdown />` | Fast forms, filters, dashboards, and admin screens. | Data, selected state, settings, events, and optional render functions. |
| `createMultiSelectDropdown<T>()` | Teams that want to bind the item type once for a feature or design-system wrapper. | A typed component family, typed settings, typed slots, and typed hooks. |
| `slots` | Custom HTML around the proven component behavior. | Specific DOM pieces such as trigger, badges, menu, search, groups, options, and footer. |
| `useMultiSelectDropdown` | Fully custom interfaces and design systems. | All markup and CSS, while Stackline provides state, ARIA prop getters, keyboard flow, grouping, and callbacks. |
| `useMultiSelectState` | Advanced state engines or existing combobox shells. | Every element, every event binding, and all visual behavior. |

For most teams, start with the component. Use `slots` when the component works but your layout needs a different shell. Use the headless hooks when the application must own the whole combobox contract.

## Type-Safe Factory

Use `createMultiSelectDropdown<T>()` when a feature, package, or design-system wrapper should bind the item type once and reuse it across the component, settings, slots, and hooks.

This is optional. The normal `<MultiSelectDropdown />` API remains the fastest path for most screens.

```tsx
import { useMemo, useState } from 'react';
import {
  createMultiSelectDropdown
} from '@stackline/react-multiselect-dropdown';

type Country = {
  id: number;
  itemName: string;
  capital: string;
  region: string;
};

const CountryMultiselect = createMultiSelectDropdown<Country>();

const countrySettings = CountryMultiselect.defineSettings({
  text: 'Choose countries',
  primaryKey: 'id',
  labelKey: 'itemName',
  searchBy: ['itemName', 'capital'],
  groupBy: 'region',
  enableSearchFilter: true,
  badgeShowLimit: 2
});

const countrySlots = CountryMultiselect.defineSlots({
  Option: ({ props, option, checkbox }) => (
    <div {...props}>
      {checkbox}
      <strong>{option.item.itemName}</strong>
      <small>{option.item.capital} - {option.item.region}</small>
    </div>
  )
});

export function CountryFilter({ countries }: { countries: Country[] }) {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  return (
    <CountryMultiselect.Dropdown
      data={countries}
      selectedItems={selectedCountries}
      onChange={setSelectedCountries}
      settings={countrySettings}
      slots={countrySlots}
    />
  );
}
```

With the factory, `primaryKey`, `labelKey`, `searchBy`, and `groupBy` are checked against `keyof Country`. Typos such as `labelKey: 'itemname'` or `searchBy: ['city']` fail at compile time.

## Slots API

Slots let you replace the visible HTML pieces while the package still owns the tested selection, filtering, keyboard, focus, ARIA, body overlay, and async behavior.

The important rule is simple: spread the supplied `props` onto the element that plays that role. Those props carry the required refs, ARIA attributes, keyboard handlers, click handlers, ids, classes, and positioning styles.

```tsx
import { useMemo, useState } from 'react';
import {
  MultiSelectDropdown,
  type DropdownSettings,
  type MultiSelectDropdownSlots
} from '@stackline/react-multiselect-dropdown';

type Country = {
  id: number;
  itemName: string;
  capital: string;
  region: string;
};

const countrySlots: MultiSelectDropdownSlots<Country> = {
  Trigger: ({ props, children, state }) => (
    <div {...props} className={`${props.className} country-trigger`}>
      <span className="country-trigger-summary">
        {state.selectedItems.length ? `${state.selectedItems.length} selected` : 'Choose countries'}
      </span>
      {children}
    </div>
  ),
  Badge: ({ props, item, removeButton }) => (
    <span {...props} className={`${props.className} country-badge`}>
      <strong>{item.itemName}</strong>
      {removeButton}
    </span>
  ),
  Option: ({ props, option, checkbox }) => (
    <div {...props} className={`${props.className} country-option`}>
      {checkbox}
      <span>
        <strong>{option.label}</strong>
        <small>{option.item.capital} - {option.item.region}</small>
      </span>
    </div>
  ),
  MenuFooter: ({ props, state }) => (
    <div {...props}>
      {state.filteredItems.length} visible options
    </div>
  )
};

export function CountrySelector() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);
  const settings = useMemo<DropdownSettings<Country>>(
    () => ({
      text: 'Choose countries',
      enableSearchFilter: true,
      groupBy: 'region',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 2,
      skin: 'classic'
    }),
    []
  );

  return (
    <MultiSelectDropdown
      data={countries}
      selectedItems={selectedCountries}
      onChange={setSelectedCountries}
      settings={settings}
      slots={countrySlots}
    />
  );
}
```

Available slots:

`Root`, `Trigger`, `Value`, `Placeholder`, `SingleValue`, `BadgeList`, `Badge`, `BadgeLabel`, `BadgeRemove`, `Actions`, `OverflowCounter`, `ClearAll`, `Arrow`, `Menu`, `Toolbar`, `BulkActions`, `SelectAll`, `AddNewItem`, `Search`, `OptionList`, `Group`, `GroupHeader`, `GroupAction`, `Option`, `Checkbox`, `LoadingState`, `EmptyState`, and `MenuFooter`.

## Headless Usage

Use `useMultiSelectDropdown` when you want Stackline selection, filtering, keyboard handling, ARIA props, grouping, limits, and callbacks without the built-in DOM/CSS.

The flag sample below uses SVG country icons from `flag-icons`. You can replace that import with your own icon system if your app already has one.

```bash
npm install flag-icons
```

```tsx
import { useState } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import { useMultiSelectDropdown } from '@stackline/react-multiselect-dropdown';

const countries = [
  { id: 1, itemName: 'Brazil', flag: 'BR', capital: 'Brasilia', region: 'Americas' },
  { id: 2, itemName: 'Canada', flag: 'CA', capital: 'Ottawa', region: 'Americas' },
  { id: 3, itemName: 'Portugal', flag: 'PT', capital: 'Lisbon', region: 'Europe' }
];

function flagClass(code: string) {
  return `fi fi-${code.toLowerCase()}`;
}

export function HeadlessCountries() {
  const [selectedItems, setSelectedItems] = useState([countries[0]]);
  const dropdown = useMultiSelectDropdown({
    data: countries,
    selectedItems,
    onChange: setSelectedItems,
    settings: {
      text: 'Choose countries',
      enableSearchFilter: true,
      searchPlaceholderText: 'Search country',
      groupBy: 'region',
      primaryKey: 'id',
      labelKey: 'itemName',
      badgeShowLimit: 2,
      clearAll: true
    }
  });

  return (
    <div className="country-picker" {...dropdown.getRootProps()}>
      <button className="country-trigger" {...dropdown.getTriggerProps()}>
        <span>{dropdown.label}</span>
        <strong>{dropdown.isOpen ? 'Close' : 'Open'}</strong>
      </button>

      <div className="country-chips">
        {dropdown.selectedItems.map((item) => (
          <span className="country-chip" key={dropdown.getItemKey(item)}>
            <span className={`country-flag ${flagClass(item.flag)}`} aria-hidden="true" />
            {dropdown.getItemLabel(item)}
            <button {...dropdown.getRemoveButtonProps(item)}>x</button>
          </span>
        ))}
      </div>

      {dropdown.isOpen ? (
        <div className="country-panel" {...dropdown.getListboxProps()}>
          <input className="country-search" {...dropdown.getSearchInputProps()} />

          {dropdown.visibleOptions.map((option) => (
            <div
              key={option.key}
              {...dropdown.getOptionProps(option, {
                className: option.selected ? 'country-option selected' : 'country-option'
              })}>
              <span className={`country-flag ${flagClass(option.item.flag)}`} aria-hidden="true" />
              <span>
                <strong>{option.label}</strong>
                <small>{option.item.capital} - {option.item.region}</small>
              </span>
              <input type="checkbox" checked={option.selected} readOnly />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
```

Use `useMultiSelectState` when you want the selection/filter/grouping engine without prop getters:

```tsx
import { useMultiSelectState } from '@stackline/react-multiselect-dropdown';

const state = useMultiSelectState({
  data: countries,
  selectedItems,
  onChange: setSelectedItems,
  settings: {
    primaryKey: 'id',
    labelKey: 'itemName',
    enableSearchFilter: true
  }
});
```

The styled component remains available for drop-in usage. The headless hooks are for teams that want a headless-style ownership model where the application controls layout, elements, and CSS.

## Combobox Contract

Version `19.1.1` tightens the interaction details that usually matter most in production forms:

| Behavior | Contract |
| :--- | :--- |
| Focus after selection/removal | Focus returns to search while the list stays open, or to the trigger when the list closes. |
| Option selection state | Multiselect options expose matching `aria-selected` and `aria-checked` values. |
| Backspace in search | Edits the query. With an empty query it does not remove selected values by default. |
| Backspace/Delete on focused badge remove button | Removes that selected badge. |
| Escape | Closes the list without clearing selected values. |
| Async add-item | Late async responses are ignored when a newer add request has already resolved. |
| Async option refresh | Selected object values are merged into the option source so values are not lost when data refreshes. |
| Keyboard navigation | Trigger ArrowDown/ArrowUp, option Home/End, and option ids keep focus and ARIA predictable. |

Keyboard behavior is enabled by default. You can turn each part off from `settings.keyboard` when an application needs a stricter interaction model:

```tsx
const settings: DropdownSettings<Country> = {
  text: 'Countries',
  enableSearchFilter: true,
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
```

Set any key to `false` to disable that behavior. `backspaceRemovesLastWhenSearchEmpty` can be turned on for applications that want the legacy “empty search removes last badge” pattern. `keyboard.backspace` is still accepted as a deprecated alias for that legacy behavior. `spaceOptionAction` controls only focused options:
`'toggle'` keeps focus on the current option, while `'toggle-and-next'` toggles and moves to the next enabled option.
`escapeToClose: false` is still supported and also disables `keyboard.escape`.

## React 19 StackBlitz Playground

Use the dedicated React 19 StackBlitz project when you want a fast editable example without importing the full package repository:

**[Open the React 19 playground](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fbasic%2Fbasic.component.tsx&startScript=start&initialpath=%2Fbasic)**

| Example | StackBlitz |
| :--- | :--- |
| Basic usage | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fbasic%2Fbasic.component.tsx&startScript=start&initialpath=%2Fbasic) |
| Keyboard contract | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fkeyboard-contract%2Fkeyboard-contract.component.tsx&startScript=start&initialpath=%2Fkeyboard-contract) |
| ARIA state audit | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Faria-state%2Faria-state.component.tsx&startScript=start&initialpath=%2Faria-state) |
| Headless + ARIA | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fheadless-aria%2Fheadless-aria.component.tsx&startScript=start&initialpath=%2Fheadless-aria) |
| State hook | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fstate-hook%2Fstate-hook.component.tsx&startScript=start&initialpath=%2Fstate-hook) |
| Slots API | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fslots-api%2Fslots-api.component.tsx&startScript=start&initialpath=%2Fslots-api) |
| Type-safe factory | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Ftype-safe-factory%2Ftype-safe-factory.component.tsx&startScript=start&initialpath=%2Ftype-safe-factory) |
| Async object preservation | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fasync-object-preservation%2Fasync-object-preservation.component.tsx&startScript=start&initialpath=%2Fasync-object-preservation) |
| Single selection | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fsingle-selection%2Fsingle-selection.component.tsx&startScript=start&initialpath=%2Fsingle-selection) |
| Search filter | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fsearch-filter%2Fsearch-filter.component.tsx&startScript=start&initialpath=%2Fsearch-filter) |
| Custom search from API | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fcustom-search-api%2Fcustom-search-api.component.tsx&startScript=start&initialpath=%2Fcustom-search-api) |
| Search filter by property | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fsearch-filter-by-property%2Fsearch-filter-by-property.component.tsx&startScript=start&initialpath=%2Fsearch-filter-by-property) |
| Search and Add New Item | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fsearch-add-new-item%2Fsearch-add-new-item.component.tsx&startScript=start&initialpath=%2Fsearch-add-new-item) |
| Group By | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fgroup-by%2Fgroup-by.component.tsx&startScript=start&initialpath=%2Fgroup-by) |
| Templating | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Ftemplating%2Ftemplating.component.tsx&startScript=start&initialpath=%2Ftemplating) |
| Template-style forms | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Ftemplate-driven-forms%2Ftemplate-driven-forms.component.tsx&startScript=start&initialpath=%2Ftemplate-driven-forms) |
| Reactive forms | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Freactive-forms%2Freactive-forms.component.tsx&startScript=start&initialpath=%2Freactive-forms) |
| Long List Keyboard Scroll | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fvirtual-scrolling%2Fvirtual-scrolling.component.tsx&startScript=start&initialpath=%2Fvirtual-scrolling) |
| Lazy Loading from API | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Flazy-loading-api%2Flazy-loading-api.component.tsx&startScript=start&initialpath=%2Flazy-loading-api) |
| Data from remote API | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fremote-data%2Fremote-data.component.tsx&startScript=start&initialpath=%2Fremote-data) |
| Using in list for loop | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Flist-loop%2Flist-loop.component.tsx&startScript=start&initialpath=%2Flist-loop) |
| Using inside dialog | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fdialog%2Fdialog.component.tsx&startScript=start&initialpath=%2Fdialog) |
| Multiple dropdowns | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fmultiple-dropdowns%2Fmultiple-dropdowns.component.tsx&startScript=start&initialpath=%2Fmultiple-dropdowns) |
| Load dynamic data | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fdynamic-data%2Fdynamic-data.component.tsx&startScript=start&initialpath=%2Fdynamic-data) |
| Methods | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fmethods%2Fmethods.component.tsx&startScript=start&initialpath=%2Fmethods) |
| Events | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fevents%2Fevents.component.tsx&startScript=start&initialpath=%2Fevents) |
| Disabled state | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fdisabled%2Fdisabled.component.tsx&startScript=start&initialpath=%2Fdisabled) |
| Limit selection | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Flimit-selection%2Flimit-selection.component.tsx&startScript=start&initialpath=%2Flimit-selection) |
| Limit badges | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Flimit-badges%2Flimit-badges.component.tsx&startScript=start&initialpath=%2Flimit-badges) |
| Custom placeholder | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fcustom-placeholder%2Fcustom-placeholder.component.tsx&startScript=start&initialpath=%2Fcustom-placeholder) |
| Styling | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fstyling%2Fstyling.component.tsx&startScript=start&initialpath=%2Fstyling) |
| Body Overlay Auto | [Open](https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=src%2Fexamples%2Fbody-overlay-auto%2Fbody-overlay-auto.component.tsx&startScript=start&initialpath=%2Fbody-overlay-auto) |

## Official React 19 Test Matrix

The React 19 release was tested in a clean React `19.2.4` application with `@stackline/react-multiselect-dropdown@19.1.1`. The docs use the same examples from that test app, including keyboard navigation, focus, ARIA behavior, badge counters, responsive action buttons, scrollable lists, dialog-safe body overlays, the corrected left-aligned placeholder with vertical centering, guided Slots API customization, headless/custom HTML, and the combobox contract checks for Backspace, Escape, focused badge removal, focus, and option ARIA.

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
| 16 | Slots API custom HTML | `slots.Trigger`, `slots.Option`, `slots.Search`, `slots.GroupHeader`, `slots.MenuFooter` |

## Custom Render Functions

Use `renderItem` for option rows and `renderBadge` for selected chips when you only need to replace inner content. Use `slots` when you need to replace component structure such as the trigger, menu, search shell, option row, badge, or footer.

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

import{i as e,n as t,r as n,t as r}from"./index-bKWUeiTj.js";var i=e(n(),1),a=t(),o=r();function s(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function c(e,t){if(s(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function l(e,t){if(s(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return c(e,t)}function u(e){return e.replace(/[^a-zA-Z0-9_-]+/g,`-`).replace(/^-+|-+$/g,``).slice(0,56)||`option`}function ee(e){return u(e.toLowerCase())||`classic`}function te(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set([c(e,n).toLowerCase()]);if(!s(e)){let t=e,r=n.searchBy.length?n.searchBy:[n.labelKey];for(let e of r)e&&t[e]!=null&&i.add(String(t[e]).toLowerCase())}for(let e of i)if(e.includes(r))return!0;return!1}function d(e){return!s(e)&&!!e.disabled}function ne(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!s(e)){let n=e;if(t.groupBy in n)return String(n[t.groupBy]??``)}return``}function f(e,t,n){let r=new Map;for(let i of[...e,...t])r.set(l(i,n),i);return Array.from(r.values())}function re(e,t,n){return n&&!s(n)?{[t.primaryKey]:e.toLowerCase().replace(/\s+/g,`-`),[t.labelKey]:e}:e}function ie(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=ne(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function ae(e,t){return Number.isFinite(t)?Math.min(e,Math.max(0,Math.floor(t))):e}var p={space:!0,spaceOptionAction:`toggle`,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0,backspace:!1},oe={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`,keyboard:p};function se(e){let t=e?.escapeToClose??oe.escapeToClose,n=e?.keyboard,r={...p,...n,backspaceRemovesLastWhenSearchEmpty:n?.backspaceRemovesLastWhenSearchEmpty??n?.backspace??p.backspaceRemovesLastWhenSearchEmpty,deleteRemovesFocusedBadge:n?.deleteRemovesFocusedBadge??p.deleteRemovesFocusedBadge,escape:t&&(n?.escape??p.escape)};return{...oe,...e,escapeToClose:t,keyboard:r}}var ce=`stackline-react-multiselect-dropdown-styles`,m=`
.rmsd-root {
  --rmsd-primary: #3f51b5;
  --rmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --rmsd-bg: #ffffff;
  --rmsd-surface: #f5f7fb;
  --rmsd-surface-muted: #e8eaf6;
  --rmsd-border: #c5cae9;
  --rmsd-border-strong: #7986cb;
  --rmsd-ink: #212121;
  --rmsd-muted: #5f6368;
  --rmsd-chip-bg: #e8eaf6;
  --rmsd-chip-text: #303f9f;
  --rmsd-chip-remove: #303f9f;
  --rmsd-divider: rgba(125, 119, 134, 0.16);
  --rmsd-section-bg: #f5f7fb;
  --rmsd-focus: rgba(63, 81, 181, 0.32);
  --rmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --rmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
  position: relative;
  display: block;
  width: 100%;
  color: var(--rmsd-ink);
  font: inherit;
}

.rmsd-root *,
.rmsd-root *::before,
.rmsd-root *::after,
.rmsd-menu,
.rmsd-menu *,
.rmsd-menu *::before,
.rmsd-menu *::after {
  box-sizing: border-box;
}

.rmsd-trigger {
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 56px;
  gap: 8px;
  border: 1px solid var(--rmsd-border);
  border-radius: 18px;
  background-color: var(--rmsd-bg);
  color: var(--rmsd-ink);
  padding: 11px 54px 11px 16px;
  box-shadow: var(--rmsd-shadow-soft);
  text-align: left;
  cursor: pointer;
  line-height: 1.45;
  transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease, transform 160ms ease;
}

.rmsd-trigger:hover {
  border-color: var(--rmsd-border-strong);
}

.rmsd-root[data-open="true"] .rmsd-trigger,
.rmsd-trigger:focus-visible {
  outline: none;
  border-color: var(--rmsd-primary);
  box-shadow: 0 0 0 3px var(--rmsd-focus), var(--rmsd-shadow-soft);
}

.rmsd-trigger.rmsd-disabled {
  cursor: not-allowed;
  opacity: 0.68;
}

.rmsd-value {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 1.45em;
  align-items: center;
  align-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.rmsd-placeholder,
.rmsd-single-value {
  display: inline-flex;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  min-width: 0;
  min-height: 1.45em;
  max-width: 100%;
  color: var(--rmsd-muted);
  font-size: 0.95rem;
  line-height: 1.25;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rmsd-single-value {
  color: var(--rmsd-ink);
  font-weight: 500;
}

.rmsd-badge-list {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.rmsd-badge {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-height: 32px;
  max-width: 100%;
  border-radius: 999px;
  background-color: var(--rmsd-chip-bg);
  color: var(--rmsd-chip-text);
  padding: 6px 30px 6px 12px;
  box-shadow: inset 0 0 0 1px rgba(103, 80, 164, 0.08);
  line-height: 1.35;
  white-space: normal;
  overflow-wrap: anywhere;
}

.rmsd-badge-label {
  display: inline-flex;
  align-items: center;
  min-width: 0;
  max-width: 100%;
  line-height: 1.3;
  font-weight: 500;
  white-space: normal;
  overflow-wrap: anywhere;
}

.rmsd-badge-remove,
.rmsd-clear,
.rmsd-search-clear,
.rmsd-arrow-button,
.rmsd-group-action {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0;
}

.rmsd-badge-remove {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-grid;
  width: 16px;
  height: 16px;
  place-items: center;
  transform: translateY(-50%);
  color: var(--rmsd-chip-remove);
  font-size: 12px;
  line-height: 1;
}

.rmsd-overflow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  min-width: 24px;
  min-height: 20px;
  color: var(--rmsd-muted);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  text-align: center;
}

.rmsd-root.rmsd-has-overflow .rmsd-trigger {
  padding-right: 104px;
}

.rmsd-root.rmsd-has-overflow:not(.rmsd-has-clear) .rmsd-trigger {
  padding-right: 74px;
}

.rmsd-actions {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transform: translateY(-50%);
}

.rmsd-clear {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--rmsd-muted);
  font-size: 14px;
  line-height: 1;
}

.rmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.rmsd-badge-remove .rmsd-icon {
  width: 10px;
  height: 10px;
}

.rmsd-clear .rmsd-icon {
  width: 12px;
  height: 12px;
}

.rmsd-search-clear .rmsd-icon {
  width: 18px;
  height: 18px;
}

.rmsd-arrow-button {
  display: inline-grid;
  width: 20px;
  height: 20px;
  place-items: center;
  border-radius: 999px;
  color: var(--rmsd-muted);
}

.rmsd-arrow-button:disabled {
  cursor: not-allowed;
}

.rmsd-badge-remove:focus-visible,
.rmsd-clear:focus-visible,
.rmsd-search-clear:focus-visible,
.rmsd-arrow-button:focus-visible,
.rmsd-group-action:focus-visible,
.rmsd-inline-button:focus-visible {
  outline: 3px solid var(--rmsd-focus);
  outline-offset: 2px;
}

.rmsd-arrow {
  display: inline-flex;
  width: 100%;
  height: 100%;
  line-height: 0;
}

.rmsd-arrow .rmsd-icon {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.rmsd-menu {
  position: absolute;
  left: 0;
  z-index: 99999;
  width: 100%;
  border: 1px solid var(--rmsd-border);
  border-radius: 22px;
  background-color: var(--rmsd-bg);
  box-shadow: var(--rmsd-shadow);
  overflow: hidden;
}

.rmsd-menu.rmsd-body-overlay {
  position: fixed;
  right: auto;
  top: auto;
  bottom: auto;
  max-width: calc(100vw - 16px);
  z-index: 100000;
}

.rmsd-menu.rmsd-bottom {
  top: calc(100% + 8px);
}

.rmsd-menu.rmsd-top {
  bottom: calc(100% + 8px);
}

.rmsd-menu.rmsd-body-overlay.rmsd-bottom,
.rmsd-menu.rmsd-body-overlay.rmsd-top {
  top: auto;
  bottom: auto;
}

.rmsd-toolbar {
  display: grid;
  gap: 0;
  padding: 0;
  background-color: var(--rmsd-bg);
}

.rmsd-search-shell {
  position: relative;
  min-height: 52px;
  border-bottom: 1px solid var(--rmsd-divider);
  background-color: var(--rmsd-bg);
}

.rmsd-search-icon {
  position: absolute;
  top: 50%;
  left: 16px;
  width: 18px;
  height: 18px;
  color: var(--rmsd-muted);
  fill: currentColor;
  pointer-events: none;
  transform: translateY(-50%);
}

.rmsd-search-input {
  width: 100%;
  min-height: 52px;
  border: 0;
  border-radius: 0;
  background-color: var(--rmsd-bg);
  color: var(--rmsd-ink);
  font: inherit;
  padding: 0 44px 0 48px;
}

.rmsd-search-input:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--rmsd-primary);
}

.rmsd-search-clear {
  position: absolute;
  top: 50%;
  right: 16px;
  display: inline-grid;
  width: 18px;
  height: 18px;
  place-items: center;
  transform: translateY(-50%);
  border-radius: 999px;
  color: var(--rmsd-muted);
}

.rmsd-bulk-actions {
  display: block;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid var(--rmsd-divider);
  background: var(--rmsd-section-bg);
}

.rmsd-inline-button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-height: 39px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--rmsd-ink);
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  padding: 10px 14px;
  text-align: left;
}

.rmsd-inline-button:hover {
  background-color: var(--rmsd-surface);
}

.rmsd-inline-button:disabled {
  opacity: 0.58;
  cursor: not-allowed;
}

.rmsd-add-button {
  justify-content: center;
  border-top: 1px solid var(--rmsd-divider);
  color: var(--rmsd-primary);
  font-weight: 700;
}

.rmsd-list {
  max-height: 300px;
  overflow: auto;
  padding: 8px;
  background: var(--rmsd-bg);
  scrollbar-width: thin;
  scrollbar-color: rgba(125, 119, 134, 0.34) transparent;
}

.rmsd-list:focus {
  outline: none;
}

.rmsd-menu ::-webkit-scrollbar {
  width: 10px;
}

.rmsd-menu ::-webkit-scrollbar-thumb {
  background: rgba(125, 119, 134, 0.34);
  border: 2px solid transparent;
  border-radius: 999px;
  background-clip: padding-box;
}

.rmsd-menu ::-webkit-scrollbar-track {
  background: transparent;
}

.rmsd-option {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 0;
  margin: 4px;
  padding: 12px 14px;
  border-radius: 14px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  line-height: 1.35;
}

.rmsd-option:hover {
  background-color: var(--rmsd-surface);
}

.rmsd-option:focus-visible {
  outline: 3px solid var(--rmsd-focus);
  outline-offset: 1px;
}

.rmsd-option.rmsd-selected {
  background-color: var(--rmsd-primary-soft);
  color: var(--rmsd-primary);
}

.rmsd-option.rmsd-disabled {
  opacity: 0.54;
  cursor: not-allowed;
}

.rmsd-checkbox {
  position: relative;
  box-sizing: content-box;
  flex: 0 0 auto;
  width: 18px;
  height: 18px;
  margin-top: 0;
  border: 2px solid var(--rmsd-border-strong);
  border-radius: 6px;
  background-color: var(--rmsd-bg);
}

.rmsd-checkbox[data-checked="true"] {
  border-color: var(--rmsd-primary);
  background-color: var(--rmsd-primary);
}

.rmsd-checkbox[data-checked="true"]::after {
  box-sizing: content-box;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 4px;
  margin-top: 0;
  border-color: #fff;
  border-style: solid;
  border-width: 0 0 2px 2px;
  transform: translate(-50%, -58%) rotate(-45deg);
  transform-origin: 50%;
}

.rmsd-option-body {
  min-width: 0;
  flex: 1;
}

.rmsd-option-label {
  font-weight: 500;
}

.rmsd-option-hint {
  display: block;
  margin-top: 3px;
  color: var(--rmsd-muted);
  font-size: 12px;
}

.rmsd-group {
  margin-bottom: 8px;
}

.rmsd-group:last-child {
  margin-bottom: 0;
}

.rmsd-group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 9px 10px;
  color: var(--rmsd-muted);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.rmsd-group-action {
  color: var(--rmsd-primary);
  font-size: 12px;
  font-weight: 800;
}

.rmsd-state {
  padding: 18px 12px;
  text-align: center;
  color: var(--rmsd-muted);
}

.theme-material,
.skin-material {
  --rmsd-primary: #3f51b5;
  --rmsd-primary-soft: rgba(63, 81, 181, 0.12);
  --rmsd-bg: #ffffff;
  --rmsd-surface: #f5f7fb;
  --rmsd-surface-muted: #e8eaf6;
  --rmsd-border: #c5cae9;
  --rmsd-border-strong: #7986cb;
  --rmsd-ink: #212121;
  --rmsd-muted: #5f6368;
  --rmsd-chip-bg: #e8eaf6;
  --rmsd-chip-text: #303f9f;
  --rmsd-chip-remove: #303f9f;
  --rmsd-divider: rgba(125, 119, 134, 0.16);
  --rmsd-section-bg: #f5f7fb;
  --rmsd-focus: rgba(63, 81, 181, 0.32);
  --rmsd-shadow: 0 1px 2px rgba(33, 33, 33, 0.16), 0 12px 32px rgba(63, 81, 181, 0.12);
  --rmsd-shadow-soft: 0 1px 2px rgba(33, 33, 33, 0.12), 0 4px 12px rgba(33, 33, 33, 0.08);
}

.theme-material .rmsd-trigger,
.skin-material .rmsd-trigger {
  min-height: 56px;
  border-radius: 18px;
  padding: 11px 54px 11px 16px;
}

.theme-material .rmsd-menu,
.skin-material .rmsd-menu,
.rmsd-menu.theme-material,
.rmsd-menu.skin-material {
  border-radius: 22px;
}

.theme-material .rmsd-option,
.skin-material .rmsd-option {
  border-radius: 14px;
  margin: 4px;
  padding: 12px 14px;
}

.theme-dark,
.skin-dark {
  --rmsd-primary: #8ab4f8;
  --rmsd-primary-soft: rgba(138, 180, 248, 0.18);
  --rmsd-bg: #151a23;
  --rmsd-surface: #202736;
  --rmsd-surface-muted: #111722;
  --rmsd-border: #384456;
  --rmsd-border-strong: #8ab4f8;
  --rmsd-ink: #edf2f7;
  --rmsd-muted: #aab6c5;
  --rmsd-chip-bg: #263247;
  --rmsd-chip-text: #d7e6ff;
  --rmsd-chip-remove: #d7e6ff;
  --rmsd-divider: rgba(170, 182, 197, 0.18);
  --rmsd-section-bg: #202736;
  --rmsd-focus: rgba(138, 180, 248, 0.34);
  --rmsd-shadow: 0 20px 50px rgba(0, 0, 0, 0.42);
  --rmsd-shadow-soft: 0 1px 2px rgba(0, 0, 0, 0.45), 0 10px 24px rgba(0, 0, 0, 0.28);
}

.theme-custom,
.skin-custom {
  --rmsd-primary: var(--stackline-ms-primary, #0f766e);
  --rmsd-primary-soft: var(--stackline-ms-primary-soft, rgba(15, 118, 110, 0.14));
  --rmsd-bg: var(--stackline-ms-surface, #ffffff);
  --rmsd-surface: var(--stackline-ms-surface-soft, #ecfdf5);
  --rmsd-surface-muted: var(--stackline-ms-surface-muted, #d1fae5);
  --rmsd-border: var(--stackline-ms-outline, #99f6e4);
  --rmsd-border-strong: var(--stackline-ms-outline-strong, #0f766e);
  --rmsd-ink: var(--stackline-ms-on-surface, #102a2a);
  --rmsd-muted: var(--stackline-ms-on-surface-muted, #47615f);
  --rmsd-chip-bg: var(--stackline-ms-chip-bg, #ccfbf1);
  --rmsd-chip-text: var(--stackline-ms-chip-text, #115e59);
  --rmsd-chip-remove: var(--stackline-ms-chip-remove, #115e59);
  --rmsd-divider: var(--stackline-ms-divider, rgba(15, 118, 110, 0.18));
  --rmsd-section-bg: var(--stackline-ms-section-bg, #ecfdf5);
  --rmsd-focus: var(--stackline-ms-focus, rgba(15, 118, 110, 0.28));
  --rmsd-shadow: var(--stackline-ms-shadow, 0 18px 42px rgba(15, 118, 110, 0.15));
  --rmsd-shadow-soft: var(--stackline-ms-shadow-soft, 0 1px 2px rgba(15, 118, 110, 0.16), 0 8px 18px rgba(15, 118, 110, 0.09));
}

.theme-brand,
.skin-brand {
  --stackline-ms-primary: #7c3aed;
  --stackline-ms-primary-soft: rgba(124, 58, 237, 0.14);
  --stackline-ms-surface: #ffffff;
  --stackline-ms-surface-soft: #f5f3ff;
  --stackline-ms-surface-muted: #ede9fe;
  --stackline-ms-outline: #c4b5fd;
  --stackline-ms-outline-strong: #7c3aed;
  --stackline-ms-on-surface: #22183f;
  --stackline-ms-on-surface-muted: #6b5d80;
  --stackline-ms-chip-bg: #ede9fe;
  --stackline-ms-chip-text: #5b21b6;
  --stackline-ms-chip-remove: #5b21b6;
  --stackline-ms-divider: rgba(124, 58, 237, 0.16);
  --stackline-ms-section-bg: #f5f3ff;
}

.theme-classic,
.skin-classic {
  --rmsd-primary: #0079fe;
  --rmsd-primary-soft: #e9f4ff;
  --rmsd-bg: #ffffff;
  --rmsd-surface: #f5f5f5;
  --rmsd-surface-muted: #e9f4ff;
  --rmsd-border: #cccccc;
  --rmsd-border-strong: #0079fe;
  --rmsd-ink: #333333;
  --rmsd-muted: #333333;
  --rmsd-chip-bg: #0079fe;
  --rmsd-chip-text: #ffffff;
  --rmsd-chip-remove: #ffffff;
  --rmsd-focus: rgba(0, 121, 254, 0.26);
  --rmsd-divider: #cccccc;
  --rmsd-section-bg: #ffffff;
  --rmsd-shadow: 0 1px 5px #959595;
  --rmsd-shadow-soft: 0 1px 5px #959595;
  color: #333333;
}

.theme-classic .rmsd-trigger,
.skin-classic .rmsd-trigger {
  align-content: center;
  flex-wrap: nowrap;
  gap: 6px;
  min-height: 42px;
  border-radius: 3px;
  padding: 10px 68px 10px 10px;
  border: 1px solid #cccccc;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
  color: #333333;
  font-size: 14px;
  line-height: 1.35;
}

.theme-classic .rmsd-trigger:hover,
.skin-classic .rmsd-trigger:hover,
.theme-classic[data-open="true"] .rmsd-trigger,
.skin-classic[data-open="true"] .rmsd-trigger {
  border-color: #cccccc;
  box-shadow: 0 1px 5px #959595;
}

.theme-classic .rmsd-trigger.rmsd-disabled,
.skin-classic .rmsd-trigger.rmsd-disabled {
  background: #cccccc;
  opacity: 1;
}

.theme-classic .rmsd-placeholder,
.theme-classic .rmsd-single-value,
.skin-classic .rmsd-placeholder,
.skin-classic .rmsd-single-value {
  color: #333333;
  font-size: 14px;
}

.theme-classic .rmsd-value,
.theme-classic .rmsd-badge-list,
.skin-classic .rmsd-value,
.skin-classic .rmsd-badge-list {
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  min-width: 0;
}

.theme-classic .rmsd-badge,
.skin-classic .rmsd-badge {
  display: inline-block;
  min-height: 0;
  margin: 2px 0 0;
  border-radius: 2px;
  padding: 2px 24px 2px 6px;
  box-shadow: none;
  color: #ffffff;
  line-height: 1.4;
}

.theme-classic .rmsd-badge-label,
.skin-classic .rmsd-badge-label {
  display: inline;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

.theme-classic .rmsd-badge-remove,
.skin-classic .rmsd-badge-remove {
  right: 5px;
  width: 14px;
  height: 14px;
  color: #ffffff;
}

.theme-classic .rmsd-badge-remove .rmsd-icon,
.skin-classic .rmsd-badge-remove .rmsd-icon {
  width: 9px;
  height: 9px;
}

.theme-classic .rmsd-overflow,
.skin-classic .rmsd-overflow {
  min-width: 24px;
  min-height: 20px;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}

.theme-classic .rmsd-actions,
.skin-classic .rmsd-actions {
  right: 10px;
  gap: 12px;
}

.theme-classic .rmsd-clear,
.skin-classic .rmsd-clear {
  width: 18px;
  height: 18px;
  color: #333333;
}

.theme-classic .rmsd-clear .rmsd-icon,
.skin-classic .rmsd-clear .rmsd-icon {
  width: 11px;
  height: 11px;
}

.theme-classic .rmsd-arrow-button,
.skin-classic .rmsd-arrow-button {
  width: 20px;
  height: 20px;
  color: #333333;
}

.theme-classic .rmsd-menu,
.skin-classic .rmsd-menu,
.rmsd-menu.theme-classic,
.rmsd-menu.skin-classic {
  overflow: visible;
  border: 1px solid #cccccc;
  border-radius: 3px;
  background: #ffffff;
  box-shadow: 0 1px 5px #959595;
}

.rmsd-menu.theme-classic.rmsd-bottom,
.rmsd-menu.skin-classic.rmsd-bottom {
  top: calc(100% + 14px);
}

.rmsd-menu.theme-classic.rmsd-top,
.rmsd-menu.skin-classic.rmsd-top {
  bottom: calc(100% + 14px);
}

.rmsd-menu.rmsd-body-overlay.rmsd-bottom,
.rmsd-menu.rmsd-body-overlay.rmsd-top {
  bottom: auto;
}

.rmsd-menu.theme-classic::before,
.rmsd-menu.theme-classic::after,
.rmsd-menu.skin-classic::before,
.rmsd-menu.skin-classic::after {
  content: "";
  position: absolute;
  left: 15px;
  width: 0;
  height: 0;
  border-right: 13px solid transparent;
  border-left: 13px solid transparent;
}

.rmsd-menu.theme-classic.rmsd-bottom::before,
.rmsd-menu.skin-classic.rmsd-bottom::before {
  top: -15px;
  border-bottom: 15px solid #cccccc;
}

.rmsd-menu.theme-classic.rmsd-bottom::after,
.rmsd-menu.skin-classic.rmsd-bottom::after {
  top: -14px;
  border-bottom: 15px solid #ffffff;
}

.rmsd-menu.theme-classic.rmsd-top::before,
.rmsd-menu.skin-classic.rmsd-top::before {
  bottom: -15px;
  border-top: 15px solid #cccccc;
}

.rmsd-menu.theme-classic.rmsd-top::after,
.rmsd-menu.skin-classic.rmsd-top::after {
  bottom: -14px;
  border-top: 15px solid #ffffff;
}

.theme-classic .rmsd-toolbar,
.skin-classic .rmsd-toolbar,
.rmsd-menu.theme-classic .rmsd-toolbar,
.rmsd-menu.skin-classic .rmsd-toolbar {
  gap: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .rmsd-search-shell,
.skin-classic .rmsd-search-shell,
.rmsd-menu.theme-classic .rmsd-search-shell,
.rmsd-menu.skin-classic .rmsd-search-shell {
  min-height: 35px;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .rmsd-search-icon,
.skin-classic .rmsd-search-icon,
.rmsd-menu.theme-classic .rmsd-search-icon,
.rmsd-menu.skin-classic .rmsd-search-icon {
  left: 13px;
  width: 18px;
  height: 18px;
}

.theme-classic .rmsd-search-input,
.skin-classic .rmsd-search-input,
.rmsd-menu.theme-classic .rmsd-search-input,
.rmsd-menu.skin-classic .rmsd-search-input {
  min-height: 35px;
  height: 35px;
  padding: 0 35px;
  border: 0;
  color: #333333;
}

.theme-classic .rmsd-search-input:focus,
.skin-classic .rmsd-search-input:focus,
.rmsd-menu.theme-classic .rmsd-search-input:focus,
.rmsd-menu.skin-classic .rmsd-search-input:focus {
  box-shadow: none;
}

.theme-classic .rmsd-search-clear,
.skin-classic .rmsd-search-clear,
.rmsd-menu.theme-classic .rmsd-search-clear,
.rmsd-menu.skin-classic .rmsd-search-clear {
  right: 13px;
}

.theme-classic .rmsd-bulk-actions,
.skin-classic .rmsd-bulk-actions,
.rmsd-menu.theme-classic .rmsd-bulk-actions,
.rmsd-menu.skin-classic .rmsd-bulk-actions {
  border-top: 0;
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
}

.theme-classic .rmsd-inline-button,
.skin-classic .rmsd-inline-button,
.rmsd-menu.theme-classic .rmsd-inline-button,
.rmsd-menu.skin-classic .rmsd-inline-button {
  min-height: 35px;
  border-radius: 0;
  color: #333333;
  font-weight: 400;
  padding: 10px;
}

.theme-classic .rmsd-inline-button:hover,
.skin-classic .rmsd-inline-button:hover,
.rmsd-menu.theme-classic .rmsd-inline-button:hover,
.rmsd-menu.skin-classic .rmsd-inline-button:hover {
  background: #f5f5f5;
}

.theme-classic .rmsd-list,
.skin-classic .rmsd-list,
.rmsd-menu.theme-classic .rmsd-list,
.rmsd-menu.skin-classic .rmsd-list {
  margin: 0;
  padding: 0;
  background: #ffffff;
}

.theme-classic .rmsd-option,
.skin-classic .rmsd-option,
.rmsd-menu.theme-classic .rmsd-option,
.rmsd-menu.skin-classic .rmsd-option {
  border-radius: 0;
  margin: 0;
  padding: 10px;
  color: #333333;
  line-height: 1.35;
}

.theme-classic .rmsd-option:hover,
.skin-classic .rmsd-option:hover,
.rmsd-menu.theme-classic .rmsd-option:hover,
.rmsd-menu.skin-classic .rmsd-option:hover {
  background: #f5f5f5;
}

.theme-classic .rmsd-option.rmsd-selected,
.skin-classic .rmsd-option.rmsd-selected,
.rmsd-menu.theme-classic .rmsd-option.rmsd-selected,
.rmsd-menu.skin-classic .rmsd-option.rmsd-selected {
  background: #e9f4ff;
  color: #333333;
}

.theme-classic .rmsd-checkbox,
.skin-classic .rmsd-checkbox,
.rmsd-menu.theme-classic .rmsd-checkbox,
.rmsd-menu.skin-classic .rmsd-checkbox {
  width: 14px;
  height: 14px;
  border: 2px solid #0079fe;
  border-radius: 0;
  background: #ffffff;
}

.theme-classic .rmsd-checkbox[data-checked="true"],
.skin-classic .rmsd-checkbox[data-checked="true"],
.rmsd-menu.theme-classic .rmsd-checkbox[data-checked="true"],
.rmsd-menu.skin-classic .rmsd-checkbox[data-checked="true"] {
  border-color: #0079fe;
  background: #0079fe;
}

.theme-classic .rmsd-checkbox[data-checked="true"]::after,
.skin-classic .rmsd-checkbox[data-checked="true"]::after,
.rmsd-menu.theme-classic .rmsd-checkbox[data-checked="true"]::after,
.rmsd-menu.skin-classic .rmsd-checkbox[data-checked="true"]::after {
  top: 50%;
  left: 50%;
  width: 8px;
  height: 3px;
  margin-top: 0;
  border-width: 0 0 3px 3px;
  transform: translate(-50%, -58%) rotate(-45deg);
}

.theme-classic .rmsd-option-label,
.skin-classic .rmsd-option-label,
.rmsd-menu.theme-classic .rmsd-option-label,
.rmsd-menu.skin-classic .rmsd-option-label {
  color: #000000;
  font-weight: 300;
}

.theme-classic .rmsd-group-header,
.skin-classic .rmsd-group-header,
.rmsd-menu.theme-classic .rmsd-group-header,
.rmsd-menu.skin-classic .rmsd-group-header {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: capitalize;
}

.custom-class-example {
  --rmsd-primary: #0f766e;
  --rmsd-primary-soft: #ccfbf1;
  --rmsd-bg: #f8fffd;
  --rmsd-surface: #ecfdf5;
  --rmsd-border: #99f6e4;
  --rmsd-border-strong: #0f766e;
}

@media (max-width: 720px) {
  .rmsd-trigger {
    align-items: center;
    padding-right: 54px;
  }
}
`;function le(){if(typeof document>`u`||document.getElementById(ce))return;let e=document.createElement(`style`);e.id=ce,e.textContent=m,document.head.appendChild(e)}function ue(e,t,n){let[r,a]=(0,i.useState)(t??[]),o=e!==void 0;return[o?e:r,e=>{o||a(e),n?.(e)}]}var de=typeof window>`u`?i.useEffect:i.useLayoutEffect;function h(e){return e===` `||e===`Spacebar`}function g(e,t,n){return e?(0,o.jsx)(o.Fragment,{children:e(t)}):(0,o.jsx)(o.Fragment,{children:n})}function _({name:e,className:t=`rmsd-icon`}){return e===`remove`?(0,o.jsx)(`svg`,{className:t,viewBox:`0 0 47.971 47.971`,focusable:`false`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`})}):e===`clear`?(0,o.jsx)(`svg`,{className:t,viewBox:`0 0 51.976 51.976`,focusable:`false`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`})}):e===`search`?(0,o.jsx)(`svg`,{className:t,viewBox:`0 0 615.52 615.52`,focusable:`false`,"aria-hidden":`true`,children:(0,o.jsx)(`path`,{d:`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`})}):(0,o.jsx)(`svg`,{className:t,viewBox:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`,children:e===`angle-up`?(0,o.jsx)(`path`,{d:`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`}):(0,o.jsx)(`path`,{d:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`})})}function v({data:e,settings:t,loading:n,className:r,style:ne,selectedItems:p,defaultSelectedItems:oe,onChange:ce,onSelect:m,onDeSelect:v,onSelectAll:y,onDeSelectAll:b,onOpen:x,onClose:S,onScrollToEnd:C,onFilterSelectAll:w,onFilterDeSelectAll:T,onAddFilterNewItem:E,onGroupSelect:fe,onGroupDeSelect:D,renderItem:O,renderBadge:k,renderSearch:A,renderEmptyState:j,slots:M},pe){le();let N=(0,i.useMemo)(()=>se(t),[t]),[P,me]=ue(p,oe,ce),[F,he]=(0,i.useState)(!1),[I,L]=(0,i.useState)(``),[ge,_e]=(0,i.useState)([]),[R,z]=(0,i.useState)(null),[ve,ye]=(0,i.useState)(),[be,xe]=(0,i.useState)(),[Se,B]=(0,i.useState)(N.position===`top`?`top`:`bottom`),Ce=(0,i.useRef)(null),V=(0,i.useRef)(null),H=(0,i.useRef)(null),U=(0,i.useRef)(null),W=(0,i.useRef)(null),we=(0,i.useRef)(0),Te=(0,i.useRef)(null),Ee=(0,i.useRef)(0),De=(0,i.useRef)(`rmsd-${Math.random().toString(36).slice(2)}`),Oe=(0,i.useMemo)(()=>f(e,[...P,...ge],N),[ge,e,P,N]),G=(0,i.useMemo)(()=>Oe.filter(e=>te(e,I,N)),[Oe,I,N]),ke=(0,i.useMemo)(()=>ie(G,N),[G,N]),Ae=`${De.current}-listbox`,je=(e,t,n)=>`${De.current}-${n}-${t}-${u(l(e,N))}`,K=e=>P.some(t=>l(t,N)===l(e,N)),q=G.filter(e=>!d(e)),Me=!!N.limitSelection&&P.length>=N.limitSelection,J=!!(N.appendToBody||N.tagToBody),Ne=()=>Array.from(W.current?.querySelectorAll(`[data-rmsd-option="true"]:not([aria-disabled="true"])`)??[]),Pe=e=>{let t=Ne();if(!t.length)return;let n=t[Math.max(0,Math.min(e,t.length-1))];n.focus(),z(n.id||null),n.scrollIntoView({block:`nearest`})},Fe=()=>Pe(0),Ie=()=>Pe(Ne().length-1),Le=e=>{let t=document.getElementById(e);return!t||!W.current?.contains(t)||t.getAttribute(`aria-disabled`)===`true`?!1:(t.focus(),z(t.id||null),t.scrollIntoView({block:`nearest`}),!0)},Re=(e,t)=>{window.setTimeout(()=>{let n=()=>{Le(e)||Pe(t)};if(typeof window.requestAnimationFrame==`function`){window.requestAnimationFrame(n);return}n()},0)},ze=(e,t,n)=>{window.setTimeout(()=>{let r=()=>{if(n){let t=Ne(),n=t.findIndex(t=>t.id===e),r=n>=0?t[n+1]:void 0;if(r){r.focus(),z(r.id||null),r.scrollIntoView({block:`nearest`});return}}Le(e)||Pe(t)};if(typeof window.requestAnimationFrame==`function`){window.requestAnimationFrame(r);return}r()},0)},Y=(e=`search`)=>{e!==`none`&&window.setTimeout(()=>{if(e===`search`&&F&&N.enableSearchFilter){U.current?.focus();return}V.current?.focus()},0)},X=e=>{me(e)},Z=(e=`search`)=>{N.disabled||(Te.current=e,he(e=>(e||x?.(),!0)))},Q=(e=!1)=>{he(e=>(e&&S?.(),!1)),z(null),ye(void 0),xe(void 0),e&&window.setTimeout(()=>V.current?.focus(),0)},Be=()=>{let e=P;X([]),b?.(e),Y()},Ve=()=>{F?Q():Z(`search`)},He=(e,t=`search`)=>{X(P.filter(t=>l(t,N)!==l(e,N))),v?.(e),Y(t)},Ue=()=>{let e=P[P.length-1];e&&He(e)},We=(e,t=`search`)=>{if(!(N.disabled||d(e))){if(K(e)){if(N.singleSelection){Q(!0),Y(`trigger`);return}He(e,t);return}if(N.singleSelection){X([e]),m?.(e),Q(!0),Y(`trigger`);return}if(!(N.limitSelection&&P.length>=N.limitSelection)){if(X([...P,e]),m?.(e),N.closeDropDownOnSelection){Q(!0),Y(`trigger`);return}Y(t)}}},Ge=(e,t=!1)=>{if(N.singleSelection)return;let n=new Set(P.map(e=>l(e,N))),r=N.limitSelection?Math.max(N.limitSelection-P.length,0):2**53-1,i=e.filter(e=>!n.has(l(e,N))).filter(e=>!d(e)).slice(0,r),a=[...P,...i];X(a),t?w?.(i):y?.(a),Y()},Ke=(e,t=!1)=>{let n=new Set(e.map(e=>l(e,N)));X(P.filter(e=>!n.has(l(e,N)))),t?T?.(e):b?.(e),Y()},qe=async()=>{let t=I.trim();if(!t)return;let n=Ee.current+1;Ee.current=n;let r=await E?.(t);if(n!==Ee.current)return;let i=r===void 0?re(t,N,e[0]):r;_e(e=>f(e,[i],N)),N.singleSelection?X([i]):X(f(P,[i],N)),L(``),Y()},Je=(e,t)=>{let n=t.filter(e=>!d(e));if(n.length>0&&n.every(e=>K(e))){Ke(n,!1),D?.(e,n),Y();return}Ge(n,!1),fe?.(e,n),Y()},Ye=()=>{if(!W.current||!C)return;let{scrollHeight:e,scrollTop:t,clientHeight:n}=W.current;e===we.current&&t+n<e-12||t+n>=e-12&&(we.current=e,C({scrollTop:t,scrollHeight:e,clientHeight:n}))},Xe=(e,t)=>{let n=N.position===`top`?`top`:`bottom`;if(!N.autoPosition||typeof window>`u`||typeof document>`u`)return n;let r=window.innerHeight||document.documentElement.clientHeight,i=e.top,a=r-e.bottom,o=i>a+48;return a<t&&o&&t<i?`top`:`bottom`};(0,i.useEffect)(()=>{if(!F)return;let e=e=>{let t=e.target;!Ce.current?.contains(t)&&!H.current?.contains(t)&&Q()},t=e=>{e.key===`Escape`&&N.keyboard.escape&&Q(!0)};return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e),document.removeEventListener(`keydown`,t)}},[F,N.keyboard.escape]);let Ze=()=>{if(!J||!V.current||typeof window>`u`)return;let e=V.current.getBoundingClientRect(),t=H.current?.offsetHeight??0,n=W.current?.offsetHeight??Math.min(N.maxHeight,t),r=Math.max(0,t-n),i=Xe(e,t),a=i===`top`?Math.max(0,e.top-8-8):Math.max(0,window.innerHeight-e.bottom-8-8),o=t>0?Math.max(0,Math.min(N.maxHeight,a-r)):N.maxHeight,s=r+o,c=i===`top`?e.top-s-8:e.bottom+8,l=i===`top`?Math.max(8,c):c;B(e=>e===i?e:i),xe(e=>e===o?e:o);let u=Math.max(0,window.innerWidth-16),ee=Math.min(e.width,u);ye({position:`fixed`,top:l,left:Math.min(Math.max(8,e.left),window.innerWidth-ee-8),width:ee,maxWidth:u,zIndex:1e5})},Qe=()=>{if(!V.current||!H.current||J)return;xe(e=>e===void 0?e:void 0);let e=V.current.getBoundingClientRect(),t=H.current.offsetHeight,n=Xe(e,t);B(e=>e===n?e:n)};de(()=>{if(F){if(J){Ze();return}Qe()}},[F,J,N.position,N.autoPosition,N.maxHeight,G.length,P.length,I]),(0,i.useEffect)(()=>{if(!F||!J||typeof window>`u`)return;let e=()=>Ze(),t=()=>window.requestAnimationFrame(e);window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0);let n=typeof ResizeObserver<`u`&&H.current?new ResizeObserver(t):null;return n&&H.current&&n.observe(H.current),()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),n?.disconnect()}},[F,J,N.position,N.autoPosition,N.maxHeight,G.length,P.length]),(0,i.useEffect)(()=>{if(!F)return;let e=Te.current;Te.current=null,window.setTimeout(()=>{if(e===`first`){Fe();return}if(e===`last`){Ie();return}N.enableSearchFilter&&N.searchAutofocus&&U.current?.focus()},0)},[F,G.length,N.enableSearchFilter,N.searchAutofocus]),(0,i.useEffect)(()=>{we.current=0},[G.length]),(0,i.useImperativeHandle)(pe,()=>({openDropdown:()=>Z(`search`),closeDropdown:()=>Q(),clearSelection:Be,focusSearch:()=>{Z(`search`),window.setTimeout(()=>U.current?.focus(),0)},selectAll:()=>Ge(q),deSelectAll:()=>Ke(P),getSelectedItems:()=>P}),[q,P]);let $e=P.length,et=ae($e,N.badgeShowLimit),tt=N.singleSelection?P:P.slice(0,et),nt=N.singleSelection?0:Math.max($e-tt.length,0),rt=G.length>0,it=q.length>0&&q.every(e=>K(e)),at=N.enableCheckAll&&!N.singleSelection||!!(N.addNewItemOnFilter&&I.trim()),ot=ee(String(N.skin||N.theme||`classic`)),st=[`classic`,`material`,`dark`,`custom`].includes(ot)?``:`theme-custom`,ct=[`rmsd-root`,`skin-${ot}`,`theme-${ot}`,st,F?`rmsd-open`:``,nt>0?`rmsd-has-overflow`:``,N.clearAll&&P.length>0&&!N.disabled?`rmsd-has-clear`:``,Se===`top`?`rmsd-opens-up`:`rmsd-opens-down`,N.classes,r].filter(Boolean).join(` `),lt=e=>typeof N.removeItemAriaLabel==`function`?N.removeItemAriaLabel(e):`${N.removeItemAriaLabel}: ${c(e,N)}`,ut=()=>P.length?`${N.ariaLabel}: ${P.map(e=>c(e,N)).join(`, `)}`:N.ariaLabel,dt=e=>{if(h(e.key)&&!N.keyboard.space){e.preventDefault(),e.stopPropagation();return}(e.key===`Enter`||h(e.key))&&e.stopPropagation()},ft=(e,t)=>{if(N.keyboard.deleteRemovesFocusedBadge&&(e.key===`Backspace`||e.key===`Delete`)){e.preventDefault(),e.stopPropagation(),He(t);return}dt(e)},pt=e=>{if(!N.disabled){if(h(e.key)&&!N.keyboard.space){e.preventDefault();return}if(e.key===`Enter`||h(e.key)){e.preventDefault(),Ve();return}if(N.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),F?Fe():Z(`first`);return}if(N.keyboard.arrows&&e.key===`ArrowUp`){e.preventDefault(),F?Ie():Z(`last`);return}N.keyboard.escape&&e.key===`Escape`&&F&&(e.preventDefault(),Q(!0))}},mt=e=>{if(h(e.key)&&!N.keyboard.space){e.preventDefault(),e.stopPropagation();return}if(e.key===`Enter`||h(e.key)){e.preventDefault(),e.stopPropagation(),Ve();return}if(N.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation(),F?Fe():Z(`first`);return}N.keyboard.arrows&&e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),F?Ie():Z(`last`))},ht=e=>{if(h(e.key)&&!N.keyboard.space){e.preventDefault();return}if(N.keyboard.backspaceRemovesLastWhenSearchEmpty&&e.key===`Backspace`&&!I&&P.length>0&&!N.singleSelection){e.preventDefault(),Ue();return}if(N.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),Fe();return}N.keyboard.escape&&e.key===`Escape`&&(e.preventDefault(),Q(!0))},gt=(e,t,n)=>{if(h(e.key)&&!N.keyboard.space){e.preventDefault();return}if((e.key===`Enter`||h(e.key))&&e.repeat){e.preventDefault();return}if(e.key===`Enter`||h(e.key)){e.preventDefault();let r=N.singleSelection||!K(t)&&N.closeDropDownOnSelection,i=e.currentTarget.id,a=h(e.key)&&N.keyboard.spaceOptionAction===`toggle-and-next`;We(t,r?`trigger`:`none`),r||ze(i,n,a);return}if(N.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault();let t=n+1;t<Ne().length?Pe(t):N.lazyLoading&&Ye();return}if(N.keyboard.arrows&&e.key===`ArrowUp`){e.preventDefault(),n>0?Pe(n-1):N.enableSearchFilter?U.current?.focus():V.current?.focus();return}if(N.keyboard.arrows&&e.key===`Home`){e.preventDefault(),Fe();return}if(N.keyboard.arrows&&e.key===`End`){e.preventDefault(),Ie();return}N.keyboard.escape&&e.key===`Escape`&&(e.preventDefault(),Q(!0))},$={state:{settings:N,isOpen:F,filter:I,selectedItems:P,visibleBadges:tt,hiddenBadgeCount:nt,filteredItems:G,selectableItems:q,allFilteredSelected:it,hasFilteredResults:rt,loading:!!(n??N.loading),listboxId:Ae,activeDescendantId:R||void 0,label:P.length?P.map(e=>c(e,N)).join(`, `):N.text},actions:{openDropdown:()=>Z(`search`),closeDropdown:()=>Q(),toggleDropdown:Ve,clearSelection:Be,selectItem:e=>We(e),removeItem:e=>He(e),selectAll:(e=q)=>Ge(e),deSelectAll:(e=P)=>Ke(e),toggleGroup:Je,addFilterNewItem:qe,setFilter:L}},_t=e=>{let t={item:e,label:c(e,N),selected:K(e),disabled:N.disabled||d(e)||!K(e)&&Me,query:I,toggle:()=>We(e),remove:()=>He(e)};return O?O(e,t):(0,o.jsxs)(`div`,{className:`rmsd-option-body`,children:[(0,o.jsx)(`div`,{className:`rmsd-option-label`,children:t.label}),!s(e)&&e.caption?(0,o.jsx)(`span`,{className:`rmsd-option-hint`,children:String(e.caption)}):null]})},vt=e=>{let t=c(e,N),n={item:e,label:t,selected:!0,disabled:N.disabled||d(e),query:I,toggle:()=>We(e),remove:()=>He(e)},r=k?k(e,n):n.label,i={className:`rmsd-badge-label`};return g(M?.BadgeLabel,{...$,props:i,item:e,label:t,children:r},(0,o.jsx)(`span`,{...i,children:r}))},yt=(e,t)=>{if(!N.showCheckbox)return null;let n={className:`rmsd-checkbox`,"data-checked":e,"aria-hidden":!0};return g(M?.Checkbox,{...$,props:n,checked:e,context:t},(0,o.jsx)(`span`,{...n}))},bt=e=>{let t=c(e,N),n={type:`button`,className:`rmsd-badge-remove`,"aria-label":lt(e),onKeyDown:t=>ft(t,e),onClick:t=>{t.stopPropagation(),He(e)}},r=(0,o.jsx)(_,{name:`remove`});return g(M?.BadgeRemove,{...$,props:n,item:e,label:t,icon:r},(0,o.jsx)(`button`,{...n,children:r}))},xt=e=>{let t=c(e,N),n={className:`rmsd-badge`},r=N.disabled?null:bt(e),i=(0,o.jsxs)(o.Fragment,{children:[vt(e),r]});return g(M?.Badge,{...$,props:n,item:e,label:t,children:i,removeButton:r},(0,o.jsx)(`span`,{...n,children:i}))},St=-1,Ct=(e,t,n)=>{let r=K(e),a=N.disabled||d(e)||Me&&!r,s=a?-1:St+=1,u=je(e,n,t),ee=`${t}-${l(e,N)}-${n}`,te={item:e,id:u,key:ee,label:c(e,N),selected:r,disabled:a,index:s,groupName:t.startsWith(`group-`)?t:void 0},ne={id:u,className:`rmsd-option${r?` rmsd-selected`:``}${a?` rmsd-disabled`:``}`,role:`option`,"aria-selected":r,"aria-checked":r,"aria-disabled":a,tabIndex:a||!N.keyboard.tab?-1:0,"data-rmsd-option":`true`,onFocus:()=>z(u),onClick:()=>{if(a)return;let t=N.singleSelection||!K(e)&&N.closeDropDownOnSelection;We(e,t?`trigger`:`none`),t||Re(u,s)},onKeyDown:t=>gt(t,e,s)},f=yt(r,`option`),re=(0,o.jsxs)(o.Fragment,{children:[f,_t(e)]});return(0,o.jsx)(i.Fragment,{children:g(M?.Option,{...$,props:ne,option:te,checkbox:f,children:re},(0,o.jsx)(`div`,{...ne,children:re}))},ee)},wt=e=>{e.target.closest(`button`)||Ve()},Tt=()=>{let e=it?I.trim()?N.filterUnSelectAllText:N.unSelectAllText:I.trim()?N.filterSelectAllText:N.selectAllText,t={type:`button`,className:`rmsd-inline-button rmsd-select-all-button`,onClick:()=>it?Ke(q,!!I.trim()):Ge(q,!!I.trim()),onKeyDown:dt,disabled:N.disabled||q.length===0},n=yt(it,`selectAll`);return g(M?.SelectAll,{...$,props:t,checked:it,label:e,checkbox:n},(0,o.jsxs)(`button`,{...t,children:[n,(0,o.jsx)(`span`,{children:e})]}))},Et=()=>{let e=I.trim();if(!e)return null;let t=`${N.addNewButtonText} "${e}"`,n={type:`button`,className:`rmsd-inline-button rmsd-add-button`,onKeyDown:dt,onClick:qe};return g(M?.AddNewItem,{...$,props:n,query:e,label:t},(0,o.jsx)(`button`,{...n,children:t}))},Dt=()=>{if(!N.enableSearchFilter)return null;let e={className:`rmsd-search-shell`},t={ref:U,className:`rmsd-search-input`,value:I,onChange:e=>L(e.target.value),onKeyDown:ht,placeholder:N.searchPlaceholderText,"aria-label":N.searchAriaLabel},n={type:`button`,className:`rmsd-search-clear`,"aria-label":N.clearSearchAriaLabel,onKeyDown:dt,onClick:()=>L(``)},r=(0,o.jsx)(_,{name:`search`,className:`rmsd-search-icon`}),i=(0,o.jsx)(_,{name:`clear`}),a=A?A({query:I,setQuery:L,closeDropdown:()=>Q()}):(0,o.jsxs)(`div`,{...e,children:[r,(0,o.jsx)(`input`,{...t}),I?(0,o.jsx)(`button`,{...n,children:i}):null]});return g(M?.Search,{...$,props:e,inputProps:t,clearButtonProps:n,query:I,icon:r,clearIcon:i},a)},Ot=e=>{if(!N.selectGroup||N.singleSelection)return null;let t=e.selected?`Unselect`:`Select`,n={type:`button`,className:`rmsd-group-action`,onKeyDown:dt,onClick:()=>Je(e.name,e.items)};return g(M?.GroupAction,{...$,props:n,group:e,label:t},(0,o.jsx)(`button`,{...n,children:t}))},kt=(e,t)=>{let n=e.items.filter(e=>!d(e)),r={name:e.name,items:e.items,enabledItems:n,selected:n.length>0&&n.every(e=>K(e)),disabled:n.length===0,index:t},a=Ot(r),s={className:`rmsd-group-header`},c=g(M?.GroupHeader,{...$,props:s,group:r,action:a},(0,o.jsxs)(`div`,{...s,children:[(0,o.jsxs)(`span`,{children:[e.name,` · `,e.items.length]}),a]})),l={className:`rmsd-group`,role:`group`,"aria-label":e.name},u=e.items.map((e,n)=>Ct(e,`group-${t}`,n));return(0,o.jsx)(i.Fragment,{children:g(M?.Group,{...$,props:l,group:r,header:c,children:u},(0,o.jsxs)(`div`,{...l,children:[c,u]}))},e.name)},At=()=>{if(n??N.loading){let e={className:`rmsd-state`,role:`status`};return g(M?.LoadingState,{...$,props:e,text:N.loadingText},(0,o.jsx)(`div`,{...e,children:N.loadingText}))}if(ke.length>0)return ke.map((e,t)=>kt(e,t));if(rt)return G.map((e,t)=>Ct(e,`item`,t));let e={className:`rmsd-state`};return g(M?.EmptyState,{...$,props:e,query:I,text:N.noDataLabel},(0,o.jsx)(`div`,{...e,children:j?j(I):N.noDataLabel}))},jt=()=>{let e={className:`rmsd-list`,ref:W,style:{maxHeight:J?be??N.maxHeight:N.maxHeight},onScroll:N.lazyLoading?Ye:void 0,id:Ae,role:`listbox`,"aria-label":N.listboxAriaLabel,"aria-multiselectable":!N.singleSelection},t=At();return g(M?.OptionList,{...$,props:e,children:t},(0,o.jsx)(`div`,{...e,children:t}))},Mt=()=>{if(!at)return null;let e={className:`rmsd-bulk-actions`},t=(0,o.jsxs)(o.Fragment,{children:[N.enableCheckAll&&!N.singleSelection?Tt():null,N.addNewItemOnFilter&&I.trim()?Et():null]});return g(M?.BulkActions,{...$,props:e,children:t},(0,o.jsx)(`div`,{...e,children:t}))},Nt=()=>{let e={className:`rmsd-toolbar`},t=(0,o.jsxs)(o.Fragment,{children:[Mt(),Dt()]});return g(M?.Toolbar,{...$,props:e,children:t},(0,o.jsx)(`div`,{...e,children:t}))},Pt=()=>M?.MenuFooter?g(M.MenuFooter,{...$,props:{className:`rmsd-menu-footer`}},null):null,Ft=()=>{if(!F)return null;let e={ref:H,className:`rmsd-menu rmsd-${Se} skin-${ot} theme-${ot}${st?` ${st}`:``}${J?` rmsd-body-overlay`:``}`,style:J?ve:void 0,onMouseDown:e=>e.stopPropagation(),onTouchStart:e=>e.stopPropagation()},t=(0,o.jsxs)(o.Fragment,{children:[Nt(),jt(),Pt()]});return g(M?.Menu,{...$,props:e,children:t,position:Se,appendToBody:J},(0,o.jsx)(`div`,{...e,children:t}))},It=()=>{let e={className:`rmsd-value`},t;if(P.length===0){let e={className:`rmsd-placeholder`};t=g(M?.Placeholder,{...$,props:e,text:N.text},(0,o.jsx)(`span`,{...e,children:N.text}))}else if(N.singleSelection){let e=P[0],n={className:`rmsd-single-value`};t=g(M?.SingleValue,{...$,props:n,item:e,label:c(e,N)},(0,o.jsx)(`span`,{...n,children:c(e,N)}))}else{let e={className:`rmsd-badge-list`},n=tt.map(e=>(0,o.jsx)(i.Fragment,{children:xt(e)},l(e,N)));t=g(M?.BadgeList,{...$,props:e,items:tt,children:n},(0,o.jsx)(`div`,{...e,children:n}))}return g(M?.Value,{...$,props:e,children:t},(0,o.jsx)(`div`,{...e,children:t}))},Lt=()=>{let e={className:`rmsd-actions`},t={className:`rmsd-overflow`},n={type:`button`,className:`rmsd-clear`,"aria-label":N.clearAllAriaLabel,onKeyDown:dt,onClick:e=>{e.stopPropagation(),Be()}},r={type:`button`,className:`rmsd-arrow-button`,disabled:N.disabled,"aria-label":F?N.closeDropdownAriaLabel:N.openDropdownAriaLabel,"aria-expanded":F,"aria-controls":Ae,onKeyDown:mt,onClick:e=>{e.stopPropagation(),Ve()}},i=(0,o.jsx)(_,{name:`remove`}),a=(0,o.jsx)(`span`,{className:`rmsd-arrow`,"aria-hidden":`true`,children:(0,o.jsx)(_,{name:F?`angle-up`:`angle-down`})}),s=(0,o.jsxs)(o.Fragment,{children:[nt>0?g(M?.OverflowCounter,{...$,props:t,count:nt},(0,o.jsxs)(`span`,{...t,children:[`+`,nt]})):null,N.clearAll&&P.length>0&&!N.disabled?g(M?.ClearAll,{...$,props:n,icon:i},(0,o.jsx)(`button`,{...n,children:i})):null,g(M?.Arrow,{...$,props:r,icon:a,direction:F?`up`:`down`},(0,o.jsx)(`button`,{...r,children:a}))]});return g(M?.Actions,{...$,props:e,children:s},(0,o.jsx)(`div`,{...e,children:s}))},Rt=()=>{let e={ref:V,className:`rmsd-trigger${N.disabled?` rmsd-disabled`:``}`,onClick:wt,onKeyDown:pt,tabIndex:N.disabled?-1:0,role:`combobox`,"aria-expanded":F,"aria-haspopup":`listbox`,"aria-controls":Ae,"aria-disabled":N.disabled,"aria-activedescendant":R||void 0,"aria-label":ut()},t=(0,o.jsxs)(o.Fragment,{children:[It(),Lt()]});return g(M?.Trigger,{...$,props:e,children:t},(0,o.jsx)(`div`,{...e,children:t}))},zt=Ft(),Bt=(0,o.jsxs)(o.Fragment,{children:[Rt(),J&&zt&&typeof document<`u`?(0,a.createPortal)(zt,document.body):zt]}),Vt={className:ct,style:ne,ref:Ce,"data-open":F};return g(M?.Root,{...$,props:Vt,children:Bt},(0,o.jsx)(`div`,{...Vt,children:Bt}))}var y=(0,i.forwardRef)(v);function b(e,t){if(typeof e==`function`){e(t);return}e&&`current`in e&&(e.current=t)}function x(e){return!!e.defaultPrevented}function S(e,t){return n=>{t?.(n),x(n)||e?.(n)}}function C({data:e,settings:t,selectedItems:n,defaultSelectedItems:r,onChange:a,onSelect:o,onDeSelect:s,onSelectAll:u,onDeSelectAll:ee,onFilterSelectAll:ne,onFilterDeSelectAll:ie,onAddFilterNewItem:p,onGroupSelect:oe,onGroupDeSelect:ce,onSelectionShouldClose:m}){let[le,de]=(0,i.useState)(``),[h,g]=(0,i.useState)([]),_=(0,i.useRef)(0),v=(0,i.useMemo)(()=>se(t),[t]),[y,b]=ue(n,r,a),x=(0,i.useMemo)(()=>f(e,[...y,...h],v),[h,e,y,v]),S=(0,i.useMemo)(()=>x.filter(e=>te(e,le,v)),[x,le,v]),C=e=>y.some(t=>l(t,v)===l(e,v)),w=e=>v.disabled||d(e),T=S.filter(e=>!w(e)),E=T.length>0&&T.every(e=>C(e)),fe=ae(y.length,v.badgeShowLimit),D=v.singleSelection?y:y.slice(0,fe),O=v.singleSelection?0:Math.max(y.length-D.length,0),k=e=>{b(e)},A=e=>{v.disabled||(k(y.filter(t=>l(t,v)!==l(e,v))),s?.(e))},j=()=>{let e=y[y.length-1];!e||v.disabled||A(e)},M=e=>{if(!(v.disabled||d(e))){if(C(e)){if(v.singleSelection){m?.();return}A(e);return}if(v.singleSelection){k([e]),o?.(e),m?.();return}v.limitSelection&&y.length>=v.limitSelection||(k([...y,e]),o?.(e),v.closeDropDownOnSelection&&m?.())}},pe=(e=T,t=!1)=>{if(v.disabled||v.singleSelection)return;let n=new Set(y.map(e=>l(e,v))),r=v.limitSelection?Math.max(v.limitSelection-y.length,0):2**53-1,i=e.filter(e=>!n.has(l(e,v))).filter(e=>!d(e)).slice(0,r),a=[...y,...i];k(a),t?ne?.(i):u?.(a)},N=(e=y,t=!1)=>{if(v.disabled)return;let n=new Set(e.map(e=>l(e,v)));k(y.filter(e=>!n.has(l(e,v)))),t?ie?.(e):ee?.(e)};return{settings:v,filter:le,setFilter:de,selectedItems:y,allItems:x,filteredItems:S,selectableItems:T,visibleBadges:D,hiddenBadgeCount:O,allFilteredSelected:E,isSelected:C,isDisabled:w,getItemLabel:e=>c(e,v),getItemKey:e=>l(e,v),selectItem:M,removeItem:A,removeLastSelectedItem:j,selectAll:pe,deSelectAll:N,clearSelection:()=>N(y),toggleGroup:(e,t)=>{if(v.disabled)return;let n=t.filter(e=>!d(e));if(n.length>0&&n.every(e=>C(e))){N(n),ce?.(e,n);return}pe(n),oe?.(e,n)},addFilterNewItem:async()=>{if(v.disabled)return;let t=le.trim();if(!t)return;let n=_.current+1;_.current=n;let r=await p?.(t);if(n!==_.current)return;let i=r===void 0?re(t,v,e[0]):r;g(e=>f(e,[i],v)),v.singleSelection?k([i]):k(f(y,[i],v)),de(``)}}}function w(e){return e===` `||e===`Spacebar`}function T({id:e,data:t,settings:n,selectedItems:r,defaultSelectedItems:a,onChange:o,onSelect:s,onDeSelect:ee,onSelectAll:te,onDeSelectAll:f,onOpen:re,onClose:ie,onScrollToEnd:ae,onFilterSelectAll:p,onFilterDeSelectAll:oe,onAddFilterNewItem:se,onGroupSelect:ce,onGroupDeSelect:m}){let le=(0,i.useId)(),ue=u(e||`stackline-multiselect-${le}`),de=(0,i.useRef)(null),h=(0,i.useRef)(null),g=(0,i.useRef)(null),_=(0,i.useRef)(null),v=(0,i.useRef)(new Map),y=(0,i.useRef)(0),x=(0,i.useRef)(()=>void 0),T=(0,i.useRef)(`search`),[E,fe]=(0,i.useState)(!1),[D,O]=(0,i.useState)(-1),k=`${ue}-listbox`,A=C({data:t,settings:n,selectedItems:r,defaultSelectedItems:a,onChange:o,onSelect:s,onDeSelect:ee,onSelectAll:te,onDeSelectAll:f,onFilterSelectAll:p,onFilterDeSelectAll:oe,onAddFilterNewItem:se,onGroupSelect:ce,onGroupDeSelect:m,onSelectionShouldClose:()=>x.current()}),{settings:j,filter:M,setFilter:pe,selectedItems:N,filteredItems:P,selectableItems:me,visibleBadges:F,hiddenBadgeCount:he,allFilteredSelected:I,isSelected:L,isDisabled:ge}=A,_e=!!j.limitSelection&&N.length>=j.limitSelection,R=(0,i.useMemo)(()=>{let e=-1;return P.map(t=>{e+=1;let n=ne(t,j)||void 0,r=N.some(e=>l(e,j)===l(t,j)),i=j.disabled||d(t)||_e&&!r,a=l(t,j);return{item:t,key:a,id:`${ue}-option-${e}-${u(a)}`,label:c(t,j),selected:r,disabled:i,index:e,groupName:n}})},[P,ue,_e,N,j]),z=R.filter(e=>!e.disabled),ve=R.filter(e=>e.selected),ye=(0,i.useMemo)(()=>{if(!j.groupBy)return[];let e=new Map;for(let t of R){let n=t.groupName||`Ungrouped`,r=e.get(n)||[];r.push(t),e.set(n,r)}return Array.from(e.entries()).map(([e,t])=>{let n=t.filter(e=>!e.disabled);return{name:e,items:t,selected:n.length>0&&n.every(e=>e.selected),disabled:n.length===0}})},[R,j.groupBy]),be=R.find(e=>e.index===D&&!e.disabled)?.id,xe=R.length>0,Se=N.length?N.map(e=>c(e,j)).join(`, `):j.text,B=e=>{if(!R.length){O(-1);return}let t=R.filter(e=>!e.disabled);if(!t.length){O(-1);return}let n=t[Math.max(0,Math.min(e,t.length-1))];O(n.index),window.setTimeout(()=>{v.current.get(n.id)?.focus(),v.current.get(n.id)?.scrollIntoView({block:`nearest`})},0)},Ce=(e,t,n=!1)=>{O(t),window.setTimeout(()=>{let r=()=>{if(n){let n=Array.from(_.current?.querySelectorAll(`[data-headless-option="true"]:not([aria-disabled="true"])`)??[]),r=n.findIndex(t=>t.id===e),i=r>=0?n[r+1]:void 0;if(i){let e=R.find(e=>e.id===i.id);i.focus(),i.scrollIntoView({block:`nearest`}),O(e?.index??t+1);return}}let r=v.current.get(e);if(r){r.focus(),r.scrollIntoView({block:`nearest`});return}B(t)};if(typeof window.requestAnimationFrame==`function`){window.requestAnimationFrame(r);return}r()},0)},V=(e=`search`)=>{j.disabled||(T.current=e,fe(e=>(e||re?.(),!0)))},H=()=>{fe(e=>(e&&ie?.(),!1)),O(-1)};x.current=H;let U=()=>{if(E){H();return}V()},W=(e=`search`)=>{e!==`none`&&window.setTimeout(()=>{if(e===`search`&&E&&j.enableSearchFilter){g.current?.focus();return}h.current?.focus()},0)},we=(e,t=`search`)=>{let n=A.isSelected(e),r=j.singleSelection||!n&&j.closeDropDownOnSelection;A.selectItem(e),W(r?`trigger`:t)},Te=(e,t=`search`)=>{A.removeItem(e),W(t)},Ee=()=>{A.removeLastSelectedItem(),W()},De=(e=me,t=!1)=>{A.selectAll(e,t),W()},Oe=(e=N,t=!1)=>{A.deSelectAll(e,t),W()},G=()=>{A.clearSelection(),W()},ke=(e,t)=>{A.toggleGroup(e,t),W()},Ae=async()=>{await A.addFilterNewItem(),W()},je=()=>{if(!_.current||!ae)return;let{scrollHeight:e,scrollTop:t,clientHeight:n}=_.current;e===y.current&&t+n<e-12||t+n>=e-12&&(y.current=e,ae({scrollTop:t,scrollHeight:e,clientHeight:n}))},K=e=>{if(!j.disabled){if(w(e.key)&&!j.keyboard.space){e.preventDefault();return}if(e.key===`Enter`||w(e.key)){e.preventDefault(),U();return}if(j.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),E?B(0):V(`first`);return}if(j.keyboard.arrows&&e.key===`ArrowUp`){e.preventDefault(),E?B(z.length-1):V(`last`);return}j.keyboard.escape&&e.key===`Escape`&&E&&(e.preventDefault(),H())}},q=e=>{if(w(e.key)&&!j.keyboard.space){e.preventDefault();return}if(j.keyboard.backspaceRemovesLastWhenSearchEmpty&&e.key===`Backspace`&&!M&&N.length>0&&!j.singleSelection){e.preventDefault(),Ee();return}if(j.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),B(0);return}j.keyboard.escape&&e.key===`Escape`&&(e.preventDefault(),H(),h.current?.focus())},Me=(e,t)=>{if(w(e.key)&&!j.keyboard.space){e.preventDefault();return}if((e.key===`Enter`||w(e.key))&&e.repeat){e.preventDefault();return}if(e.key===`Enter`||w(e.key)){e.preventDefault();let n=R.filter(e=>!e.disabled).findIndex(e=>e.id===t.id),r=j.singleSelection||!A.isSelected(t.item)&&j.closeDropDownOnSelection,i=w(e.key)&&j.keyboard.spaceOptionAction===`toggle-and-next`;we(t.item,r?`trigger`:`none`),r||Ce(t.id,Math.max(0,n),i);return}let n=R.filter(e=>!e.disabled),r=n.findIndex(e=>e.id===t.id);if(j.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),r<n.length-1?B(r+1):j.lazyLoading&&je();return}if(j.keyboard.arrows&&e.key===`ArrowUp`){e.preventDefault(),r>0?B(r-1):j.enableSearchFilter?g.current?.focus():h.current?.focus();return}if(j.keyboard.arrows&&e.key===`Home`){e.preventDefault(),B(0);return}if(j.keyboard.arrows&&e.key===`End`){e.preventDefault(),B(n.length-1);return}j.keyboard.escape&&e.key===`Escape`&&(e.preventDefault(),H(),h.current?.focus())},J=e=>{if(w(e.key)&&!j.keyboard.space){e.preventDefault(),e.stopPropagation();return}(e.key===`Enter`||w(e.key))&&e.stopPropagation()},Ne=(e,t)=>{if(j.keyboard.deleteRemovesFocusedBadge&&(e.key===`Backspace`||e.key===`Delete`)){e.preventDefault(),e.stopPropagation(),Te(t);return}J(e)},Pe=e=>{if(e&&typeof e==`object`&&`item`in e&&`id`in e&&`index`in e)return e;let t=e,n=l(t,j),r=R.find(e=>e.key===n);if(r)return r;let i=L(t);return{item:t,key:n,id:`${ue}-option-manual-${u(n)}`,label:c(t,j),selected:i,disabled:j.disabled||d(t)||_e&&!i,index:-1,groupName:ne(t,j)||void 0}};return(0,i.useEffect)(()=>{if(!E)return;let e=e=>{let t=e.target;!de.current?.contains(t)&&!_.current?.contains(t)&&H()},t=e=>{e.key===`Escape`&&j.keyboard.escape&&H()};return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e),document.removeEventListener(`keydown`,t)}},[E,j.keyboard.escape]),(0,i.useEffect)(()=>{y.current=0},[R.length]),(0,i.useEffect)(()=>{if(!E)return;let e=T.current;T.current=`search`,window.setTimeout(()=>{if(e===`first`){B(0);return}if(e===`last`){B(z.length-1);return}j.enableSearchFilter&&j.searchAutofocus&&g.current?.focus()},0)},[E,R.length,z.length,j.enableSearchFilter,j.searchAutofocus]),{settings:j,isOpen:E,filter:M,setFilter:pe,selectedItems:N,selectedOptions:ve,options:R,groups:ye,visibleOptions:R,visibleBadges:F,hiddenBadgeCount:he,allFilteredSelected:I,hasFilteredResults:xe,activeDescendantId:be,listboxId:k,label:Se,openDropdown:V,closeDropdown:H,toggleDropdown:U,clearSelection:G,selectItem:we,removeItem:Te,selectAll:De,deSelectAll:Oe,toggleGroup:ke,addFilterNewItem:Ae,isSelected:L,isDisabled:ge,getItemLabel:e=>c(e,j),getItemKey:e=>l(e,j),getRootProps:(e={})=>({...e,ref:t=>{de.current=t,b(e.ref,t)}}),getTriggerProps:(e={})=>({type:`button`,...e,ref:t=>{h.current=t,b(e.ref,t)},disabled:j.disabled||e.disabled,role:`combobox`,"aria-expanded":E,"aria-haspopup":`listbox`,"aria-controls":k,"aria-disabled":j.disabled||void 0,"aria-activedescendant":be,"aria-label":N.length?`${j.ariaLabel}: ${N.map(e=>c(e,j)).join(`, `)}`:j.ariaLabel,onClick:S(()=>U(),e.onClick),onKeyDown:S(e=>{K(e)},e.onKeyDown)}),getListboxProps:(e={})=>({...e,ref:t=>{_.current=t,b(e.ref,t)},id:e.id||k,role:`listbox`,"aria-label":e[`aria-label`]||j.listboxAriaLabel,"aria-multiselectable":!j.singleSelection,onScroll:S(()=>{j.lazyLoading&&je()},e.onScroll)}),getOptionProps:(e,t={})=>{let n=Pe(e);return{...t,ref:e=>{e?v.current.set(n.id,e):v.current.delete(n.id),b(t.ref,e)},id:t.id||n.id,role:`option`,tabIndex:n.disabled||!j.keyboard.tab?-1:t.tabIndex??0,"aria-selected":n.selected,"aria-checked":n.selected,"aria-disabled":n.disabled||void 0,"data-headless-option":`true`,onClick:S(e=>{if(n.disabled)return;let t=j.singleSelection||!A.isSelected(n.item)&&j.closeDropDownOnSelection;we(n.item,t?`trigger`:`none`),t||(O(n.index),Ce(n.id,n.index))},t.onClick),onFocus:S(()=>O(n.index),t.onFocus),onKeyDown:S(e=>{Me(e,n)},t.onKeyDown)}},getSearchInputProps:(e={})=>({type:`search`,...e,ref:t=>{g.current=t,b(e.ref,t)},value:e.value??M,placeholder:e.placeholder??j.searchPlaceholderText,"aria-label":e[`aria-label`]??j.searchAriaLabel,onChange:S(e=>{pe(e.currentTarget.value)},e.onChange),onKeyDown:S(e=>{q(e)},e.onKeyDown)}),getClearAllButtonProps:(e={})=>({type:`button`,...e,disabled:j.disabled||N.length===0||e.disabled,"aria-label":e[`aria-label`]??j.clearAllAriaLabel,onKeyDown:S(e=>{J(e)},e.onKeyDown),onClick:S(()=>G(),e.onClick)}),getRemoveButtonProps:(e,t={})=>({type:`button`,...t,disabled:j.disabled||t.disabled,"aria-label":t[`aria-label`]??(typeof j.removeItemAriaLabel==`function`?j.removeItemAriaLabel(e):`${j.removeItemAriaLabel}: ${c(e,j)}`),onKeyDown:S(t=>{Ne(t,e)},t.onKeyDown),onClick:S(()=>Te(e),t.onClick)})}}function E(){let e=y;function t(e){return T(e)}function n(e){return C(e)}function r(e){return e}function i(e){return e}return{Dropdown:e,MultiSelectDropdown:e,useDropdown:t,useSelectionState:n,defineSettings:r,defineSlots:i}}var fe={tsx:``,data:``,css:``};async function D(e){let t=await fetch(e);return t.ok?t.text():``}function O({slug:e}){let[t,n]=(0,i.useState)(fe),[r,a]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let t=!0;return a(!0),Promise.all([D(`/source/examples/`+e+`/`+e+`.component.tsx`),D(`/source/examples/`+e+`/`+e+`.data.ts`),D(`/source/examples/`+e+`/`+e+`.component.css`)]).then(([e,r,i])=>{t&&(n({tsx:e,data:r,css:i}),a(!1))}),()=>{t=!1}},[e]),r?(0,o.jsx)(`div`,{className:`source-loading`,children:`Loading source files...`}):(0,o.jsxs)(`div`,{className:`code-grid`,children:[(0,o.jsxs)(`div`,{className:`code-card`,children:[(0,o.jsx)(`strong`,{children:`TSX`}),(0,o.jsx)(`pre`,{children:t.tsx})]}),(0,o.jsxs)(`div`,{className:`code-card`,children:[(0,o.jsx)(`strong`,{children:`Data`}),(0,o.jsx)(`pre`,{children:t.data})]}),(0,o.jsxs)(`div`,{className:`code-card`,children:[(0,o.jsx)(`strong`,{children:`CSS`}),(0,o.jsx)(`pre`,{children:t.css})]})]})}var k=`https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19`;function A(e){return Array.isArray(e)?e.length+` items`:e&&typeof e==`object`&&`itemName`in e?String(e.itemName):String(e??``)}function j(e){let t=`src/examples/${e}/${e}.component.tsx`;return k+`?file=`+encodeURIComponent(t)+`&startScript=start&initialpath=`+encodeURIComponent(`/`+e)}function M(e=`ready`){let[t,n]=(0,i.useState)([e]);return{events:t,record:(0,i.useCallback)((e,t)=>{n(n=>[e+`: `+A(t),...n].slice(0,10))},[])}}function pe({slug:e,eyebrow:t,title:n,description:r,children:i,events:a}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`section`,{className:`skin-section`,children:[(0,o.jsxs)(`div`,{className:`section-heading`,children:[(0,o.jsx)(`p`,{className:`eyebrow`,children:t}),(0,o.jsx)(`h2`,{children:n}),(0,o.jsx)(`p`,{className:`example-copy`,children:r}),(0,o.jsx)(`a`,{className:`stackblitz-row-link`,href:j(e),target:`_blank`,rel:`noopener`,children:`Open this route in StackBlitz`})]}),(0,o.jsxs)(`article`,{className:`example-row`,children:[(0,o.jsx)(`div`,{className:`demo-cell`,children:i}),(0,o.jsx)(`div`,{className:`code-cell`,children:(0,o.jsx)(O,{slug:e})})]})]}),(0,o.jsxs)(`section`,{className:`activity`,children:[(0,o.jsx)(`h2`,{children:`Event log`}),a.map((e,t)=>(0,o.jsx)(`p`,{children:e},e+t))]})]})}export{T as a,E as i,M as n,C as o,y as r,pe as t};
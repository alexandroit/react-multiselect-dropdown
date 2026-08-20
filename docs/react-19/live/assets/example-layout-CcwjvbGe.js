import{a as e,i as t,n,r,t as i}from"./index-B6EPTobr.js";var a=e(t(),1),o=r(),s=i();function c(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`}function l(e,t){if(c(e))return String(e);let n=[t.labelKey,`itemName`,`name`,`label`,`title`,`value`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return JSON.stringify(e)}function u(e,t){if(c(e))return String(e);let n=[t.primaryKey,`id`,`value`,`key`].filter(Boolean);for(let t of n)if(t&&e[t]!=null)return String(e[t]);return l(e,t)}function d(e){return e.replace(/[^a-zA-Z0-9_-]+/g,`-`).replace(/^-+|-+$/g,``).slice(0,56)||`option`}function ee(e){return d(e.toLowerCase())||`classic`}function te(e,t,n){if(!t.trim())return!0;let r=t.trim().toLowerCase(),i=new Set([l(e,n).toLowerCase()]);if(!c(e)){let t=e,r=n.searchBy.length?n.searchBy:[n.labelKey];for(let e of r)e&&t[e]!=null&&i.add(String(t[e]).toLowerCase())}for(let e of i)if(e.includes(r))return!0;return!1}function f(e){return!c(e)&&!!e.disabled}function p(e,t){if(!t.groupBy)return``;if(typeof t.groupBy==`function`)return t.groupBy(e);if(!c(e)){let n=e;if(t.groupBy in n)return String(n[t.groupBy]??``)}return``}function m(e,t,n){let r=new Map;for(let i of[...e,...t])r.set(u(i,n),i);return Array.from(r.values())}function ne(e,t,n){return n&&!c(n)?{[t.primaryKey]:e.toLowerCase().replace(/\s+/g,`-`),[t.labelKey]:e}:e}function re(e,t){if(!t.groupBy)return[];let n=new Map;for(let r of e){let e=p(r,t)||`Ungrouped`,i=n.get(e)||[];i.push(r),n.set(e,i)}return Array.from(n.entries()).map(([e,t])=>({name:e,items:t}))}function ie(e,t){return Number.isFinite(t)?Math.min(e,Math.max(0,Math.floor(t))):e}var h={space:!0,spaceOptionAction:`toggle`,tab:!0,arrows:!0,escape:!0,backspaceRemovesLastWhenSearchEmpty:!1,deleteRemovesFocusedBadge:!0,backspace:!1},ae={singleSelection:!1,text:`Select`,enableCheckAll:!0,selectAllText:`Select All`,unSelectAllText:`Unselect All`,filterSelectAllText:`Select filtered`,filterUnSelectAllText:`Unselect filtered`,enableFilterSelectAll:!0,enableSearchFilter:!1,searchBy:[],maxHeight:300,badgeShowLimit:2**53-1,classes:``,limitSelection:0,disabled:!1,searchPlaceholderText:`Search`,groupBy:``,showCheckbox:!0,noDataLabel:`No Data Available`,searchAutofocus:!0,lazyLoading:!1,labelKey:`itemName`,primaryKey:`id`,position:`bottom`,autoPosition:!0,loading:!1,selectGroup:!1,addNewItemOnFilter:!1,addNewButtonText:`Add`,escapeToClose:!0,clearAll:!0,closeDropDownOnSelection:!1,tagToBody:!1,appendToBody:!1,theme:``,skin:`classic`,ariaLabel:`Multiselect dropdown`,listboxAriaLabel:`Dropdown options`,searchAriaLabel:`Search options`,clearSearchAriaLabel:`Clear search`,clearAllAriaLabel:`Clear selected options`,removeItemAriaLabel:`Remove selected option`,openDropdownAriaLabel:`Open dropdown`,closeDropdownAriaLabel:`Close dropdown`,loadingText:`Loading options`,keyboard:h};function oe(e){let t=e?.escapeToClose??ae.escapeToClose,n=e?.keyboard,r={...h,...n,backspaceRemovesLastWhenSearchEmpty:n?.backspaceRemovesLastWhenSearchEmpty??n?.backspace??h.backspaceRemovesLastWhenSearchEmpty,deleteRemovesFocusedBadge:n?.deleteRemovesFocusedBadge??h.deleteRemovesFocusedBadge,escape:t&&(n?.escape??h.escape)};return{...ae,...e,escapeToClose:t,keyboard:r}}var g=`stackline-react-multiselect-dropdown-styles`,se=`
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
`;function _(){if(typeof document>`u`||document.getElementById(g))return;let e=document.createElement(`style`);e.id=g,e.textContent=se,document.head.appendChild(e)}function ce(e,t,n){let[r,i]=(0,a.useState)(t??[]),o=e!==void 0;return[o?e:r,e=>{o||i(e),n?.(e)}]}var v=typeof window>`u`?a.useEffect:a.useLayoutEffect;function y(e){return e===` `||e===`Spacebar`}function b(e,t,n){return e?(0,s.jsx)(s.Fragment,{children:e(t)}):(0,s.jsx)(s.Fragment,{children:n})}function x({name:e,className:t=`rmsd-icon`}){return e===`remove`?(0,s.jsx)(`svg`,{className:t,viewBox:`0 0 47.971 47.971`,focusable:`false`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{d:`M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z`})}):e===`clear`?(0,s.jsx)(`svg`,{className:t,viewBox:`0 0 51.976 51.976`,focusable:`false`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{d:`M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z`})}):e===`search`?(0,s.jsx)(`svg`,{className:t,viewBox:`0 0 615.52 615.52`,focusable:`false`,"aria-hidden":`true`,children:(0,s.jsx)(`path`,{d:`M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z`})}):(0,s.jsx)(`svg`,{className:t,viewBox:`0 0 612 612`,focusable:`false`,"aria-hidden":`true`,children:e===`angle-up`?(0,s.jsx)(`path`,{d:`M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z`}):(0,s.jsx)(`path`,{d:`M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z`})})}function S({data:e,settings:t,loading:n,className:r,style:i,selectedItems:p,defaultSelectedItems:h,onChange:ae,onSelect:g,onDeSelect:se,onSelectAll:S,onDeSelectAll:C,onOpen:w,onClose:T,onScrollToEnd:E,onFilterSelectAll:le,onFilterDeSelectAll:D,onAddFilterNewItem:O,onGroupSelect:ue,onGroupDeSelect:de,renderItem:k,renderBadge:A,renderSearch:j,renderEmptyState:M,slots:N},fe){_();let P=(0,a.useMemo)(()=>oe(t),[t]),[F,pe]=ce(p,h,ae),[I,me]=(0,a.useState)(!1),[L,he]=(0,a.useState)(``),[ge,_e]=(0,a.useState)([]),[R,z]=(0,a.useState)(null),[ve,ye]=(0,a.useState)(),[be,xe]=(0,a.useState)(),[Se,B]=(0,a.useState)(P.position===`top`?`top`:`bottom`),Ce=(0,a.useRef)(null),V=(0,a.useRef)(null),H=(0,a.useRef)(null),U=(0,a.useRef)(null),W=(0,a.useRef)(null),we=(0,a.useRef)(0),Te=(0,a.useRef)(null),Ee=(0,a.useRef)(0),De=(0,a.useRef)(`rmsd-${Math.random().toString(36).slice(2)}`),Oe=(0,a.useMemo)(()=>m(e,[...F,...ge],P),[ge,e,F,P]),G=(0,a.useMemo)(()=>Oe.filter(e=>te(e,L,P)),[Oe,L,P]),ke=(0,a.useMemo)(()=>re(G,P),[G,P]),Ae=`${De.current}-listbox`,je=(e,t,n)=>`${De.current}-${n}-${t}-${d(u(e,P))}`,K=e=>F.some(t=>u(t,P)===u(e,P)),q=G.filter(e=>!f(e)),Me=!!P.limitSelection&&F.length>=P.limitSelection,J=!!(P.appendToBody||P.tagToBody),Ne=()=>Array.from(W.current?.querySelectorAll(`[data-rmsd-option="true"]:not([aria-disabled="true"])`)??[]),Pe=e=>{let t=Ne();if(!t.length)return;let n=t[Math.max(0,Math.min(e,t.length-1))];n.focus(),z(n.id||null),n.scrollIntoView({block:`nearest`})},Fe=()=>Pe(0),Ie=()=>Pe(Ne().length-1),Le=e=>{let t=document.getElementById(e);return!t||!W.current?.contains(t)||t.getAttribute(`aria-disabled`)===`true`?!1:(t.focus(),z(t.id||null),t.scrollIntoView({block:`nearest`}),!0)},Re=(e,t)=>{window.setTimeout(()=>{let n=()=>{Le(e)||Pe(t)};if(typeof window.requestAnimationFrame==`function`){window.requestAnimationFrame(n);return}n()},0)},ze=(e,t,n)=>{window.setTimeout(()=>{let r=()=>{if(n){let t=Ne(),n=t.findIndex(t=>t.id===e),r=n>=0?t[n+1]:void 0;if(r){r.focus(),z(r.id||null),r.scrollIntoView({block:`nearest`});return}}Le(e)||Pe(t)};if(typeof window.requestAnimationFrame==`function`){window.requestAnimationFrame(r);return}r()},0)},Y=(e=`search`)=>{e!==`none`&&window.setTimeout(()=>{if(e===`search`&&I&&P.enableSearchFilter){U.current?.focus();return}V.current?.focus()},0)},X=e=>{pe(e)},Z=(e=`search`)=>{P.disabled||(Te.current=e,me(e=>(e||w?.(),!0)))},Q=(e=!1)=>{me(e=>(e&&T?.(),!1)),z(null),ye(void 0),xe(void 0),e&&window.setTimeout(()=>V.current?.focus(),0)},Be=()=>{let e=F;X([]),C?.(e),Y()},Ve=()=>{I?Q():Z(`search`)},He=(e,t=`search`)=>{let n=F.filter(t=>u(t,P)!==u(e,P));X(n),se?.(e),Y(t)},Ue=()=>{let e=F[F.length-1];e&&He(e)},We=(e,t=`search`)=>{if(P.disabled||f(e))return;if(K(e)){if(P.singleSelection){Q(!0),Y(`trigger`);return}He(e,t);return}if(P.singleSelection){X([e]),g?.(e),Q(!0),Y(`trigger`);return}if(P.limitSelection&&F.length>=P.limitSelection)return;let n=[...F,e];if(X(n),g?.(e),P.closeDropDownOnSelection){Q(!0),Y(`trigger`);return}Y(t)},Ge=(e,t=!1)=>{if(P.singleSelection)return;let n=new Set(F.map(e=>u(e,P))),r=P.limitSelection?Math.max(P.limitSelection-F.length,0):2**53-1,i=e.filter(e=>!n.has(u(e,P))).filter(e=>!f(e)).slice(0,r),a=[...F,...i];X(a),t?le?.(i):S?.(a),Y()},Ke=(e,t=!1)=>{let n=new Set(e.map(e=>u(e,P))),r=F.filter(e=>!n.has(u(e,P)));X(r),t?D?.(e):C?.(e),Y()},qe=async()=>{let t=L.trim();if(!t)return;let n=Ee.current+1;Ee.current=n;let r=await O?.(t);if(n!==Ee.current)return;let i=r===void 0?ne(t,P,e[0]):r;_e(e=>m(e,[i],P)),P.singleSelection?X([i]):X(m(F,[i],P)),he(``),Y()},Je=(e,t)=>{let n=t.filter(e=>!f(e));if(n.length>0&&n.every(e=>K(e))){Ke(n,!1),de?.(e,n),Y();return}Ge(n,!1),ue?.(e,n),Y()},Ye=()=>{if(!W.current||!E)return;let{scrollHeight:e,scrollTop:t,clientHeight:n}=W.current;e===we.current&&t+n<e-12||t+n>=e-12&&(we.current=e,E({scrollTop:t,scrollHeight:e,clientHeight:n}))},Xe=(e,t)=>{let n=P.position===`top`?`top`:`bottom`;if(!P.autoPosition||typeof window>`u`||typeof document>`u`)return n;let r=window.innerHeight||document.documentElement.clientHeight,i=e.top,a=r-e.bottom,o=i>a+48;return a<t&&o&&t<i?`top`:`bottom`};(0,a.useEffect)(()=>{if(!I)return;let e=e=>{let t=e.target;!Ce.current?.contains(t)&&!H.current?.contains(t)&&Q()},t=e=>{e.key===`Escape`&&P.keyboard.escape&&Q(!0)};return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e),document.removeEventListener(`keydown`,t)}},[I,P.keyboard.escape]);let Ze=()=>{if(!J||!V.current||typeof window>`u`)return;let e=V.current.getBoundingClientRect(),t=H.current?.offsetHeight??0,n=W.current?.offsetHeight??Math.min(P.maxHeight,t),r=Math.max(0,t-n),i=Xe(e,t),a=i===`top`?Math.max(0,e.top-8-8):Math.max(0,window.innerHeight-e.bottom-8-8),o=t>0?Math.max(0,Math.min(P.maxHeight,a-r)):P.maxHeight,s=r+o,c=i===`top`?e.top-s-8:e.bottom+8,l=i===`top`?Math.max(8,c):c;B(e=>e===i?e:i),xe(e=>e===o?e:o);let u=Math.max(0,window.innerWidth-16),d=Math.min(e.width,u),ee=Math.min(Math.max(8,e.left),window.innerWidth-d-8);ye({position:`fixed`,top:l,left:ee,width:d,maxWidth:u,zIndex:1e5})},Qe=()=>{if(!V.current||!H.current||J)return;xe(e=>e===void 0?e:void 0);let e=V.current.getBoundingClientRect(),t=H.current.offsetHeight,n=Xe(e,t);B(e=>e===n?e:n)};v(()=>{if(I){if(J){Ze();return}Qe()}},[I,J,P.position,P.autoPosition,P.maxHeight,G.length,F.length,L]),(0,a.useEffect)(()=>{if(!I||!J||typeof window>`u`)return;let e=()=>Ze(),t=()=>window.requestAnimationFrame(e);window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0);let n=typeof ResizeObserver<`u`&&H.current?new ResizeObserver(t):null;return n&&H.current&&n.observe(H.current),()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),n?.disconnect()}},[I,J,P.position,P.autoPosition,P.maxHeight,G.length,F.length]),(0,a.useEffect)(()=>{if(!I)return;let e=Te.current;Te.current=null,window.setTimeout(()=>{if(e===`first`){Fe();return}if(e===`last`){Ie();return}P.enableSearchFilter&&P.searchAutofocus&&U.current?.focus()},0)},[I,G.length,P.enableSearchFilter,P.searchAutofocus]),(0,a.useEffect)(()=>{we.current=0},[G.length]),(0,a.useImperativeHandle)(fe,()=>({openDropdown:()=>Z(`search`),closeDropdown:()=>Q(),clearSelection:Be,focusSearch:()=>{Z(`search`),window.setTimeout(()=>U.current?.focus(),0)},selectAll:()=>Ge(q),deSelectAll:()=>Ke(F),getSelectedItems:()=>F}),[q,F]);let $e=F.length,et=ie($e,P.badgeShowLimit),tt=P.singleSelection?F:F.slice(0,et),nt=P.singleSelection?0:Math.max($e-tt.length,0),rt=G.length>0,it=q.length>0&&q.every(e=>K(e)),at=P.enableCheckAll&&!P.singleSelection||!!(P.addNewItemOnFilter&&L.trim()),ot=ee(String(P.skin||P.theme||`classic`)),st=[`classic`,`material`,`dark`,`custom`].includes(ot)?``:`theme-custom`,ct=[`rmsd-root`,`skin-${ot}`,`theme-${ot}`,st,I?`rmsd-open`:``,nt>0?`rmsd-has-overflow`:``,P.clearAll&&F.length>0&&!P.disabled?`rmsd-has-clear`:``,Se===`top`?`rmsd-opens-up`:`rmsd-opens-down`,P.classes,r].filter(Boolean).join(` `),lt=e=>typeof P.removeItemAriaLabel==`function`?P.removeItemAriaLabel(e):`${P.removeItemAriaLabel}: ${l(e,P)}`,ut=()=>F.length?`${P.ariaLabel}: ${F.map(e=>l(e,P)).join(`, `)}`:P.ariaLabel,dt=e=>{if(y(e.key)&&!P.keyboard.space){e.preventDefault(),e.stopPropagation();return}(e.key===`Enter`||y(e.key))&&e.stopPropagation()},ft=(e,t)=>{if(P.keyboard.deleteRemovesFocusedBadge&&(e.key===`Backspace`||e.key===`Delete`)){e.preventDefault(),e.stopPropagation(),He(t);return}dt(e)},pt=e=>{if(!P.disabled){if(y(e.key)&&!P.keyboard.space){e.preventDefault();return}if(e.key===`Enter`||y(e.key)){e.preventDefault(),Ve();return}if(P.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),I?Fe():Z(`first`);return}if(P.keyboard.arrows&&e.key===`ArrowUp`){e.preventDefault(),I?Ie():Z(`last`);return}P.keyboard.escape&&e.key===`Escape`&&I&&(e.preventDefault(),Q(!0))}},mt=e=>{if(y(e.key)&&!P.keyboard.space){e.preventDefault(),e.stopPropagation();return}if(e.key===`Enter`||y(e.key)){e.preventDefault(),e.stopPropagation(),Ve();return}if(P.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),e.stopPropagation(),I?Fe():Z(`first`);return}P.keyboard.arrows&&e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),I?Ie():Z(`last`))},ht=e=>{if(y(e.key)&&!P.keyboard.space){e.preventDefault();return}if(P.keyboard.backspaceRemovesLastWhenSearchEmpty&&e.key===`Backspace`&&!L&&F.length>0&&!P.singleSelection){e.preventDefault(),Ue();return}if(P.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),Fe();return}P.keyboard.escape&&e.key===`Escape`&&(e.preventDefault(),Q(!0))},gt=(e,t,n)=>{if(y(e.key)&&!P.keyboard.space){e.preventDefault();return}if((e.key===`Enter`||y(e.key))&&e.repeat){e.preventDefault();return}if(e.key===`Enter`||y(e.key)){e.preventDefault();let r=P.singleSelection||!K(t)&&P.closeDropDownOnSelection,i=e.currentTarget.id,a=y(e.key)&&P.keyboard.spaceOptionAction===`toggle-and-next`;We(t,r?`trigger`:`none`),r||ze(i,n,a);return}if(P.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault();let t=n+1;t<Ne().length?Pe(t):P.lazyLoading&&Ye();return}if(P.keyboard.arrows&&e.key===`ArrowUp`){e.preventDefault(),n>0?Pe(n-1):P.enableSearchFilter?U.current?.focus():V.current?.focus();return}if(P.keyboard.arrows&&e.key===`Home`){e.preventDefault(),Fe();return}if(P.keyboard.arrows&&e.key===`End`){e.preventDefault(),Ie();return}P.keyboard.escape&&e.key===`Escape`&&(e.preventDefault(),Q(!0))},$={state:{settings:P,isOpen:I,filter:L,selectedItems:F,visibleBadges:tt,hiddenBadgeCount:nt,filteredItems:G,selectableItems:q,allFilteredSelected:it,hasFilteredResults:rt,loading:!!(n??P.loading),listboxId:Ae,activeDescendantId:R||void 0,label:F.length?F.map(e=>l(e,P)).join(`, `):P.text},actions:{openDropdown:()=>Z(`search`),closeDropdown:()=>Q(),toggleDropdown:Ve,clearSelection:Be,selectItem:e=>We(e),removeItem:e=>He(e),selectAll:(e=q)=>Ge(e),deSelectAll:(e=F)=>Ke(e),toggleGroup:Je,addFilterNewItem:qe,setFilter:he}},_t=e=>{let t={item:e,label:l(e,P),selected:K(e),disabled:P.disabled||f(e)||!K(e)&&Me,query:L,toggle:()=>We(e),remove:()=>He(e)};return k?k(e,t):(0,s.jsxs)(`div`,{className:`rmsd-option-body`,children:[(0,s.jsx)(`div`,{className:`rmsd-option-label`,children:t.label}),!c(e)&&e.caption?(0,s.jsx)(`span`,{className:`rmsd-option-hint`,children:String(e.caption)}):null]})},vt=e=>{let t=l(e,P),n={item:e,label:t,selected:!0,disabled:P.disabled||f(e),query:L,toggle:()=>We(e),remove:()=>He(e)},r=A?A(e,n):n.label,i={className:`rmsd-badge-label`};return b(N?.BadgeLabel,{...$,props:i,item:e,label:t,children:r},(0,s.jsx)(`span`,{...i,children:r}))},yt=(e,t)=>{if(!P.showCheckbox)return null;let n={className:`rmsd-checkbox`,"data-checked":e,"aria-hidden":!0};return b(N?.Checkbox,{...$,props:n,checked:e,context:t},(0,s.jsx)(`span`,{...n}))},bt=e=>{let t=l(e,P),n={type:`button`,className:`rmsd-badge-remove`,"aria-label":lt(e),onKeyDown:t=>ft(t,e),onClick:t=>{t.stopPropagation(),He(e)}},r=(0,s.jsx)(x,{name:`remove`});return b(N?.BadgeRemove,{...$,props:n,item:e,label:t,icon:r},(0,s.jsx)(`button`,{...n,children:r}))},xt=e=>{let t=l(e,P),n={className:`rmsd-badge`},r=P.disabled?null:bt(e),i=(0,s.jsxs)(s.Fragment,{children:[vt(e),r]});return b(N?.Badge,{...$,props:n,item:e,label:t,children:i,removeButton:r},(0,s.jsx)(`span`,{...n,children:i}))},St=-1,Ct=(e,t,n)=>{let r=K(e),i=P.disabled||f(e)||Me&&!r,o=i?-1:St+=1,c=je(e,n,t),d=`${t}-${u(e,P)}-${n}`,ee={item:e,id:c,key:d,label:l(e,P),selected:r,disabled:i,index:o,groupName:t.startsWith(`group-`)?t:void 0},te={id:c,className:`rmsd-option${r?` rmsd-selected`:``}${i?` rmsd-disabled`:``}`,role:`option`,"aria-selected":r,"aria-checked":r,"aria-disabled":i,tabIndex:i||!P.keyboard.tab?-1:0,"data-rmsd-option":`true`,onFocus:()=>z(c),onClick:()=>{if(i)return;let t=P.singleSelection||!K(e)&&P.closeDropDownOnSelection;We(e,t?`trigger`:`none`),t||Re(c,o)},onKeyDown:t=>gt(t,e,o)},p=yt(r,`option`),m=(0,s.jsxs)(s.Fragment,{children:[p,_t(e)]});return(0,s.jsx)(a.Fragment,{children:b(N?.Option,{...$,props:te,option:ee,checkbox:p,children:m},(0,s.jsx)(`div`,{...te,children:m}))},d)},wt=e=>{e.target.closest(`button`)||Ve()},Tt=()=>{let e=it?L.trim()?P.filterUnSelectAllText:P.unSelectAllText:L.trim()?P.filterSelectAllText:P.selectAllText,t={type:`button`,className:`rmsd-inline-button rmsd-select-all-button`,onClick:()=>it?Ke(q,!!L.trim()):Ge(q,!!L.trim()),onKeyDown:dt,disabled:P.disabled||q.length===0},n=yt(it,`selectAll`);return b(N?.SelectAll,{...$,props:t,checked:it,label:e,checkbox:n},(0,s.jsxs)(`button`,{...t,children:[n,(0,s.jsx)(`span`,{children:e})]}))},Et=()=>{let e=L.trim();if(!e)return null;let t=`${P.addNewButtonText} "${e}"`,n={type:`button`,className:`rmsd-inline-button rmsd-add-button`,onKeyDown:dt,onClick:qe};return b(N?.AddNewItem,{...$,props:n,query:e,label:t},(0,s.jsx)(`button`,{...n,children:t}))},Dt=()=>{if(!P.enableSearchFilter)return null;let e={className:`rmsd-search-shell`},t={ref:U,className:`rmsd-search-input`,value:L,onChange:e=>he(e.target.value),onKeyDown:ht,placeholder:P.searchPlaceholderText,"aria-label":P.searchAriaLabel},n={type:`button`,className:`rmsd-search-clear`,"aria-label":P.clearSearchAriaLabel,onKeyDown:dt,onClick:()=>he(``)},r=(0,s.jsx)(x,{name:`search`,className:`rmsd-search-icon`}),i=(0,s.jsx)(x,{name:`clear`}),a=j?j({query:L,setQuery:he,closeDropdown:()=>Q()}):(0,s.jsxs)(`div`,{...e,children:[r,(0,s.jsx)(`input`,{...t}),L?(0,s.jsx)(`button`,{...n,children:i}):null]});return b(N?.Search,{...$,props:e,inputProps:t,clearButtonProps:n,query:L,icon:r,clearIcon:i},a)},Ot=e=>{if(!P.selectGroup||P.singleSelection)return null;let t=e.selected?`Unselect`:`Select`,n={type:`button`,className:`rmsd-group-action`,onKeyDown:dt,onClick:()=>Je(e.name,e.items)};return b(N?.GroupAction,{...$,props:n,group:e,label:t},(0,s.jsx)(`button`,{...n,children:t}))},kt=(e,t)=>{let n=e.items.filter(e=>!f(e)),r={name:e.name,items:e.items,enabledItems:n,selected:n.length>0&&n.every(e=>K(e)),disabled:n.length===0,index:t},i=Ot(r),o={className:`rmsd-group-header`},c=b(N?.GroupHeader,{...$,props:o,group:r,action:i},(0,s.jsxs)(`div`,{...o,children:[(0,s.jsxs)(`span`,{children:[e.name,` · `,e.items.length]}),i]})),l={className:`rmsd-group`,role:`group`,"aria-label":e.name},u=e.items.map((e,n)=>Ct(e,`group-${t}`,n));return(0,s.jsx)(a.Fragment,{children:b(N?.Group,{...$,props:l,group:r,header:c,children:u},(0,s.jsxs)(`div`,{...l,children:[c,u]}))},e.name)},At=()=>{if(n??P.loading){let e={className:`rmsd-state`,role:`status`};return b(N?.LoadingState,{...$,props:e,text:P.loadingText},(0,s.jsx)(`div`,{...e,children:P.loadingText}))}if(ke.length>0)return ke.map((e,t)=>kt(e,t));if(rt)return G.map((e,t)=>Ct(e,`item`,t));let e={className:`rmsd-state`};return b(N?.EmptyState,{...$,props:e,query:L,text:P.noDataLabel},(0,s.jsx)(`div`,{...e,children:M?M(L):P.noDataLabel}))},jt=()=>{let e={className:`rmsd-list`,ref:W,style:{maxHeight:J?be??P.maxHeight:P.maxHeight},onScroll:P.lazyLoading?Ye:void 0,id:Ae,role:`listbox`,"aria-label":P.listboxAriaLabel,"aria-multiselectable":!P.singleSelection},t=At();return b(N?.OptionList,{...$,props:e,children:t},(0,s.jsx)(`div`,{...e,children:t}))},Mt=()=>{if(!at)return null;let e={className:`rmsd-bulk-actions`},t=(0,s.jsxs)(s.Fragment,{children:[P.enableCheckAll&&!P.singleSelection?Tt():null,P.addNewItemOnFilter&&L.trim()?Et():null]});return b(N?.BulkActions,{...$,props:e,children:t},(0,s.jsx)(`div`,{...e,children:t}))},Nt=()=>{let e={className:`rmsd-toolbar`},t=(0,s.jsxs)(s.Fragment,{children:[Mt(),Dt()]});return b(N?.Toolbar,{...$,props:e,children:t},(0,s.jsx)(`div`,{...e,children:t}))},Pt=()=>N?.MenuFooter?b(N.MenuFooter,{...$,props:{className:`rmsd-menu-footer`}},null):null,Ft=()=>{if(!I)return null;let e={ref:H,className:`rmsd-menu rmsd-${Se} skin-${ot} theme-${ot}${st?` ${st}`:``}${J?` rmsd-body-overlay`:``}`,style:J?ve:void 0,onMouseDown:e=>e.stopPropagation(),onTouchStart:e=>e.stopPropagation()},t=(0,s.jsxs)(s.Fragment,{children:[Nt(),jt(),Pt()]});return b(N?.Menu,{...$,props:e,children:t,position:Se,appendToBody:J},(0,s.jsx)(`div`,{...e,children:t}))},It=()=>{let e={className:`rmsd-value`},t;if(F.length===0){let e={className:`rmsd-placeholder`};t=b(N?.Placeholder,{...$,props:e,text:P.text},(0,s.jsx)(`span`,{...e,children:P.text}))}else if(P.singleSelection){let e=F[0],n={className:`rmsd-single-value`};t=b(N?.SingleValue,{...$,props:n,item:e,label:l(e,P)},(0,s.jsx)(`span`,{...n,children:l(e,P)}))}else{let e={className:`rmsd-badge-list`},n=tt.map(e=>(0,s.jsx)(a.Fragment,{children:xt(e)},u(e,P)));t=b(N?.BadgeList,{...$,props:e,items:tt,children:n},(0,s.jsx)(`div`,{...e,children:n}))}return b(N?.Value,{...$,props:e,children:t},(0,s.jsx)(`div`,{...e,children:t}))},Lt=()=>{let e={className:`rmsd-actions`},t={className:`rmsd-overflow`},n={type:`button`,className:`rmsd-clear`,"aria-label":P.clearAllAriaLabel,onKeyDown:dt,onClick:e=>{e.stopPropagation(),Be()}},r={type:`button`,className:`rmsd-arrow-button`,disabled:P.disabled,"aria-label":I?P.closeDropdownAriaLabel:P.openDropdownAriaLabel,"aria-expanded":I,"aria-controls":Ae,onKeyDown:mt,onClick:e=>{e.stopPropagation(),Ve()}},i=(0,s.jsx)(x,{name:`remove`}),a=(0,s.jsx)(`span`,{className:`rmsd-arrow`,"aria-hidden":`true`,children:(0,s.jsx)(x,{name:I?`angle-up`:`angle-down`})}),o=(0,s.jsxs)(s.Fragment,{children:[nt>0?b(N?.OverflowCounter,{...$,props:t,count:nt},(0,s.jsxs)(`span`,{...t,children:[`+`,nt]})):null,P.clearAll&&F.length>0&&!P.disabled?b(N?.ClearAll,{...$,props:n,icon:i},(0,s.jsx)(`button`,{...n,children:i})):null,b(N?.Arrow,{...$,props:r,icon:a,direction:I?`up`:`down`},(0,s.jsx)(`button`,{...r,children:a}))]});return b(N?.Actions,{...$,props:e,children:o},(0,s.jsx)(`div`,{...e,children:o}))},Rt=()=>{let e={ref:V,className:`rmsd-trigger${P.disabled?` rmsd-disabled`:``}`,onClick:wt,onKeyDown:pt,tabIndex:P.disabled?-1:0,role:`combobox`,"aria-expanded":I,"aria-haspopup":`listbox`,"aria-controls":Ae,"aria-disabled":P.disabled,"aria-activedescendant":R||void 0,"aria-label":ut()},t=(0,s.jsxs)(s.Fragment,{children:[It(),Lt()]});return b(N?.Trigger,{...$,props:e,children:t},(0,s.jsx)(`div`,{...e,children:t}))},zt=Ft(),Bt=(0,s.jsxs)(s.Fragment,{children:[Rt(),J&&zt&&typeof document<`u`?(0,o.createPortal)(zt,document.body):zt]}),Vt={className:ct,style:i,ref:Ce,"data-open":I};return b(N?.Root,{...$,props:Vt,children:Bt},(0,s.jsx)(`div`,{...Vt,children:Bt}))}var C=(0,a.forwardRef)(S);function w(e,t){if(typeof e==`function`){e(t);return}e&&`current`in e&&(e.current=t)}function T(e){return!!e.defaultPrevented}function E(e,t){return n=>{t?.(n),T(n)||e?.(n)}}function le({data:e,settings:t,selectedItems:n,defaultSelectedItems:r,onChange:i,onSelect:o,onDeSelect:s,onSelectAll:c,onDeSelectAll:d,onFilterSelectAll:ee,onFilterDeSelectAll:p,onAddFilterNewItem:re,onGroupSelect:h,onGroupDeSelect:ae,onSelectionShouldClose:g}){let[se,_]=(0,a.useState)(``),[v,y]=(0,a.useState)([]),b=(0,a.useRef)(0),x=(0,a.useMemo)(()=>oe(t),[t]),[S,C]=ce(n,r,i),w=(0,a.useMemo)(()=>m(e,[...S,...v],x),[v,e,S,x]),T=(0,a.useMemo)(()=>w.filter(e=>te(e,se,x)),[w,se,x]),E=e=>S.some(t=>u(t,x)===u(e,x)),le=e=>x.disabled||f(e),D=T.filter(e=>!le(e)),O=D.length>0&&D.every(e=>E(e)),ue=ie(S.length,x.badgeShowLimit),de=x.singleSelection?S:S.slice(0,ue),k=x.singleSelection?0:Math.max(S.length-de.length,0),A=e=>{C(e)},j=e=>{if(x.disabled)return;let t=S.filter(t=>u(t,x)!==u(e,x));A(t),s?.(e)},M=()=>{let e=S[S.length-1];!e||x.disabled||j(e)},N=e=>{if(x.disabled||f(e))return;if(E(e)){if(x.singleSelection){g?.();return}j(e);return}if(x.singleSelection){A([e]),o?.(e),g?.();return}if(x.limitSelection&&S.length>=x.limitSelection)return;let t=[...S,e];A(t),o?.(e),x.closeDropDownOnSelection&&g?.()},fe=(e=D,t=!1)=>{if(x.disabled||x.singleSelection)return;let n=new Set(S.map(e=>u(e,x))),r=x.limitSelection?Math.max(x.limitSelection-S.length,0):2**53-1,i=e.filter(e=>!n.has(u(e,x))).filter(e=>!f(e)).slice(0,r),a=[...S,...i];A(a),t?ee?.(i):c?.(a)},P=(e=S,t=!1)=>{if(x.disabled)return;let n=new Set(e.map(e=>u(e,x))),r=S.filter(e=>!n.has(u(e,x)));A(r),t?p?.(e):d?.(e)};return{settings:x,filter:se,setFilter:_,selectedItems:S,allItems:w,filteredItems:T,selectableItems:D,visibleBadges:de,hiddenBadgeCount:k,allFilteredSelected:O,isSelected:E,isDisabled:le,getItemLabel:e=>l(e,x),getItemKey:e=>u(e,x),selectItem:N,removeItem:j,removeLastSelectedItem:M,selectAll:fe,deSelectAll:P,clearSelection:()=>P(S),toggleGroup:(e,t)=>{if(x.disabled)return;let n=t.filter(e=>!f(e));if(n.length>0&&n.every(e=>E(e))){P(n),ae?.(e,n);return}fe(n),h?.(e,n)},addFilterNewItem:async()=>{if(x.disabled)return;let t=se.trim();if(!t)return;let n=b.current+1;b.current=n;let r=await re?.(t);if(n!==b.current)return;let i=r===void 0?ne(t,x,e[0]):r;y(e=>m(e,[i],x)),x.singleSelection?A([i]):A(m(S,[i],x)),_(``)}}}function D(e){return e===` `||e===`Spacebar`}function O({id:e,data:t,settings:n,selectedItems:r,defaultSelectedItems:i,onChange:o,onSelect:s,onDeSelect:c,onSelectAll:ee,onDeSelectAll:te,onOpen:m,onClose:ne,onScrollToEnd:re,onFilterSelectAll:ie,onFilterDeSelectAll:h,onAddFilterNewItem:ae,onGroupSelect:oe,onGroupDeSelect:g}){let se=(0,a.useId)(),_=d(e||`stackline-multiselect-${se}`),ce=(0,a.useRef)(null),v=(0,a.useRef)(null),y=(0,a.useRef)(null),b=(0,a.useRef)(null),x=(0,a.useRef)(new Map),S=(0,a.useRef)(0),C=(0,a.useRef)(()=>void 0),T=(0,a.useRef)(`search`),[O,ue]=(0,a.useState)(!1),[de,k]=(0,a.useState)(-1),A=`${_}-listbox`,j=le({data:t,settings:n,selectedItems:r,defaultSelectedItems:i,onChange:o,onSelect:s,onDeSelect:c,onSelectAll:ee,onDeSelectAll:te,onFilterSelectAll:ie,onFilterDeSelectAll:h,onAddFilterNewItem:ae,onGroupSelect:oe,onGroupDeSelect:g,onSelectionShouldClose:()=>C.current()}),{settings:M,filter:N,setFilter:fe,selectedItems:P,filteredItems:F,selectableItems:pe,visibleBadges:I,hiddenBadgeCount:me,allFilteredSelected:L,isSelected:he,isDisabled:ge}=j,_e=!!M.limitSelection&&P.length>=M.limitSelection,R=(0,a.useMemo)(()=>{let e=-1;return F.map(t=>{e+=1;let n=p(t,M)||void 0,r=P.some(e=>u(e,M)===u(t,M)),i=M.disabled||f(t)||_e&&!r,a=u(t,M);return{item:t,key:a,id:`${_}-option-${e}-${d(a)}`,label:l(t,M),selected:r,disabled:i,index:e,groupName:n}})},[F,_,_e,P,M]),z=R.filter(e=>!e.disabled),ve=R.filter(e=>e.selected),ye=(0,a.useMemo)(()=>{if(!M.groupBy)return[];let e=new Map;for(let t of R){let n=t.groupName||`Ungrouped`,r=e.get(n)||[];r.push(t),e.set(n,r)}return Array.from(e.entries()).map(([e,t])=>{let n=t.filter(e=>!e.disabled);return{name:e,items:t,selected:n.length>0&&n.every(e=>e.selected),disabled:n.length===0}})},[R,M.groupBy]),be=R.find(e=>e.index===de&&!e.disabled)?.id,xe=R.length>0,Se=P.length?P.map(e=>l(e,M)).join(`, `):M.text,B=e=>{if(!R.length){k(-1);return}let t=R.filter(e=>!e.disabled);if(!t.length){k(-1);return}let n=t[Math.max(0,Math.min(e,t.length-1))];k(n.index),window.setTimeout(()=>{x.current.get(n.id)?.focus(),x.current.get(n.id)?.scrollIntoView({block:`nearest`})},0)},Ce=(e,t,n=!1)=>{k(t),window.setTimeout(()=>{let r=()=>{if(n){let n=Array.from(b.current?.querySelectorAll(`[data-headless-option="true"]:not([aria-disabled="true"])`)??[]),r=n.findIndex(t=>t.id===e),i=r>=0?n[r+1]:void 0;if(i){let e=R.find(e=>e.id===i.id);i.focus(),i.scrollIntoView({block:`nearest`}),k(e?.index??t+1);return}}let r=x.current.get(e);if(r){r.focus(),r.scrollIntoView({block:`nearest`});return}B(t)};if(typeof window.requestAnimationFrame==`function`){window.requestAnimationFrame(r);return}r()},0)},V=(e=`search`)=>{M.disabled||(T.current=e,ue(e=>(e||m?.(),!0)))},H=()=>{ue(e=>(e&&ne?.(),!1)),k(-1)};C.current=H;let U=()=>{if(O){H();return}V()},W=(e=`search`)=>{e!==`none`&&window.setTimeout(()=>{if(e===`search`&&O&&M.enableSearchFilter){y.current?.focus();return}v.current?.focus()},0)},we=(e,t=`search`)=>{let n=j.isSelected(e),r=M.singleSelection||!n&&M.closeDropDownOnSelection;j.selectItem(e),W(r?`trigger`:t)},Te=(e,t=`search`)=>{j.removeItem(e),W(t)},Ee=()=>{j.removeLastSelectedItem(),W()},De=(e=pe,t=!1)=>{j.selectAll(e,t),W()},Oe=(e=P,t=!1)=>{j.deSelectAll(e,t),W()},G=()=>{j.clearSelection(),W()},ke=(e,t)=>{j.toggleGroup(e,t),W()},Ae=async()=>{await j.addFilterNewItem(),W()},je=()=>{if(!b.current||!re)return;let{scrollHeight:e,scrollTop:t,clientHeight:n}=b.current;e===S.current&&t+n<e-12||t+n>=e-12&&(S.current=e,re({scrollTop:t,scrollHeight:e,clientHeight:n}))},K=e=>{if(!M.disabled){if(D(e.key)&&!M.keyboard.space){e.preventDefault();return}if(e.key===`Enter`||D(e.key)){e.preventDefault(),U();return}if(M.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),O?B(0):V(`first`);return}if(M.keyboard.arrows&&e.key===`ArrowUp`){e.preventDefault(),O?B(z.length-1):V(`last`);return}M.keyboard.escape&&e.key===`Escape`&&O&&(e.preventDefault(),H())}},q=e=>{if(D(e.key)&&!M.keyboard.space){e.preventDefault();return}if(M.keyboard.backspaceRemovesLastWhenSearchEmpty&&e.key===`Backspace`&&!N&&P.length>0&&!M.singleSelection){e.preventDefault(),Ee();return}if(M.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),B(0);return}M.keyboard.escape&&e.key===`Escape`&&(e.preventDefault(),H(),v.current?.focus())},Me=(e,t)=>{if(D(e.key)&&!M.keyboard.space){e.preventDefault();return}if((e.key===`Enter`||D(e.key))&&e.repeat){e.preventDefault();return}if(e.key===`Enter`||D(e.key)){e.preventDefault();let n=R.filter(e=>!e.disabled).findIndex(e=>e.id===t.id),r=M.singleSelection||!j.isSelected(t.item)&&M.closeDropDownOnSelection,i=D(e.key)&&M.keyboard.spaceOptionAction===`toggle-and-next`;we(t.item,r?`trigger`:`none`),r||Ce(t.id,Math.max(0,n),i);return}let n=R.filter(e=>!e.disabled),r=n.findIndex(e=>e.id===t.id);if(M.keyboard.arrows&&e.key===`ArrowDown`){e.preventDefault(),r<n.length-1?B(r+1):M.lazyLoading&&je();return}if(M.keyboard.arrows&&e.key===`ArrowUp`){e.preventDefault(),r>0?B(r-1):M.enableSearchFilter?y.current?.focus():v.current?.focus();return}if(M.keyboard.arrows&&e.key===`Home`){e.preventDefault(),B(0);return}if(M.keyboard.arrows&&e.key===`End`){e.preventDefault(),B(n.length-1);return}M.keyboard.escape&&e.key===`Escape`&&(e.preventDefault(),H(),v.current?.focus())},J=e=>{if(D(e.key)&&!M.keyboard.space){e.preventDefault(),e.stopPropagation();return}(e.key===`Enter`||D(e.key))&&e.stopPropagation()},Ne=(e,t)=>{if(M.keyboard.deleteRemovesFocusedBadge&&(e.key===`Backspace`||e.key===`Delete`)){e.preventDefault(),e.stopPropagation(),Te(t);return}J(e)},Pe=e=>{if(e&&typeof e==`object`&&`item`in e&&`id`in e&&`index`in e)return e;let t=e,n=u(t,M),r=R.find(e=>e.key===n);if(r)return r;let i=he(t);return{item:t,key:n,id:`${_}-option-manual-${d(n)}`,label:l(t,M),selected:i,disabled:M.disabled||f(t)||_e&&!i,index:-1,groupName:p(t,M)||void 0}};return(0,a.useEffect)(()=>{if(!O)return;let e=e=>{let t=e.target;!ce.current?.contains(t)&&!b.current?.contains(t)&&H()},t=e=>{e.key===`Escape`&&M.keyboard.escape&&H()};return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),document.addEventListener(`keydown`,t),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e),document.removeEventListener(`keydown`,t)}},[O,M.keyboard.escape]),(0,a.useEffect)(()=>{S.current=0},[R.length]),(0,a.useEffect)(()=>{if(!O)return;let e=T.current;T.current=`search`,window.setTimeout(()=>{if(e===`first`){B(0);return}if(e===`last`){B(z.length-1);return}M.enableSearchFilter&&M.searchAutofocus&&y.current?.focus()},0)},[O,R.length,z.length,M.enableSearchFilter,M.searchAutofocus]),{settings:M,isOpen:O,filter:N,setFilter:fe,selectedItems:P,selectedOptions:ve,options:R,groups:ye,visibleOptions:R,visibleBadges:I,hiddenBadgeCount:me,allFilteredSelected:L,hasFilteredResults:xe,activeDescendantId:be,listboxId:A,label:Se,openDropdown:V,closeDropdown:H,toggleDropdown:U,clearSelection:G,selectItem:we,removeItem:Te,selectAll:De,deSelectAll:Oe,toggleGroup:ke,addFilterNewItem:Ae,isSelected:he,isDisabled:ge,getItemLabel:e=>l(e,M),getItemKey:e=>u(e,M),getRootProps:(e={})=>({...e,ref:t=>{ce.current=t,w(e.ref,t)}}),getTriggerProps:(e={})=>({type:`button`,...e,ref:t=>{v.current=t,w(e.ref,t)},disabled:M.disabled||e.disabled,role:`combobox`,"aria-expanded":O,"aria-haspopup":`listbox`,"aria-controls":A,"aria-disabled":M.disabled||void 0,"aria-activedescendant":be,"aria-label":P.length?`${M.ariaLabel}: ${P.map(e=>l(e,M)).join(`, `)}`:M.ariaLabel,onClick:E(()=>U(),e.onClick),onKeyDown:E(e=>{K(e)},e.onKeyDown)}),getListboxProps:(e={})=>({...e,ref:t=>{b.current=t,w(e.ref,t)},id:e.id||A,role:`listbox`,"aria-label":e[`aria-label`]||M.listboxAriaLabel,"aria-multiselectable":!M.singleSelection,onScroll:E(()=>{M.lazyLoading&&je()},e.onScroll)}),getOptionProps:(e,t={})=>{let n=Pe(e);return{...t,ref:e=>{e?x.current.set(n.id,e):x.current.delete(n.id),w(t.ref,e)},id:t.id||n.id,role:`option`,tabIndex:n.disabled||!M.keyboard.tab?-1:t.tabIndex??0,"aria-selected":n.selected,"aria-checked":n.selected,"aria-disabled":n.disabled||void 0,"data-headless-option":`true`,onClick:E(e=>{if(n.disabled)return;let t=M.singleSelection||!j.isSelected(n.item)&&M.closeDropDownOnSelection;we(n.item,t?`trigger`:`none`),t||(k(n.index),Ce(n.id,n.index))},t.onClick),onFocus:E(()=>k(n.index),t.onFocus),onKeyDown:E(e=>{Me(e,n)},t.onKeyDown)}},getSearchInputProps:(e={})=>({type:`search`,...e,ref:t=>{y.current=t,w(e.ref,t)},value:e.value??N,placeholder:e.placeholder??M.searchPlaceholderText,"aria-label":e[`aria-label`]??M.searchAriaLabel,onChange:E(e=>{fe(e.currentTarget.value)},e.onChange),onKeyDown:E(e=>{q(e)},e.onKeyDown)}),getClearAllButtonProps:(e={})=>({type:`button`,...e,disabled:M.disabled||P.length===0||e.disabled,"aria-label":e[`aria-label`]??M.clearAllAriaLabel,onKeyDown:E(e=>{J(e)},e.onKeyDown),onClick:E(()=>G(),e.onClick)}),getRemoveButtonProps:(e,t={})=>({type:`button`,...t,disabled:M.disabled||t.disabled,"aria-label":t[`aria-label`]??(typeof M.removeItemAriaLabel==`function`?M.removeItemAriaLabel(e):`${M.removeItemAriaLabel}: ${l(e,M)}`),onKeyDown:E(t=>{Ne(t,e)},t.onKeyDown),onClick:E(()=>Te(e),t.onClick)})}}function ue(){let e=C;function t(e){return O(e)}function n(e){return le(e)}function r(e){return e}function i(e){return e}return{Dropdown:e,MultiSelectDropdown:e,useDropdown:t,useSelectionState:n,defineSettings:r,defineSlots:i}}var de={tsx:``,data:``,css:``};async function k(e){let t=await fetch(e);return t.ok?t.text():``}function A({slug:e}){let[t,r]=(0,a.useState)(de),[i,o]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let t=!0;o(!0);let i=`source/examples/`+e+`/`+e;return Promise.all([k(n(i+`.component.tsx`).href),k(n(i+`.data.ts`).href),k(n(i+`.component.css`).href)]).then(([e,n,i])=>{t&&(r({tsx:e,data:n,css:i}),o(!1))}),()=>{t=!1}},[e]),i?(0,s.jsx)(`div`,{className:`source-loading`,children:`Loading source files...`}):(0,s.jsxs)(`div`,{className:`code-grid`,children:[(0,s.jsxs)(`div`,{className:`code-card`,children:[(0,s.jsx)(`strong`,{children:`TSX`}),(0,s.jsx)(`pre`,{children:t.tsx})]}),(0,s.jsxs)(`div`,{className:`code-card`,children:[(0,s.jsx)(`strong`,{children:`Data`}),(0,s.jsx)(`pre`,{children:t.data})]}),(0,s.jsxs)(`div`,{className:`code-card`,children:[(0,s.jsx)(`strong`,{children:`CSS`}),(0,s.jsx)(`pre`,{children:t.css})]})]})}function j(e){return Array.isArray(e)?e.length+` items`:e&&typeof e==`object`&&`itemName`in e?String(e.itemName):String(e??``)}function M(e){let t=`src/examples/${e}/${e}.component.tsx`;return`https://stackblitz.com/github/alexandroit/stackline-react-multiselect-react-19?file=`+encodeURIComponent(t)+`&startScript=start&initialpath=`+encodeURIComponent(`/`+e)}function N(e=`ready`){let[t,n]=(0,a.useState)([e]);return{events:t,record:(0,a.useCallback)((e,t)=>{n(n=>[e+`: `+j(t),...n].slice(0,10))},[])}}function fe({slug:e,eyebrow:t,title:n,description:r,children:i,events:a}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(`section`,{className:`skin-section`,children:[(0,s.jsxs)(`div`,{className:`section-heading`,children:[(0,s.jsx)(`p`,{className:`eyebrow`,children:t}),(0,s.jsx)(`h2`,{children:n}),(0,s.jsx)(`p`,{className:`example-copy`,children:r}),(0,s.jsx)(`a`,{className:`stackblitz-row-link`,href:M(e),target:`_blank`,rel:`noopener`,children:`Open this route in StackBlitz`})]}),(0,s.jsxs)(`article`,{className:`example-row`,children:[(0,s.jsx)(`div`,{className:`demo-cell`,children:i}),(0,s.jsx)(`div`,{className:`code-cell`,children:(0,s.jsx)(A,{slug:e})})]})]}),(0,s.jsxs)(`section`,{className:`activity`,children:[(0,s.jsx)(`h2`,{children:`Event log`}),a.map((e,t)=>(0,s.jsx)(`p`,{children:e},e+t))]})]})}export{O as a,ue as i,N as n,le as o,C as r,fe as t};
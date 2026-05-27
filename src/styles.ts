const STYLE_ID = 'stackline-react-multiselect-dropdown-styles';

const styles = `
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
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.rmsd-placeholder,
.rmsd-single-value {
  min-width: 0;
  color: var(--rmsd-muted);
  font-size: 0.95rem;
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
  min-width: 0;
  min-height: 0;
  color: var(--rmsd-muted);
  font-size: 0.8rem;
  font-weight: 600;
}

.rmsd-root.rmsd-has-overflow:not(.skin-classic) .rmsd-trigger {
  padding-right: 104px;
}

.rmsd-root.rmsd-has-overflow:not(.skin-classic):not(.rmsd-has-clear) .rmsd-trigger {
  padding-right: 74px;
}

.rmsd-root.rmsd-has-overflow:not(.skin-classic) .rmsd-overflow {
  position: absolute;
  top: 50%;
  right: 76px;
  transform: translateY(-50%);
  z-index: 1;
}

.rmsd-root.rmsd-has-overflow:not(.skin-classic):not(.rmsd-has-clear) .rmsd-overflow {
  right: 42px;
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
  color: #333333;
  font-size: 14px;
  font-weight: 400;
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
    align-items: flex-start;
    padding-right: 54px;
  }
}
`;

export function ensureDropdownStyles() {
  if (typeof document === 'undefined') {
    return;
  }

  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const tag = document.createElement('style');
  tag.id = STYLE_ID;
  tag.textContent = styles;
  document.head.appendChild(tag);
}

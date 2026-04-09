const STYLE_ID = 'stackline-react-multiselect-dropdown-styles';

const styles = `
.rmsd-root {
  --rmsd-border: #d7deeb;
  --rmsd-border-strong: #bcc7da;
  --rmsd-bg: #ffffff;
  --rmsd-surface: #f6f8fc;
  --rmsd-ink: #17324d;
  --rmsd-muted: #62748a;
  --rmsd-primary: #0f4b8a;
  --rmsd-primary-soft: #e8f0ff;
  --rmsd-danger: #c44f3c;
  --rmsd-shadow: 0 18px 40px rgba(18, 32, 54, 0.12);
  position: relative;
  width: 100%;
  color: var(--rmsd-ink);
  font-family: inherit;
}

.rmsd-root *,
.rmsd-root *::before,
.rmsd-root *::after {
  box-sizing: border-box;
}

.rmsd-trigger {
  display: flex;
  min-height: 46px;
  width: 100%;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--rmsd-border);
  border-radius: 14px;
  background: var(--rmsd-bg);
  padding: 8px 12px;
  text-align: left;
  cursor: pointer;
  transition: border-color 120ms ease, box-shadow 120ms ease;
}

.rmsd-trigger:hover {
  border-color: var(--rmsd-border-strong);
}

.rmsd-root[data-open="true"] .rmsd-trigger,
.rmsd-trigger:focus-visible {
  outline: none;
  border-color: var(--rmsd-primary);
  box-shadow: 0 0 0 4px rgba(15, 75, 138, 0.1);
}

.rmsd-trigger.rmsd-disabled {
  cursor: not-allowed;
  opacity: 0.7;
  background: #f1f4f9;
}

.rmsd-placeholder {
  color: var(--rmsd-muted);
}

.rmsd-value {
  min-width: 0;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.rmsd-single-value {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.rmsd-badge-list {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.rmsd-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  background: var(--rmsd-primary-soft);
  color: var(--rmsd-primary);
  padding: 4px 8px;
  font-size: 12px;
  line-height: 1;
}

.rmsd-badge button,
.rmsd-clear,
.rmsd-group-action {
  appearance: none;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font: inherit;
}

.rmsd-overflow {
  color: var(--rmsd-muted);
  font-size: 12px;
}

.rmsd-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.rmsd-clear {
  color: var(--rmsd-danger);
  font-size: 12px;
}

.rmsd-arrow {
  font-size: 12px;
  color: var(--rmsd-muted);
}

.rmsd-menu {
  position: absolute;
  left: 0;
  z-index: 30;
  width: 100%;
  margin-top: 8px;
  border: 1px solid var(--rmsd-border);
  border-radius: 18px;
  background: var(--rmsd-bg);
  box-shadow: var(--rmsd-shadow);
  overflow: hidden;
}

.rmsd-menu.rmsd-top {
  top: auto;
  bottom: calc(100% + 8px);
}

.rmsd-menu.rmsd-bottom {
  top: calc(100% + 8px);
}

.rmsd-toolbar {
  display: grid;
  gap: 10px;
  padding: 14px;
  border-bottom: 1px solid var(--rmsd-border);
  background: linear-gradient(180deg, #fff 0%, #fbfcfe 100%);
}

.rmsd-search-shell {
  position: relative;
}

.rmsd-search-input {
  width: 100%;
  border: 1px solid var(--rmsd-border);
  border-radius: 12px;
  padding: 10px 40px 10px 12px;
  color: var(--rmsd-ink);
  background: #fff;
  font: inherit;
}

.rmsd-search-input:focus {
  outline: none;
  border-color: var(--rmsd-primary);
  box-shadow: 0 0 0 3px rgba(15, 75, 138, 0.1);
}

.rmsd-search-clear {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  border: 0;
  background: transparent;
  color: var(--rmsd-muted);
  cursor: pointer;
  font: inherit;
}

.rmsd-bulk-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.rmsd-inline-button {
  border: 1px solid var(--rmsd-border);
  border-radius: 999px;
  background: #fff;
  color: var(--rmsd-ink);
  cursor: pointer;
  font: inherit;
  padding: 8px 12px;
}

.rmsd-inline-button:hover {
  border-color: var(--rmsd-border-strong);
}

.rmsd-inline-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.rmsd-list {
  max-height: 300px;
  overflow: auto;
  padding: 8px;
}

.rmsd-group {
  border: 1px solid var(--rmsd-border);
  border-radius: 14px;
  overflow: hidden;
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
  padding: 10px 12px;
  background: var(--rmsd-surface);
  color: var(--rmsd-ink);
  font-size: 13px;
  font-weight: 700;
}

.rmsd-option,
.rmsd-group-item {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 10px 12px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  font: inherit;
}

.rmsd-option:hover,
.rmsd-group-item:hover {
  background: #f8fbff;
}

.rmsd-option.rmsd-selected,
.rmsd-group-item.rmsd-selected {
  background: var(--rmsd-primary-soft);
}

.rmsd-option.rmsd-disabled,
.rmsd-group-item.rmsd-disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.rmsd-option + .rmsd-option,
.rmsd-group-item + .rmsd-group-item {
  border-top: 1px solid rgba(215, 222, 235, 0.7);
}

.rmsd-checkbox {
  margin-top: 2px;
  width: 16px;
  height: 16px;
  accent-color: var(--rmsd-primary);
}

.rmsd-option-body {
  min-width: 0;
  flex: 1;
}

.rmsd-option-label {
  font-weight: 600;
}

.rmsd-option-hint {
  display: block;
  margin-top: 3px;
  color: var(--rmsd-muted);
  font-size: 12px;
}

.rmsd-state {
  padding: 16px;
  text-align: center;
  color: var(--rmsd-muted);
}

.rmsd-root .custom-class-example .rmsd-trigger,
.rmsd-root.custom-class-example .rmsd-trigger {
  background: linear-gradient(135deg, #0f2742 0%, #163f5e 100%);
  color: #f5f8ff;
  border-color: transparent;
}

.rmsd-root .custom-class-example .rmsd-badge,
.rmsd-root.custom-class-example .rmsd-badge {
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
}

@media (max-width: 720px) {
  .rmsd-trigger {
    align-items: flex-start;
  }

  .rmsd-actions {
    align-self: center;
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

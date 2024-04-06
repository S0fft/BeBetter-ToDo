export const controlsStyles = {
  '--md-sys-color-primary': 'var(--md-sys-color-surface)',
  '--md-sys-color-on-primary': 'var(--md-sys-color-on-surface-variant)',
  '--md-filled-icon-button-container-shape': '12px',
  '--md-filled-icon-button-unselected-container-color':
    'var(--md-sys-color-primary)',
};

export const pinButtonStyles = {
  '--md-filled-icon-button-toggle-icon-color': 'var(--md-sys-color-on-primary)',
  '--md-filled-icon-button-toggle-focus-icon-color':
    'var(--md-sys-color-on-primary)',
  '--md-filled-icon-button-toggle-pressed-icon-color':
    'var(--md-sys-color-on-primary)',
  '--md-filled-icon-button-toggle-selected-focus-icon-color':
    'var(--md-sys-color-on-surface)',
  '--md-filled-icon-button-toggle-hover-icon-color':
    'var(--md-sys-color-on-primary)',
};

export const dotButtonStyles = {
  '--md-filled-icon-button-container-width': '30px',
};

export const iconStyles = {
  fontVariationSettings: "'FILL' 1",
};

export const menuStyles = {
  '--md-menu-container-shape': '12px',
  '--md-menu-item-one-line-container-height': '23px',
};

export const menuItemStyles = {
  '--md-menu-item-top-space': '8px',
  '--md-menu-item-bottom-space': '8px',
};

export const subMenuItemStyles = {
  ...menuItemStyles,
  '--md-menu-item-selected-container-color':
    'var(--md-sys-color-high-contrast-inverse-primary)',
};

export const checkboxStyles = {
  '--md-sys-color-primary': 'var(--md-sys-color-high-contrast-inverse-primary)',
  '--md-sys-color-on-primary': 'var(--md-sys-color-on-primary-fixed)',
};

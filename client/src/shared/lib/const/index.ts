export const urlParams = {
  NOTE_ID: 'id',
} as const;

export const queryParamsInit = {};

export const localStorageKeys = {
  IS_DARK_MODE: 'isDarkMode',
} as const;

export const routes = {
  BASE: '/',
  NOTES: 'notes',
  ARCHIVE: 'archive',
  TRASH: 'trash',
  LABEL: 'labels',
  DYNAMIC_LABEL: 'labels/:labelId',
  LOGIN: 'login',
  AUTH: 'auth',
} as const;

export const langs = {
  EN: 'en',
  RU: 'ru',
} as const;

export const LABEL_COLOR_DECREASE = 45;

export const BACKSPACE_KEY = 'Backspace';

export const SEARCH_BOTTOM_OFFSET = 20;

export const filledIconStyles = {
  fontVariationSettings: "'FILL' 1",
};

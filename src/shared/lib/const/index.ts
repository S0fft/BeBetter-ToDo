import getFormattedDate from '@shared/lib/helpers/getFormattedDate';

export const urlParams = {} as const;

export const queryParamsInit = {};

export const localStorageKeys = {
  IS_DARK_MODE: 'isDarkMode',
} as const;

export const routes = {
  BASE: '/',
  NOTES: 'notes',
  ARCHIVE: 'archive',
  TRASH: 'trash',
  LABEL: 'labels/:labelId',
} as const;

export const langs = {
  EN: 'en',
  RU: 'ru',
} as const;

export const LABEL_COLOR_DECREASE = 45;

export const mockedNotes = [
  {
    id: 0,
    title: 'Work',
    content:
      '1. Discussed project milestones and deliverables.\n' +
      '2. Agreed on the next steps and assigned tasks.\n' +
      '3. Scheduled follow-up meeting for [Date].',
    createdAt: '20.03.24',
    labels: [
      {
        title: 'Work',
        color: '#EBD999',
      },
    ],
    isPinned: true,
  },
  {
    id: 1,
    title: 'Home tasks',
    content: '1. Buy milk\n2. Buy bread\n3. Buy potato\n4. Clear car',
    createdAt: '20.03.24',
    labels: [
      {
        title: 'Home',
        color: '#DAEB99',
      },
      {
        title: 'Study',
        color: '#E3F383',
      },
      {
        title: 'Important',
        color: '#BDECE0',
      },
    ],
    isPinned: true,
  },
  {
    id: 2,
    title: 'Research and Development',
    content:
      '- Explored potential solutions for [specific issue].\n- Compiled a list of resources and references.\n- Initiated a prototype for [feature/component].',
    createdAt: getFormattedDate(new Date()),
    labels: [
      {
        title: 'Important',
        color: '#BDECE0',
      },
      {
        title: 'Work',
        color: '#EBD999',
      },
    ],
    isPinned: true,
  },
  {
    id: 3,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: getFormattedDate(new Date()),
    labels: [
      {
        title: 'Work',
        color: '#EBD999',
      },
      {
        title: 'Study',
        color: '#E3F383',
      },
    ],
    isPinned: false,
  },
  {
    id: 4,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: getFormattedDate(new Date()),
    labels: [
      {
        title: 'Work',
        color: '#EBD999',
      },
      {
        title: 'Study',
        color: '#E3F383',
      },
    ],
    isPinned: false,
  },
];

export const BACKSPACE_KEY = 'Backspace';

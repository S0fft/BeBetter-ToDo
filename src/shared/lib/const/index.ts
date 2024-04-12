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
    createdAt: '2024-04-08',
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
    createdAt: '2024-04-07',
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
    createdAt: '2024-01-27',
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
    createdAt: '2023-02-12',
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
    createdAt: '2022-04-23',
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
    id: 5,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: '2022-04-23',
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
    id: 6,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: '2022-04-23',
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
    id: 7,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: '2022-04-23',
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
    id: 8,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: '2022-04-23',
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
    id: 9,
    title: 'Miscellaneous',
    content:
      '- Attended training on React.\n- Completed mandatory compliance and security courses.\n- Organized team-building activity scheduled for [Date].',
    createdAt: '2022-04-23',
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

export const mockLabels = [
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
  {
    title: 'Work',
    color: '#EBD999',
  },
];

export const BACKSPACE_KEY = 'Backspace';

export const SEARCH_BOTTOM_OFFSET = 20;

export const filledIconStyles = {
  fontVariationSettings: "'FILL' 1",
};

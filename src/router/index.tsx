import AppLayout from '@layout/AppLayout';
import { NotesList } from '@pages/Notes';
import { routes } from '@shared/lib/const';
import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

export const ROUTES: RouteObject[] = [
  {
    path: routes.BASE,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={routes.NOTES} replace />,
      },
      {
        path: routes.NOTES,
        element: <NotesList />,
      },
      {
        path: routes.ARCHIVE,
        element: <div>ARCHIVE</div>,
      },
      {
        path: routes.TRASH,
        element: <div>TRASH</div>,
      },
      {
        path: routes.LABEL,
        element: <div>TRASH</div>,
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export default router;

import AppLayout from '@layout/AppLayout/AppLayout';
import Archive from '@pages/Archive';
import Label from '@pages/Label';
import Notes from '@pages/Notes/Notes';
import Trash from '@pages/Trash';
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
        element: <Notes />,
      },
      {
        path: routes.ARCHIVE,
        element: <Archive />,
      },
      {
        path: routes.TRASH,
        element: <Trash />,
      },
      {
        path: routes.DYNAMIC_LABEL,
        element: <Label />,
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export default router;

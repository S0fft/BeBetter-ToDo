import AppLayout from '@layout/AppLayout/AppLayout';
import AuthLayout from '@layout/AuthLayout/AuthLayout';
import NotesLayout from '@layout/NotesLayout/NotesLayout';
import Archive from '@pages/Archive';
import Label from '@pages/Label';
import Login from '@pages/Login/Login';
import Notes from '@pages/Notes';
import SignUp from '@pages/SignUp/SignUp';
import Trash from '@pages/Trash';
import { routes } from '@shared/lib/const';
import LoginRequired from '@shared/ui/LoginRequired';
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
        element: (
          <LoginRequired>
            <NotesLayout />
          </LoginRequired>
        ),
        children: [
          {
            index: true,
            element: <Notes />,
          },
          {
            path: routes.ARCHIVE,
            element: (
              <LoginRequired>
                <Archive />
              </LoginRequired>
            ),
          },
          {
            path: routes.TRASH,
            element: (
              <LoginRequired>
                <Trash />
              </LoginRequired>
            ),
          },
          {
            path: routes.DYNAMIC_LABEL,
            element: (
              <LoginRequired>
                <Label />
              </LoginRequired>
            ),
          },
        ],
      },
      {
        path: routes.AUTH,
        element: <AuthLayout />,
        children: [
          {
            path: routes.LOGIN,
            element: <Login />,
          },
          {
            path: routes.SIGN_UP,
            element: <SignUp />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export default router;

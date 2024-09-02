import AppLayout from '@layout/AppLayout/AppLayout';
import AuthLayout from '@layout/AuthLayout/AuthLayout';
import NotesLayout from '@layout/NotesLayout/NotesLayout';
import SettingsLayout from '@layout/SettingsLayout/SettingsLayout';
import Archive from '@pages/Archive';
import Label from '@pages/Label';
import Login from '@pages/Login/Login';
import Notes from '@pages/Notes';
import SettingsAccount from '@pages/SettingsAccount/SettingsAccount';
import SettingsGeneral from '@pages/SettingsGeneral/SettingsGeneral';
import SignUp from '@pages/SignUp/SignUp';
import Trash from '@pages/Trash';
import { routes } from '@shared/lib/const';
import LoginRequired from '@shared/ui/LoginRequired';
import UnauthRequired from '@shared/ui/UnauthRequired';
import { createBrowserRouter, redirect, RouteObject } from 'react-router-dom';

export const ROUTES: RouteObject[] = [
  {
    path: routes.BASE,
    element: <AppLayout />,
    children: [
      {
        index: true,
        loader: () => redirect(routes.NOTES),
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
            element: (
              <UnauthRequired>
                <Login />
              </UnauthRequired>
            ),
          },
          {
            path: routes.SIGN_UP,
            element: (
              <UnauthRequired>
                <SignUp />
              </UnauthRequired>
            ),
          },
        ],
      },
      {
        path: routes.SETTINGS,
        element: (
          <LoginRequired>
            <SettingsLayout />
          </LoginRequired>
        ),
        children: [
          {
            index: true,
            loader: () => redirect(routes.GENERAL),
          },
          {
            path: routes.GENERAL,
            element: <SettingsGeneral />,
          },
          {
            path: routes.ACCOUNT,
            element: <SettingsAccount />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(ROUTES);

export default router;

import { lazy } from 'react';

import AuthLayout from 'src/layouts/auth/background';

const LoginPage = lazy(() => import('src/pages/auth/login'));
const RegisterPage = lazy(() => import('src/pages/auth/register'));

export const authRoutes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        element: (
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: 'register',
        element: (
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        ),
      },
    ],
  },
];

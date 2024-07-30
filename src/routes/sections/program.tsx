import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import AuthLayout from 'src/layouts/auth';

const ProgramsPage = lazy(() => import('src/pages/programs/index'));

export const programRoutes = [
  {
    path: 'programs',
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      {
        element: (
          <ProgramsPage />
        ),
        index: true,
      },
      {
        path: ':id',
        element: (
          <ProgramsPage />
        ),
        children: [],
      },
    ],
  },
];

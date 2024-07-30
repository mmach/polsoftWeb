import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

const ProgramsPage = lazy(() => import('src/pages/programs/index'));

export const programRoutes = [
  {
    path: 'programs',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
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

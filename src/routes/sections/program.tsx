import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

const ProgramsPage = lazy(() => import('src/pages/programs/index'));

export const programRoutes = [
  {
    path: 'programs',
    children: [
      {
        element: (
          <MainLayout disabledSpacing>
            <ProgramsPage />
          </MainLayout>
        ),
        index: true,
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [],
      },
    ],
  },
];

import { lazy } from 'react';

import MainLayout from 'src/layouts/main';
import CreateOrUpdateProgramPage from 'src/pages/programs/creatProgram';
import DashboardProgramPage from 'src/pages/programs/dashboard';
import EmptyProgramListScreen from 'src/pages/programs/empty';

const ProgramsPage = lazy(() => import('src/pages/programs/index'));

export const programRoutes = [
  {
    path: 'programs',

    element: (
      <MainLayout>
        <ProgramsPage />
      </MainLayout>
    ),
    children: [
      {
        element: (
          <EmptyProgramListScreen />
        ),
        index: true,
      },
      {
        path: 'create',
        element: (
          <CreateOrUpdateProgramPage />
        )
      },
      {
        path: ':id',
        element: (
          <DashboardProgramPage />
        ),
        children: [
          {
            path: 'edit',
            element: (
              <CreateOrUpdateProgramPage />
            )
          }
        ]
      },
    ],
  },
];

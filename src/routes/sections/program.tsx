import { lazy } from 'react';

import AuthLayout from 'src/layouts/auth';
import EmptyProgramListScreen from 'src/pages/programs/empty';
import DashboardProgramPage from 'src/pages/programs/dashboard';
import CreateOrUpdateProgramPage from 'src/pages/programs/creatProgram';
import RunProgram from 'src/pages/programs/runProgram';

import ProgramView from 'src/sections/programs/program-view';

const ProgramsPage = lazy(() => import('src/pages/programs/index'));

export const programRoutes = [
  {
    path: 'programs',

    element: (
      <AuthLayout>
        <ProgramsPage />
      </AuthLayout>
    ),
    children: [
      {
        element: <EmptyProgramListScreen />,
        index: true,
      },
      {
        path: 'create',
        element: <CreateOrUpdateProgramPage />,
      },
      {
        path: ':id',
        element: <DashboardProgramPage />,
        children: [
          {
            index: true,
            element: <ProgramView />,
          },
          {
            path: 'run',
            element: <RunProgram />,
            children: [
              {
                index: true,
                element: <CreateOrUpdateProgramPage />,
              },
            ],
          },
          {
            path: 'edit',
            element: <CreateOrUpdateProgramPage />,
          },
        ],
      },
    ],
  },
];

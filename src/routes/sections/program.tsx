import { lazy } from 'react';

import AuthLayout from 'src/layouts/auth';
import EmptyProgramListScreen from 'src/pages/programs/empty';
import CreateOrUpdateProgramPage from 'src/pages/programs/creatProgram';
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
        element: <CreateOrUpdateProgramPage />,
      },
      {
        path: ':id/diagram',
        element: <ProgramView />,
      },
    ],
  },
];

import { lazy } from 'react';

import MainLayout from 'src/layouts/main';
import EmptyProgramListScreen from 'src/pages/programs/empty';
import ProgramView from 'src/sections/programs/program-view';

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
        element: <EmptyProgramListScreen></EmptyProgramListScreen>,
        index: true,
      },
      {
        path: 'create',
        element: <>create</>,
      },
      {
        path: ':id',
        element: <ProgramView />,
      },
    ],
  },
];

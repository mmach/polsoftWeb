import { lazy } from 'react';

import AuthLayout from 'src/layouts/auth';
import EmptyProgramListScreen from 'src/pages/programs/empty';

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
        element: (
          <EmptyProgramListScreen />
        ),
        index: true,
      },
      {
        path: 'create',
        element: (
          <>create</>
        )
      },
      {
        path: ':id',
        element: (
          <>selected</>
        )
      },
    ],
  },
];

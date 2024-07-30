import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

import { SplashScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { errorRoutes } from './error';
import { programRoutes } from './program';
import { componentsRoutes } from './components';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/home'));

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          element: (
            <MainLayout disabledSpacing>
              <IndexPage />
            </MainLayout>
          ),
          index: true,
        },





        ...componentsRoutes,

        ...authRoutes,

        ...errorRoutes,

        ...programRoutes,
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}

import { Helmet } from 'react-helmet-async';

import { useProgramFacade } from 'src/facade/program/useProgramFacade';

import HomeView from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

export default function HomePage() {

  useProgramFacade()
  return (
    <>
      <Helmet>
        <title> The starting point for your next project</title>
      </Helmet>

      <HomeView />
    </>
  );
}

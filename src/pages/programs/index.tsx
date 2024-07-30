import { Helmet } from 'react-helmet-async';

import ProgramsView from 'src/sections/programs/programs-view';

export default function ProgramsPage() {
  return (
    <>
      <Helmet>
        <title>Manage Programs</title>
      </Helmet>

      <ProgramsView />
    </>
  );
}

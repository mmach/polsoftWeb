import { Outlet } from 'react-router';
import { useScroll } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/system';

import ScrollProgress from 'src/components/scroll-progress';

import ProgramsList from 'src/sections/programs/programs-list';


export default function ProgramsPage() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Manage Programs</title>
      </Helmet>
      <Box display="flex" justifyContent="center">
        <ScrollProgress scrollYProgress={scrollYProgress} />
        <ProgramsList />

        <Outlet />
      </Box>

    </>
  );
}

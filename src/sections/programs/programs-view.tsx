import { useScroll } from 'framer-motion';

import { Box } from '@mui/system';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../_home/home-hero';
import ProgramsList from './programs-list';

export default function ProgramsView() {
  const { scrollYProgress } = useScroll();

  return (
    <Box display='flex' justifyContent='center'>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ProgramsList />
      <HomeHero />
    </Box>
  );
}

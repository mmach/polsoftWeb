import { useScroll } from 'framer-motion';
import '@xyflow/react/dist/style.css';

import { Box } from '@mui/system';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../_home/home-hero';
import { Grid } from '@mui/material';
import { Diagram } from './diagram/Diagram';
import ProgramsList from './programs-list';

export default function ProgramsView() {
  const { scrollYProgress } = useScroll();

  return (
    <Box display="flex" justifyContent="center">
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ProgramsList />
      <HomeHero />

      <Grid container columnSpacing={3} alignItems="center" sx={{ height: '420px' }}>
        <Grid item xs={12} sx={{ height: '420px' }}>
          <Diagram />
        </Grid>
      </Grid>
    </Box>
  );
}

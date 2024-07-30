import { useScroll } from 'framer-motion';
import '@xyflow/react/dist/style.css';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../_home/home-hero';
import { Grid } from '@mui/material';
import { Diagram } from './diagram/Diagram';

export default function ProgramsView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Grid container columnSpacing={3} alignItems="center" sx={{ height: '420px' }}>
        <Grid item xs={12} sx={{ height: '420px' }}>
          <Diagram />
        </Grid>
      </Grid>
    </>
  );
}

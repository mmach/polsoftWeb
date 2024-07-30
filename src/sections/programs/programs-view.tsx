import { useScroll } from 'framer-motion';
import '@xyflow/react/dist/style.css';

import { Box } from '@mui/system';

import ScrollProgress from 'src/components/scroll-progress';

import ProgramsList from './programs-list';

export default function ProgramsView() {
  const { scrollYProgress } = useScroll();

  return (
    <Box display="flex" justifyContent="center">
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ProgramsList />
    </Box>
  );
}

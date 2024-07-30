import { useScroll } from 'framer-motion';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../_home/home-hero';
import ProgramsList from './programs-list';

export default function ProgramsView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ProgramsList />

      <HomeHero />
    </>
  );
}

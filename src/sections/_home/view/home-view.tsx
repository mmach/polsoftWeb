import { useScroll } from 'framer-motion';
import { _pricingHome } from 'src/_mock';
import ScrollProgress from 'src/components/scroll-progress';
import HomeHero from '../home-hero';
import HomeFAQs from '../home-faqs';
import HomeNewStart from '../home-new-start';
import HomeCombination from '../home-combination';
import HomeForDesigner from '../home-for-designer';
import HomeAdvertisement from '../home-advertisement';
import MarketingTeamAbout from 'src/sections/_marketing/team/marketing-team-about';
import MarketingServicesInclude from 'src/sections/_marketing/services/marketing-services-include';


// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />


      <MarketingServicesInclude />

      
      <MarketingTeamAbout members={[
  {
    id: '4',
    role: 'Business Analyst',
    name: 'Anna Dyrcz',
    photo: '/assets/images/portrait/Ania.jpg'
  },
  {
    id: '7',
    role: 'Full Stack Developer',
    name: 'Karol Jarosz',
    photo: '/assets/images/portrait/KJ.jpg'
  },
  {
    id: '1',
    role: 'Full Stack Developer',
    name: 'Krzysztof Mach',
    photo: '/assets/images/portrait/KM.jpg'
  },
  {
    id: '8',
    role: 'Full Stack Developer',
    name: 'Krzysztof Szymański',
    photo: '/assets/images/portrait/KS.jpg'
  },
  {
    id: '3',
    role: 'Full Stack Developer',
    name: 'Michal Mach',
    photo: '/assets/images/portrait/MM.jpg'
  },
  {
    id: '5',
    role: 'Business Analyst',
    name: 'Pawel Pyka',
    photo: '/assets/images/portrait/PP.jpg'
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    name: 'Rafal Bierowiec',
    photo: '/assets/images/portrait/RB.jpg'
  },
  {
    id: '6',
    role: 'Full Stack Developer',
    name: 'Tomasz Barczyk',
    photo: '/assets/images/portrait/TB.jpg'
  },
]} />



      <HomeForDesigner />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement />
    </>
  );
}

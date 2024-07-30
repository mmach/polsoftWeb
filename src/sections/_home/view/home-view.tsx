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
          id: '1',
          role: 'Nazwa Roli',
          name: 'Użytkownik',
          photo: '/assets/images/portrait/portrait_0.jpg'
        },
        {
          id: '2',
          role: 'Nazwa Roli',
          name: 'Użytkownik',
          photo: '/assets/images/portrait/portrait_1.jpg'
        },
        {
          id: '3',
          role: 'Nazwa Roli',
          name: 'Użytkownik',
          photo: '/assets/images/portrait/portrait_2.jpg'
        },
        {
          id: '4',
          role: 'Nazwa Roli',
          name: 'Użytkownik',
          photo: '/assets/images/portrait/portrait_3.jpg'},
        { id: '5', role: 'Nazwa Roli', name: 'Użytkownik', photo: '/assets/images/portrait/portrait_4.jpg' },]} />


      <HomeForDesigner />

      <HomeFAQs />

      <HomeCombination />

      <HomeAdvertisement />
    </>
  );
}

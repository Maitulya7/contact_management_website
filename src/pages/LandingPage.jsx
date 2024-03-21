import HeaderComponent from "../components/landingPageSections/Heder";
import HeroComponent from "../components/landingPageSections/Hero";
import FeaturesComponent from "../components/landingPageSections/Features";
import TechComponent from "../components/landingPageSections/Teachnologies";
import FooterComponent from "../components/landingPageSections/Footer";

const LandingPage = () => {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <FeaturesComponent />
      <TechComponent />
      <FooterComponent />
    </>
  );
};

export default LandingPage;

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HowItWorksSection from "../components/HowItWorksSection";
// import CareersSection from "../components/CareersSection";
import Footer from "../components/Footer";
import HighlightSection from "../components/HighlightSection";
import JoinUs from "../components/JoinUs";
export default function Home() {
  return (
    <div>
  
      <HeroSection />
      <HighlightSection />
      <AboutSection />
      <HowItWorksSection />
      {/* <CareersSection /> */}
      <JoinUs />
      <Footer />
    </div>
  );
}

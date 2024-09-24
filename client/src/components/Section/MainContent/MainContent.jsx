import CTASection from "./CTASection";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import "./CTASection.css"
function MainContent() {
    return (
      <main className="flex overflow-hidden flex-col max-md:pb-24">
        <CTASection />
        {/* <FeaturesSection /> */}
      </main>
    );
  }
  
  export default MainContent;
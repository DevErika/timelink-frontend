import HeroSection from "../../components/ui/HeroSection";
import HowItWorks from "../../components/ui/HowItWorks";
import CommunitySection from "../../components/ui/CommunitySection";
import FinalCta from "../../components/ui/FinalCTA.jsx";

export default function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <HowItWorks />
      <CommunitySection />
      <FinalCta />
    </main>
  );
}

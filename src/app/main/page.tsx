import Header from "./components/Header";
import LandingHero from "./components/LandingHero";
import PSUSection from "./components/PSUSection";
import HeroSection from "./components/HeroSection";
import ManageWorkforceSection from "./components/ManageWorkforceSection";
import ReliabilitySection from "./components/ReliabilitySection";
import FeatureGrid from "./components/FeatureGrid";
import StatsSection from "./components/StatsSection";
import FooterImage from "./components/FooterImage";
import Footer from "./components/Footer";

export default function MainPage() {
  return (
    <main className="flex flex-col w-full bg-[var(--color-bg-warm)]">
      <Header />
      <LandingHero />
      <PSUSection />
      <HeroSection />
      <ManageWorkforceSection />
      <ReliabilitySection />
      <FeatureGrid />
      <StatsSection />
      <FooterImage />
      <Footer />
    </main>
  );
}

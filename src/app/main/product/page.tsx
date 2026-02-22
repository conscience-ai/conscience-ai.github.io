import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ManageWorkforceSection from "../components/ManageWorkforceSection";
import ReliabilitySection from "../components/ReliabilitySection";
import FeatureGrid from "../components/FeatureGrid";
import StatsSection from "../components/StatsSection";
import FooterImage from "../components/FooterImage";
import Footer from "../components/Footer";

export default function ProductPage() {
  return (
    <main className="flex flex-col w-full bg-[var(--color-bg-warm)]">
      <Header />
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

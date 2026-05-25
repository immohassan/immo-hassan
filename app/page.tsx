import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoWall from "@/components/LogoWall";
import StatsStrip from "@/components/StatsStrip";
import Work from "@/components/Work";
import WhyMe from "@/components/WhyMe";
import HowIBuild from "@/components/HowIBuild";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";

export default function Page() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <LogoWall />
      <StatsStrip />
      <Work />
      <Services />
      <HowIBuild />
      <WhyMe />
      <Testimonials />
      <Experience />
      <TechStack />
      <FAQ />
      <Contact />
      <Footer />
      <StickyCTA />
    </main>
  );
}

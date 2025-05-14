
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TicketSection from "@/components/TicketSection";
import ArtistsSection from "@/components/ArtistsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TicketSection />
        <ArtistsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeBanner from "@/components/sections/MarqueeBanner";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Trainers from "@/components/sections/Trainers";
import Testimonials from "@/components/sections/Testimonials";
import Support from "@/components/sections/Support";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <Services />
        <Gallery />
        <Trainers />
        <Testimonials />
        <Support />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import MusicTestimonials from "@/components/MusicTestimonials";
import Webinar from "@/components/Webinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <Features />
      <WhyChooseUs />
      <MusicTestimonials />
      <Webinar />
      <Instructors />
      <Footer />
    </main>
  );
}

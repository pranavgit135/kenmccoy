import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import IndustriesSection from "@/components/industries-section"
import VideoSection from "@/components/video-section"
import TestimonialsSection from "@/components/testimonials-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <IndustriesSection />
      <VideoSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}

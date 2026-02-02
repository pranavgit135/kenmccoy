"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const slides = [
  {
    id: 1,
    image: "/slides/1.jpg",
    title: "Tailored Talent for Every Industry",
    description: "From Manufacturing to Service sector, our industry-specific expertise ensures you get talent that truly fits your business needs.",
    buttons: [
      { text: "about us", href: "/About" },
      { text: "our history", href: "/About" },
    ],
  },
  {
    id: 2,
    image: "/slides/2.jpg",
    title: "Leadership That Drives Impact",
    description: "We identify high-potential professionals who don’t just fill roles — they lead, innovate, and transform organizations.",
    buttons: [
      { text: "our services", href: "/Services" },
      { text: "learn more", href: "/About" },
    ],
  },
  {
    id: 3,
    image: "/slides/3.png",
    title: "Build Your Future with Us",
    description: "Whether you're scaling your team or seeking your next role, we help shape careers and strengthen companies worldwide.",
    buttons: [
      { text: "get started", href: "/Contact" },
      { text: "contact us", href: "/Contact" },
    ],
  },
]

export default function HeroSlider() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-800 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-muted overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover sm:object-cover"
              style={{
                objectPosition: 'center center',
                minHeight: '100%',
                minWidth: '100%',
              }}
            />
          </div>
          {/* Dark overlay - stronger on mobile for better text readability */}
          <div className="absolute inset-0 bg-black/30 sm:bg-black/25 md:bg-black/20" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="container mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Title with fade animation */}
            <h1
              key={`title-${currentSlide}`}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 md:mb-8 animate-fade-in-fast px-2"
              style={{
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
              }}
            >
              {currentSlideData.title}
            </h1>

            {/* Golden underline */}
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4 sm:mb-6 md:mb-8"></div>

            {/* Description */}
            <p
              key={`desc-${currentSlide}`}
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto opacity-90 animate-fade-in-delay-fast font-red-hat-display px-2 sm:px-4"
              style={{
                lineHeight: "1.6",
              }}
            >
              {currentSlideData.description}
            </p>

            {/* Buttons */}
            <div
              key={`buttons-${currentSlide}`}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-delay-2-fast px-4"
            >
              {currentSlideData.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  onClick={() => router.push(button.href)}
                  className="group bg-transparent border-2 border-white/50 hover:text-black hover:bg-white transition-all duration-300 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="mr-2">{button.text}</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

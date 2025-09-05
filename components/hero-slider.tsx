"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const slides = [
  {
    id: 1,
    image: "./bg1.jpg",
    title: "Tailored Talent for Every Industry",
    description: "From Chemicals to Real Estate, our industry-specific expertise ensures you get talent that truly fits your business needs.",
    buttons: [
      { text: "about us", href: "/About" },
      { text: "our history", href: "/About" },
    ],
  },
  {
    id: 2,
    image: "./bg2.jpg",
    title: "Leadership That Drives Impact",
    description: "We identify high-potential professionals who don’t just fill roles — they lead, innovate, and transform organizations.",
    buttons: [
      { text: "our services", href: "/Services" },
      { text: "learn more", href: "/About" },
    ],
  },
  {
    id: 3,
    image: "./bg3.jpg",
    title: "Build Your Future with Us",
    description: "Whether you're scaling your team or seeking your next role, we help shape careers and strengthen companies worldwide.",
    buttons: [
      { text: "get started", href: "/#" },
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
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-800 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Title with fade animation */}
            <h1
              key={`title-${currentSlide}`}
              className="text-4xl md:text-5xl lg:text-5xl font-light mb-8 animate-fade-in-fast"
              style={{
                fontFamily: "serif",
                letterSpacing: "-0.02em",
              }}
            >
              {currentSlideData.title}
            </h1>

            {/* Golden underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>

            {/* Description */}
            <p
              key={`desc-${currentSlide}`}
              className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 animate-fade-in-delay-fast"
              style={{fontFamily:"serif"}}
            >
              {currentSlideData.description}
            </p>

            {/* Buttons */}
            <div
              key={`buttons-${currentSlide}`}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2-fast"
            >
              {currentSlideData.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  onClick={() => router.push(button.href)}
                  className="group bg-transparent border-2 border-white/50 hover:text-black hover:bg-white transition-all duration-300 px-8 py-3 rounded-full"
                >
                  <span className="mr-2">{button.text}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

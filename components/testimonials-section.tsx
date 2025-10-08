"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Ravi Mehta",
    title: "HR Head, PetroCore Industries",
    image: "/user.png?height=300&width=300",
    quote:
      "Working with this team has been a game-changer for our recruitment process. They understand our industry inside-out and deliver with precision.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anita Verma",
    title: "Senior Scientist, BioEdge Pharma",
    image: "/user.png?height=300&width=300",
    quote:
      "From the first interaction to final placement, the experience was smooth, professional, and transparent. I highly recommend their services.",
    rating: 5,
  },
  {
    id: 3,
    name: "Karan Shah",
    title: "COO, BrightPack FMCG",
    image: "/user.png?height=300&width=300",
    quote:
      "Their deep domain knowledge and access to top talent helped us fill critical roles faster than expected. Truly dependable partners.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [autoPlayPaused, setAutoPlayPaused] = useState(false)

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying || autoPlayPaused) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change testimonial every 4 seconds

    return () => clearInterval(interval)
  }, [currentTestimonial, isAutoPlaying, autoPlayPaused, testimonials.length])

  // Resume auto-play after user interaction
  useEffect(() => {
    if (autoPlayPaused) {
      const resumeTimer = setTimeout(() => {
        setAutoPlayPaused(false)
      }, 8000) // Resume after 8 seconds of no interaction

      return () => clearTimeout(resumeTimer)
    }
  }, [autoPlayPaused])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setAutoPlayPaused(true)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlayPaused(true)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center lg:text-left mb-12">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider font-serif mb-4">Customer Testimonials</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 font-serif" style={{ fontFamily: "serif" }}>
            What Our Clients & Candidates Say:
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto lg:mx-0"></div>
          </div>

          {/* Testimonial Content */}
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto lg:mx-0">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={current.image || "/placeholder.svg"}
                      alt={current.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>

                  {/* Decorative Quote Mark */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Right Side - Testimonial */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="relative">
                  {/* Large Quote Mark */}
                  <div className="absolute -top-4 -left-4 text-6xl text-gray-200 font-serif leading-none">"</div>

                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed pl-8">
                    {current.quote}
                  </blockquote>
                </div>

                {/* Attribution */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{current.name}</h4>
                    <p className="text-gray-600">{current.title}</p>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 mt-8">
              <Button
                // variant="outline"
                // size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 hover:bg-blue-50 hover:border-blue-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                // variant="outline"
                // size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-2 hover:bg-blue-50 hover:border-blue-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentTestimonial(index)
                    setAutoPlayPaused(true)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Status Indicator */}
            <div className="flex items-center justify-center lg:justify-start mt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div
                  className={`w-2 h-2 rounded-full ${isAutoPlaying && !autoPlayPaused ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}
                ></div>
                <span>{isAutoPlaying && !autoPlayPaused ? "Auto-playing" : "Paused"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

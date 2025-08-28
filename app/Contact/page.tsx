"use client"

import type React from "react"
import Header from "@/components/header"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Globe, ChevronLeft, ChevronRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Global service locations
  const serviceLocations = [
    { name: "Mumbai (HQ)", lat: 19.076, lng: 72.8777, isHQ: true },
    { name: "New York", lat: 40.7128, lng: -74.006 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Dubai", lat: 25.2048, lng: 55.2708 },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(serviceLocations.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Math.ceil(serviceLocations.length / 3)) % Math.ceil(serviceLocations.length / 3),
    )
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <Header/>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe size={16} />
            Global Leadership Solutions
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">Let's Connect</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your leadership team? Get in touch with our experts and discover how we can help you find
            exceptional leaders worldwide.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-2">Our Headquarters</h3>
                    <p className="text-muted-foreground">Visit us at our Mumbai office</p>
                  </div>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <address className="not-italic text-foreground leading-relaxed">
                    <strong className="text-primary">Ken McCoy Leadership Advisory</strong>
                    <br />
                    Hind Saurashtra Industrial Estate
                    <br />
                    Opposite Wellington Park, B201
                    <br />
                    Andheri - Kurla Road
                    <br />
                    Mittal Industrial Estate, Marol
                    <br />
                    Andheri East, Mumbai
                    <br />
                    Maharashtra 400059, India
                  </address>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="text-accent" size={20} />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Phone</h4>
                  <p className="text-muted-foreground">+91 22 1234 5678</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">Email</h4>
                  <p className="text-muted-foreground">contact@kenmccoy.com</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <h4 className="font-semibold text-primary">Business Hours</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">10:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">
                  Tell us about your leadership needs and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your leadership requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium flex items-center justify-center gap-2 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Global Presence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We serve clients across major business hubs worldwide, delivering exceptional leadership solutions with
              local expertise and global perspective.
            </p>
          </div>

          

          <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-border/50 overflow-hidden">
            {/* Carousel Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">Our Global Offices</h3>
                <p className="text-muted-foreground">Serving clients across major business hubs worldwide</p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  aria-label="Previous locations"
                >
                  <ChevronLeft size={20} className="text-primary group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  aria-label="Next locations"
                >
                  <ChevronRight size={20} className="text-primary group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(serviceLocations.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid md:grid-cols-3 gap-6 px-2">
                      {serviceLocations.slice(slideIndex * 3, slideIndex * 3 + 3).map((location, index) => (
                        <div
                          key={slideIndex * 3 + index}
                          className={`relative bg-gradient-to-br from-muted/20 to-muted/5 rounded-xl p-6 border border-border/50 hover:shadow-lg transition-all duration-300 group ${
                            location.isHQ ? "ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5" : ""
                          }`}
                        >
                          {/* Background Decoration */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl opacity-50" />

                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className={`w-4 h-4 rounded-full ${location.isHQ ? "bg-primary" : "bg-accent"} animate-pulse shadow-lg`}
                              />
                              <h4 className="font-semibold text-primary text-lg group-hover:text-primary/80 transition-colors">
                                {location.name}
                              </h4>
                              {location.isHQ && (
                                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full font-medium shadow-sm">
                                  HQ
                                </span>
                              )}
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                              {location.isHQ
                                ? "Our global headquarters and main operations center, driving leadership excellence worldwide"
                                : "Regional office serving local and international clients with personalized leadership solutions"}
                            </p>

                            {/* Location Stats */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin size={12} />
                                {location.isHQ ? "Main Hub" : "Regional Office"}
                              </span>
                              <span className="bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                                Active
                              </span>
                            </div>
                          </div>

                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(serviceLocations.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index
                      ? "bg-primary scale-125 shadow-lg"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 bg-muted/30 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
                style={{ width: `${((currentSlide + 1) / Math.ceil(serviceLocations.length / 3)) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Search, TrendingUp, Building, ChevronRight, Star, Award, Target } from "lucide-react"
import Header from "@/components/header"
export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Executive Search Services",
      icon: <Search className="w-8 h-8" />,
      description: "Comprehensive executive search solutions tailored to your organization's unique needs",
      items: [
        {
          name: "Retained Search",
          description: "Dedicated search process for senior executive positions with guaranteed results",
          features: ["Comprehensive market mapping", "Detailed candidate assessment", "90-day guarantee"],
        },
        {
          name: "Exclusive Search Services",
          description: "Premium exclusive search for C-level and board positions",
          features: ["Executive-level confidentiality", "Global talent network", "Strategic consultation"],
        },
        {
          name: "Non Exclusive Search Services",
          description: "Flexible search solutions for mid to senior-level positions",
          features: ["Cost-effective approach", "Faster turnaround time", "Quality assurance"],
        },
      ],
    },
    {
      title: "Career Excellence – Workshops",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Professional development workshops designed to enhance individual and team performance",
      items: [
        {
          name: "Enhancing Individual Productivity",
          description: "Personalized strategies to maximize professional effectiveness and career growth",
          features: ["Time management mastery", "Goal setting frameworks", "Performance optimization"],
        },
        {
          name: "Building Harmonious Interpersonal Relationships",
          description: "Develop essential soft skills for effective workplace collaboration",
          features: ["Communication excellence", "Conflict resolution", "Team dynamics"],
        },
        {
          name: "Creating Joyful Work Place",
          description: "Foster positive work environments that drive engagement and retention",
          features: ["Culture transformation", "Employee engagement", "Wellness programs"],
        },
      ],
    },
    {
      title: "Human Resources Consulting",
      icon: <Building className="w-8 h-8" />,
      description: "Strategic HR consulting services to transform your organization and people",
      items: [
        {
          name: "Building Organization Transformation",
          description: "Comprehensive organizational change management and strategic restructuring",
          features: ["Change management", "Process optimization", "Strategic alignment"],
        },
        {
          name: "Building People Transformation",
          description: "Develop your workforce capabilities and leadership pipeline",
          features: ["Leadership development", "Talent management", "Succession planning"],
        },
        {
          name: "Collateral Services",
          description: "Additional HR support services to complement your transformation journey",
          features: ["HR audits", "Policy development", "Compliance support"],
        },
      ],
    },
  ]

  return (<>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background mt-4">
        
      {/* Hero Section */}
      <section className="py-36 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Professional Services
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive leadership solutions designed to transform organizations and accelerate career excellence
              through our proven methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeService === index
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-white text-foreground hover:bg-muted border border-border"
                }`}
              >
                {service.icon}
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-full text-primary">{services[activeService].icon}</div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                {services[activeService].title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{services[activeService].description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeService].items.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary">{item.name}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>

                <div className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="p-1 bg-primary/10 rounded-full">
                        <ChevronRight className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-4 bg-white/10 rounded-full inline-flex mb-6">
            <Target className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Let's discuss how our proven methodologies can help you find exceptional leaders and build high-performing
            teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-colors duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-primary transition-colors duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

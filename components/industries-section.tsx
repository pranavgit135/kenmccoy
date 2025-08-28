"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const industriesData = {
  CHEMICALS: {
    title: "Chemicals & Specialty Chemicals",
    description:
      "Driving innovation in manufacturing processes with cutting-edge technology and sustainable practices.",
    image: "/placeholder.svg?height=600&width=800",
    industries: [
      "Talent acquisition for R&D and formulation experts",
      "Support for regulatory and compliance hiring",
      "Roles in production and process engineering",
      "Quality assurance and quality control staffing",
      "Global reach for niche chemical professionals",
      "Executive search for plant and operations leaders"
    ],
  },
  PETROCHEMICALS: {
    title: "Petrochemicals, Oil & Gas",
    description: "Empowering digital transformation with advanced technology solutions and innovative platforms.",
    image: "/placeholder.svg?height=600&width=800",
    industries: [
      "Upstream, midstream, and downstream talent coverage",
      "Experienced field engineers and geologists",
      "Skilled manpower for onshore/offshore projects",
      "Maintenance and operations leadership roles",
      "Safety, EHS, and compliance recruitment",
      "International project staffing and mobilization"
    ],
  },
  FMCG: {
    title: "Fast Moving Consumer Goods (FMCG)",
    description: "Advancing healthcare through biotechnology, pharmaceuticals, and medical device innovation.",
    image: "/placeholder.svg?height=600&width=800",
    industries: ["Sales and marketing talent across regions",
       "Hiring for supply chain and distribution roles",
        "Product innovation and R&D staffing",
         "Trade marketing and category management positions",
         "Procurement and vendor development specialists",
         "Leadership for manufacturing and plant operations"
        ],
  },
  PHARMACEUTICALS: {
    title: "Pharmaceuticals & Biotech",
    description: "Providing comprehensive financial solutions and banking services for sustainable growth.",
    image: "/placeholder.svg?height=600&width=800",
    industries: [
      "Research scientists and clinical trial specialists", 
      "Regulatory affairs and documentation experts", 
      "Formulation and analytical development roles", 
      "Manufacturing and quality compliance staffing",
      "Sales and product management professionals",
      "Talent for new drug discovery and innovation"
    ],
  },
  CONSUMER: {
    title: "Consumer Durables & Industrial Electronics",
    description: "Leading the energy transition with sustainable solutions and innovative technologies.",
    image: "/placeholder.svg?height=600&width=800",
    industries: [
      "Sourcing and procurement experts", 
      "Product development and innovation talent", 
      "Sales engineers and business development roles", 
      "Skilled staff for manufacturing and assembly units",
      "Service operations and technical support hiring",
      "Managers for plant and production efficiency"
    ],
  },
}

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("CHEMICALS")
  const currentData = industriesData[activeTab as keyof typeof industriesData]

  // const allIndustries = [
  //   "Chemicals and speciality chemicals",
  //   "Petrochemicals and OIL & Gas",
  //   "Fast Moving Consumer Goods (FMCG)",
  //   "Pharmaceuticals and BioTech",
  //   "Consumer Durable and Industrial Electronics",
  //   "Heavy and Light Engineering",
  //   "Automobiles and Auto Ancillary",
  //   "Real Estate and Infrastructure",
  //   "Banking and NBFC",
  //   "Retail, Logistics, Supply Chain and Warehousing",
  // ]

  return (
    <section className="bg-[#005ca1] text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-2 h-6 bg-gradient-to-b text-[#e67016] to-yellow-600"></div>
            <h3 className="uppercase tracking-wider text-sm font-medium">Our Expertise</h3>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6" style={{ fontFamily: "serif" }}>
            Industries We Served
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto " style={{fontFamily:"sans-serif"}}>
          With deep-rooted expertise across diverse sectors, we provide tailored recruitment solutions that align with your industry's demands.
           Our understanding of each industry's unique challenges helps us connect the right talent with the right opportunities
          </p>
        </div>

        {/* Industry Tabs - Mobile Horizontal Scroll, Desktop Grid */}
        <div className="mb-8">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-2 lg:gap-4 pb-2 lg:pb-0">
            {Object.keys(industriesData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-3 lg:px-6 lg:py-4 text-sm font-medium tracking-wider transition-all duration-300 rounded-lg lg:rounded-none lg:border-b-2 ${
                  activeTab === tab
                    ? "bg-yellow-500/20 text-[#e67016] lg:bg-transparent lg:border-[#e67016]"
                    : "text-gray-400 hover:text-white hover:bg-white/5 lg:hover:bg-transparent lg:border-transparent lg:hover:border-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4" style={{ fontFamily: "serif" }}>
                {currentData.title}
              </h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">{currentData.description}</p>
            </div>

            {/* Current Tab Industries */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#e67016]">Key Focus Areas:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentData.industries.map((industry, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#e67016] mr-2 mt-1 flex-shrink-0">•</span>
                    <span className="text-sm lg:text-base font-serif">{industry}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button className="group inline-flex font-serif items-center space-x-2 border border-white/30 hover:border-[#e67016] hover:text-[#e67016] rounded-full px-6 py-3 transition-all duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-64 md:h-80 lg:h-96 xl:h-[500px] overflow-hidden rounded-lg order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a2530]/60 to-transparent z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url('${currentData.image}')`,
              }}
            ></div>

            {/* Overlay Content */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">{currentData.title}</h4>
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

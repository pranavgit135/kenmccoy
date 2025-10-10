"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showThumbnail, setShowThumbnail] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
        setShowThumbnail(false)
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    setShowThumbnail(true)
  }

  const partners =[{
    name:"Bayer",
    logo:"/logo_Bayer.png"
  },
{
  name:"Birla Carbon",
  logo:"/logo_Birla_Carbon.jpg"
},
{
  name:"Ebco",
  logo:"/logo_Ebco.jpg"
},
{
  name:"Reliance",
  logo:"/logo_reliance.png"
},
{
  name:"Spica",
  logo:"/spica.png"
}]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-4">Experience Our Story in Motion</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 font-red-hat-display">
            Experience Our Story in Motion
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take a closer look at who we are, what we stand for, and how we connect talent with opportunity. Our journey, culture, and impact — all captured in one video.
            </p>
            <a href="/Contact">
            <Button  className="bg-[#005ca1] hover:bg-[#08426d] text-white px-8 py-3 rounded-full">
              Schedule Consultation →
            </Button></a>
          </div>

          {/* Video Container */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Background Video */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                onEnded={handleVideoEnded}
                muted
                playsInline
                
              >
                <source src="https://kenmccoy.in/wp-content/uploads/2021/09/ken_mccoy_11.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>



              {/* Thumbnail Overlay */}
              {showThumbnail && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/thumbnail.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              )}

              {/* Play Button with Glow Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="group relative"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20 scale-110"></div>
                  <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-30 scale-105"></div>

                  {/* Play Button */}
                  <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-gray-800 ml-0" />
                    ) : (
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
                    )}
                  </div>
                </button>
              </div>

              {/* Video Controls Overlay */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <button
                      onClick={handlePlayVideo}
                      className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
                    >
                      <Pause className="w-5 h-5" />
                      <span className="text-sm">Pause</span>
                    </button>
                    <div className="text-sm opacity-75">2:29</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Partner Logos */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500 mb-6">Trusted by leading companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8  ">
            {partners.map((partner:any, index:number)=>(
                 <div key={index} className="h-16 w-24 opacity-60 hover:opacity-100 rounded">
                  <img className="w-full h-full " src={partner.logo} alt={partner.name} />
                 </div>
              ))}
              {/* Logo placeholders - replace with actual logos */}
              {/* <div className="h-8 w-20 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-16 bg-gray-300 rounded"></div>
              <div className="h-8 w-28 bg-gray-300 rounded"></div>
              <div className="h-8 w-12 bg-gray-300 rounded"></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        .animate-glow {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

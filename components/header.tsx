"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className=" sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-32 h-10 sm:w-36 sm:h-12 md:w-40 md:h-16 bg-gradient-to-br">
              <img
                src="./logo.jpeg?height=64&width=160"
                alt="Company Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 relative ">
          <a className="text-base xl:text-xl " href="/">Home</a>
          <a className="text-base xl:text-xl ml-6" href="/About">About</a>
          <a className="text-base xl:text-xl ml-6" href="/Services">Services</a>
          <a className="text-base xl:text-xl ml-6" href="/Contact">Contact</a>
            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm xl:text-base">About</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="">
                <DropdownMenuItem>Our Story</DropdownMenuItem>
                <DropdownMenuItem>Mission</DropdownMenuItem>
                <DropdownMenuItem>Values</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm xl:text-base">Businesses</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Technology</DropdownMenuItem>
                <DropdownMenuItem>Services</DropdownMenuItem>
                <DropdownMenuItem>Solutions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm xl:text-base">Sustainability</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Environment</DropdownMenuItem>
                <DropdownMenuItem>Community</DropdownMenuItem>
                <DropdownMenuItem>Governance</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm xl:text-base">Investors</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Financial Reports</DropdownMenuItem>
                <DropdownMenuItem>Stock Information</DropdownMenuItem>
                <DropdownMenuItem>Presentations</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm xl:text-base">Careers</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Open Positions</DropdownMenuItem>
                <DropdownMenuItem>Culture</DropdownMenuItem>
                <DropdownMenuItem>Benefits</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
{/* 
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm xl:text-base">News & Media</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Press Releases</DropdownMenuItem>
                <DropdownMenuItem>News</DropdownMenuItem>
                <DropdownMenuItem>Media Kit</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </nav>
          <div className="space-x-8">

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              // variant="ghost"
              // size="icon"
              onClick={toggleMobileMenu}
              className="h-16 w-16 transition-transform duration-300"
              aria-label="Toggle mobile menu"
            >
              <div className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`}>

             
              {isMobileMenuOpen ? <X className="w-16 h-16" /> : <Menu className="w-16 h-16" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {/* {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 transition-all duration-300">
            <nav className="flex flex-col space-y-2 pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center  justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50">
                  <span className="font-medium">About</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full mt-1 " side="bottom"  align="start" sideOffset={4}>
                  <DropdownMenuItem>Our Story</DropdownMenuItem>
                  <DropdownMenuItem>Mission</DropdownMenuItem>
                  <DropdownMenuItem>Values</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50">
                  <span className="font-medium">Businesses</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full mt-1" side="bottom" align="start" sideOffset={4}>
                  <DropdownMenuItem>Technology</DropdownMenuItem>
                  <DropdownMenuItem>Services</DropdownMenuItem>
                  <DropdownMenuItem>Solutions</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50">
                  <span className="font-medium">Sustainability</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full mt-1" side="bottom" align="start" sideOffset={4}>
                  <DropdownMenuItem>Environment</DropdownMenuItem>
                  <DropdownMenuItem>Community</DropdownMenuItem>
                  <DropdownMenuItem>Governance</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50">
                  <span className="font-medium">Investors</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full mt-1" side="bottom" align="start" sideOffset={4}>
                  <DropdownMenuItem>Financial Reports</DropdownMenuItem>
                  <DropdownMenuItem>Stock Information</DropdownMenuItem>
                  <DropdownMenuItem>Presentations</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50">
                  <span className="font-medium">Careers</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full mt-1" side="bottom" align="start" sideOffset={4}>
                  <DropdownMenuItem>Open Positions</DropdownMenuItem>
                  <DropdownMenuItem>Culture</DropdownMenuItem>
                  <DropdownMenuItem>Benefits</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50">
                  <span className="font-medium">News & Media</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full mt-1" side="bottom" align="start" sideOffset={4}>
                  <DropdownMenuItem>Press Releases</DropdownMenuItem>
                  <DropdownMenuItem>News</DropdownMenuItem>
                  <DropdownMenuItem>Media Kit</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        )} */}
         <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100 mt-4 pb-4" : "max-h-0 opacity-0 mt-0 pb-0"
          }`}
        >
          <div
            className={`border-t border-gray-200 transform transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
            }`}
          >
            <nav className="flex flex-col space-y-2 pt-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200 ">
                  <span className="font-medium">About</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-full mt-1 animate-in slide-in-from-top-2 duration-200"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                >
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Our Story
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Mission
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Values
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200">
                  <span className="font-medium">Businesses</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-full mt-1 animate-in slide-in-from-top-2 duration-200"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                >
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Technology
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Services
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Solutions
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200 ">
                  <span className="font-medium">Sustainability</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-full mt-1 animate-in slide-in-from-top-2 duration-200"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                >
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Environment
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Community
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Governance
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200 ">
                  <span className="font-medium">Investors</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-full mt-1 animate-in slide-in-from-top-2 duration-200"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                >
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Financial Reports
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Stock Information
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Presentations
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200 ">
                  <span className="font-medium">Careers</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-full mt-1 animate-in slide-in-from-top-2 duration-200"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                >
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Open Positions
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Culture
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Benefits
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 py-3 px-2 rounded-md hover:bg-gray-50 transition-all duration-200 ">
                  <span className="font-medium">News & Media</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-full mt-1 animate-in slide-in-from-top-2 duration-200"
                  side="bottom"
                  align="start"
                  sideOffset={4}
                >
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Press Releases
                  </DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">News</DropdownMenuItem>
                  <DropdownMenuItem className="transition-colors duration-150 hover:bg-blue-50">
                    Media Kit
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

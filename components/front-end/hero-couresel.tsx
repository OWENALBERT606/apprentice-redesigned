


"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Users, BookOpen, Heart, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// const slides = [
//   {
//     id: 1,
//     title: "Empowering Tomorrow's Leaders",
//     subtitle: "Building Skills, Creating Opportunities",
//     description:
//       "Join Apprentice in transforming lives through education, mentorship, and skill development programs that create lasting impact in communities.",
//     image: "/banners/Simple White Red Charity & Donation Medium Banner.png",
//     icon: Users,
//     primaryAction: "Get Involved",
//     primaryLink: "/get-involved",
//     secondaryAction: "Learn More",
//     secondaryLink: "/about",
//   },
//   {
//     id: 2,
//     title: "Education for Every Child",
//     subtitle: "Breaking Barriers, Building Futures",
//     description:
//       "Our comprehensive education programs ensure that every child has access to quality learning opportunities, regardless of their background or circumstances.",
//     image: "/banners/Simple White Red Charity & Donation Medium Banner (2).png",
//     icon: BookOpen,
//     primaryAction: "Donate Now",
//     primaryLink: "/donate",
//     secondaryAction: "Our Programs",
//     secondaryLink: "/programs",
//   },
//   {
//     id: 3,
//     title: "Community Impact Stories",
//     subtitle: "Real Change, Real Lives",
//     description:
//       "Discover how Apprentice has transformed thousands of lives through our innovative programs and dedicated community partnerships.",
//     image: "/banners/Black Minimalist Charity Humanity Non Profit Banner.png",
//     icon: Heart,
//     primaryAction: "Read Stories",
//     primaryLink: "/stories",
//     secondaryAction: "Join Us",
//     secondaryLink: "/volunteer",
//   },
//   {
//     id: 4,
//     title: "Our Mission in Action",
//     subtitle: "Creating Sustainable Change",
//     description:
//       "Through strategic partnerships and community-driven initiatives, we're building a world where everyone has the opportunity to thrive and succeed.",
//     image: "/placeholder.svg?height=600&width=1200",
//     icon: Target,
//     primaryAction: "Support Us",
//     primaryLink: "/support",
//     secondaryAction: "Contact",
//     secondaryLink: "/contact",
//   },
// ]

export default function HeroCarousel({banners}:{banners:any}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = banners[currentSlide]

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images */}
      {banners?.map((slide:any, index:any) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.imageUrl || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Light overlay for better image visibility */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-grow min-h-0"></div>
        <div className="h-1/3 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              {/* Content with animations and background */}
              <div
                key={currentSlide}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-black/60 backdrop-blur-sm rounded-xl p-4 md:p-6"
              >
                <h2 className="text-sm md:text-base font-semibold text-blue-200 mb-3">{currentSlideData.title}</h2>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                  {currentSlideData.title}
                </h1>
                <p className="text-sm md:text-base text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed">
                  {currentSlideData.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href={currentSlideData.link1}>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                      Join
                    </Button>
                  </Link>
                  <Link href={currentSlideData.link2}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300"
                    >
                      Donate
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {banners.map((_:any, index:any) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-orange-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / banners.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  MapPin,
  Users,
  Star,
  ExternalLink,
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Clock,
  DollarSign,
} from "lucide-react"

const upcomingEvents = [
  {
    title: "Community Skills Workshop",
    date: "December 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Main Community Center",
    description: "Learn essential digital and life skills in our comprehensive workshop designed for all ages.",
    attendees: 45,
    maxAttendees: 60,
    image: "/placeholder.svg?height=200&width=300",
    category: "Workshop",
  },
  {
    title: "Annual Fundraising Gala",
    date: "December 22, 2024",
    time: "6:00 PM - 11:00 PM",
    location: "Grand Hotel Ballroom",
    description: "Join us for an evening of celebration, networking, and supporting our mission.",
    attendees: 180,
    maxAttendees: 200,
    image: "/placeholder.svg?height=200&width=300",
    category: "Fundraiser",
  },
  {
    title: "Youth Leadership Summit",
    date: "January 8, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "University Campus",
    description: "Empowering the next generation of leaders through interactive sessions and mentorship.",
    attendees: 95,
    maxAttendees: 120,
    image: "/placeholder.svg?height=200&width=300",
    category: "Summit",
  },
]

const featuredCampaigns = [
  {
    title: "Education for All Initiative",
    description: "Providing quality education access to underserved communities across the region.",
    longDescription:
      "Our comprehensive education program includes school supplies, tutoring, and scholarship opportunities for children who need it most.",
    raised: 75000,
    goal: 100000,
    supporters: 234,
    daysLeft: 45,
    image: "/placeholder.svg?height=300&width=400",
    category: "Education",
  },
  {
    title: "Clean Water Project",
    description: "Building sustainable water systems in rural areas to ensure access to clean drinking water.",
    longDescription:
      "Installing water purification systems and teaching communities how to maintain them for long-term sustainability.",
    raised: 32000,
    goal: 50000,
    supporters: 156,
    daysLeft: 30,
    image: "/placeholder.svg?height=300&width=400",
    category: "Infrastructure",
  },
  {
    title: "Women Empowerment Program",
    description: "Supporting women entrepreneurs with microloans and business training.",
    longDescription:
      "Providing financial literacy, business skills training, and small loans to help women start and grow their businesses.",
    raised: 18500,
    goal: 25000,
    supporters: 89,
    daysLeft: 60,
    image: "/placeholder.svg?height=300&width=400",
    category: "Empowerment",
  },
]

const successStories = [
  {
    name: "Sarah Martinez",
    story:
      "Through the Digital Literacy program, I learned essential computer skills that helped me secure a job at a local tech company. Now I can support my family and give back to my community.",
    program: "Digital Literacy Training",
    image: "/placeholder.svg?height=80&width=80",
    date: "November 2024",
    location: "Downtown Center",
  },
  {
    name: "Ahmed Hassan",
    story:
      "The mentorship program connected me with industry professionals who guided my career transition into renewable energy. I'm now working as a solar panel technician.",
    program: "Youth Mentorship Program",
    image: "/placeholder.svg?height=80&width=80",
    date: "October 2024",
    location: "Tech Hub",
  },
  {
    name: "Maria Gonzalez",
    story:
      "With the microloan from the Women Empowerment Program, I started my own bakery. It's now thriving and employs three other women from my neighborhood.",
    program: "Women Empowerment Program",
    image: "/placeholder.svg?height=80&width=80",
    date: "September 2024",
    location: "East District",
  },
]

const testimonials = [
  {
    name: "Dr. Emily Johnson",
    role: "Program Director",
    organization: "City Education Board",
    testimonial:
      "Apprentice NGO has been instrumental in transforming our community's approach to education. Their innovative programs have reached over 1,000 students and the results speak for themselves.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Community Leader",
    organization: "Local Business Association",
    testimonial:
      "The partnership with Apprentice has created meaningful opportunities for our youth. Their dedication to sustainable change and community involvement is truly remarkable.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Sister Catherine",
    role: "Director",
    organization: "Community Outreach Center",
    testimonial:
      "Working with Apprentice NGO has amplified our impact tenfold. Their professional approach and genuine care for beneficiaries makes them an ideal partner.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

const partners = [
  {
    name: "Global Education Foundation",
    type: "Funding Partner",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://example.com",
    description: "Supporting education initiatives worldwide",
  },
  {
    name: "TechCorp Solutions",
    type: "Technology Partner",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://example.com",
    description: "Providing technology infrastructure and training",
  },
  {
    name: "Community Health Network",
    type: "Implementation Partner",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://example.com",
    description: "Healthcare and wellness program delivery",
  },
  {
    name: "Local Government",
    type: "Strategic Partner",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://example.com",
    description: "Policy support and community coordination",
  },
  {
    name: "University Partnership",
    type: "Academic Partner",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://example.com",
    description: "Research and student volunteer programs",
  },
  {
    name: "Corporate Foundation",
    type: "Funding Partner",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://example.com",
    description: "Corporate social responsibility initiatives",
  },
]

const faqs = [
  {
    question: "How can I volunteer with Apprentice NGO?",
    answer:
      "You can apply to volunteer through our website by filling out the volunteer application form, or visit our main office during business hours. We offer various volunteer opportunities including mentoring, event support, program assistance, and administrative help. All volunteers receive proper training and ongoing support.",
  },
  {
    question: "What programs do you currently offer?",
    answer:
      "We offer a wide range of programs including Digital Literacy Training, Youth Mentorship Programs, Women Empowerment Initiatives, Community Health Education, Skills Development workshops, and Educational Support services. Each program is designed to address specific community needs and create lasting impact.",
  },
  {
    question: "How are donations used and can I track their impact?",
    answer:
      "100% of donations go directly to program implementation. Our administrative costs are covered by separate grants and partnerships to ensure maximum impact. We provide regular updates to donors through newsletters, impact reports, and our online donor portal where you can track how your contribution is making a difference.",
  },
  {
    question: "Can organizations partner with Apprentice NGO?",
    answer:
      "Yes! We welcome partnerships with corporations, educational institutions, government agencies, and other NGOs. We offer various partnership models including funding partnerships, implementation partnerships, and strategic alliances. Contact our partnership team to discuss collaboration opportunities that align with your organization's goals.",
  },
  {
    question: "Do you provide certificates for program completion?",
    answer:
      "Yes, we provide certificates of completion for most of our training programs. These certificates are recognized by local employers and educational institutions. Some of our programs also offer industry-recognized certifications in partnership with accredited organizations.",
  },
  {
    question: "How do I apply for your programs as a beneficiary?",
    answer:
      "You can apply for our programs by visiting our community centers, calling our hotline, or applying online through our website. Our intake process includes an initial assessment to match you with the most suitable programs based on your needs and goals. Financial assistance is available for those who qualify.",
  },
]

export default function NGOHomepage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", { email, name })
    setEmail("")
    setName("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section would go here */}

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us at our upcoming events and be part of the change you want to see in the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-48 object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{event.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      {event.attendees}/{event.maxAttendees} attending
                    </span>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Support our active campaigns and help us create lasting change in communities that need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCampaigns.map((campaign, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    className="w-full h-56 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-500">{campaign.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4">{campaign.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{campaign.longDescription}</p>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-900">${campaign.raised.toLocaleString()} raised</span>
                      <span className="text-gray-500">${campaign.goal.toLocaleString()} goal</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-orange-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {campaign.supporters} supporters
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {campaign.daysLeft} days left
                      </span>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Donate Now
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={story.image || "/placeholder.svg"} alt={story.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                        {story.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{story.name}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {story.location}
                      </div>
                      <p className="text-xs text-gray-400">{story.date}</p>
                    </div>
                  </div>

                  <blockquote className="text-gray-600 mb-4 italic">"{story.story}"</blockquote>

                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    {story.program}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Read More Stories
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the organizations and leaders who work with us to create positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</blockquote>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.organization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to maximize our impact and reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-16 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {partner.type}
                  </Badge>
                  <p className="text-sm text-gray-600 mb-4">{partner.description}</p>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions about our programs and services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <Separator className="mb-4" />
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about our programs, events, and impact stories.
            </p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardContent className="p-6">
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3 text-left">
                  <p className="text-sm font-medium text-gray-700">What interests you? (optional)</p>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-600">Program Updates</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-600">Event Notifications</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-600">Success Stories</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-600">Volunteer Opportunities</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe to Newsletter
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time. No spam, ever.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Calendar,
  Users,
  Rocket,
  Clock,
  Trophy,
  Award,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HackathonPage() {
  // ===== CONFIGURE YOUR HACKATHON DATE HERE =====
  // Format: YYYY, MM (0-11), DD, HH, MM, SS
  // Note: Month is 0-indexed (0 = January, 11 = December)
  const HACKATHON_DATE = new Date(2025, 4, 29, 9, 0, 0) // June 15, 2025 at 9:00 AM
  // =============================================

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isEventPassed, setIsEventPassed] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = HACKATHON_DATE.getTime() - now.getTime()

      if (difference <= 0) {
        setIsEventPassed(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [HACKATHON_DATE])

  // Format date for display
  const formattedEventDate = HACKATHON_DATE.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const formattedEventTime = HACKATHON_DATE.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  })

  const themes = [
    {
      title: "E-Governance",
      description: "Develop innovative solutions to improve government services, transparency, and citizen engagement.",
      icon: <Code className="h-10 w-10 text-white" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Health Technology",
      description:
        "Create applications that address healthcare challenges, improve patient care, and enhance medical services.",
      icon: <Users className="h-10 w-10 text-white" />,
      color: "from-teal-500 to-teal-700",
    },
    {
      title: "Agriculture Technology",
      description:
        "Build solutions that enhance farming practices, improve crop yields, and promote sustainable agriculture.",
      icon: <Rocket className="h-10 w-10 text-white" />,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Open Innovation",
      description:
        "Explore creative ideas beyond the defined themes and develop groundbreaking solutions for any challenge.",
      icon: <Calendar className="h-10 w-10 text-white" />,
      color: "from-slate-600 to-slate-800",
    },
  ]

  const committeeMembers = [
    {
      name: "Prabesh Raj Pant",
      role: "xyz",
      photo: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "xadf",
      role: "abc",
      photo: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "abc",
      role: "sbc",
      photo: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "abc",
      role: "xyz",
      photo: "/placeholder.svg?height=300&width=300",
    },
    
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-800">
      {/* Professional background pattern */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-[0.15]"></div>

        {/* Gradient circles */}
        <div className="absolute -left-[30%] -top-[10%] h-[500px] w-[500px] rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute -right-[20%] top-[20%] h-[600px] w-[600px] rounded-full bg-teal-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-50 opacity-20 blur-3xl"></div>

        {/* Subtle top wave */}
        <div className="absolute left-0 right-0 top-0 h-[150px] bg-gradient-to-b from-blue-50 to-transparent opacity-30"></div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">HACK FOR</span>
              <span className="text-gray-800"> NEPAL</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
              Join the premier innovation hackathon for industry professionals. Collaborate and transform ideas into
              impactful solutions.
            </p>

           {/* Event Date and Venue Display */}
           <div className="mb-6 flex flex-col items-center justify-center gap-2">
              <p className="flex items-center text-2xl font-bold text-gray-800">
                <Calendar className="mr-2 inline-block h-6 w-6 text-blue-600" />
                {formattedEventDate} at {formattedEventTime}
              </p>
              <p className="flex items-center text-xl font-medium text-gray-700">
                <MapPin className="mr-2 inline-block h-5 w-5 text-red-500" />
                NCIT College, Balkumari, Lalitpur
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-12">
              <h2 className="mb-6 flex items-center justify-center gap-2 text-2xl font-bold text-gray-800">
                <Clock className="h-6 w-6 text-blue-600" />
                {isEventPassed ? "Event has ended" : "Hackathon Commences In"}
              </h2>

              {isEventPassed ? (
                <div className="mx-auto max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
                  <p className="text-xl font-bold text-gray-800">Event Started</p>
                  <p className="mt-2 text-gray-600">See Participants</p>
                </div>
              ) : (
                <div className="flex flex-wrap justify-center gap-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <motion.div
                      key={unit}
                      className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg"
                      whileHover={{ scale: 1.03 }}
                    >
                      <span className="text-3xl font-bold text-gray-800">{value}</span>
                      <span className="text-sm capitalize text-gray-500">{unit}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={isEventPassed}>
                {isEventPassed ? "Event Ended" : "Register Now"}
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section className="relative z-10 bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-8 flex items-center justify-center">
              <Trophy className="mr-3 h-10 w-10 text-amber-500" />
              <h2 className="text-4xl font-bold text-gray-800">Prize Pool</h2>
            </div>

            <div className="relative mx-auto mb-12 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
              <div className="p-8">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="mb-2 text-2xl font-bold text-gray-800">Total Prize Money</h3>
                    <div className="mb-6 text-6xl font-extrabold bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">
                      160,000 NPR
                    </div>
                  </motion.div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <motion.div
                      className="flex flex-col items-center rounded-lg bg-gray-50 p-4 shadow-md"
                      whileHover={{ y: -3 }}
                    >
                      <Award className="mb-2 h-8 w-8 text-amber-500" />
                      <h4 className="text-lg font-bold text-gray-800">1st Prize</h4>
                      <p className="text-xl font-semibold text-gray-700">70,000 NPR</p>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center rounded-lg bg-gray-50 p-4 shadow-md"
                      whileHover={{ y: -3 }}
                    >
                      <Award className="mb-2 h-8 w-8 text-gray-400" />
                      <h4 className="text-lg font-bold text-gray-800">2nd Prize</h4>
                      <p className="text-xl font-semibold text-gray-700">40,000 NPR</p>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center rounded-lg bg-gray-50 p-4 shadow-md"
                      whileHover={{ y: -3 }}
                    >
                      <Award className="mb-2 h-8 w-8 text-amber-700" />
                      <h4 className="text-lg font-bold text-gray-800">3rd Prize</h4>
                      <p className="text-xl font-semibold text-gray-700">30,000 NPR</p>
                    </motion.div>
                  </div>

                  <div className="mt-8 text-center text-gray-600">
                    <p>Additional recognition for category winners and special mentions</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                      {["Best UI/UX", "Most Innovative"].map(
                        (award, i) => (
                          <span key={i} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                            {award}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is a Hackathon Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-4xl font-bold text-gray-800">What is a Hackathon?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-blue-600">Innovation Sprint</h3>
                <p className="text-gray-600">
                A hackathon is an intensive event where programmers, designers, and domain experts collaborate to
                create innovative solutions to challenging problems in a limited timeframe.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-teal-600">Collaborative Experience</h3>
                <p className="text-gray-600">
                  Participants form teams, brainstorm ideas, and work together to develop functional prototypes that
                  address specific industry challenges.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-blue-600">Professional Development</h3>
                <p className="text-gray-600">
                  Hackathons provide a unique environment to enhance technical skills, learn new technologies, and
                  receive mentorship from industry experts.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-teal-600">Networking Platform</h3>
                <p className="text-gray-600">
                  Connect with industry leaders, potential employers, and like-minded professionals while showcasing
                  your expertise and innovative thinking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-center text-4xl font-bold text-gray-800">Hackathon Themes</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Focus your innovation on these strategic themes designed to address real-world challenges
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {themes.map((theme, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`rounded-lg bg-gradient-to-b ${theme.color} shadow-lg`}
                >
                  <Card className="h-full border-0 bg-white/95">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600">
                        {theme.icon}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-gray-800">{theme.title}</h3>
                      <p className="mb-4 flex-grow text-gray-600">{theme.description}</p>
                      <Button variant="link" className="p-0 text-blue-600 hover:text-blue-800">
                        Learn more <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-center text-4xl font-bold text-gray-800">Event Schedule</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Plan your participation with our comprehensive event timeline
            </p>

            <Tabs defaultValue="day1" className="mx-auto max-w-3xl">
              <TabsList className="mb-8 grid w-full grid-cols-3 bg-gray-100">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
              </TabsList>

              {["day1", "day2", "day3"].map((day, dayIndex) => (
                <TabsContent key={day} value={day} className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                  <div className="space-y-6">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                      >
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                          {dayIndex === 0 && i === 0 ? (
                            <Calendar className="h-8 w-8" />
                          ) : dayIndex === 2 && i === 3 ? (
                            <Rocket className="h-8 w-8" />
                          ) : (
                            <Code className="h-8 w-8" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {dayIndex === 0 && i === 0
                              ? "Opening Ceremony"
                              : dayIndex === 2 && i === 3
                                ? "Awards Presentation"
                                : ["Team Formation", "Industry Workshop", "Mentorship Session", "Development Sprint"][
                                    i % 4
                                  ]}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {`${9 + i * 3}:00 ${i < 2 ? "AM" : "PM"} - ${9 + i * 3 + 2}:00 ${i < 2 ? "AM" : "PM"}`}
                          </p>
                          <p className="mt-2 text-gray-600">
                            {dayIndex === 0 && i === 0
                              ? "Welcome address, rules explanation, and theme announcement."
                              : dayIndex === 2 && i === 3
                                ? "Recognition of winning teams and project showcase."
                                : "Focused development session with industry mentors available for consultation."}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-lg border border-gray-200 bg-white p-8 shadow-xl">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-3xl font-bold text-gray-800">Ready to Participate?</h2>
                <p className="mb-6 text-gray-600">
                  Secure your place in HACK FOR NEPAL. Limited positions available for qualified professionals.
                </p>
                <ul className="mb-6 space-y-3">
                  {[
                    "Complimentary registration for selected participants",
                    "Substantial prize pool",
                    "Strategic networking opportunities",
                    "Expert mentorship from industry leaders",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" disabled={isEventPassed}>
                  {isEventPassed ? "Event Concluded" : "Register Now"}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Hackathon participants"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-2 text-4xl font-bold text-gray-800">Our Partners</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              HACK FOR NEPAL is proudly supported by these industry-leading organizations
            </p>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="h-24 w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-md">
                    <div className="flex h-full items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=60&width=120"
                        alt={`Partner ${i + 1}`}
                        width={120}
                        height={60}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organizing Committee Section */}
      <section className="relative z-10 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-2 text-4xl font-bold text-gray-800">Organizing Committee</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Meet the experienced professionals behind HACK FOR NEPAL
            </p>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {committeeMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="relative mx-auto mb-4 h-64 w-64 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <Image
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <Link
                        href="#"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-blue-600 hover:text-white"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-blue-600 hover:text-white"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-blue-600 hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-gray-900 to-black py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold text-white">HACK FOR NEPAL</h3>
              <p className="text-gray-300">
                The premier hackathon experience focused on building innovative solutions for Nepal's unique challenges.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                {["About", "Themes", "Schedule", "FAQ", "Contact"].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="hover:text-blue-400 transition-colors duration-200">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Connect With Us</h4>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "GitHub", "Instagram"].map((platform, i) => (
                  <motion.div key={i} whileHover={{ y: -3 }}>
                    <Link
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-200 shadow hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      <span className="sr-only">{platform}</span>
                      {/* Icon placeholder */}
                      <div className="h-5 w-5"></div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Contact</h4>
              <address className="not-italic text-gray-300">
                <p>Email: hackfornepal82@gmail.com</p>
                <p>Phone: +977 9846684225, +977 9864772330</p>
                <p>Location: NCIT, Balkumari, Lalitpur</p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} HACK FOR NEPAL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

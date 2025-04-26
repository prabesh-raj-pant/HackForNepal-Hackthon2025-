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
  ArrowRight,
  Clock,
  Trophy,
  Award,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HackathonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const hackathonDate = new Date("2025-05-29T09:00:00") // Set event date and time here. months are starts with 0

    const timer = setInterval(() => {
      const now = new Date()
      const difference = hackathonDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])


  const themes = [
    {
      title: "E-Governance",
      description: "Develop innovative solutions to improve government services, transparency, and citizen engagement.",
      icon: <Code className="h-12 w-12 text-white" />,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Health Technology",
      description:
        "Create applications that address healthcare challenges, improve patient care, and enhance medical services.",
      icon: <Users className="h-12 w-12 text-white" />,
      color: "from-[#ff1700] to-red-800",
    },
    {
      title: "Agriculture Technology",
      description:
        "Build solutions that enhance farming practices, improve crop yields, and promote sustainable agriculture.",
      icon: <Rocket className="h-12 w-12 text-white" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Open Innovation",
      description:
        "Explore creative ideas beyond the defined themes and develop groundbreaking solutions for any challenge.",
      icon: <Calendar className="h-12 w-12 text-white" />,
      color: "from-[#ff1700]/90 to-blue-500/90",
    },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Animated background elements  */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 200 + 50
          const left = `${Math.random() * 100}%`
          const top = `${Math.random() * 100}%`
          const xMove = Math.random() * 100 - 50
          const yMove = Math.random() * 100 - 50
          const duration = Math.random() * 5 + 5 // duration between 5s and 10s

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-[#ff1700]/20"
              style={{ width: size, height: size, left, top }}
              animate={{ x: [0, xMove], y: [0, yMove] }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          )
        })}
      </div>


      {/* intro Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-8xl font-extrabold tracking-tight md:text-9xl text-center">
              {/* <span className="bg-gradient-to-r from-[#DC143C] to-[#003893] bg-clip-text text-transparent">HACK </span>
              <span className="bg-white bg-clip-text text-transparent">FOR</span> */}
              <span
                className="ml-2 bg-cover bg-center bg-no-repeat bg-clip-text text-transparent"
                style={{
                  backgroundImage: "url('/NepalFlag.png')",
                }}
              >
              HACK FOR NEPAL
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
              Join the most innovative hackathon of the year. Build, collaborate, and transform your ideas into reality.
            </p>

            {/* Countdown Timer */}
            <div className="mb-12">
              <h2 className="mb-6 flex items-center justify-center gap-2 text-2xl font-bold">
                <Clock className="h-6 w-6 text-[#ff1700]" />
                Hackathon Starts In
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <motion.div
                    key={unit}
                    className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#ff1700]/80 to-blue-600/80 p-4 shadow-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-3xl font-bold">{value}</span>
                    <span className="text-sm capitalize">{unit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ff1700] to-red-700 hover:from-[#ff1700]/90 hover:to-red-700/90"
              >
                Register Now
              </Button>
              {/* <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                CODE OF CONDUCT
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section className="relative z-10 bg-gradient-to-r from-[#ff1700]/30 to-blue-900/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-8 flex items-center justify-center">
              <Trophy className="mr-3 h-12 w-12 text-yellow-400" />
              <h2 className="text-4xl font-bold">Prize Pool</h2>
            </div>

            <div className="relative mx-auto mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#ff1700]/80 to-blue-600/80 p-1">
              <div className="rounded-xl bg-gray-900/90 p-8 backdrop-blur-md">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="mb-2 text-2xl font-bold">Total Prize Money</h3>
                    <div className="mb-6 text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                      200,000 NPR
                    </div>
                  </motion.div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <motion.div className="flex flex-col items-center rounded-lg bg-white/5 p-4" whileHover={{ y: -5 }}>
                      <Award className="mb-2 h-10 w-10 text-yellow-400" />
                      <h4 className="text-lg font-bold">1st Prize</h4>
                      <p className="text-xl font-semibold">100,000 NPR</p>
                    </motion.div>

                    <motion.div className="flex flex-col items-center rounded-lg bg-white/5 p-4" whileHover={{ y: -5 }}>
                      <Award className="mb-2 h-10 w-10 text-gray-300" />
                      <h4 className="text-lg font-bold">2nd Prize</h4>
                      <p className="text-xl font-semibold">60,000 NPR</p>
                    </motion.div>

                    <motion.div className="flex flex-col items-center rounded-lg bg-white/5 p-4" whileHover={{ y: -5 }}>
                      <Award className="mb-2 h-10 w-10 text-amber-700" />
                      <h4 className="text-lg font-bold">3rd Prize</h4>
                      <p className="text-xl font-semibold">40,000 NPR</p>
                    </motion.div>
                  </div>

                  <div className="mt-8 text-center text-gray-300">
                    <p>Additional prizes for category winners and special mentions</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                      {["Best UI/UX", "Most Innovative"].map(
                        (award, i) => (
                          <span key={i} className="rounded-full bg-white/10 px-3 py-1 text-sm">
                            {award}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 h-12 w-12 rounded-full bg-yellow-400/20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full bg-yellow-400/20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is a Hackathon Section */}
      <section className="relative z-10 bg-gradient-to-r from-blue-900/50 to-[#ff1700]/30 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="mb-8 text-4xl font-bold">What is a Hackathon?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="mb-4 text-2xl font-semibold text-[#ff1700]">Innovation Sprint</h3>
                <p className="text-gray-200">
                  A hackathon is an intensive event where programmers, designers, and domain experts collaborate to
                  create innovative solutions to challenging problems in a limited timeframe.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="mb-4 text-2xl font-semibold text-blue-400">Collaborative Experience</h3>
                <p className="text-gray-200">
                  Participants form teams, brainstorm ideas, and work together to develop functional prototypes that
                  address specific challenges or themes.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="mb-4 text-2xl font-semibold text-[#ff1700]">Learning Opportunity</h3>
                <p className="text-gray-200">
                  Hackathons provide a unique environment to learn new technologies, improve skills, and receive
                  mentorship from industry experts.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-6 backdrop-blur-md">
                <h3 className="mb-4 text-2xl font-semibold text-blue-400">Networking Platform</h3>
                <p className="text-gray-200">
                  Connect with like-minded individuals, potential employers, and industry professionals while showcasing
                  your talents and creativity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Themes Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-center text-4xl font-bold">Hackathon Themes</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
              Choose from these exciting themes to focus your innovation and creativity
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {themes.map((theme, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className={`rounded-xl bg-gradient-to-br ${theme.color} p-1`}
                >
                  <Card className="h-full border-0 bg-gray-900/90">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#ff1700] to-blue-600">
                        {theme.icon}
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-white">{theme.title}</h3>
                      <p className="mb-4 flex-grow text-gray-300">{theme.description}</p>
                      <Button variant="link" className="p-0 text-[#ff1700] hover:text-white">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="relative z-10 bg-gradient-to-r from-[#ff1700]/20 to-blue-900/20 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-center text-4xl font-bold">Event Schedule</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-300">
              Mark your calendar for these important dates and events
            </p>

            <Tabs defaultValue="day1" className="mx-auto max-w-3xl">
              <TabsList className="mb-8 grid w-full grid-cols-3 bg-gray-800/50">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
              </TabsList>

              {["day1", "day2", "day3"].map((day, dayIndex) => (
                <TabsContent key={day} value={day} className="rounded-xl bg-gray-800/30 p-6 backdrop-blur-md">
                  <div className="space-y-6">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 rounded-lg bg-gray-800/50 p-4"
                      >
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff1700] to-blue-600 text-white">
                          {dayIndex === 0 && i === 0 ? (
                            <Calendar className="h-8 w-8" />
                          ) : dayIndex === 2 && i === 3 ? (
                            <Rocket className="h-8 w-8" />
                          ) : (
                            <Code className="h-8 w-8" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {dayIndex === 0 && i === 0
                              ? "Opening Ceremony"
                              : dayIndex === 2 && i === 3
                                ? "Winners Announcement"
                                : ["Team Formation", "Workshop: AI Tools", "Mentorship Session", "Coding Sprint"][
                                i % 4
                                ]}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {`${9 + i * 3}:00 ${i < 2 ? "AM" : "PM"} - ${9 + i * 3 + 2}:00 ${i < 2 ? "AM" : "PM"}`}
                          </p>
                          <p className="mt-2 text-gray-300">
                            {dayIndex === 0 && i === 0
                              ? "Welcome address, rules explanation, and theme announcement."
                              : dayIndex === 2 && i === 3
                                ? "Celebration of the winning teams and project showcase."
                                : "Intensive collaboration and development session with expert mentors available."}
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



      {/* Sponsors Section */}
      <section className="relative z-10 bg-gradient-to-r from-blue-900/30 to-[#ff1700]/20 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-2 text-4xl font-bold">Our Sponsors</h2>
            <p className="mx-auto mb-12 max-w-2xl text-gray-300">
              HACK FOR NEPAL is made possible by these amazing organizations
            </p>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="h-24 w-48 rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex h-full items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=60&width=120"
                        alt={`Sponsor ${i + 1}`}
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

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">HACK FOR NEPAL</h3>
              <p className="text-gray-400">
                The ultimate hackathon experience for innovators, creators, and problem-solvers.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {["About", "Themes", "Schedule", "FAQ", "Contact"].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className="hover:text-[#ff1700]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                {["Twitter", "Instagram", "LinkedIn", "GitHub"].map((platform, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white hover:bg-[#ff1700]"
                  >
                    <span className="sr-only">{platform}</span>
                    {/* Icon placeholder */}
                    <div className="h-5 w-5"></div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <address className="not-italic text-gray-400">
                <p>Email: info@hackfusion.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Location: Tech Hub, Innovation Street, Digital City</p>
              </address>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} HackFusion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Award,
  Building2,
  Calendar,
  Clock,
  Code,
  Coffee,
  Cookie,
  Gamepad2,
  Leaf,
  Lightbulb,
  Scale,
  Stethoscope,
  Trophy,
  Users,
  Utensils,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  formattedDeadline,
  isRegistrationClosed,
  registrationStatusMessage,
} from "./helper";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./navBar";
import { motion } from "framer-motion";

export default function HackathonPage() {
  // ===== CONFIGURE YOUR HACKATHON DATE HERE =====
  // Format: YYYY, MM (0-11), DD, HH, MM, SS
  // Note: Month is 0-indexed (0 = January, 11 = December)

  const HACKATHON_DATE = new Date(2025, 5, 12, 9, 0, 0); // april 12, 2025 at 9:00 AM
  // =============================================

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isEventPassed, setIsEventPassed] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = HACKATHON_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        setIsEventPassed(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format date for display
  const formattedEventDate = HACKATHON_DATE.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedEventTime = HACKATHON_DATE.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  const themes = [
    {
      title: "Health Tech",
      description:
        "A health tech hackathon could focus on innovative areas like AI-enhanced telemedicine, wearable health devices, early disease detection using AI diagnostics, mental health tools, secure health data management, and personalized medicine based on genetic and lifestyle data.",
      icon: <Stethoscope className="h-10 w-10 text-white" />,
      color: "from-blue-600 to-blue-800",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      title: "Agri-Tech",
      description:
        "AgriTech means using technology to improve farming. In Nepal, it helps farmers with smart tools, weather info, digital marketplaces, and better crop planning—making agriculture more efficient, sustainable, and profitable.",
      icon: <Leaf className="h-10 w-10 text-white" />,
      color: "from-green-500 to-green-700",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      title: "E-Governance",
      description:
        "E-Governance in Nepal seeks to improve transparency, efficiency, and access to government services through digitization. Despite progress with tools like the Nagarik App and digital IDs, challenges such as system integration, cybersecurity, and rural access persist. The hackathon encourages innovative tech solutions to strengthen digital public services and empower citizens.",
      icon: <Building2 className="h-10 w-10 text-white" />,
      color: "from-red-600 to-red-800",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      title: "Open Innovation",
      description:
        "An open innovation hackathon in Nepal could address local challenges through tech solutions in areas like renewable energy, sustainable tourism, education, disaster management, healthcare, and waste management. The focus would be on improving rural access, promoting sustainability, and enhancing public services through innovation.",
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      color: "from-purple-600 to-purple-800",
      image: "/placeholder.svg?height=150&width=150",
    },
  ];

  const faqs = [
    {
      question: "Who can participate in HackForNepal?",
      answer:
        "HackForNepal is open to students currently stydying bachelor and +2 running or passout with an interest in technology and innovation. Participants from all backgrounds are welcome, regardless of their coding experience.",
    },
    {
      question: "Do I need to have a team?",
      answer:
        "While we encourage team participation (teams of 2–4 members), individual registrations are also welcome. Teams that include at least one female member are especially encouraged.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Participants should bring their laptops, chargers, any specific hardware they plan to use, and personal items for overnight stays. Food and refreshments will be provided throughout the event.",
    },
    {
      question: "Are there any costs to participate?",
      answer:
        "This is a paid hackathon. A registration fee of 2000 per team will be collected only after your team is shortlisted for participation.Payment details and instructions will be shared via email upon selection.Your application will be reviewed based on creativity, motivation, and team skills. We cover food, refreshments, and provide a comfortable workspace for the duration of the event.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! We have a total prize pool of 160,000 NPR, with 70,000 NPR for the first place, 40,000 NPR for second place, and 30,000 NPR for third place. Additional category prizes will also be awarded 10,000 each.",
    },
    {
      question: "What kind of projects can we build?",
      answer:
        "Projects should align with one of our themes: E-Governance, Health Technology, Agriculture Technology, or Open Innovation. Solutions should address real-world challenges faced by Nepali communities.",
    },
    {
      question: "Will there be mentors at the event?",
      answer:
        "Yes, we'll have experienced mentors from various technical backgrounds to guide teams throughout the hackathon. They'll provide technical support, business insights, and help refine your ideas.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Background grid pattern */}
      <div className="fixed inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-[0.5]"></div>

      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          {/* Registration Badge */}
          <div className="mb-8 text-center space-y-2">
            {/* Registration Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-medium shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3M16 7V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Registration Now Open
            </div> */}

            {/* Registration Deadline */}

            <div className="text-sm text-gray-700">
              <span
                className={`inline-block rounded-md px-3 py-1  font-semibold ${
                  !isRegistrationClosed
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {registrationStatusMessage}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-center">
            <div className="text-5xl md:text-6xl font-bold">
              <span className="text-red-600">Hack</span>
              <span className="text-blue-700">ForNepal</span>
            </div>
            <div className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
              Innovation Challenge 2025
            </div>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-600">
            Join Nepal's biggest 48 hour hackathon to build solutions that
            empower communities, preserve cultural heritage, and drive
            sustainable development.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                <span className="text-4xl font-bold text-blue-700">
                  {timeLeft.days}
                </span>
                <span className="text-sm text-gray-500">Days</span>
              </div>
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                <span className="text-4xl font-bold text-blue-700">
                  {timeLeft.hours}
                </span>
                <span className="text-sm text-gray-500">Hours</span>
              </div>
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                <span className="text-4xl font-bold text-blue-700">
                  {timeLeft.minutes}
                </span>
                <span className="text-sm text-gray-500">Minutes</span>
              </div>
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
                <span className="text-4xl font-bold text-blue-700">
                  {timeLeft.seconds}
                </span>
                <span className="text-sm text-gray-500">Seconds</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {!isRegistrationClosed && (
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe1DGPWpafMmlmWPxroWEYxyC6bzB--N66jiKQm0ctxzoy0XA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Register Now
                </Button>
              </a>
            )}

            <Link href="/teams">
              <Button
                variant="outline"
                size="lg"
                className="bg-red-500 border-gray-300 text-black-900 hover:bg-white-900"
              >
                View Participants
              </Button>
            </Link> 
          </div>
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
                    <h3 className="mb-2 text-2xl font-bold text-gray-800">
                      Total Prize Money
                    </h3>
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
                      <h4 className="text-lg font-bold text-gray-800">
                        1st Prize
                      </h4>
                      <p className="text-xl font-semibold text-gray-700">
                        70,000 NPR
                      </p>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center rounded-lg bg-gray-50 p-4 shadow-md"
                      whileHover={{ y: -3 }}
                    >
                      <Award className="mb-2 h-8 w-8 text-gray-400" />
                      <h4 className="text-lg font-bold text-gray-800">
                        2nd Prize
                      </h4>
                      <p className="text-xl font-semibold text-gray-700">
                        40,000 NPR
                      </p>
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center rounded-lg bg-gray-50 p-4 shadow-md"
                      whileHover={{ y: -3 }}
                    >
                      <Award className="mb-2 h-8 w-8 text-amber-700" />
                      <h4 className="text-lg font-bold text-gray-800">
                        3rd Prize
                      </h4>
                      <p className="text-xl font-semibold text-gray-700">
                        30,000 NPR
                      </p>
                    </motion.div>
                  </div>

                  <div className="mt-8 text-center text-gray-600">
                    <p>
                      Additional recognition for category winners and special
                      mentions
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                      {["Best UI/UX", "Most Innovative"].map((award, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                        >
                          {award}
                        </span>
                      ))}
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
            <h2 className="mb-8 text-4xl font-bold text-gray-800">
              What is a Hackathon?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                  Innovation Sprint
                </h3>
                <p className="text-gray-600">
                  A hackathon is an intensive event where talented young minds collaborate to create innovative solutions to challenging problems in a limited timeframe.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-teal-600">
                  Collaborative Experience
                </h3>
                <p className="text-gray-600">
                  Participants form teams, brainstorm ideas, and work together
                  to develop functional prototypes that address specific
                  industry challenges.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                  Professional Development
                </h3>
                <p className="text-gray-600">
                  Hackathons provide a unique environment to enhance technical
                  skills, learn new technologies, and receive mentorship from
                  industry experts.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold text-teal-600">
                  Networking Platform
                </h3>
                <p className="text-gray-600">
                  Connect with industry leaders, potential employers, and
                  like-minded professionals while showcasing your expertise and
                  innovative thinking.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="Themes" className="relative z-10 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-center text-4xl font-bold text-gray-800">
              Hackathon Themes
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Focus your innovation on these strategic themes designed to
              address real-world challenges
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {themes.map((theme, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="rounded-lg bg-white shadow-lg overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${theme.color}`}></div>
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                        <div
                          className={`rounded-lg bg-gradient-to-r ${theme.color} p-4 h-40 w-40 flex items-center justify-center`}
                        >
                          {theme.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          {theme.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-justify">
                          {theme.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-2 text-center text-4xl font-bold text-gray-800">
              Event Schedule
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Plan your participation with our comprehensive event timeline
            </p>

            <Tabs defaultValue="day1" className="mx-auto max-w-4xl">
              <TabsList className="mb-8 grid w-full grid-cols-3 bg-gray-100">
                <TabsTrigger value="day1">Day 1</TabsTrigger>
                <TabsTrigger value="day2">Day 2</TabsTrigger>
                <TabsTrigger value="day3">Day 3</TabsTrigger>
              </TabsList>

              <TabsContent
                value="day1"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Users className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Check In
                      </h3>
                      <p className="text-sm text-gray-500">8:00 AM</p>
                      <p className="mt-2 text-gray-600">
                        Registration and check-in for all participants. Collect
                        your welcome kit and event materials.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Calendar className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Opening Ceremony
                      </h3>
                      <p className="text-sm text-gray-500">8:30 AM</p>
                      <p className="mt-2 text-gray-600">
                        Welcome address and rules explanation.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Code className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Coding
                      </h3>
                      <p className="text-sm text-gray-500">9:00 AM</p>
                      <p className="mt-2 text-gray-600">
                        Begin your hackathon project! Teams start working on
                        their solutions.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Utensils className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Lunch</h3>
                      <p className="text-sm text-gray-500">11:00 AM</p>
                      <p className="mt-2 text-gray-600">
                        Break for lunch. Networking opportunity with other
                        participants.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Users className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Mentoring Round
                      </h3>
                      <p className="text-sm text-gray-500">12:00 PM</p>
                      <p className="mt-2 text-gray-600">
                        Industry experts available to provide guidance and
                        feedback on your projects.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Cookie className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Snacks
                      </h3>
                      <p className="text-sm text-gray-500">3:00 PM</p>
                      <p className="mt-2 text-gray-600">
                        Refreshment break with snacks and beverages.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Gamepad2 className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Fun Session
                      </h3>
                      <p className="text-sm text-gray-500">Evening</p>
                      <p className="mt-2 text-gray-600">
                        Take a break with fun activities and games to refresh
                        your mind.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Utensils className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Dinner
                      </h3>
                      <p className="text-sm text-gray-500">8:00 PM</p>
                      <p className="mt-2 text-gray-600">
                        Dinner served. Continue working on your projects
                        afterward if desired.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent
                value="day2"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Coffee className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Breakfast
                      </h3>
                      <p className="text-sm text-gray-500">7:30 AM</p>
                      <p className="mt-2 text-gray-600">
                        Start your day with a nutritious breakfast to fuel your
                        coding session.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Utensils className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Lunch</h3>
                      <p className="text-sm text-gray-500">11:00 AM</p>
                      <p className="mt-2 text-gray-600">
                        Break for lunch. Networking opportunity with other
                        participants.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Users className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Mentoring Round
                      </h3>
                      <p className="text-sm text-gray-500">12:00 PM</p>
                      <p className="mt-2 text-gray-600">
                        Second mentoring session. Get feedback on your progress
                        and guidance for improvements.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Cookie className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Snacks
                      </h3>
                      <p className="text-sm text-gray-500">3:00 PM</p>
                      <p className="mt-2 text-gray-600">
                        Refreshment break with snacks and beverages.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Gamepad2 className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Fun Session
                      </h3>
                      <p className="text-sm text-gray-500">Evening</p>
                      <p className="mt-2 text-gray-600">
                        Take a break with fun activities and games to refresh
                        your mind.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Utensils className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Dinner
                      </h3>
                      <p className="text-sm text-gray-500">8:00 PM</p>
                      <p className="mt-2 text-gray-600">
                        Dinner served. Continue working on your projects
                        afterward if desired.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent
                value="day3"
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Coffee className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Breakfast
                      </h3>
                      <p className="text-sm text-gray-500">7:30 AM</p>
                      <p className="mt-2 text-gray-600">
                        Final day breakfast. Prepare for the final push and
                        presentations.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Clock className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Code Freeze
                      </h3>
                      <p className="text-sm text-gray-500">9:00 AM</p>
                      <p className="mt-2 text-gray-600">
                        All coding stops. Finalize your projects and prepare for
                        presentations.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Utensils className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Lunch</h3>
                      <p className="text-sm text-gray-500">9:30 AM</p>
                      <p className="mt-2 text-gray-600">
                        Early lunch before the judging begins.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Scale className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Judging Round
                      </h3>
                      <p className="text-sm text-gray-500">11:00 AM</p>
                      <p className="mt-2 text-gray-600">
                        Teams present their projects to the judges. Each team
                        gets 5 minutes to pitch and 3 minutes for Q&A.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Award className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Winner Announcement
                      </h3>
                      <p className="text-sm text-gray-500">3:00 PM</p>
                      <p className="mt-2 text-gray-600">
                        Announcement of winners and special category awards.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 rounded-lg bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white">
                      <Trophy className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        Prize Distribution
                      </h3>
                      <p className="text-sm text-gray-500">
                        Following Winner Announcement
                      </p>
                      <p className="mt-2 text-gray-600">
                        Distribution of prizes and certificates to winning teams
                        and participants.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
      {/* Sponsors Section */}
      <section className="relative z-10 bg-white py-20" id="sponsors">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-2 text-4xl font-bold text-gray-800">
              Our Partners
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              HackForNepal is proudly supported by these industry-leading
              organizations
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "NCIT",
                  logo: "https://ncit.edu.np/frontend/images/resource/ncit-logo.jpeg?height=60&width=120",
                },
              ].map((partner, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="h-28 w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-md flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={100}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* Title under card */}
                  <p className="mt-3 text-sm font-medium text-gray-700">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* community partner */}
      <section className="relative z-10 bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-2 text-4xl font-bold text-gray-800">
              Our Community Partners
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              HackForNepal is supported by tech communities.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "NOSk",
                  logo: "https://nosk.org.np/site/images/nosk-logo.png?height=60&width=120",
                },
              ].map((partner, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Logo Card */}
                  <div className="h-28 w-48 rounded-lg border border-gray-200 bg-white p-4 shadow-md flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={100}
                      height={60}
                      className="object-contain"
                    />
                  </div>

                  {/* Title under card */}
                  <p className="mt-3 text-sm font-medium text-gray-700">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="FAQ" className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-2 text-center text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Got questions about HackForNepal? We've got answers. If you don't
              find what you're looking for, feel free to contact us.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-200"
                >
                  <AccordionTrigger className="flex items-center justify-between py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-700">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-1 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

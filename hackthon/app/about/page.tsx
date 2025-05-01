"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
    <div className="min-h-screen bg-white text-gray-800">
      {/* Background grid pattern */}
      <div className="fixed inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-[0.15]"></div>

      {/* Navigation Bar */}
      <header className="relative z-10 border-b border-gray-200 bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-red-600">Hack</span>
            <span className="text-blue-700">ForNepal</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-800 hover:text-blue-700">
              Home
            </Link>
            <Link href="/about" className="font-medium text-blue-700">
              About
            </Link>
            <Link href="./#schedule" className="font-medium text-gray-800 hover:text-blue-700">
              Schedule
            </Link>
            <Link href="./#FAQ" className="font-medium text-gray-800 hover:text-blue-700">
              FAQ
            </Link>
            <Link href="./#sponsors" className="font-medium text-gray-800 hover:text-blue-700">
              Sponsors
            </Link>
            <Link href="/register">
              <button className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700">Register Now</button>
            </Link>
          </nav>

          {/* Mobile menu button would go here */}
        </div>
      </header>

      {/* About Hero Section */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              <span className="text-red-600">About </span>
              <span className="text-blue-700">HackForNepal</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Learn more about our mission, vision, and the team behind Nepal's biggest hackathon.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative z-10 bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-lg"
              >
                <h2 className="mb-4 text-2xl font-bold text-blue-700">Our Mission</h2>
                <p className="text-gray-600">
                  HackForNepal aims to foster innovation and technological advancement in Nepal by bringing together
                  talented individuals to create solutions that address local challenges and contribute to sustainable
                  development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-lg"
              >
                <h2 className="mb-4 text-2xl font-bold text-red-600">Our Vision</h2>
                <p className="text-gray-600">
                  We envision a technologically empowered Nepal where innovation drives economic growth, preserves
                  cultural heritage, and creates sustainable solutions for the unique challenges faced by Nepali
                  communities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Organizing Committee Section */}
      <section className="relative z-10 py-20 bg-white">
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
              Meet the experienced professionals behind HackForNepal
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
              <h3 className="mb-4 text-xl font-bold text-white">
                <span className="text-red-500">Hack</span>
                <span className="text-blue-400">ForNepal</span>
              </h3>
              <p className="text-gray-300">
                The premier hackathon experience focused on building innovative solutions for Nepal's unique challenges.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                {["About", "Themes", "Schedule", "FAQ", ].map((item, i) => (
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
            <p>&copy; {new Date().getFullYear()} HackForNepal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

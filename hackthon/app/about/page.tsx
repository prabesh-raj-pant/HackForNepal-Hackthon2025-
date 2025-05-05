"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

import Footer from "../footer";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../navBar";
import { motion } from "framer-motion";

export default function AboutPage() {
  const committeeMembers = [
    {
      name: "Prabesh Raj Pant",
      role: "Technical Lead and Program Cordinator ",
      photo: "/prabesh.jpeg?height=300&width=300",
      githublink:"https://github.com/prabesh-raj-pant",
      linkedlink:"https://www.linkedin.com/in/prabesh-raj-pant-450931232/",
    },
    {
      name: "Suyog Bajimayo",
      role: "Sponsor Team Manager",
      photo: "/suyog.jpeg?height=300&width=300",
      githublink:"https://github.com/bsuyog1",
      linkedlink:"https://www.linkedin.com/in/suyog-bajimayo-47b35323a/",
    },
    {
      name: "Aaman Shrestha",
      role: "Logistic Manager",
      photo: "/aaman.jpeg?height=300&width=300",
      githublink:"https://github.com/amanstha19",
      linkedlink:"#",
    },
    {
      name: "Subekshya Bajimayo",
      role: "Social Media Manager",
      photo: "/subekshya.jpeg?height=300&width=300",
      githublink:"https://github.com/subsssssss34",
      linkedlink:"https://www.linkedin.com/in/subekshya-bajimayo-0a1403246/",
    },
    {
      name: "Rushal Ghatane",
      role: "Technical Team",
      photo: "/rushal.jpeg?height=300&width=300",
      githublink:"https://github.com/trashhpandaaaa",
      linkedlink:"https://www.linkedin.com/in/",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Background grid pattern */}
      <div className="fixed inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEuNSIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-[0.15]"></div>

      <NavBar />

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
                <h2 className="mb-4 text-2xl font-bold text-blue-700">
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  HackForNepal aims to foster innovation and technological
                  advancement in Nepal by bringing together talented individuals
                  to create solutions that address local challenges and
                  contribute to sustainable development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-lg"
              >
                <h2 className="mb-4 text-2xl font-bold text-red-600">
                  Our Vision
                </h2>
                <p className="text-gray-600">
                  We envision a technologically empowered Nepal where innovation
                  drives economic growth, preserves cultural heritage, and
                  creates sustainable solutions for the unique challenges faced
                  by Nepali communities.
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
            <h2 className="mb-2 text-4xl font-bold text-gray-800">
              Organizing Committee
            </h2>
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
                        href={member.linkedlink}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-blue-600 hover:text-white"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link
                        href={member.githublink}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 backdrop-blur-sm hover:bg-blue-600 hover:text-white"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

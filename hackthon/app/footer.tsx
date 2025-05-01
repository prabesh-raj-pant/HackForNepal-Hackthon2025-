import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-gray-900 to-black py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">
              <span className="text-red-500">Hack</span>
              <span className="text-blue-400">ForNepal</span>
            </h3>
            <p className="text-gray-300">
              The premier hackathon experience focused on building innovative
              solutions for Nepal's unique challenges.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#schedule"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/#FAQ"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/#sponsors"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Connect With Us</h4>
            <div className="flex gap-4">
              {[
                {
                  name: "Twitter",
                  icon: Twitter,
                  url: "https://twitter.com/HackForNepal",
                },
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  url: "https://linkedin.com/company/hackfornepal",
                },
                {
                  name: "GitHub",
                  icon: Github,
                  url: "https://github.com/HackForNepal",
                },
                {
                  name: "Instagram",
                  icon: Instagram,
                  url: "https://instagram.com/hackfornepal",
                },
              ].map((platform, i) => (
                <motion.div key={i} whileHover={{ y: -3 }}>
                  <Link
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-200 shadow hover:bg-blue-600 hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">{platform.name}</span>
                    <platform.icon className="h-5 w-5" />
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
          <p>
            &copy; {new Date().getFullYear()} HackForNepal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

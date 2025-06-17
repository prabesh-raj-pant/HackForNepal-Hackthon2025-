import { Menu, X,Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { isRegistrationClosed } from "./helper";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#Themes", label: "Themes" },
    { href: "/#schedule", label: "Schedule" },
    { href: "/#FAQ", label: "FAQ" },
  ];

  return (
    <header className="relative z-5 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-red-600">Hack</span>
          <span className="text-blue-700">ForNepal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="font-medium text-gray-800 hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-medium text-gray-800 hover:text-blue-700"
          >
            About us
          </Link>
          <Link
            href="/#Themes"
            className="font-medium text-gray-800 hover:text-blue-700"
          >
            Themes
          </Link>
          <Link
            href="/#schedule"
            className="font-medium text-gray-800 hover:text-blue-700"
          >
            Schedule
          </Link>
          <Link
            href="/#FAQ"
            className="font-medium text-gray-800 hover:text-blue-700"
          >
            FAQ
          </Link>
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
      
            <Link href="/winners">
              <Button
                variant="outline"
                size="lg"
                className="bg-yellow-500 border-yellow-600 text-white hover:bg-yellow-600"
              >
                <Trophy className="mr-2 h-4 w-4" />
                View Winners
              </Button>
            </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-blue-700 focus:outline-none relative z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation with Overlay */}
      {isMenuOpen && (
        <>
          {/* Dim overlay */}
          <div
            className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-50"
            onClick={closeMenu}
          ></div>

          {/* Menu content */}
          <div className="md:hidden fixed inset-y-0 right-0 z-40 w-4/5 max-w-sm bg-white pt-20 shadow-xl">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-medium text-lg text-gray-800 hover:text-blue-700"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}

              {!isRegistrationClosed && (
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScecCm1AM_sLMJ3Q6d_A4eqT-aVrLxJpNRuSqoNYA98oXv5-Q/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                  onClick={closeMenu}
                >
                  <Button
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    Register Now
                  </Button>
                </a>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}

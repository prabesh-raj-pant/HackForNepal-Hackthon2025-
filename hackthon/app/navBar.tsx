import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="relative z-10 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-red-600">Hack</span>
          <span className="text-blue-700">ForNepal</span>
        </Link>

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
            About
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
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScecCm1AM_sLMJ3Q6d_A4eqT-aVrLxJpNRuSqoNYA98oXv5-Q/viewform?usp=header" // Replace with your actual form link
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-red-600 hover:bg-red-700">
              Register Now
            </Button>
          </a>
        </nav>

        {/* Mobile menu button would go here */}
      </div>
    </header>
  );
}

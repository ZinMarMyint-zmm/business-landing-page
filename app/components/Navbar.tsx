"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-grey-800 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">Business Pro</h1>

        <ul className="hidden gap-8 md:flex">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>

        <button className="hidden md:block rounded-lg bg-white px-4 py-2 text-black font-medium">
          Get Started
        </button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/95">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </li>

            <button className="rounded-lg bg-white px-4 py-2 text-black font-medium">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#section-hero" },
  { label: "About", href: "#section-about" },
  { label: "Services", href: "#section-services" },
  { label: "Pricing", href: "#section-pricing" },
  { label: "Reviews", href: "#section-reviews" },
  { label: "Book", href: "#section-booking" },
  { label: "Contact", href: "#section-contact" },
];

function scrollToSection(e, href, setOpen, setActive) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    if (setActive) setActive(href);
  }
  if (setOpen) setOpen(false);
}

export default function SuraAkhilaNavbar({ logoText = "Velvet Touch" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#section-hero");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = NAV_LINKS.map((link) => {
        const el = document.getElementById(link.href.replace("#", ""));
        if (!el) return { href: link.href, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { href: link.href, top: Math.abs(rect.top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.href);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-xl backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl sm:text-3xl font-bold text-white tracking-wide select-none">
          {logoText}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {NAV_LINKS.filter(link => link.label !== "Book").map((link) => (
            <button
              key={link.label}
              onClick={(e) =>
                scrollToSection(e, link.href, undefined, setActive)
              }
              className={`relative font-medium text-white hover:text-yellow-300 transition duration-200 ${
                active === link.href
                  ? "after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:w-full after:bg-yellow-400"
                  : ""
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            className="ml-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition"
            onClick={(e) =>
              scrollToSection(e, "#section-booking", undefined, setActive)
            }
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="text-yellow-400 transition-transform transform hover:scale-110"
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
  <div className="fixed inset-0 z-50 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] backdrop-blur-md p-6 flex flex-col">
    <div className="flex justify-end">
      <button
        onClick={() => setOpen(false)}
        className="text-yellow-400 hover:rotate-90 transition-transform"
        aria-label="Close menu"
      >
        <X className="w-8 h-8" />
      </button>
    </div>

    <div
  className="mt-10 flex flex-col items-start space-y-6
    bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]
    p-6 rounded-md shadow-lg backdrop-blur-md"
>
  {NAV_LINKS.filter(link => link.label !== "Book").map((link) => (
    <button
      key={link.label}
      onClick={(e) => scrollToSection(e, link.href, setOpen, setActive)}
      className={`text-lg font-medium text-white hover:text-yellow-300 transition-all ${
        active === link.href
          ? "underline underline-offset-8 decoration-yellow-400 decoration-2"
          : ""
      }`}
    >
      {link.label}
    </button>
  ))}
  <Button
    className="mt-4 w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-full shadow-lg transition"
    onClick={(e) => scrollToSection(e, "#section-booking", setOpen, setActive)}
  >
    Book Now
  </Button>
</div>

  </div>
)}

    </nav>
  );
}

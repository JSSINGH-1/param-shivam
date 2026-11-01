"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { studioMetadata } from "@/lib/seo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F6F1]/95 backdrop-blur-md shadow-sm border-b border-[#A58A68]/15 py-3.5"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Studio Brand Wordmark Logo */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="PARAM SANTI Studio Home"
          >
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.24em] font-medium text-[#242424] group-hover:text-[#A58A68] transition-colors uppercase">
              PARAM SANTI
            </span>
            <span className="text-[9px] tracking-[0.36em] uppercase text-[#A58A68] font-medium -mt-0.5 pl-0.5">
              Interior Design Studio
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] uppercase tracking-[0.18em] font-medium text-[#242424]/80 hover:text-[#A58A68] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A58A68] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Direct Phone & Consultation CTA */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${studioMetadata.telephone.replace(/\s+/g, "")}`}
              className="hidden lg:flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-[#242424]/75 hover:text-[#A58A68] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A58A68]" />
              <span>{studioMetadata.telephone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#242424] text-[#F8F6F1] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#A58A68] transition-all duration-200 shadow-sm group"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F8F6F1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#242424] hover:text-[#A58A68] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F8F6F1] p-6 flex flex-col justify-between shadow-2xl z-50 border-l border-[#A58A68]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#A58A68]/20">
                <div>
                  <span className="font-serif-luxury text-xl tracking-[0.22em] font-semibold text-[#242424] uppercase block">
                    PARAM SANTI
                  </span>
                  <span className="text-[9px] tracking-[0.28em] uppercase text-[#A58A68] font-medium">
                    Led by Shivam
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#242424] hover:text-[#A58A68]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-serif-luxury tracking-wider text-[#242424] hover:text-[#A58A68] transition-colors py-2 flex items-center justify-between border-b border-[#A58A68]/10"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A58A68]" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#A58A68]/20 space-y-3">
              <div className="text-xs text-[#242424]/70">
                <p className="font-medium text-[#242424]">PARAM SANTI Studio</p>
                <a
                  href={`tel:${studioMetadata.telephone.replace(/\s+/g, "")}`}
                  className="block mt-1 font-medium text-[#A58A68]"
                >
                  {studioMetadata.telephone}
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#242424] text-[#F8F6F1] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#A58A68] transition-colors"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

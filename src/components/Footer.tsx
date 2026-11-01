"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { studioMetadata } from "@/lib/seo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#181818] text-[#EDE6DC] relative overflow-hidden border-t border-[#A58A68]/20">
      {/* Top Banner with Studio Wordmark */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 sm:pt-16 pb-10 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          <div className="md:col-span-7 space-y-3">
            <Link href="/" className="inline-block group">
              <span className="font-serif-luxury text-2xl sm:text-3xl tracking-[0.24em] font-light text-[#F8F6F1] uppercase block group-hover:text-[#C5A880] transition-colors">
                PARAM SANTI
              </span>
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#A58A68] font-medium block mt-0.5">
                Designing Spaces. Creating Experiences.
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#EDE6DC]/70 max-w-lg font-sans-clean leading-relaxed">
              An interior design studio led by <strong className="font-medium text-[#F8F6F1]">Shivam</strong>. We design and build beautiful homes and functional workspaces with personal attention, quality materials, and careful planning.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col md:items-end justify-between space-y-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-[#A58A68]/30 text-xs uppercase tracking-[0.18em] text-[#EDE6DC] hover:text-[#C5A880] hover:border-[#C5A880] transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory Columns */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-xs">
          {/* 5 Main Section Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[#EDE6DC]/75">
              <li>
                <a href="#" className="hover:text-[#C5A880] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C5A880] transition-colors">About Shivam &amp; Studio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">Interior Design Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C5A880] transition-colors">Our Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5A880] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Our Services
            </h4>
            <ul className="space-y-2 text-[#EDE6DC]/75">
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">Villas &amp; Independent Homes</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">Apartments &amp; Penthouses</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">Modular Kitchens &amp; Living Rooms</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">Offices &amp; Workspaces</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C5A880] transition-colors">Retail Stores &amp; Restaurants</a>
              </li>
            </ul>
          </div>

          {/* Atelier Coordinates & Social */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#C5A880]">
              Contact Information
            </h4>
            <div className="space-y-2 text-[#EDE6DC]/75">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0 mt-0.5" />
                <span>{studioMetadata.address.streetAddress}, {studioMetadata.address.addressLocality}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                <a href={`tel:${studioMetadata.telephone.replace(/\s+/g, "")}`} className="hover:text-[#C5A880]">
                  {studioMetadata.telephone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] flex-shrink-0" />
                <a href={`mailto:${studioMetadata.email}`} className="hover:text-[#C5A880]">
                  {studioMetadata.email}
                </a>
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#EDE6DC] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-[#EDE6DC] hover:text-[#C5A880] hover:border-[#C5A880] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#EDE6DC]/50">
        <p>
          &copy; {new Date().getFullYear()} PARAM SANTI. Directed by Shivam. All rights reserved.
        </p>
        <p className="tracking-wide">
          Designing Spaces. Creating Experiences.
        </p>
      </div>
    </footer>
  );
}

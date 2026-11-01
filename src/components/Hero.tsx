"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        {/* Subtle Category Attribution */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A58A68]" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#A58A68] font-semibold">
            Interior Design Studio &bull; Led by Shivam
          </span>
        </div>

        {/* Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Typography & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.75rem] font-light leading-[1.08] tracking-[-0.01em] text-[#242424]">
              Beautiful Spaces. <br />
              <span className="italic font-normal text-[#A58A68]">
                Designed for You.
              </span>
            </h1>

            <p className="font-sans-clean text-base sm:text-lg text-[#242424]/75 max-w-xl font-normal leading-relaxed">
              At <strong className="font-semibold text-[#242424]">PARAM SANTI</strong>, we create beautiful and comfortable spaces for homes and businesses. Led by <strong className="font-semibold text-[#242424]">Shivam</strong>, our team takes care of every detail from planning and design to the final handover.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#242424] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A58A68] transition-all duration-200 shadow-sm group"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 text-[#F8F6F1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-[#242424]/30 text-[#242424] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#DED2C2]/40 hover:border-[#A58A68] transition-all duration-200"
              >
                <span>Book a Consultation</span>
              </a>
            </div>
          </div>

          {/* Right: Featured Architectural Masterpiece Photography */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0" style={{ position: "relative" }}>
            <div
              className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full min-h-[380px] overflow-hidden shadow-xl bg-[#EFE9E0] border border-[#A58A68]/20 group"
              style={{ position: "relative", minHeight: "380px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85"
                alt="PARAM SANTI luxury living room interior design"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/70 via-transparent to-transparent opacity-75" />

              {/* Minimal Project Identifier Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#F8F6F1]/95 backdrop-blur-md border border-[#A58A68]/25 shadow-sm">
                <span className="text-[9px] uppercase tracking-[0.24em] text-[#A58A68] font-semibold block mb-0.5">
                  Featured Project
                </span>
                <h3 className="font-serif-luxury text-base sm:text-lg text-[#242424] font-medium leading-tight">
                  The Sovereign Villa
                </h3>
                <p className="text-[11px] text-[#242424]/70 mt-0.5">
                  6,800 sq.ft &bull; Full Home Interior &bull; Bengaluru
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#242424]/50">
        <span>PARAM SANTI &bull; Designing Spaces. Creating Experiences.</span>
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-[#242424]/60 hover:text-[#A58A68] transition-colors"
        >
          <span>About Studio</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

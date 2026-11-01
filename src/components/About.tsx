"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Compass, Layers, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F8F6F1] relative overflow-hidden border-t border-[#A58A68]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.24em] text-[#A58A68] font-semibold block mb-2.5">
            About PARAM SANTI
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#242424] leading-[1.15]">
            Thoughtful Design. <br />
            <span className="italic font-normal text-[#A58A68]">Built to Last.</span>
          </h2>
        </div>

        {/* Content Grid: Shivam's Professional Portrait & Studio Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Shivam's Professional Photograph */}
          <div className="lg:col-span-5 relative" style={{ position: "relative" }}>
            <div
              className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-[#ECE5DB] border border-[#A58A68]/30 shadow-xl group"
              style={{ position: "relative" }}
            >
              <Image
                src="/shivam-portrait.jpg"
                alt="Shivam, Principal Engineer and Lead Designer at PARAM SANTI Interior Design Studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/75 via-transparent to-transparent opacity-90" />

              {/* Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-semibold block">
                  Lead Designer &amp; Engineer
                </span>
                <h3 className="font-serif-luxury text-2xl text-white font-normal mt-0.5">
                  Shivam
                </h3>
                <p className="text-xs text-[#EDE6DC]/85 font-sans-clean mt-0.5">
                  Founder &bull; PARAM SANTI Studio
                </p>
              </div>
            </div>
          </div>

          {/* Studio Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#242424] font-normal leading-snug">
                Designed for Comfort. Built with Care.
              </h3>

              <p className="text-sm sm:text-base text-[#242424]/80 leading-relaxed font-sans-clean">
                At <strong className="font-semibold text-[#242424]">PARAM SANTI</strong>, we believe your home or workspace should be a place where you feel completely comfortable, relaxed, and happy.
              </p>

              <p className="text-sm sm:text-base text-[#242424]/80 leading-relaxed font-sans-clean">
                Our studio is led by <strong className="font-semibold text-[#242424]">Shivam</strong>, an experienced engineer and interior designer. With an engineering background, Shivam ensures that every project is not only beautiful to look at, but also practical, long-lasting, and properly planned down to the smallest detail.
              </p>

              <p className="text-sm sm:text-base text-[#242424]/80 leading-relaxed font-sans-clean">
                We use high-quality natural wood, real stone, and durable fittings that look great and stay strong for years. From the first idea to the day you move in, we handle the entire project with complete honesty and care.
              </p>
            </div>

            {/* 3 Core Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#A58A68]/20">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#242424]">
                  <Compass className="w-3.5 h-3.5 text-[#A58A68]" />
                  <span>Smart Layouts</span>
                </div>
                <p className="text-xs text-[#242424]/70 leading-relaxed">
                  Open, airy spaces with plenty of light and easy movement.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#242424]">
                  <Layers className="w-3.5 h-3.5 text-[#A58A68]" />
                  <span>Quality Materials</span>
                </div>
                <p className="text-xs text-[#242424]/70 leading-relaxed">
                  Real wood, stone, and durable fittings that stand the test of time.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-[#242424]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A58A68]" />
                  <span>Personal Attention</span>
                </div>
                <p className="text-xs text-[#242424]/70 leading-relaxed">
                  Shivam personally oversees your project from start to finish.
                </p>
              </div>
            </div>

            {/* Direct Link */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#242424] hover:text-[#A58A68] transition-colors group"
              >
                <span>Talk to Shivam About Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#A58A68] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

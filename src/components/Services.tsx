"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Home, Building2 } from "lucide-react";

interface ServiceCard {
  id: string;
  category: "Residential" | "Commercial";
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

const servicesList: ServiceCard[] = [
  // Residential Services
  {
    id: "villas-residences",
    category: "Residential",
    title: "Villas & Independent Homes",
    subtitle: "Complete interior design for spacious homes and villas.",
    description:
      "We design every room of your villa to feel warm, open, and comfortable. From high ceilings and living rooms to private bedrooms and courtyards, we take care of the entire project.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom woodwork, marble flooring, and wall panels",
      "Soft, warm lighting designed for morning and evening",
      "Open layouts connecting indoor living with balcony views",
    ],
  },
  {
    id: "penthouses-apartments",
    category: "Residential",
    title: "Apartments & Penthouses",
    subtitle: "Smart, modern designs that make city living easy.",
    description:
      "We help you make the best use of every square foot. With smart hidden storage, clean layouts, and natural light, your apartment feels spacious, quiet, and clutter-free.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Built-in floor-to-ceiling wardrobes and cabinets",
      "Sound-reducing doors and partitions for quiet sleep",
      "Custom furniture measured perfectly to fit your space",
    ],
  },
  {
    id: "kitchen-living",
    category: "Residential",
    title: "Modular Kitchens & Living Rooms",
    subtitle: "Easy-to-use kitchens and comfortable family living areas.",
    description:
      "We build clean, practical kitchens that make daily cooking simple, along with welcoming living rooms where your family and guests love to sit together and relax.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Scratch-proof, heat-resistant stone kitchen slabs",
      "Smooth soft-close drawers and organized storage",
      "Comfortable sofas, TV units, and dining setups",
    ],
  },

  // Commercial Services
  {
    id: "corporate-offices",
    category: "Commercial",
    title: "Offices & Workspaces",
    subtitle: "Professional offices where teams work comfortably.",
    description:
      "We design modern workspaces that impress visiting clients and give your team a quiet, comfortable environment to focus, collaborate, and get work done.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Executive cabins and soundproof conference rooms",
      "Clean glass partitions with good acoustic privacy",
      "Comfortable ergonomic chairs and organized work desks",
    ],
  },
  {
    id: "retail-showrooms",
    category: "Commercial",
    title: "Retail Stores & Showrooms",
    subtitle: "Attractive spaces that make products stand out.",
    description:
      "We design retail stores and showrooms that catch the customer's eye. Clear pathways and bright display lighting make browsing and shopping easy and enjoyable.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Bright, focused lights to highlight your merchandise",
      "Custom display racks, shelves, and billing counters",
      "Comfortable customer seating and private trial rooms",
    ],
  },
  {
    id: "hospitality-lounges",
    category: "Commercial",
    title: "Cafés, Restaurants & Lounges",
    subtitle: "Warm, inviting spaces where guests love to spend time.",
    description:
      "From cafés and restaurants to boutique hotel lounges, we create welcoming atmospheres with warm lighting, durable seating, and attractive interior features.",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Attractive reception, service, and bar counters",
      "Warm ambient lighting that sets a relaxed mood",
      "Durable, easy-to-clean fabrics for high-traffic areas",
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"Residential" | "Commercial">("Residential");

  const currentServices = servicesList.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#EDE6DC]/40 relative overflow-hidden border-t border-[#A58A68]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.24em] text-[#A58A68] font-semibold block mb-2.5">
              What We Do
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#242424] leading-[1.15]">
              Residential &amp; Commercial <br />
              <span className="italic font-normal text-[#A58A68]">Interior Design</span> Services.
            </h2>
          </div>

          {/* Clean Category Selector Tabs */}
          <div className="inline-flex p-1 bg-[#F8F6F1] border border-[#A58A68]/30 shadow-sm self-start md:self-end">
            <button
              type="button"
              onClick={() => setActiveCategory("Residential")}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 ${
                activeCategory === "Residential"
                  ? "bg-[#242424] text-[#F8F6F1] shadow"
                  : "text-[#242424]/70 hover:text-[#242424]"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Residential Interiors</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("Commercial")}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 ${
                activeCategory === "Commercial"
                  ? "bg-[#242424] text-[#F8F6F1] shadow"
                  : "text-[#242424]/70 hover:text-[#242424]"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial Interiors</span>
            </button>
          </div>
        </div>

        {/* 3 Large Beautiful Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#F8F6F1] border border-[#A58A68]/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Large Photography */}
                <div
                  className="relative aspect-[16/11] w-full min-h-[220px] overflow-hidden bg-[#ECE5DB] border-b border-[#A58A68]/20"
                  style={{ position: "relative", minHeight: "220px" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/60 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-medium block">
                      {service.category} Interior
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#242424] font-normal leading-snug group-hover:text-[#A58A68] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs italic text-[#A58A68] font-serif-luxury mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#242424]/75 leading-relaxed font-sans-clean">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-2 border-t border-[#A58A68]/15">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#242424]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A58A68] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#242424] hover:text-[#A58A68] transition-colors"
                >
                  <span>Ask About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle2,
  Send,
} from "lucide-react";
import { studioMetadata } from "@/lib/seo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Interior Design",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Shivam & PARAM SANTI,\n\nI would like to discuss an interior design project.\n\nName: ${
        formData.name || "[My Name]"
      }\nProject: ${formData.projectType}\nPhone: ${
        formData.phone || "Not provided"
      }\n\nI would like to discuss my project with you.`
    );
    return `https://wa.me/919795534562?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F8F6F1] relative overflow-hidden border-t border-[#A58A68]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.24em] text-[#A58A68] font-semibold block mb-2.5">
            Contact Us
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#242424] leading-[1.15]">
            Let&apos;s Discuss Your <br />
            <span className="italic font-normal text-[#A58A68]">Interior Design</span> Project.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Studio Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#242424] text-[#F8F6F1] border border-[#A58A68]/30 shadow-lg space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] font-semibold block mb-1">
                  PARAM SANTI Studio
                </span>
                <h3 className="font-serif-luxury text-2xl text-[#F8F6F1] font-light">
                  Get in Touch
                </h3>
                <p className="text-xs text-[#EDE6DC]/75 mt-1 font-sans-clean">
                  Speak directly with Shivam, Founder &amp; Lead Designer.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4 pt-3 border-t border-white/10 text-xs">
                <a
                  href={`tel:${studioMetadata.telephone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3.5 text-[#EDE6DC] hover:text-[#C5A880] transition-colors"
                >
                  <div className="w-8 h-8 bg-white/5 border border-[#A58A68]/30 flex items-center justify-center text-[#C5A880]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block">Phone</span>
                    <span className="font-medium">{studioMetadata.telephone}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${studioMetadata.email}`}
                  className="flex items-center gap-3.5 text-[#EDE6DC] hover:text-[#C5A880] transition-colors"
                >
                  <div className="w-8 h-8 bg-white/5 border border-[#A58A68]/30 flex items-center justify-center text-[#C5A880]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block">Email</span>
                    <span className="font-medium">{studioMetadata.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-[#EDE6DC]">
                  <div className="w-8 h-8 bg-white/5 border border-[#A58A68]/30 flex items-center justify-center text-[#C5A880]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block">Studio</span>
                    <span className="font-medium">
                      {studioMetadata.address.streetAddress}, {studioMetadata.address.addressLocality}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-[#EDE6DC]">
                  <div className="w-8 h-8 bg-white/5 border border-[#A58A68]/30 flex items-center justify-center text-[#C5A880]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C5A880] block">Hours</span>
                    <span className="font-medium">Monday to Saturday &bull; 10:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Enquiry Button */}
              <div className="pt-3 border-t border-white/10">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#25D366] text-[#141414] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#20ba59] transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Simple, Elegant Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F8F6F1] border border-[#A58A68]/25 shadow-lg p-7 sm:p-10">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 mx-auto bg-[#EDE6DC] border border-[#A58A68]/40 flex items-center justify-center text-[#A58A68]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-[#242424] font-normal">
                  Thank You, {formData.name}
                </h3>
                <p className="text-sm text-[#242424]/75 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. Shivam will contact you within 24 hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#A58A68] uppercase tracking-widest font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif-luxury text-2xl text-[#242424] font-normal">
                    Tell Us About Your Project
                  </h3>
                  <p className="text-xs text-[#242424]/65 mt-1 font-sans-clean">
                    Fill in your details below, and Shivam will get back to you shortly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#242424]/80 block">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#EDE6DC]/40 border border-[#A58A68]/30 text-sm text-[#242424] focus:outline-none focus:border-[#242424] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#242424]/80 block">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 97955 34562"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#EDE6DC]/40 border border-[#A58A68]/30 text-sm text-[#242424] focus:outline-none focus:border-[#242424] transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#242424]/80 block">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#EDE6DC]/40 border border-[#A58A68]/30 text-sm text-[#242424] focus:outline-none focus:border-[#242424] transition-all"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-1">
                  <label htmlFor="projectType" className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#242424]/80 block">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#EDE6DC]/40 border border-[#A58A68]/30 text-sm text-[#242424] focus:outline-none focus:border-[#242424] transition-all"
                  >
                    <option value="Residential: Villa or Independent Home">Residential: Villa or Independent Home</option>
                    <option value="Residential: Apartment or Penthouse">Residential: Apartment or Penthouse</option>
                    <option value="Residential: Modular Kitchen & Living Room">Residential: Modular Kitchen &amp; Living Room</option>
                    <option value="Commercial: Office or Workspace">Commercial: Office or Workspace</option>
                    <option value="Commercial: Retail Store or Showroom">Commercial: Retail Store or Showroom</option>
                    <option value="Commercial: Café, Restaurant or Lounge">Commercial: Café, Restaurant or Lounge</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#242424]/80 block">
                    Tell Us About Your Space
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your property location, room requirements, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#EDE6DC]/40 border border-[#A58A68]/30 text-sm text-[#242424] focus:outline-none focus:border-[#242424] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-[#242424] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A58A68] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

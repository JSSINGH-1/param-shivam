"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Maximize2, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#141414]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#F8F6F1] border border-[#A58A68]/30 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-6 bg-[#242424] text-[#F8F6F1] border-b border-[#A58A68]/20 flex-shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#C5A880] font-semibold block">
              {project.category} Portfolio &bull; PARAM SANTI
            </span>
            <h3 id="modal-title" className="font-serif-luxury text-xl sm:text-2xl text-[#F8F6F1] font-light">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#EDE6DC] hover:text-[#C5A880] transition-colors focus:outline-none"
            aria-label="Close project modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Hero Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ECE5DB] border border-[#A58A68]/25 shadow-md" style={{ position: "relative" }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 850px"
              className="object-cover"
            />
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#EDE6DC]/60 border border-[#A58A68]/20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58A68] font-semibold flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Location</span>
              </span>
              <p className="text-xs font-medium text-[#242424]">{project.location}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58A68] font-semibold flex items-center gap-1.5 mb-1">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Area</span>
              </span>
              <p className="text-xs font-medium text-[#242424]">{project.area}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58A68] font-semibold flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Year</span>
              </span>
              <p className="text-xs font-medium text-[#242424]">{project.year}</p>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58A68] font-semibold flex items-center gap-1.5 mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Type</span>
              </span>
              <p className="text-xs font-medium text-[#242424]">{project.type}</p>
            </div>
          </div>

          {/* Project Summary & Concept */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A58A68]">
              About This Project
            </h4>
            <p className="font-serif-luxury text-xl sm:text-2xl text-[#242424] leading-snug">
              &ldquo;{project.summary}&rdquo;
            </p>
            <p className="text-sm text-[#242424]/80 leading-relaxed font-sans-clean">
              {project.concept}
            </p>
          </div>

          {/* Materials */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#242424]">
              Materials Used
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {project.materials.map((material, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-[#FDFBF8] border border-[#A58A68]/30 text-xs text-[#242424] font-medium tracking-wide shadow-sm"
                >
                  &bull; {material}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#242424]">
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#242424]/80">
                  <CheckCircle2 className="w-4 h-4 text-[#A58A68] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Gallery Photography */}
          {project.additionalImages && project.additionalImages.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A58A68]">
                More Photos
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.additionalImages.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden bg-[#ECE5DB] border border-[#A58A68]/20 group shadow-sm"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} photo ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#A58A68]/20 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-[#242424]/60">
              Like this project? Talk to us about designing your space.
            </p>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#242424] text-[#F8F6F1] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A58A68] transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

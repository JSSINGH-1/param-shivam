"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData, ProjectItem } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial">("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F8F6F1] relative overflow-hidden border-t border-[#A58A68]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.24em] text-[#A58A68] font-semibold block mb-2.5">
              Portfolio
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-[#242424] leading-[1.15]">
              Our Recent <br />
              <span className="italic font-normal text-[#A58A68]">Interior Design</span> Projects.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="inline-flex p-1 bg-[#EDE6DC]/60 border border-[#A58A68]/25 shadow-sm self-start md:self-end">
            {(["All", "Residential", "Commercial"] as const).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 ${
                  filter === category
                    ? "bg-[#242424] text-[#F8F6F1] shadow"
                    : "text-[#242424]/70 hover:text-[#242424]"
                }`}
              >
                {category === "All" ? "All Projects" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const isLarge = index % 3 === 0;
            const colSpan = isLarge ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <div
                key={project.id}
                className={`${colSpan} group cursor-pointer`}
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className="relative aspect-[4/3] sm:aspect-[16/11] w-full min-h-[260px] overflow-hidden bg-[#ECE5DB] border border-[#A58A68]/20 shadow-sm hover:shadow-md transition-shadow"
                  style={{ position: "relative", minHeight: "260px" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={isLarge ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[#F8F6F1]/90 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-medium text-[#242424] border border-[#A58A68]/20">
                      {project.category}
                    </span>
                  </div>

                  {/* Corner View Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#242424]/80 backdrop-blur-sm text-[#F8F6F1] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                    <div className="flex items-center gap-3 text-[11px] text-[#C5A880] mb-1 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{project.location}</span>
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3 h-3" />
                        <span>{project.area}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-normal group-hover:text-[#EDE6DC] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#EDE6DC]/80 line-clamp-1 mt-1 font-sans-clean">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Subtext info under card */}
                <div className="mt-3 flex items-center justify-between text-xs text-[#242424]/70 pt-1">
                  <span className="font-medium text-[#242424]">{project.type}</span>
                  <span className="text-[#A58A68] uppercase tracking-wider text-[11px] group-hover:underline">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6F1] text-[#242424] selection:bg-[#A58A68] selection:text-white">
      {/* Minimal Sticky Navigation */}
      <Navbar />

      {/* 5 Core Main Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. About & Shivam's Professional Presentation */}
        <About />

        {/* 3. Residential & Commercial Services */}
        <Services />

        {/* 4. Interior Design Portfolio Gallery */}
        <Projects />

        {/* 5. Simple Enquiry Form, WhatsApp & Contact */}
        <Contact />
      </main>

      {/* Elegant Studio Footer */}
      <Footer />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiWhatsappLine, RiTimeLine, RiSearch2Line, RiMapPin2Line, RiGlobalLine, RiMapPinUserLine } from "react-icons/ri";
import { packages } from "@/data.js";
import Gallery from "@/components/Gallery";

const PackageListing = () => {
  const [activeTab, setActiveTab] = useState("Domestic");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = packages.filter(p => 
    p.type === activeTab && 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWhatsApp = (pkg) => {
    const phoneNumber = "919884546406";
    const message = `*Inquiry for ${pkg.title} (${pkg.duration})*%0A%0AHi Teakwood Holidays, I'm interested in this package. Please share the itinerary and pricing.`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header & Toggle Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#007aff] font-black uppercase tracking-[0.3em] text-[11px] mb-4"
          >
            Curated Collections
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-black text-[#253061] mb-10 leading-tight">
            Premium <span className="text-[#007aff] italic font-serif">Honeymoon</span> Plans.
          </h1>

          {/* Main Toggle Switch */}
          <div className="relative p-1.5 bg-white border border-gray-100 rounded-full shadow-sm flex items-center mb-10">
            <motion.div
              layoutId="activePill"
              className="absolute h-[85%] bg-[#253061] rounded-full z-0"
              initial={false}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              style={{
                width: "calc(50% - 6px)",
                left: activeTab === "Domestic" ? "6px" : "calc(50%)",
              }}
            />
            <button
              onClick={() => setActiveTab("Domestic")}
              className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-full text-sm font-black transition-colors ${
                activeTab === "Domestic" ? "text-white" : "text-gray-400 hover:text-[#253061]"
              }`}
            >
              <RiMapPinUserLine size={18} /> DOMESTIC
            </button>
            <button
              onClick={() => setActiveTab("International")}
              className={`relative z-10 flex items-center gap-2 px-8 py-3 rounded-full text-sm font-black transition-colors ${
                activeTab === "International" ? "text-white" : "text-gray-400 hover:text-[#253061]"
              }`}
            >
              <RiGlobalLine size={18} /> INTERNATIONAL
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md group">
            <RiSearch2Line className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#007aff] transition-colors" />
            <input 
              type="text"
              placeholder={`Search ${activeTab} destinations...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-500 border border-gray-100 py-4 pl-14 pr-6 rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#007aff]/10 focus:border-[#007aff] transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => (
              <motion.div
                layout
                key={pkg.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(37,48,97,0.12)] border border-gray-100 transition-all group"
              >
                {/* Image Area */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-[#253061] uppercase tracking-widest shadow-sm flex items-center gap-2">
                    <RiMapPin2Line className="text-[#007aff]" /> {pkg.location}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3 text-[#007aff]">
                     <RiTimeLine size={16} />
                     <span className="text-[11px] font-black uppercase tracking-widest">{pkg.duration}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#253061] mb-4 leading-tight group-hover:text-[#007aff] transition-colors">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
                    {pkg.description}
                  </p>

                  <button
                    onClick={() => handleWhatsApp(pkg)}
                    className="w-full py-4 bg-[#253061] text-white rounded-2xl font-black text-[13px] flex items-center justify-center gap-3 hover:bg-[#007aff] transition-all group/btn shadow-xl shadow-[#253061]/10"
                  >
                    <RiWhatsappLine size={20} className="group-hover/btn:scale-110 transition-transform" />
                    ENQUIRE VIA WHATSAPP
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredPackages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No packages found in this collection.</p>
          </div>
        )}

      </div>
      <Gallery/>
    </main>
  );
};

export default PackageListing;
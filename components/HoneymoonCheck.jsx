"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RiHeartFill, 
  RiWhatsappLine, 
  RiMapPinUserLine, 
  RiGlobalLine, 
  RiStarFill,
  RiArrowRightLine,
  RiShieldCheckLine
} from "react-icons/ri";

const ModernHoneymoonHome = () => {
  const [activeTab, setActiveTab] = useState("domestic");

  const categories = {
    domestic: [
      { name: "Misty Munnar", price: "Starting ₹14,999", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800" },
      { name: "French Pondicherry", price: "Starting ₹12,499", img: "https://images.unsplash.com/photo-1582512390368-7f9754f3050c?q=80&w=800" },
      { name: "Alleppey Waters", price: "Starting ₹18,999", img: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?q=80&w=800" },
    ],
    international: [
      { name: "Maldives Luxury", price: "Starting ₹85,000", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800" },
      { name: "Bali Tropical", price: "Starting ₹45,000", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800" },
      { name: "Swiss Alps", price: "Starting ₹1,95,000", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800" },
    ]
  };

  const handleWhatsApp = (pkgName = "Honeymoon Packages") => {
    window.open(`https://wa.me/919884546406?text=Hi Karunagaran, I'm interested in ${pkgName}.`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#253061]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              <RiHeartFill className="animate-pulse" /> India's Romantic Escape Specialist
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6">
              Start Your <br />
              <span className="text-[#007aff] italic font-serif font-medium">Forever</span> Here.
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-medium mb-10 max-w-lg">
              Boutique honeymoon planning backed by the legacy of Teakwood Travels. 
              Private cabs, candlelight dinners, and handpicked luxury.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => handleWhatsApp()}
                className="bg-[#253061] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest hover:bg-[#007aff] transition-all flex items-center gap-3 shadow-2xl shadow-[#253061]/20"
              >
                <RiWhatsappLine size={20} /> PLAN MY JOURNEY
              </button>
              <div className="flex items-center gap-3 px-4 text-sm font-bold">
                <div className="flex text-amber-400"><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /></div>
                <span>500+ Happy Couples</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] lg:h-[650px] rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=1200" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Honeymoon"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#253061]/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-teal-400 mb-2">Signature Experience</p>
              <h3 className="text-3xl font-bold italic font-serif">French Quarter, Pondicherry</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. DYNAMIC PACKAGE TOGGLE */}
      <section className="py-24 bg-slate-50 rounded-t-[4rem] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-[#007aff] font-black uppercase tracking-[0.2em] text-[10px]">Curated Collections</span>
              <h2 className="text-4xl font-black mt-2 leading-tight">Explore Destinations</h2>
            </div>
            
            <div className="p-1 bg-white border border-gray-100 rounded-full shadow-sm flex items-center">
              <button 
                onClick={() => setActiveTab("domestic")}
                className={`px-8 py-3 rounded-full text-xs font-black transition-all flex items-center gap-2 ${activeTab === "domestic" ? "bg-[#253061] text-white" : "text-gray-400"}`}
              >
                <RiMapPinUserLine /> DOMESTIC
              </button>
              <button 
                onClick={() => setActiveTab("international")}
                className={`px-8 py-3 rounded-full text-xs font-black transition-all flex items-center gap-2 ${activeTab === "international" ? "bg-[#253061] text-white" : "text-gray-400"}`}
              >
                <RiGlobalLine /> INTERNATIONAL
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {categories[activeTab].map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
                    <img src={pkg.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" alt={pkg.name} />
                  </div>
                  <div className="px-4 pb-4">
                    <h4 className="text-xl font-black mb-1">{pkg.name}</h4>
                    <p className="text-gray-400 text-sm font-bold mb-6">{pkg.price}</p>
                    <button 
                      onClick={() => handleWhatsApp(pkg.name)}
                      className="w-full py-4 rounded-2xl border border-gray-100 flex items-center justify-center gap-2 font-black text-[11px] uppercase tracking-widest hover:bg-[#253061] hover:text-white transition-all"
                    >
                      View Details <RiArrowRightLine />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER TRUST SECTION */}
      <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto">
        <div className="bg-[#253061] rounded-[3rem] p-10 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="w-48 h-48 rounded-[2.5rem] bg-slate-700/50 flex-shrink-0 flex items-center justify-center text-5xl italic font-serif">K</div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-black mb-4 leading-tight italic font-serif">
              "Every trip is a new story. We make sure yours is worth telling."
            </h3>
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div>
                <p className="text-teal-400 font-black uppercase text-[10px] tracking-widest">Karunagaran</p>
                <p className="text-slate-400 text-xs">Founder, Teakwood Holidays</p>
              </div>
              <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2 text-xs font-bold">
                <RiShieldCheckLine className="text-teal-400 text-xl" /> Backed by Teakwood Travels
              </div>
            </div>
            <button 
              onClick={() => handleWhatsApp()}
              className="bg-teal-500 text-[#253061] px-8 py-4 rounded-2xl font-black text-[11px] tracking-widest hover:bg-white transition-all"
            >
              CHAT WITH THE EXPERT
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 text-white/5 text-[15rem] font-serif rotate-12">T</div>
        </div>
      </section>
    </div>
  );
};

export default ModernHoneymoonHome;
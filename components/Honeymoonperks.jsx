"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiHeartFill, RiStarSLine, RiShieldCheckLine, RiMapPinRangeLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const HoneymoonHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full  z-0 hidden lg:block" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Emotional Appeal */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full text-rose-600 shadow-sm"
            >
              <RiHeartFill className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">India's Trusted Honeymoon Boutique</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-[#253061] leading-[1.1]"
            >
              Beyond Trips. <br />
              <span className="text-[#007aff] font-serif italic font-medium">Romantic Journeys.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-lg md:text-xl font-medium max-w-lg leading-relaxed"
            >
              We don’t just book hotels; we design experiences. From misty Munnar hills to private water villas in Maldives, your first journey together deserves perfection.
            </motion.p>

            {/* CTA Group */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => window.open('https://wa.me/919884546406', '_blank')}
                className="flex items-center justify-center gap-3 bg-[#253061] text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest hover:bg-[#007aff] transition-all shadow-2xl shadow-[#253061]/20 group"
              >
                <FaWhatsapp className="text-xl group-hover:rotate-12 transition-transform" />
                PLAN MY HONEYMOON
              </button>
              
              <div className="flex items-center gap-4 px-6 py-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => <RiStarSLine key={i} />)}
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">500+ Happy Couples</p>
                </div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100"
            >
              <div className="flex items-center gap-3">
                <RiShieldCheckLine className="text-[#007aff] text-2xl" />
                <span className="text-[11px] font-bold text-[#253061] uppercase leading-tight">Backed by <br/>Teakwood Travels</span>
              </div>
              <div className="flex items-center gap-3">
                <RiMapPinRangeLine className="text-[#007aff] text-2xl" />
                <span className="text-[11px] font-bold text-[#253061] uppercase leading-tight">Pondicherry <br/>Local Experts</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual & Specialty Highlights */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Featured Image */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://www.shutterstock.com/image-photo/happy-young-couple-white-summer-600nw-2472010115.jpg" 
                alt="Honeymoon Destination"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#253061]/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-1">Signature Package</p>
                <p className="text-white text-2xl font-bold">French Quarter Escape, Pondicherry</p>
              </div>
            </div>

            {/* Floating Info Card 1 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-6 z-20 bg-white p-6 rounded-3xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#007aff] text-2xl">
                  <RiHeartFill />
                </div>
                <div>
                  <p className="text-[#253061] font-black text-sm">Honeymoon Decor</p>
                  <p className="text-gray-400 text-[10px] font-bold">COMPLIMENTARY INCLUSION</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Info Card 2 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-10 z-20 bg-white p-6 rounded-3xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-2xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-[#253061] font-black text-sm">Personal Assistant</p>
                  <p className="text-gray-400 text-[10px] font-bold">24/7 ON-TRIP SUPPORT</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HoneymoonHero;
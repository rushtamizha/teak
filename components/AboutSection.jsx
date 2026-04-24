"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RiShieldCheckLine, RiHeart2Line, RiMap2Line, RiCustomerService2Line } from "react-icons/ri";

const AboutSection = () => {
  const stats = [
    { icon: <RiHeart2Line />, label: "Honeymoon Specialists", color: "text-pink-500" },
    { icon: <RiShieldCheckLine />, label: "Trusted Experience", color: "text-[#007aff]" },
    { icon: <RiMap2Line />, label: "Curated Destinations", color: "text-green-500" },
    { icon: <RiCustomerService2Line />, label: "End-to-End Support", color: "text-purple-500" },
  ];

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://www.travassa.in/wp-content/uploads/2016/06/andaman-honeymoon-tour-package.jpg" 
                alt="Teakwood Holidays Experience" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-0 lg:-right-10 z-20 bg-[#253061] text-white p-5 rounded-[2rem] shadow-2xl max-w-[280px]"
            >
              <p className="text-[#007aff] font-black text-4xl mb-1">12+</p>
              <p className="text-sm font-bold opacity-80 leading-tight">Handpicked Romantic Destinations across South India</p>
              <div className="mt-4 w-12 h-1 bg-[#007aff] rounded-full" />
            </motion.div>

            {/* Decorative Background Element */}
            <div className="absolute top-10 -left-10 w-64 h-64 bg-[#007aff]/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#007aff] font-black uppercase tracking-[0.3em] text-[11px]">Our Story</span>
              <div className="flex-1 h-[1px] bg-gray-100" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#007aff] leading-tight mb-8">
              Crafting Memories with <br /> 
              <span className="text-[#253061] italic font-serif">Personalized Care.</span>
            </h2>

            <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
              <p>
                At <span className="text-[#253061] font-bold">Teakwood Holidays</span>, we don’t just plan trips—we design romantic experiences. Built on the trusted foundation of Teakwood Travels, our division is dedicated exclusively to leisure travel and honeymoon planning.
              </p>
              <p>
                Whether it's the misty hills of Munnar or the French coastal charm of Pondicherry, our local expertise ensures better routes, handpicked stays, and seamless execution.
              </p>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl ${item.color} group-hover:bg-[#253061] group-hover:text-white transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-[13px] font-black text-[#253061] leading-tight uppercase tracking-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
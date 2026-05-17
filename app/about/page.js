"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiShieldCheckLine, 
  RiHeart2Line, 
  RiGlobalLine, 
  RiCustomerService2Line,
  RiDoubleQuotesL,
  RiAwardLine
} from "react-icons/ri";

const AboutPage = () => {
  const values = [
    {
      icon: <RiHeart2Line />,
      title: "Honeymoon Experts",
      desc: "Thoughtfully designed experiences including private arrangements and handpicked resorts."
    },
    {
      icon: <RiGlobalLine />,
      title: "Pondicherry Specialists",
      desc: "Our signature strength. Local knowledge ensuring better routes, stays, and seamless execution."
    },
    {
      icon: <RiShieldCheckLine />,
      title: "Trusted Foundation",
      desc: "Built on years of expertise from Teakwood Travels, ensuring reliable ground handling."
    },
    {
      icon: <RiCustomerService2Line />,
      title: "End-to-End Support",
      desc: "From flight assistance to 24/7 on-trip support, we handle everything."
    }
  ];

  return (
    <main className="bg-white">
      {/* 1. Cinematic Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#253061] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2000" 
            className="w-full h-full object-cover opacity-40"
            alt="About Teakwood" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#253061]/80 to-[#253061]" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#007aff] font-semibold uppercase tracking-[0.4em] text-xs"
          >
            Our Story & Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-3xl font-semibold text-white mt-4"
          >
            Crafting Memories, <br /> Not Just Itineraries.
          </motion.h1>
        </div>
      </section>

      {/* 2. The Legacy Section */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000" 
                alt="Teakwood Experience" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-[#007aff] p-10 rounded-[2.5rem] hidden md:block">
              <RiAwardLine className="text-white text-3xl mb-4" />
              <p className="text-white font-semibold text-xl leading-tight">Built on <br /> Trusted Experience</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-[#253061] leading-tight mb-8">
              Welcome to <br /> <span className="text-[#007aff]">Teakwood Holidays</span>
            </h2>
            <div className="space-y-6 text-gray-500 font-medium leading-relaxed">
              <p>
                Built on the trusted foundation of <span className="text-[#253061] font-semibold">Teakwood Travels</span>, 
                our holiday division was created to focus entirely on leisure travel and honeymoon experiences.
              </p>
              <p>
                We believe every journey is personal. That’s why we move away from fixed templates to design 
                customized experiences that align with your expectations and budget.
              </p>
              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl border-l-4 border-[#007aff]">
                <RiDoubleQuotesL className="text-[#007aff] text-3xl shrink-0" />
                <p className=" font-semibold text-[#253061]">
                  "We don't just plan trips—we create experiences that become lifelong memories."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-semibold text-[#253061]">Why Choose Us?</h3>
            <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest mt-2">The Teakwood Promise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-[#007aff] text-2xl mb-6 group-hover:bg-[#253061] group-hover:text-white transition-all">
                  {val.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#253061] mb-4 uppercase tracking-tighter leading-tight">
                  {val.title}
                </h4>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default AboutPage;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RiMapPinUserLine, 
  RiTaxiLine, 
  RiShieldStarLine, 
  RiFlightTakeoffLine, 
  RiCustomerService2Line,
  RiHotelLine 
} from "react-icons/ri";

const Services = () => {
  const mainServices = [
    {
      title: "Honeymoon Specialists",
      desc: "Thoughtfully designed romantic experiences with private arrangements and handpicked luxury resorts.",
      icon: <RiShieldStarLine />,
      color: "bg-blue-50 text-[#007aff]"
    },
    {
      title: "Pondicherry Specialists",
      desc: "Our signature strength. Local expertise in White Town, Auroville, and beachside hotel + taxi combos.",
      icon: <RiMapPinUserLine />,
      color: "bg-indigo-50 text-[#253061]"
    },
    {
      title: "International Support",
      desc: "End-to-end planning for Maldives, Bali, Dubai, and Thailand including visa and flight assistance.",
      icon: <RiFlightTakeoffLine />,
      color: "bg-blue-50 text-[#007aff]"
    },
    {
      title: "Private Cab Solutions",
      desc: "Door-to-door taxi services with reliable ground handling and expert drivers for stress-free travel.",
      icon: <RiTaxiLine />,
      color: "bg-indigo-50 text-[#253061]"
    },
    {
      title: "Customized Itineraries",
      desc: "We don't use fixed templates. Every journey is tailored to your specific expectations and budget.",
      icon: <RiHotelLine />,
      color: "bg-blue-50 text-[#007aff]"
    },
    {
      title: "24/7 On-Trip Support",
      desc: "Personalized support throughout your trip to ensure smooth execution and lifelong memories.",
      icon: <RiCustomerService2Line />,
      color: "bg-indigo-50 text-[#253061]"
    }
  ];

  return (
    <section id="services" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#007aff] font-black uppercase tracking-[0.3em] text-[11px]"
          >
            Professional Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#253061] mt-4 leading-tight"
          >
            Comprehensive Travel Solutions <br /> 
            <span className="text-gray-500">Tailored for You.</span>
          </motion.h2>
          <p className="mt-6 text-gray-500 font-medium leading-relaxed">
            Backed by the trusted experience of Teakwood Travels, we focus exclusively on delivering high-end leisure and romantic getaways.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#007aff]/30 hover:shadow-[0_30px_60px_-15px_rgba(37,48,97,0.1)] transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-[#253061] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
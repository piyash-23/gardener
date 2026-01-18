"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sprout, Droplets, Scissors, Leaf } from "lucide-react";
const ServicesSection = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      icon: Sprout,
      title: "Landscaping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
      image: "/Images/agrico.jfif",
      type: "dark",
    },
    {
      id: 2,
      icon: Leaf,
      title: "Pruning Plants",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
      image: "/Images/khabar.png",
      type: "dark",
    },
    {
      id: 3,
      icon: Droplets,
      title: "Irrigation & Drainage",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
      image: null,
      type: "light",
    },
    {
      id: 4,
      icon: Scissors,
      title: "Garden Maintenance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
      image: null,
      type: "light",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M40,100 Q60,80 80,100 T120,100 T160,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-green-400"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-green-300"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M20,100 Q40,60 60,100 T100,100 T140,100 T180,100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-green-400"
          />
          <path
            d="M50,50 L100,20 L150,50 L150,100 L100,130 L50,100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-green-300"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-green-500 uppercase tracking-wider text-sm font-semibold mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What You Can Do
            <br />
            With <span className="text-green-500">Get Tree</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
                service.type === "dark" ? "bg-gray-900" : "bg-white"
              } ${index === 0 ? "md:col-span-1" : ""} ${
                index === 1 ? "md:col-span-1" : ""
              }`}
            >
              {/* Background Image (for cards with images) */}
              {service.image && (
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-8 md:p-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-6"
                >
                  <div className="bg-green-500 p-4 rounded-2xl shadow-lg">
                    <service.icon
                      className="w-8 h-8 text-white"
                      strokeWidth={2.5}
                    />
                  </div>
                </motion.div>

                {/* Title */}
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 ${
                    service.type === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`mb-6 leading-relaxed ${
                    service.type === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Read More Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center font-semibold group ${
                    service.type === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Read More
                  <svg
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div className="absolute inset-0 bg-green-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-xl"
          >
            View All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
4;

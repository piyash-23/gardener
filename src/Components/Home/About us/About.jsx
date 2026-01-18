"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
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
        triggerOnce: true,
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

  const features = [
    {
      number: "01",
      title: "Guarantee Service",
      description:
        "Desires to obtain pain itself, because it is pain, but occasionally circumstances.",
    },
    {
      number: "02",
      title: "Quality Material",
      description:
        "Ever undertakes laborious physical exercise, except to obtain some advantage.",
    },
    {
      number: "03",
      title: "No Hidden Cost",
      description:
        "To take a trivial example, which sed undertake laborious physical exercise to except.",
    },
    {
      number: "04",
      title: "Dedicated Team",
      description:
        "Expound the actual teachings great explorer the master builder of human happiness.",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className="relative"
            >
              {/* Divider line - hidden on last item */}
              {index < features.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-700" />
              )}

              <div className="pr-0 lg:pr-8">
                <h3 className="text-5xl md:text-6xl font-bold text-gray-700 mb-3">
                  {feature.number}
                </h3>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Lawn mowing image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=500&q=80"
                  alt="Lawn care service"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gardener image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl mt-12"
              >
                <img
                  src="https://images.unsplash.com/photo-1599629954294-cc681b327ddb?w=500&q=80"
                  alt="Professional gardener"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative plant pot - bottom left */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 w-40 h-40 md:w-48 md:h-48"
              >
                <img
                  src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&q=80"
                  alt="Decorative plant"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-2xl z-10"
            >
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  25+
                </div>
                <div className="text-sm md:text-base text-white font-semibold">
                  Years Of
                  <br />
                  Experience
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-4"
            >
              ABOUT US
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Neighborhood Tree, Shrub
              <br />& Lawn{" "}
              <span className="text-green-400">Care Professionals</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-400 mb-6 leading-relaxed"
            >
              Our employees are the backbone of our company. Agrico has an
              ongoing employee training program that includes a regular schedule
              of seminars and information updates on turf safety procedures.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              Great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-xl"
            >
              GET A QUOTE
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

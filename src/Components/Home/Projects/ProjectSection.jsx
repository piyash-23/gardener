"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
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

  const stats = [
    { number: "2860+", label: "Projects Completed" },
    { number: "128", label: "Expert Landscapers" },
    { number: "14", label: "Landscaping Awards" },
    { number: "24+", label: "Years of Experience" },
  ];

  const projects = [
    {
      id: 1,
      title: "Farming Harvest Innovations",
      category: "Farming",
      image: "/Images/farming.png",
    },
    {
      id: 2,
      title: "Garden Landscaping",
      category: "Landscaping",
      image: "/Images/gardening.png",
    },
    {
      id: 3,
      title: "Modern Home Garden",
      category: "Garden Design",
      image: "/Images/garden.png",
    },
    {
      id: 4,
      title: "Outdoor Paradise",
      category: "Outdoor Living",
      image: "/Images/paradise.png",
    },
    {
      id: 5,
      title: "Family Garden Care",
      category: "Maintenance",
      image: "/Images/khabar.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Stats Section */}
      <div className="relative py-16 md:py-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80')`,
          }}
        />

        {/* Stats Grid */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                className="text-center"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                >
                  {stat.number}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="text-sm md:text-base text-gray-300"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-4">
                Our Projects
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                We Have Successful
                <br />
                <span className="text-green-400">50+More Projects</span>
              </h2>

              {/* Project Grid - Small Images */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {projects.slice(0, 4).map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer group"
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Project Info - Visible on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-green-400 text-xs font-semibold mb-1">
                          {project.category}
                        </p>
                        <h4 className="text-white text-sm font-bold">
                          {project.title}
                        </h4>
                      </div>

                      {/* Badge for first item */}
                      {index === 0 && (
                        <div className="absolute top-3 left-3 bg-green-500 px-3 py-1 rounded-full">
                          <span className="text-white text-xs font-semibold">
                            {project.category}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Explore Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-xl"
              >
                EXPLORE MORE
              </motion.button>
            </motion.div>

            {/* Right - Large Image with Small Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Large Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl mb-6"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src="https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=800&q=80"
                    alt="Woman caring for plants"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>

              {/* Two Small Images at Bottom */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4"
              >
                {projects.slice(4, 6).map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer group"
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-green-400 text-xs font-semibold mb-1">
                          {project.category}
                        </p>
                        <h4 className="text-white text-sm font-bold">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative Leaves */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-10 -left-10 w-32 h-32 opacity-20 pointer-events-none"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-green-400"
                >
                  <path
                    d="M50,10 Q30,30 50,50 Q70,30 50,10 M50,50 Q30,70 50,90"
                    fill="currentColor"
                    opacity="0.3"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

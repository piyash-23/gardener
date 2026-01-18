"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";

const ChooseCommitmentSection = () => {
  const [inView, setInView] = useState(false);
  const [email, setEmail] = useState("");
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

  const handleSubscribe = () => {
    console.log("Subscribed:", email);
    setEmail("");
  };

  const features1 = ["No Chemicals", "No Water Waste", "Free Estimates"];

  const features2 = ["No Insect", "No Waste", "Upfront Pricing"];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Why Choose Us Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center"
        >
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-[4/5] relative">
              <img
                src="/Images/vegetable.png"
                alt="Gardener with vegetables"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Decorative Elements on Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-6 left-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full shadow-lg"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-green-400 uppercase tracking-wider text-sm font-semibold mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              People Choose Us
              <br />
              For <span className="text-green-400">Our Great Offers</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our bundle of gardening services include paving, turning,
              artificial grass, decking, fencing, driveways, planting, sheds and
              storage solutions and more. We are devoted to provide the best
              garden.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-xl"
            >
              GET A QUOTE
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Our Commitment Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Green Content Area */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 md:p-12 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    d="M20,50 Q30,30 40,50 T60,50 T80,50"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="30"
                    cy="30"
                    r="15"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <p className="text-white/90 uppercase tracking-wider text-sm font-semibold mb-4">
                  Our Commitment
                </p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  The Most Relaiable
                  <br />
                  Professional Company for
                  <br />
                  Gardening
                </h3>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Column 1 */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white font-bold">01</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          Consultation
                        </h4>
                        <p className="text-white/70 text-xs">
                          Advise our customers
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {features1.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            inView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: 0.6 + index * 0.1,
                          }}
                          className="flex items-center space-x-2"
                        >
                          <div className="bg-white/20 backdrop-blur-sm p-1 rounded">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white/90 text-sm">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white font-bold">02</span>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          Design & Work
                        </h4>
                        <p className="text-white/70 text-xs">
                          Advise our Green
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {features2.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            inView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.1,
                          }}
                          className="flex items-center space-x-2"
                        >
                          <div className="bg-white/20 backdrop-blur-sm p-1 rounded">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white/90 text-sm">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative h-full min-h-[400px] lg:min-h-0"
            >
              <img
                src="https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=800&q=80"
                alt="Happy gardener"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-green-600/20" />
            </motion.div>
          </div>

          {/* Newsletter Section - Overlapping */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl"
          >
            <div className="bg-gradient-to-r from-gray-200 to-gray-100 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Get Notified About The Event!
                  </h4>
                  <p className="text-green-600 text-lg font-semibold">
                    Subscribe Today
                  </p>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                  <div className="relative flex-1 md:flex-initial">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full md:w-80 pl-12 pr-4 py-4 rounded-full border-2 border-gray-300 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400"
                    />
                  </div>
                  <motion.button
                    onClick={handleSubscribe}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 shadow-lg whitespace-nowrap"
                  >
                    SUBSCRIBE
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Spacer for overlapping newsletter */}
        <div className="h-20"></div>
      </div>
    </section>
  );
};

export default ChooseCommitmentSection;

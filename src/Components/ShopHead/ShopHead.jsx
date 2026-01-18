"use client";

import { motion } from "framer-motion";

export default function GardenHeader() {
  return (
    <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 min-h-screen overflow-hidden">
      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 bg-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content Section */}
          <motion.div
            className="space-y-6 lg:space-y-8 z-10 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Make a Beautiful Garden With Your Own Hand
            </motion.h1>

            <motion.p
              className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Find Your Dream Plant for your home decoration with us and we will
              make it happen
            </motion.p>

            <motion.button
              className="group relative px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative flex items-center">
                Shop from here
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative z-10 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative flex items-center justify-center lg:justify-end gap-4 lg:gap-8">
              {/* Decorative glow */}
              <motion.div
                className="hidden md:block absolute left-0 lg:left-auto lg:right-80 top-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-24 lg:w-32 h-32 lg:h-40 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-full blur-2xl" />
              </motion.div>

              {/* Main plant pot */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl scale-110"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Plant container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-end justify-center">
                  {/* Pot */}
                  <motion.div
                    className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-green-800 to-green-900 rounded-t-full relative shadow-2xl"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 rounded-t-full" />

                    {/* Rim */}
                    <motion.div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-[105%] h-4 bg-gradient-to-b from-green-700 to-green-800 rounded-full shadow-lg"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    />

                    {/* Topiary tree */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2">
                      {/* Trunk */}
                      <motion.div
                        className="w-3 h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-amber-800 to-amber-900 mx-auto rounded-sm shadow-md"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      />

                      {/* Foliage ball */}
                      <motion.div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-green-500 via-green-600 to-green-700 rounded-full shadow-2xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          delay: 1,
                        }}
                      >
                        {/* Texture overlay */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/40 via-transparent to-green-900/40" />

                        {/* Highlight */}
                        <motion.div
                          className="absolute top-6 right-8 w-12 h-12 bg-green-400/30 rounded-full blur-md"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />

                        {/* Small leaves detail */}
                        <div className="absolute inset-0 rounded-full opacity-60">
                          {[...Array(12)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-4 h-4 bg-green-600/50 rounded-full"
                              style={{
                                top: `${Math.random() * 80 + 10}%`,
                                left: `${Math.random() * 80 + 10}%`,
                              }}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                duration: 0.3,
                                delay: 1.2 + i * 0.05,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Decorative leaves - floating left side */}
                  <motion.div
                    className="absolute left-0 top-1/3 -translate-x-12 sm:-translate-x-16 lg:-translate-x-20"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [-12, -8, -12],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex flex-col gap-2 transform -rotate-12">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-12 h-6 sm:w-16 sm:h-7 lg:w-20 lg:h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full shadow-lg"
                          style={{
                            transform: `translateX(${i * 4}px) rotate(${i * 5}deg)`,
                          }}
                          initial={{ x: -100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.8 + i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </header>
  );
}

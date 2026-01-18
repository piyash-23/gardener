"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ShoppingCart, Sprout } from "lucide-react";

export const Navbar = ({ isHomePage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Get current path for active link highlighting
    setCurrentPath(window.location.pathname);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Items", path: "/items" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage && !isScrolled
          ? "bg-transparent"
          : "bg-gradient-to-r from-green-800 to-green-700 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="bg-green-500 p-2 rounded-lg">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              AGR<span className="text-green-400">O</span>XO
            </span>
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className={`transition-colors duration-200 font-medium ${
                  currentPath === item.path
                    ? "text-green-300"
                    : "text-white hover:text-green-300"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2"
            >
              <ShoppingCart className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 bg-green-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-200 shadow-lg"
            >
              Login
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

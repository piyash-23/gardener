"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const usefulLinks = [
    { name: "About Us", href: "#" },
    { name: "Meet Experts", href: "#" },
    { name: "A Quote", href: "#" },
    { name: "Location", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Appointment", href: "#" },
    { name: "Private Policy", href: "#" },
    { name: "Contact", href: "#" },
    { name: "FAQ's", href: "#" },
    { name: "Services", href: "#" },
  ];

  const recentPosts = [
    {
      date: "September 4, 2020",
      title: "Guide Administrators Before Starting Building Projects.",
      image: "https://via.placeholder.com/60", // Replace with your image paths
    },
    {
      date: "September 4, 2020",
      title: "Building Public Support For A School Bond Referendum",
      image: "https://via.placeholder.com/60",
    },
    {
      date: "September 4, 2020",
      title: "Collaboration For Accurate Time And Cost Estimating",
      image: "https://via.placeholder.com/60",
    },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1: Logo & About */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-green-600 p-1 rounded-sm">
              {/* Simple SVG Leaf Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-10 10Z" />
                <path d="M7 21a5 5 0 0 1-5-5c0-3 2-3 3-6 2 3 3 3 2 6a2 2 0 0 1-1 1Z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white tracking-wider">
              AGRICO
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Agrico has an ongoing employee training program that includes a
            regular schedule of seminars and information updates. Great explorer
            of the truth, the master-builder.
          </p>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">
            Useful links
          </h3>
          <div className="grid grid-cols-2 gap-y-3 gap-x-4">
            {usefulLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm hover:text-green-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Recent Posts */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">
            Recent Posts
          </h3>
          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <div
                key={index}
                className="flex gap-4 items-start group cursor-pointer"
              >
                <img
                  src={post.image}
                  alt="Post thumbnail"
                  className="w-16 h-16 object-cover rounded shadow-md"
                />
                <div className="space-y-1">
                  <p className="text-[10px] uppercase text-gray-500">
                    {post.date}
                  </p>
                  <p className="text-xs text-gray-300 group-hover:text-green-500 transition-colors font-medium leading-snug">
                    {post.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs">
        <p>
          Copyright © 2022 <span className="text-white">Lawnella</span>. All
          rights reserved.
          <Link href="#" className="ml-2 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

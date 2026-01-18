"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Card = ({ plant }) => {
  const { id, image, name, description, category, price } = plant;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-52">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
          priority={false}
        />

        <span className="absolute top-4 left-4 bg-green-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>

        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">৳{price}</span>

          <Link
            href={`/items/${id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

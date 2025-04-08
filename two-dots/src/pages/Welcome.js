import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Welcome() {
  const features = [
    {
      title: "Explore New Cities",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=60",
      description: "Expand your leasing operations into vibrant, fast-growing urban areas."
    },
    {
      title: "Mountain Getaways",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      description: "Discover opportunities in serene mountainous properties for high-end clients."
    },
    {
      title: "Luxury Living",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      description: "Manage elite properties with premium risk assessments powered by AI."
    },
    {
      title: "Smart Communities",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60",
      description: "Support tech-driven residential communities with smarter approvals."
    },
    {
      title: "Coastal Properties",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
      description: "Manage and expand into beautiful seaside rental markets securely."
    },
    {
      title: "Urban Centers",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
      description: "Handle high-density rental applications quickly with our fraud prevention AI."
    },
    {
      title: "Historic Sites",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      description: "Preserve and lease historical treasures safely with Two Dots insights."
    },
    {
      title: "Vacation Rentals",
      image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=60",
      description: "Grow into vacation rental markets with smarter guest verification tools."
    }
  ];
  

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 overflow-hidden p-8">

      {/* Floating Dots */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-200 rounded-full opacity-20 top-16 left-16"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-green-200 rounded-full opacity-20 bottom-16 right-16"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      {/* Main Welcome Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
          Welcome to Two Dots!
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10">
          Explore endless leasing possibilities with smart AI-backed verifications.
        </p>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <Link
          to="/"
          className="mt-16 inline-block bg-black text-white px-10 py-4 rounded-full hover:bg-gray-800 transition text-lg"
        >
          Explore Two Dots
        </Link>

      </motion.div>

    </div>
  );
}

import { motion } from "framer-motion";

export default function HighlightSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-black text-white py-20 px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT: Text Content */}
        <div className="text-left flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Information is power.
          </h2>
          <p className="text-xl md:text-2xl max-w-lg mb-6">
            Supercharge underwriting and fraud prevention with an end-to-end system that ensures accuracy, streamlines communications and eliminates inefficiencies.
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-md">
            With Two Dots, you can know it all without doing it all.
          </p>
        </div>

        {/* RIGHT: Floating Animated Dots */}
        <div className="relative flex-1 h-80 flex items-center justify-center">
          {/* Dot 1 */}
          <motion.div
            className="absolute w-16 h-16 bg-blue-400 rounded-full opacity-30"
            animate={{
              x: ["0%", "50%", "0%"],
              y: ["0%", "-50%", "0%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />

          {/* Dot 2 */}
          <motion.div
            className="absolute w-20 h-20 bg-green-400 rounded-full opacity-30"
            animate={{
              x: ["0%", "-40%", "0%"],
              y: ["0%", "50%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>

      </div>
    </motion.section>
  );
}

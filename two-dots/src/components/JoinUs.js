import { motion } from "framer-motion";

export default function JoinUs() {
  return (
    <motion.section
      id="join" // <-- important for ScrollLink
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-gray-100 py-20 px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT: Text */}
        <div className="text-left flex-1">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Join Us
          </h2>
          <p className="text-lg text-gray-700 mb-4 max-w-xl">
            Solve challenging problems with real-world impact. At Two Dots, you'll work with cutting-edge AI technology and help redefine the future of leasing and fraud prevention.
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Be part of a fast-growing team that values innovation, collaboration, and growth. 
            Your work will shape the next generation of property management solutions.
          </p>

          <a 
            href="https://www.twodots.net/join"  target="blank"// <-- Replace with your real careers page or just '#'
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all shadow-md"
          >
            View Open Roles
          </a>
        </div>

        {/* RIGHT: Fun Animated Dots */}
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

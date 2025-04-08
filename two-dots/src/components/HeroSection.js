import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center p-12 md:p-24 min-h-[80vh] bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      
      {/* Two Dots Orbit Animation */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
  {/* Invisible Orbit Center */}
  <div className="relative w-[500px] h-[500px]">
    
    {/* First Dot */}
    <motion.div
      className="absolute top-0 left-1/2 w-12 h-12 bg-blue-500 rounded-full opacity-30 blur-sm -translate-x-1/2"
      animate={{
        rotate: 360,
        transformOrigin: "50% 150%"
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 7, 
      }}
    />

    {/* Second Dot */}
    <motion.div
      className="absolute bottom-0 left-1/2 w-12 h-12 bg-green-500 rounded-full opacity-30 blur-sm -translate-x-1/2"
      animate={{
        rotate: 360,
        transformOrigin: "50% -50%"
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 7 // <-- Faster orbit
      }}
    />

  </div>
</div>


      {/* Main Content (always above circles) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
        >
          Smarter Leasing Decisions, Powered by AI
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-2xl text-gray-600 max-w-3xl mb-10"
        >
          Two Dots automates resident approvals, detects fraud instantly, and empowers property managers to make faster, safer leasing decisions — with one seamless platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all shadow-md"
          >
            Learn More
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/signup"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all shadow-md"
          >
            Get Started
          </motion.a>
        </motion.div>
      </motion.div>

    </section>
  );
}

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white overflow-hidden py-20 px-8">

      {/* Floating Two Dots in Background (exit after 12s) */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
        
        {/* Dot 1 */}
        <motion.div
          className="absolute w-48 h-48 bg-blue-200 rounded-full opacity-30"
          animate={{
            x: ["-10vw", "30vw", "-20vw"],
            y: ["-10vh", "20vh", "-10vh"],
            opacity: [0.7, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
          }}
        />

        {/* Dot 2 */}
        <motion.div
          className="absolute w-56 h-56 bg-green-200 rounded-full opacity-30"
          animate={{
            x: ["20vw", "-30vw", "10vw"],
            y: ["30vh", "-20vh", "30vh"],
            opacity: [0.7, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content (Above Dots) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          About Two Dots
        </h2>

        <p className="text-xl text-gray-700 mb-6">
          At Two Dots, we believe better decisions start with better data.
        </p>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Our AI-driven platform transforms property management by automating underwriting and fraud detection. We empower leasing teams to work smarter, verify faster, and minimize risks before they happen.
        </p>

        {/* Cards Section (Left + Right) */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Unlock Opportunities
            </h3>
            <p className="text-gray-600">
              Spot what others miss — from hidden income sources to sophisticated fraud patterns. Stay ahead by leveraging AI insights that go beyond surface-level checks.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Move Two Steps Ahead
            </h3>
            <p className="text-gray-600">
              Automate document understanding, reduce operational costs, and approve residents with confidence. With Two Dots, every leasing decision becomes smarter and faster.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

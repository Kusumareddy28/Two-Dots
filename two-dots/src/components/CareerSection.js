import { motion } from "framer-motion";

export default function CareersSection() {
  return (
    <motion.section
      id="join"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-gray-100 p-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
        <p className="text-xl mb-8">
          We're growing! If you're excited about building the future of property management with AI, check out our open roles.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg transition-all"
        >
          See Careers
        </motion.button>
      </div>
    </motion.section>
  );
}

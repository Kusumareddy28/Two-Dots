import { motion } from "framer-motion";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Apply",
      description: "Residents submit applications securely and digitally through our platform — anytime, anywhere.",
    },
    {
      title: "Analyze",
      description: "Our advanced AI automatically verifies income, detects inconsistencies, and screens for fraud in seconds.",
    },
    {
      title: "Approve",
      description: "Property managers receive instant, accurate insights to approve residents faster and minimize risk.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative bg-white py-20 px-8 overflow-hidden"
    >
      {/* Background Floating Dots */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 10, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-60 h-60 bg-green-100 rounded-full opacity-20"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 12, repeatType: "mirror" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="bg-white shadow-lg rounded-3xl p-8 border hover:shadow-2xl transition-all flex flex-col items-center"
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-blue-400 to-green-400 text-white text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

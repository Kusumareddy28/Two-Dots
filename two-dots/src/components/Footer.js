import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="text-center text-sm text-gray-500 p-6"
    >
      Built by Kusuma Reddyvari | Inspired by Two Dots
    </motion.footer>
  );
}

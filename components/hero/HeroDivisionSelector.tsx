import { motion } from "framer-motion";

export default function HeroDivisionSelector() {
  return (
    <div className="mt-8 flex w-full max-w-sm flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          px-6
          py-5
          text-left
          transition-all
          duration-300
          hover:border-[#C8102E]
          hover:bg-white/10
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Cleaning Services
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Professional facility maintenance
            </p>
          </div>

          <span
            className="
              text-[#C8102E]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </div>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.98 }}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          px-6
          py-5
          text-left
          transition-all
          duration-300
          hover:border-[#C8102E]
          hover:bg-white/10
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Security Services
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Trained guards & protection
            </p>
          </div>

          <span
            className="
              text-[#C8102E]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </div>
      </motion.button>
    </div>
  );
}
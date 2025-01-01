"use client";

import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIChatInput() {
  const [input, setInput] = useState<string>("");

  return (
    <form className="relative">
      <input
        type="text"
        name="ai-input"
        id="ai-input"
        placeholder="Tell me about your SaaS..."
        onChange={(e) => setInput(e.target.value)}
        className="h-12 w-[35rem] rounded-full pl-6 pr-12 text-gray-600 font-medium border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 bg-white/90"
      />

      <AnimatePresence>
        {input !== "" ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1 right-1.5"
          >
            <button className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200">
              <ArrowUp className="text-white" />
            </button>
          </motion.div>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </form>
  );
}

"use client";

import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Textarea from "react-textarea-autosize";

export default function AIChatInput() {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className=" w-[35rem] border border-stone-400 rounded-xl px-2 py-4 text-pretty bg-white/90 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
        <div className="flex items-start justify-center gap-2">
          <Textarea
            name="ai-input"
            id="ai-input"
            placeholder="Tell me about your SaaS..."
            onChange={(e) => setInput(e.target.value)}
            maxRows={9}
            minRows={2}
            autoFocus
            className="flex-1 pl-2 text-gray-600 font-medium focus:outline-none resize-none"
            cacheMeasurements
          />

          <AnimatePresence>
            {input !== "" && (
              <motion.div
                key="button"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className=""
              >
                <button
                  type="submit"
                  className="h-8 w-8 bg-zinc-900 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors duration-200"
                >
                  <ArrowUp className="text-white size-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}

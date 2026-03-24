import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Mic } from "lucide-react";

export default function CandidTalksBanner() {
  const [visible, setVisible] = useState(true);
  const today = new Date().getDay(); // 0 = Sunday
  const isToday = today === 0;

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-2.5 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 justify-center">
            <Mic className="w-4 h-4 flex-shrink-0 text-white/90" />
            {isToday ? (
              <p className="text-sm font-semibold text-center">
                🎙️ <span className="font-bold">Today is Candid Talks Sunday!</span> Join Abhijeet sir LIVE right now — free session on life coaching & motivation.
              </p>
            ) : (
              <p className="text-sm font-semibold text-center">
                🎙️ <span className="font-bold">Candid Talks every Sunday</span> — Free live session with Abhijeet Dharmadhikari sir. Life coaching, motivation & Q&A.
                <a
                  href="https://wa.me/919403124077?text=Hello!%20I%20want%20to%20join%20the%20Candid%20Talks%20Sunday%20session.%20Please%20share%20the%20link."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 underline underline-offset-2 hover:text-white/80 font-bold"
                >
                  Join this Sunday →
                </a>
              </p>
            )}
          </div>
          <button
            onClick={() => setVisible(false)}
            className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center flex-shrink-0 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
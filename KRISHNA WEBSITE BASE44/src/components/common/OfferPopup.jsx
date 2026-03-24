import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tag, Zap, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const offers = [
  { type: "discount", label: "Limited Offer!", heading: "15% OFF on IELTS Training", desc: "Use code KRISHNA15 at enrollment. Valid this week only!", color: "from-primary to-primary/80", icon: Tag, cta: "Claim Offer", code: "KRISHNA15" },
  { type: "discount", label: "Flash Sale 🔥", heading: "10% OFF on Success Tower", desc: "Enroll today and save ₹750! Batch starting next Monday.", color: "from-accent to-orange-600", icon: Zap, cta: "Enroll Now", code: "TOWER10" },
  { type: "discount", label: "Weekend Special", heading: "10% OFF on Memory Management", desc: "Join our weekend batch at a special price. Limited seats!", color: "from-violet-600 to-purple-700", icon: Tag, cta: "Book Seat", code: "MEMORY10" },
  { type: "event", label: "Every Sunday 🎙️", heading: "Candid Talks — Live Session", desc: "Join Abhijeet Dharmadhikari sir every Sunday for a free live Candid Talk session. Life coaching, motivation & Q&A!", color: "from-emerald-600 to-teal-700", icon: Calendar, cta: "Join This Sunday", code: null },
];

export default function OfferPopup() {
  const [visible, setVisible] = useState(false);
  const [offerIndex, setOfferIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Show after 5 seconds — always show Candid Talks on Sunday, else random discount
    const timer = setTimeout(() => {
      const today = new Date().getDay(); // 0 = Sunday
      setOfferIndex(today === 0 ? 3 : Math.floor(Math.random() * 3));
      setVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const offer = offers[offerIndex];

  const copyCode = () => {
    if (offer.code) {
      navigator.clipboard.writeText(offer.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", damping: 18 }}
          className="fixed bottom-24 left-6 z-50 w-[300px]"
        >
          <div className={`bg-gradient-to-br ${offer.color} rounded-2xl shadow-2xl overflow-hidden`}>
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <offer.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">{offer.label}</span>
                </div>
                <button onClick={() => setVisible(false)} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <h3 className="text-white font-bold text-base leading-tight mb-2">{offer.heading}</h3>
              <p className="text-white/80 text-xs leading-relaxed mb-4">{offer.desc}</p>

              {offer.code && (
                <button
                  onClick={copyCode}
                  className="w-full mb-3 bg-white/15 hover:bg-white/25 border border-white/30 rounded-xl py-2 flex items-center justify-center gap-2 transition-colors"
                >
                  <span className="text-white font-mono font-bold text-sm tracking-widest">{offer.code}</span>
                  <span className="text-white/70 text-xs">{copied ? "✓ Copied!" : "Tap to copy"}</span>
                </button>
              )}

              <Link to={offer.type === "event" ? "/Contact" : "/Payment"} onClick={() => setVisible(false)}>
                <Button className="w-full rounded-xl bg-white text-foreground hover:bg-white/90 font-semibold text-sm">
                  {offer.cta}
                </Button>
              </Link>
            </div>
            {/* Bottom pulse */}
            <div className="h-1 bg-white/20">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 30, ease: "linear" }}
                className="h-full bg-white/40"
                onAnimationComplete={() => setVisible(false)}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
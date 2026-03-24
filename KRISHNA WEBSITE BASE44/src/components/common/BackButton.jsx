import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/" || location.pathname === "/Home") return null;

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={() => navigate(-1)}
      className="fixed top-24 left-4 z-40 flex items-center gap-2 bg-card/90 backdrop-blur-sm text-foreground border border-border px-3 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-sm font-medium"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="hidden sm:inline">Back</span>
    </motion.button>
  );
}
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeButton() {
  const location = useLocation();
  if (location.pathname === "/" || location.pathname === "/Home") return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Link
        to="/Home"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all text-sm font-medium"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
    </motion.div>
  );
}
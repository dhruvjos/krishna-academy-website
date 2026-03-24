import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://media.base44.com/images/public/69ba19617acf65fae23b485b/c2e8a48a8_generated_8ee2142e.png",
    title: "Unlock Your\nTrue Potential",
    subtitle: "India's Leading Personality Development & Communication Institute",
    cta: "Explore Courses",
    ctaLink: "/Courses",
  },
  {
    image: "https://media.base44.com/images/public/69ba19617acf65fae23b485b/327a73060_generated_bddcbea9.png",
    title: "Master the Art\nof Communication",
    subtitle: "From Spoken English to IELTS — we prepare you for the world stage",
    cta: "Start Learning",
    ctaLink: "/Courses",
  },
  {
    image: "https://media.base44.com/images/public/69ba19617acf65fae23b485b/991dfd065_generated_a615efa0.png",
    title: "Corporate\nExcellence",
    subtitle: "Tailored training programs for organizations and professionals",
    cta: "Learn More",
    ctaLink: "/Courses",
  },
  {
    image: "https://media.base44.com/images/public/69ba19617acf65fae23b485b/d4e72f6d8_generated_e5afbd5d.png",
    title: "Lead with\nConfidence",
    subtitle: "Leadership development programs that transform careers",
    cta: "Get Started",
    ctaLink: "/Contact",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-accent mb-8 rounded-full"
              />
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={slide.ctaLink}>
                  <Button size="lg" className="rounded-full px-8 py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground group">
                    {slide.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/Contact">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-white/30 text-white hover:bg-white/10 hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-white transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-accent" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
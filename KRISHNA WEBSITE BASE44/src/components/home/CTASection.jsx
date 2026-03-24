import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Transform<br />Your Future?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Take the first step towards excellence. Join thousands of successful students who have transformed their lives with Krishna Group.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/Contact">
              <Button size="lg" className="rounded-full px-10 py-6 text-base bg-accent hover:bg-accent/90 text-accent-foreground">
                Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+911234567890">
              <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Phone className="mr-2 w-4 h-4" /> Call Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
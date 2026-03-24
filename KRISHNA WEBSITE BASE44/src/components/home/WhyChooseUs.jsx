import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, TrendingUp, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Target, title: "Result-Oriented", desc: "Our programs are designed with measurable outcomes and real-world impact" },
  { icon: Users, title: "Expert Faculty", desc: "Learn from industry professionals with decades of training experience" },
  { icon: Lightbulb, title: "Innovative Methods", desc: "Cutting-edge teaching techniques that make learning engaging and effective" },
  { icon: TrendingUp, title: "Proven Track Record", desc: "15,000+ successful students and counting across all our programs" },
  { icon: Clock, title: "Flexible Schedules", desc: "Weekend, weekday, and online batches to suit your convenience" },
  { icon: HeartHandshake, title: "Lifetime Support", desc: "Ongoing mentorship and alumni network for continuous growth" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Why Krishna Group</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Education Meets <span className="text-primary">Transformation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              For over 12 years, Krishna Group has been the city's premier institution for personality development 
              and skill enhancement. Our holistic approach combines traditional wisdom with modern teaching 
              methodologies to create lasting impact.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="font-playfair text-4xl font-bold text-primary">98%</p>
                <p className="text-xs text-muted-foreground mt-1">Satisfaction Rate</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-playfair text-4xl font-bold text-accent">4.9</p>
                <p className="text-xs text-muted-foreground mt-1">Average Rating</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-playfair text-4xl font-bold text-primary">50+</p>
                <p className="text-xs text-muted-foreground mt-1">Corporate Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-xl bg-background border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
              >
                <reason.icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-semibold text-foreground mb-1.5">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
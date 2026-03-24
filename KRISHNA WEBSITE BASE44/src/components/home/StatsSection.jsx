import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Award, Building2 } from "lucide-react";

const stats = [
  { icon: Users, value: "15,000+", label: "Students Trained", color: "text-primary" },
  { icon: BookOpen, value: "13+", label: "Courses Offered", color: "text-accent" },
  { icon: Award, value: "12+", label: "Years of Excellence", color: "text-primary" },
  { icon: Building2, value: "50+", label: "Corporate Partners", color: "text-accent" },
];

export default function StatsSection() {
  return (
    <section className="relative -mt-20 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-card rounded-2xl shadow-2xl shadow-primary/5 border border-border/50 p-8 md:p-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <p className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
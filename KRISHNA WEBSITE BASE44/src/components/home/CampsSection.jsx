import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, ArrowRight, Flame } from "lucide-react";

const camps = [
  {
    title: "Summer Personality Bootcamp",
    desc: "Intensive 15-day residential program covering communication, leadership, and confidence building for students aged 12-18.",
    date: "June 2026",
    location: "Krishna Group Campus",
    tag: "Most Popular",
  },
  {
    title: "Corporate Leadership Retreat",
    desc: "3-day executive training program designed for managers and leaders seeking to enhance team management and strategic thinking.",
    date: "Quarterly",
    location: "Premium Venues",
    tag: "For Organizations",
  },
  {
    title: "IELTS Intensive Workshop",
    desc: "Weekend crash course covering all four IELTS modules with mock tests and personalized feedback from certified trainers.",
    date: "Monthly",
    location: "Online & Offline",
    tag: "New Batch",
  },
];

export default function CampsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Upcoming Events</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-4">
            Camps & Special Programs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our intensive camps and workshops for accelerated learning and transformative experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {camps.map((camp, i) => (
            <motion.div
              key={camp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  <Flame className="w-3 h-3" /> {camp.tag}
                </span>
              </div>
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <div className="p-7">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {camp.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {camp.desc}
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    {camp.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    {camp.location}
                  </div>
                </div>
                <Link to="/Contact">
                  <Button variant="outline" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Enquire Now <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
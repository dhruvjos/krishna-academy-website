import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Crown, Briefcase, Brain, Globe, Shield, BookOpen, GraduationCap, Sparkles, Calculator, Flower2 } from "lucide-react";

const courses = [
  { title: "English Speaking & Communication", icon: MessageSquare, desc: "Master fluent English and professional communication skills", category: "communication", color: "from-blue-500/10 to-blue-600/5" },
  { title: "Leadership Development", icon: Crown, desc: "Build visionary leadership qualities for career growth", category: "leadership", color: "from-amber-500/10 to-amber-600/5" },
  { title: "Interview Preparations", icon: Briefcase, desc: "Crack any interview with confidence and precision", category: "corporate", color: "from-emerald-500/10 to-emerald-600/5" },
  { title: "Corporate Soft Skills", icon: Sparkles, desc: "Essential soft skills for corporate professionals", category: "corporate", color: "from-purple-500/10 to-purple-600/5" },
  { title: "Corporate Training", icon: Briefcase, desc: "Customized training solutions for organizations", category: "corporate", color: "from-indigo-500/10 to-indigo-600/5" },
  { title: "Aarya Maths Academy", icon: Calculator, desc: "Speed mathematics and Vedic math techniques", category: "academics", color: "from-red-500/10 to-red-600/5" },
  { title: "Languages", icon: Globe, desc: "Learn German, Japanese & French from expert trainers", category: "languages", color: "from-teal-500/10 to-teal-600/5" },
  { title: "Antivirus Program", icon: Shield, desc: "Beat digital addiction with proven recovery methods", category: "wellness", color: "from-rose-500/10 to-rose-600/5" },
  { title: "Memory Management", icon: Brain, desc: "Unlock photographic memory with advanced techniques", category: "academics", color: "from-cyan-500/10 to-cyan-600/5" },
  { title: "Personality Development", icon: GraduationCap, desc: "Comprehensive programs for schools and individuals", category: "wellness", color: "from-orange-500/10 to-orange-600/5" },
  { title: "IELTS", icon: BookOpen, desc: "Score 7+ bands with our proven IELTS methodology", category: "exam_prep", color: "from-sky-500/10 to-sky-600/5" },
  { title: "TOEFL", icon: BookOpen, desc: "Achieve top TOEFL scores with expert guidance", category: "exam_prep", color: "from-violet-500/10 to-violet-600/5" },
  { title: "4S Meditation", icon: Flower2, desc: "Achieve mental clarity through mindful meditation", category: "wellness", color: "from-lime-500/10 to-lime-600/5" },
];

export default function CourseGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">What We Offer</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive programs designed to transform your skills and accelerate your personal and professional growth
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link to="/Courses" className="block group">
                <div className={`bg-gradient-to-br ${course.color} rounded-2xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <course.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.desc}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/Courses">
            <Button size="lg" className="rounded-full px-10 py-6 text-base">
              View All Courses <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
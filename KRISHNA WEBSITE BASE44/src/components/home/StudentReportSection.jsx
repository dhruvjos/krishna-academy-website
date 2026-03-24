import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, TrendingUp, BookOpen, Medal, Crown, Zap, Lock, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import AuthModal from "../auth/AuthModal";

const leaderboard = [
  { rank: 1, name: "Dhananjay Vaidya", certs: 5, score: 98, badge: "Gold", courses: ["Success Tower", "IELTS", "Leadership"] },
  { rank: 2, name: "Priyanka Pradhan", certs: 4, score: 95, badge: "Gold", courses: ["IELTS", "Personality Dev"] },
  { rank: 3, name: "Prathamesh Vidyasagar", certs: 4, score: 92, badge: "Silver", courses: ["Corporate Training", "Success Tower"] },
  { rank: 4, name: "Vedant Joshi", certs: 3, score: 89, badge: "Silver", courses: ["Success Foundation", "Maths"] },
  { rank: 5, name: "Avanti Tithe", certs: 3, score: 86, badge: "Bronze", courses: ["Personality Dev", "Meditation"] },
];

const badgeColors = {
  Gold: "from-amber-400 to-yellow-500",
  Silver: "from-slate-400 to-slate-500",
  Bronze: "from-orange-600 to-orange-700",
};

const rankIcons = {
  1: <Crown className="w-5 h-5 text-amber-500" />,
  2: <Medal className="w-5 h-5 text-slate-400" />,
  3: <Medal className="w-5 h-5 text-orange-600" />,
};

export default function StudentReportSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    base44.auth.isAuthenticated().then(setIsLoggedIn).catch(() => {});
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Student Progress</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-4">
            Student Achievement Board
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Track progress, celebrate certifications, and compete on our leaderboard
          </p>
        </motion.div>

        {!isLoggedIn ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16 bg-card rounded-2xl border border-border/50 shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">Login to View Achievements</h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">Sign in to see the student leaderboard, track your certifications, and monitor your progress.</p>
            <Button onClick={() => setShowAuth(true)} className="rounded-full px-8">
              <LogIn className="w-4 h-4 mr-2" /> Log In to Continue
            </Button>
            {showAuth && <AuthModal onClose={() => setShowAuth(false)} defaultTab="login" />}
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg"
          >
            <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-accent" />
                <h3 className="font-semibold text-primary-foreground text-lg">Top Achievers Leaderboard</h3>
              </div>
              <span className="text-xs text-primary-foreground/60 bg-primary-foreground/10 px-3 py-1 rounded-full">Live Rankings</span>
            </div>
            <div className="divide-y divide-border/50">
              {leaderboard.map((student, i) => (
                <motion.div
                  key={student.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-8 text-center">
                    {rankIcons[student.rank] || <span className="text-sm font-bold text-muted-foreground">#{student.rank}</span>}
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${badgeColors[student.badge]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {student.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm">{student.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{student.courses.join(" • ")}</p>
                  </div>
                  <div className="text-center flex-shrink-0">
                    <p className="font-bold text-primary text-sm">{student.certs}</p>
                    <p className="text-xs text-muted-foreground">Certs</p>
                  </div>
                  <div className="text-center flex-shrink-0">
                    <p className="font-bold text-accent text-sm">{student.score}%</p>
                    <p className="text-xs text-muted-foreground">Score</p>
                  </div>
                  <div className={`px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${badgeColors[student.badge]} text-white flex-shrink-0`}>
                    {student.badge}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Panel */}
          <div className="space-y-5">
            {[
              { icon: Award, label: "Certifications Awarded", value: "3,200+", color: "text-primary", bg: "bg-primary/10" },
              { icon: TrendingUp, label: "Avg. Score Improvement", value: "87%", color: "text-accent", bg: "bg-accent/10" },
              { icon: BookOpen, label: "Courses Completed", value: "12,000+", color: "text-primary", bg: "bg-primary/10" },
              { icon: Zap, label: "Active Students", value: "850+", color: "text-accent", bg: "bg-accent/10" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border/50 p-5 flex items-center gap-4 shadow-sm"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center flex-shrink-0`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className={`font-bold text-2xl ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}

            <Link to="/Contact">
              <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 mt-2">
                Track Your Progress
              </Button>
            </Link>
          </div>
          </div>
        )}
      </div>
    </section>
  );
}
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Search, ArrowRight, MessageSquare, Crown, Briefcase, Brain, Globe,
  Shield, BookOpen, GraduationCap, Sparkles, Calculator, Flower2,
  Clock, Users, Star, Cpu, FlaskConical, Home, ChevronRight, IndianRupee
} from "lucide-react";

const categories = [
  { key: "all", label: "All Courses" },
  { key: "communication", label: "English & Communication" },
  { key: "corporate", label: "Corporate & Leadership" },
  { key: "academics", label: "Academics & Maths" },
  { key: "tech", label: "Robotics & Tech" },
  { key: "science", label: "Science Academy" },
  { key: "memory", label: "Memory & Mind" },
  { key: "wellness", label: "Life & Wellness" },
];

const courseData = [
  {
    id: 1,
    title: "Success Foundation",
    subtitle: "English Practice & Personality",
    icon: MessageSquare,
    category: "communication",
    duration: "90 hrs",
    price: "₹8,700",
    priceNum: 8700,
    rating: "4.9",
    students: "3000+",
    tag: "Foundation",
    desc: "A comprehensive foundation program combining English language mastery with personality development for holistic growth.",
    highlights: ["Grammar Mastery", "Personality Development", "Spoken English", "Confidence Building"],
    fullDetails: [
      "Grammar (comprehensive coverage)",
      "Spoken English fundamentals",
      "Basic personality development",
      "Reading & Writing skills",
    ],
  },
  {
    id: 2,
    title: "Success Tower",
    subtitle: "English Communication & Personality Enhancement",
    icon: Crown,
    category: "communication",
    duration: "45 hrs",
    price: "₹7,500",
    priceNum: 7500,
    rating: "5.0",
    students: "5000+",
    tag: "Most Popular",
    desc: "The complete transformation program. Master English communication while building a powerful personality.",
    highlights: ["Fluency in English", "Interview Preparation", "Leadership & Confidence", "Life Skills"],
    fullDetails: [
      "Fluency in English",
      "Interview Preparation",
      "Group Discussion & Debating",
      "Communication Skills",
      "Taking Initiatives",
      "Positive Approach & Time Management",
      "Discipline & Problem Solving",
      "Leadership & Case Studies",
      "Confidence Building & Life Acceptance",
      "Reading, Writing, Listening & Speaking",
      "Campus Master, Video Shooting",
      "Intro of Kaizen & Five 'S'",
      "Mind Mapping & Social Media Usage",
    ],
    note: "Duration depends on grasping power.",
  },
  {
    id: 3,
    title: "Success Booster",
    subtitle: "Rhythmic English",
    icon: MessageSquare,
    category: "communication",
    duration: "Flexible",
    price: "₹4,500",
    priceNum: 4500,
    rating: "4.8",
    students: "2000+",
    tag: "New",
    desc: "Focused accent and voice training to give you a confident, neutral, and professional speaking style.",
    highlights: ["Pronunciation", "Neutral Accent Training", "Voice Modulation", "Rhythmic English"],
    fullDetails: [
      "Pronunciation correction & mastery",
      "Neutral Accent Training",
      "Voice Modulation techniques",
    ],
  },
  {
    id: 4,
    title: "IELTS Training",
    subtitle: "Shrikrishna Career Academy",
    icon: BookOpen,
    category: "communication",
    duration: "3 Months",
    price: "₹7,000",
    priceNum: 7000,
    rating: "4.9",
    students: "2500+",
    tag: "Exam Prep",
    desc: "Expert preparation for IELTS with focus on all four skills — Reading, Writing, Listening & Speaking.",
    highlights: ["All 4 Modules", "Mock Tests", "Individual Attention", "Score Guarantee"],
    fullDetails: [
      "Training for International English Language Testing System (IELTS)",
      "Preparation for TOEFL (Test of English as a Foreign Language)",
      "Focusing on individual test preparation",
      "Improving Reading, Writing, Listening & Speaking skills",
    ],
  },
  {
    id: 5,
    title: "Online English Improvement",
    subtitle: "For Kids & Beginners",
    icon: GraduationCap,
    category: "communication",
    duration: "Flexible",
    price: "₹7,000",
    priceNum: 7000,
    rating: "4.8",
    students: "1200+",
    tag: "Kids & Online",
    desc: "Nurturing young minds with English skills, public speaking, and personality development from foundation level.",
    highlights: ["English for Kids", "Public Speaking", "Personality Development", "Grammar (Std 5th+)"],
    fullDetails: [
      "English Speaking Course for Kids",
      "Nurturing Quotients - Public speaking & personality improvements",
      "Comprehensive English Grammar for kids",
      "Foundation Classes from 5th Standard",
      "Voice Modulation & Pronunciation",
      "Neutral Accent Training",
    ],
  },
  {
    id: 6,
    title: "Leadership Development",
    subtitle: "Life Transformation Centre",
    icon: Crown,
    category: "corporate",
    duration: "Customized",
    price: "On Request",
    priceNum: 0,
    rating: "4.9",
    students: "1500+",
    tag: "Corporate",
    desc: "Transform leadership potential through our holistic life transformation programs and guided practices.",
    highlights: ["4S Meditation", "Sera Sadhana", "Leadership Labs", "Mindful Practices"],
    fullDetails: [
      "4S Meditation for mental clarity",
      "Leadership Development Centre programs",
      "Sera Sadhana — spiritual and personal growth",
      "Chatting on full moon-light (group reflection)",
      "A service towards Gau Mata",
      "A Day Care — reclaiming lived moments",
    ],
    note: "NGO vision: Assisting the needy through monetary support and counselling.",
  },
  {
    id: 7,
    title: "Interview Preparations",
    subtitle: "Corporate Soft Skills & Training",
    icon: Briefcase,
    category: "corporate",
    duration: "1 Month",
    price: "On Request",
    priceNum: 0,
    rating: "4.8",
    students: "3000+",
    tag: "Corporate",
    desc: "Complete corporate readiness — from cracking interviews to mastering soft skills for the workplace.",
    highlights: ["Mock Interviews", "Resume Building", "Soft Skills", "Corporate Etiquette"],
    fullDetails: [
      "HR & Technical Interview Preparation",
      "Group Discussions & Debating",
      "Corporate Soft Skills Training",
      "Emotional Intelligence & Time Management",
      "Workplace Communication & Etiquette",
      "Customized Corporate Training Programs",
    ],
  },
  {
    id: 8,
    title: "Aarya Maths Academy",
    subtitle: "Speed Maths & Competitive Prep",
    icon: Calculator,
    category: "academics",
    duration: "3 Months",
    price: "On Request",
    priceNum: 0,
    rating: "4.9",
    students: "1500+",
    tag: "Academics",
    desc: "Unleash the power of Vedic mathematics. Beat maths phobia and excel in competitive exams.",
    highlights: ["Speed Maths", "Vedic Calculations", "Competitive Prep", "Maths Phobia Cure"],
    fullDetails: [
      "Speed Maths: Multiple calculations in a minute",
      "Useful for Bank, MPSC, UPSC, CET, CAT, MAT exams",
      "Special foundation courses from 8th Standard",
      "Coming out of Maths Phobia",
      "Competitive Maths preparations with basics",
      "For 7th to 10th all boards",
      "Maths for Diploma Engineering",
      "Preparation for 11th & 12th Maths",
      "NTSE & MISE preparation",
      "Individual attention for all students",
    ],
  },
  {
    id: 9,
    title: "Shri Krishna Science Academy",
    subtitle: "Foundation & CET/NEET/JEE",
    icon: FlaskConical,
    category: "science",
    duration: "Academic Year",
    price: "₹6,000/subject",
    priceNum: 6000,
    rating: "4.9",
    students: "2000+",
    tag: "Science",
    desc: "Expert science coaching from foundational classes to competitive exam prep for NEET, JEE, and CET.",
    highlights: ["Std 6-10 Foundation", "CET / NEET / JEE", "Conceptual Learning", "Weekly Tests"],
    fullDetails: [
      "Foundation Courses Std 6 to 10 — ₹6,000/subject",
      "Understand Concepts with easy examples",
      "Experimental exposure & Regular Tests",
      "Std 11 & 12th CET/NEET/JEE coaching",
      "Revision of previous classes",
      "Conceptual learning & Weekly Tests",
      "NEET: ₹35,000/subject",
      "JEE: Available",
      "11th & 12th CET: ₹15,000/year/subject",
      "Numerical Practice & Mock Tests",
    ],
  },
  {
    id: 10,
    title: "Krishna Roboinfo Tech",
    subtitle: "Robotics, Coding & IT Academy",
    icon: Cpu,
    category: "tech",
    duration: "Varies",
    price: "On Request",
    priceNum: 0,
    rating: "4.8",
    students: "800+",
    tag: "Technology",
    desc: "Authorised by Unitek Robotron (Korea) & 3 Media Tech Pvt. Ltd (Pune) — cutting-edge STEAM and coding education.",
    highlights: ["Robotics & Automation", "Programming (C/C++/Java/Python)", "Website Development", "STEM Education"],
    fullDetails: [
      "STEAM based Robotics & Automation Education",
      "Robotics Education for Kids & Engineering Students",
      "Hands-on Robotics Design Workshop (I & II)",
      "Engineering Electronics",
      "Logical Test & Programming Skill Development",
      "Website Development",
      "Business Accounting Management, Tally ERP-9",
      "C & C++ Programming, Software Development",
      "MS-Office, DTP",
      "STEM Education & Enquiry Based Learning",
      "Logic Development",
      "Java, Python, Sanganak Suwidha",
    ],
  },
  {
    id: 11,
    title: "Institute of Memory Management",
    subtitle: "Memory, Mind & Meditation",
    icon: Brain,
    category: "memory",
    duration: "2 Months",
    price: "₹2,000",
    priceNum: 2000,
    rating: "5.0",
    students: "1000+",
    tag: "Mind Power",
    desc: "Unlock photographic memory, boost concentration, and master advanced memory techniques.",
    highlights: ["Photographic Memory", "Mind Mapping", "Silva Mind Control", "500-Year Calendar"],
    fullDetails: [
      "Concentration Formula 'DEEP' — Dynamic Entertaining & Easiest Programme",
      "Audio-Visual Memory techniques",
      "Study Skills enhancement",
      "Silva Mind Control",
      "Strategic Interviewing",
      "Spider Notes",
      "Textual & Numerical Memory",
      "Photographic Memory development",
      "Mind Mapping",
      "Quality Management",
      "Meditation for better Concentration",
      "Exclusive technique to remember 500-year calendar",
    ],
  },
  {
    id: 16,
    title: "Voice Modulation",
    subtitle: "Pronunciation & Neutral Accent Training",
    icon: MessageSquare,
    category: "communication",
    duration: "Flexible",
    price: "On Request",
    priceNum: 0,
    rating: "4.9",
    students: "1800+",
    tag: "Voice & Accent",
    desc: "Perfect your pronunciation, develop a neutral accent, and master voice modulation for confident speaking.",
    highlights: ["Pronunciation", "Neutral Accent Training", "Voice Modulation", "Confident Speaking"],
    fullDetails: [
      "Pronunciation correction & refinement",
      "Neutral Accent Training for professional settings",
      "Voice Modulation — tone, pitch, pace control",
      "Breathing techniques for better voice projection",
      "Practical exercises & real-world application",
    ],
  },
  {
    id: 12,
    title: "Languages",
    subtitle: "German, Japanese & French",
    icon: Globe,
    category: "communication",
    duration: "6 Months",
    price: "On Request",
    priceNum: 0,
    rating: "4.7",
    students: "600+",
    tag: "Languages",
    desc: "Professional foreign language training with certified instructors from beginner to advanced levels.",
    highlights: ["German", "Japanese", "French", "Certification Prep"],
    fullDetails: [
      "German — A1 to B2 levels",
      "Japanese — beginner to intermediate",
      "French — conversational and written",
      "Cultural training included",
      "Certification preparation",
    ],
  },
  {
    id: 13,
    title: "Antivirus Program",
    subtitle: "Digital Addiction Recovery",
    icon: Shield,
    category: "wellness",
    duration: "2 Months",
    price: "On Request",
    priceNum: 0,
    rating: "4.9",
    students: "400+",
    tag: "Wellness",
    desc: "A revolutionary program to overcome digital addiction and develop healthy technology habits.",
    highlights: ["Digital Detox", "Mindful Tech Use", "Productivity Boost", "Family Counselling"],
    fullDetails: [
      "Understanding digital addiction patterns",
      "Digital Detox plan & guidance",
      "Mindful technology usage techniques",
      "Productivity and focus enhancement",
      "Family counselling sessions",
    ],
  },
  {
    id: 14,
    title: "Personality Development",
    subtitle: "For Schools & Individuals",
    icon: Sparkles,
    category: "wellness",
    duration: "Academic Year",
    price: "On Request",
    priceNum: 0,
    rating: "4.9",
    students: "5000+",
    tag: "Schools",
    desc: "Comprehensive personality development programs tailored for school students and young professionals.",
    highlights: ["Confidence Building", "Stage Fear Removal", "Goal Setting", "Social Skills"],
    fullDetails: [
      "Confidence Building exercises",
      "Public Speaking & Stage Fear removal",
      "Goal Setting & Life Planning",
      "Social Skills development",
      "Leadership qualities for young minds",
      "School empanelment programs available",
    ],
  },
  {
    id: 15,
    title: "4S Meditation",
    subtitle: "Shrikrishna Life Transformation",
    icon: Flower2,
    category: "wellness",
    duration: "Ongoing",
    price: "On Request",
    priceNum: 0,
    rating: "5.0",
    students: "3000+",
    tag: "Meditation",
    desc: "Achieve mental clarity, emotional balance, and inner peace through our proprietary 4S meditation technique.",
    highlights: ["Stress Relief", "Focus Enhancement", "Emotional Balance", "Daily Practice"],
    fullDetails: [
      "4S Meditation — proprietary technique",
      "Sera Sadhana practice",
      "Full moon reflection sessions",
      "Stress relief & concentration",
      "Emotional balance and inner peace",
      "Meditation for better academic/professional performance",
    ],
  },
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filtered = courseData.filter((c) => {
    const matchCat = activeCategory === "all" || c.category === activeCategory;
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-4">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground">Courses</span>
          </div>
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Our Programs</p>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                Explore Our Courses
              </h1>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg mb-10">
                15 transformative programs across 8 specialized academies
              </p>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 rounded-full h-12 bg-white/95 border-0 text-foreground"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 border-b bg-card sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.key}
                variant={activeCategory === cat.key ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveCategory(cat.key)}
                className="rounded-full whitespace-nowrap text-xs"
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((course, i) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
                >
                  <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <course.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors leading-tight">
                            {course.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{course.subtitle}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-[10px] whitespace-nowrap flex-shrink-0">
                        {course.tag}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{course.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.highlights.map((h) => (
                        <span key={h} className="px-2.5 py-1 rounded-full bg-muted text-[11px] font-medium text-muted-foreground">
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-5 mt-auto">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.duration}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {course.students}</span>
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-amber-500" /> {course.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="font-bold text-primary text-lg flex items-center">
                        {course.price}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full text-xs"
                          onClick={() => setSelectedCourse(course)}
                        >
                          Details
                        </Button>
                        <a
                          href={`https://wa.me/919403124077?text=Hello%20Krishna%20Group!%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.%20Please%20share%20more%20details.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" className="rounded-full text-xs bg-[#25D366] hover:bg-[#25D366]/90 text-white border-0">
                            Enquire
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No courses found matching your search.</p>
              <Button variant="ghost" className="mt-4" onClick={() => { setSearch(""); setActiveCategory("all"); }}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
            >
              <div className="h-2 bg-gradient-to-r from-primary to-accent rounded-t-2xl" />
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <selectedCourse.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-playfair text-xl font-bold text-foreground">{selectedCourse.title}</h2>
                    <p className="text-sm text-muted-foreground">{selectedCourse.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted rounded-xl">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold text-sm">{selectedCourse.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Students</p>
                    <p className="font-semibold text-sm">{selectedCourse.students}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <p className="font-semibold text-sm flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-500" />{selectedCourse.rating}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Fee</p>
                    <p className="font-bold text-primary text-sm">{selectedCourse.price}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">What You'll Learn</h3>
                  <ul className="space-y-2">
                    {selectedCourse.fullDetails.map((d, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedCourse.note && (
                  <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
                    <p className="text-sm text-accent-foreground font-medium">📌 Note: {selectedCourse.note}</p>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 rounded-full" onClick={() => setSelectedCourse(null)}>
                    Close
                  </Button>
                    <a
                    href={`https://wa.me/919403124077?text=Hello%20Krishna%20Group!%20I%20am%20interested%20in%20the%20${encodeURIComponent(selectedCourse?.title || '')}%20course.%20Please%20share%20batch%20timings%20and%20fee%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                    onClick={() => setSelectedCourse(null)}
                  >
                    <Button className="w-full rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                      WhatsApp Enquiry <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
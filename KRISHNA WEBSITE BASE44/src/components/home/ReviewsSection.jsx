import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Dhananjay Vaidya",
    course: "Success Tower",
    rating: 5,
    avatar: "DV",
    color: "from-blue-500 to-blue-600",
    text: "Abhijeet Dharmadhikari sir is not just a life coach — he is a life changer. Before joining Krishna Group I had no confidence to speak in public. After Success Tower, I cleared my campus placement interview in the very first attempt. Vishal sir's voice modulation sessions were absolutely transformative!",
  },
  {
    name: "Priyanka Pradhan",
    course: "English Communication & IELTS",
    rating: 5,
    avatar: "PP",
    color: "from-pink-500 to-rose-500",
    text: "I scored 7.5 bands in IELTS thanks to the dedicated coaching here. Abhijeet sir personally counselled me when I was stressed about my career path. The way he solves life problems and builds your personality is something you won't find anywhere else. Truly grateful!",
  },
  {
    name: "Prathamesh Vidyasagar",
    course: "Leadership Development",
    rating: 5,
    avatar: "PV",
    color: "from-amber-500 to-orange-500",
    text: "Advait sir's corporate training and counselling sessions opened my mind to a completely new perspective. I joined as a shy student and walked out as a confident leader. The personal attention each teacher gives to every student is what sets Krishna Group apart from everything else.",
  },
  {
    name: "Vedant Joshi",
    course: "Success Foundation",
    rating: 5,
    avatar: "VJ",
    color: "from-emerald-500 to-teal-500",
    text: "Vishal sir teaches English and voice modulation in such an engaging way that you actually look forward to every class. And Abhijeet sir's life coaching sessions — I can't put it in words. He helped me overcome my fear of failure and set real goals. Life-changing institute!",
  },
  {
    name: "Avanti Tithe",
    course: "Personality Development",
    rating: 5,
    avatar: "AT",
    color: "from-violet-500 to-purple-500",
    text: "From day one, the faculty gives individual attention to every single student. Abhijeet Dharmadhikari sir solved problems I had been carrying for years — in just a few sessions! The meditation and personality development program completely transformed how I see myself and the world.",
  },
  {
    name: "Rutuja Kulkarni",
    course: "Corporate Soft Skills",
    rating: 5,
    avatar: "RK",
    color: "from-cyan-500 to-blue-500",
    text: "Advait sir's marketing and corporate training gave me practical skills that I use every single day at my job. The environment at Krishna Group is so positive and motivating. Every teacher genuinely cares about your growth. Highly recommend to anyone who wants to succeed professionally!",
  },
];

export default function ReviewsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 380, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-card to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Student Voices</p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real stories of transformation from real students
          </p>
        </motion.div>

        {/* Overall Rating Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          <div className="flex items-center gap-2">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
            <span className="font-bold text-2xl text-foreground ml-1">4.9</span>
          </div>
          <div className="text-muted-foreground text-sm">Based on <strong className="text-foreground">500+ reviews</strong> from students</div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="min-w-[320px] md:min-w-[360px] snap-start bg-card rounded-2xl border border-border/50 p-7 flex flex-col gap-4 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-primary/20" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{r.text}</p>
                <div>
                  <div className="flex mb-3">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} className={`w-4 h-4 ${s <= r.rating ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {r.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.course}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
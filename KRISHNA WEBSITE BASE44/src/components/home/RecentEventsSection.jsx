import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";

const events = [
  {
    id: "DPv70xLjFCk",
    title: "Diwali Camp 2025",
    tag: "🪔 Camp",
    link: "https://www.instagram.com/reel/DPv70xLjFCk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DPv70xLjFCk/?utm_source=ig_embed&utm_campaign=loading",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "DL7nOOnSfeJ",
    title: "Tree Plantation Drive",
    tag: "🌱 Social Initiative",
    link: "https://www.instagram.com/reel/DL7nOOnSfeJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DL7nOOnSfeJ/?utm_source=ig_embed&utm_campaign=loading",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: "DLu1AhGyhvF",
    title: "Personality Transformation Challenge",
    tag: "🏆 Challenge",
    link: "https://www.instagram.com/reel/DLu1AhGyhvF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DLu1AhGyhvF/?utm_source=ig_embed&utm_campaign=loading",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "DBrWJQjoy3L",
    title: "Diwali Camp 2024",
    tag: "🪔 Camp",
    link: "https://www.instagram.com/reel/DBrWJQjoy3L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    embedUrl: "https://www.instagram.com/reel/DBrWJQjoy3L/?utm_source=ig_embed&utm_campaign=loading",
    color: "from-red-500 to-pink-500",
  },
];

function InstagramEmbed({ embedUrl, title }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.getElementById("instagram-embed-script");
      if (!script) {
        const s = document.createElement("script");
        s.id = "instagram-embed-script";
        s.src = "//www.instagram.com/embed.js";
        s.async = true;
        document.body.appendChild(s);
        s.onload = () => {
          if (window.instgrm) window.instgrm.Embeds.process();
        };
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden rounded-xl bg-white">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={embedUrl}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          margin: 0,
          maxWidth: "100%",
          minWidth: "280px",
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
}

export default function RecentEventsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Recent Events</p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-3">
              Live from Our Campus
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Watch real moments from our events, camps, and transformations
            </p>
          </div>
          <a
            href="https://www.instagram.com/krishnagroup_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            Follow @krishnagroup_
          </a>
        </motion.div>

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
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[300px] md:min-w-[340px] snap-start flex flex-col gap-3"
              >
                {/* Tag + Title */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${event.color}`}>
                    {event.tag}
                  </span>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    View on Instagram <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <h3 className="font-semibold text-foreground">{event.title}</h3>

                {/* Embed */}
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-md max-h-[560px] overflow-y-auto">
                  <InstagramEmbed embedUrl={event.embedUrl} title={event.title} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
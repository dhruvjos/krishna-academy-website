import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from "@/api/base44Client";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Home, ChevronRight, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const courseOptions = [
  "Success Foundation — English Practice & Personality (₹8,700)",
  "Success Tower — English Communication & Personality Enhancement (₹7,500)",
  "Success Booster — Rhythmic English (₹4,500)",
  "IELTS Training (₹7,000)",
  "Online English Improvement (₹7,000)",
  "Leadership Development & Life Transformation",
  "Interview Preparations & Corporate Soft Skills",
  "Aarya Maths Academy — Speed Maths",
  "Shri Krishna Science Academy (Std 6-12)",
  "Krishna Roboinfo Tech — Robotics & Coding",
  "Institute of Memory Management (₹2,000)",
  "Languages — German, Japanese, French",
  "Antivirus: Digital Addiction Program",
  "Personality Development for Schools",
  "4S Meditation",
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course_interest: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    setSubmitting(true);
    await base44.entities.Inquiry.create(formData);
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Thank you! We'll get back to you shortly.");
  };

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
            <span className="text-primary-foreground">Contact</span>
          </div>
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Get In Touch</p>
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
                Contact Us
              </h1>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
                Have questions? We'd love to hear from you. Our team responds within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Banner */}
      <div className="bg-[#25D366] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-4">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <p className="text-white font-medium">Chat with us instantly on WhatsApp!</p>
          <a
            href="https://wa.me/919403124077?text=Hello%20Krishna%20Group!%20I%20visited%20your%20website%20and%20have%20a%20query%20about%20your%20courses."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#25D366] font-bold px-5 py-1.5 rounded-full text-sm hover:bg-white/90 transition-colors"
          >
            +91 94031 24077
          </a>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-playfair text-2xl font-bold text-foreground mb-2">Let's Start a Conversation</h2>
                <p className="text-muted-foreground">Fill out the form or contact us directly through the information below.</p>
              </div>

              <div className="space-y-5">
                <a href="tel:+919403124077" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 94031 24077</p>
                  </div>
                </a>

                <a href="https://wa.me/919403124077?text=Hello%20Krishna%20Group!%20I%20visited%20your%20website%20and%20would%20like%20to%20enquire%20about%20your%20courses." target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+91 94031 24077</p>
                  </div>
                </a>

                <a href="mailto:info@krishnagroup.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@krishnagroup.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">Krishna Group Campus,<br />Aurangabad, Maharashtra</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Working Hours</p>
                    <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 2:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10 shadow-xl shadow-primary/5">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">We've received your inquiry. Our team will contact you within 24 hours.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href={`https://wa.me/919403124077?text=Hello%20Krishna%20Group!%20My%20name%20is%20${encodeURIComponent(formData.name)}.%20I%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.course_interest || 'your courses')}.%20Please%20contact%20me.`} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full px-6">
                          Chat on WhatsApp
                        </Button>
                      </a>
                      <Button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", course_interest: "", message: "" }); }} variant="outline" className="rounded-full">
                        Send Another Query
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2">Send Us a Query</h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone / WhatsApp *</Label>
                        <Input id="phone" placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="rounded-xl h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-xl h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label>Course Interest</Label>
                      <Select value={formData.course_interest} onValueChange={(v) => setFormData({ ...formData, course_interest: v })}>
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courseOptions.map((c) => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us about your requirements, preferred batch timings, etc." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="rounded-xl min-h-[120px]" />
                    </div>
                    <Button type="submit" disabled={submitting} size="lg" className="w-full rounded-full py-6 text-base">
                      {submitting ? "Sending..." : "Submit Query"} <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
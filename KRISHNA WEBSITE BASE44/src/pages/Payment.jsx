import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Home, ChevronRight, CreditCard, Shield, CheckCircle, IndianRupee, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const courseWithFees = [
  { label: "Success Foundation — English Practice & Personality", fee: 8700 },
  { label: "Success Tower — English Communication & Personality Enhancement", fee: 7500 },
  { label: "Success Booster — Rhythmic English", fee: 4500 },
  { label: "IELTS Training", fee: 7000 },
  { label: "Online English Improvement for Kids", fee: 7000 },
  { label: "Institute of Memory Management", fee: 2000 },
  { label: "Science Academy — Foundation (per subject)", fee: 6000 },
  { label: "Science Academy — 11th/12th CET (per year/subject)", fee: 15000 },
  { label: "Science Academy — NEET (per subject)", fee: 35000 },
];

export default function Payment() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [paid, setPaid] = useState(false);

  const selectedCourse = courseWithFees.find(c => c.label === selected);

  const handleProceed = () => {
    if (!selected) { toast.error("Please select a course"); return; }
    if (!form.name || !form.phone) { toast.error("Please fill name and phone"); return; }
    setStep(2);
  };

  const handlePayNow = () => {
    // Redirect to UPI / Razorpay or show bank details
    toast.success("Redirecting to payment gateway...");
    setTimeout(() => setPaid(true), 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-4">
            <Link to="/" className="hover:text-primary-foreground flex items-center gap-1 transition-colors">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground">Payment</span>
          </div>
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-3">Secure Payment</p>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
                Course Enrollment
              </h1>
              <p className="text-primary-foreground/70 max-w-lg mx-auto">
                Complete your enrollment by selecting your course and making a secure payment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {paid ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl border border-border p-12 text-center shadow-xl"
            >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-3">Payment Successful!</h2>
              <p className="text-muted-foreground mb-2">Thank you, <strong>{form.name}</strong>!</p>
              <p className="text-muted-foreground mb-8">Your enrollment for <strong>{selected}</strong> is confirmed. Our team will contact you at <strong>{form.phone}</strong> within 24 hours with batch details.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/919403124077" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full px-6">
                    Chat on WhatsApp
                  </Button>
                </a>
                <Link to="/Home">
                  <Button variant="outline" className="rounded-full px-6">Back to Home</Button>
                </Link>
              </div>
            </motion.div>
          ) : (
            <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
              {/* Steps */}
              <div className="flex border-b">
                {["Select Course", "Review & Pay"].map((s, i) => (
                  <div key={s} className={`flex-1 py-4 text-center text-sm font-medium transition-colors ${step === i + 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                    <span className="hidden sm:inline">{i + 1}. {s}</span>
                    <span className="sm:hidden">{i + 1}. {s.split(" ")[0]}</span>
                  </div>
                ))}
              </div>

              <div className="p-8">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Course *</Label>
                      <Select value={selected || ""} onValueChange={setSelected}>
                        <SelectTrigger className="rounded-xl h-12">
                          <SelectValue placeholder="Choose a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courseWithFees.map((c) => (
                            <SelectItem key={c.label} value={c.label}>
                              {c.label} — ₹{c.fee.toLocaleString()}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedCourse && (
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Course Fee</p>
                          <p className="font-bold text-2xl text-primary">₹{selectedCourse.fee.toLocaleString()}</p>
                        </div>
                        <IndianRupee className="w-10 h-10 text-primary/20" />
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="rounded-xl h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone / WhatsApp *</Label>
                        <Input placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="rounded-xl h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="rounded-xl h-12" />
                    </div>
                    <Button onClick={handleProceed} size="lg" className="w-full rounded-full">
                      Proceed to Payment
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                    <div className="bg-muted rounded-xl p-5 space-y-3">
                      <h3 className="font-semibold text-foreground">Order Summary</h3>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Student</span><span className="font-medium">{form.name}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Phone</span><span className="font-medium">{form.phone}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Course</span><span className="font-medium text-right max-w-[60%]">{selected}</span></div>
                      <div className="border-t pt-3 flex justify-between font-bold"><span>Total Amount</span><span className="text-primary text-lg">₹{selectedCourse?.fee.toLocaleString()}</span></div>
                    </div>

                    {/* Payment Options */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Payment Options</h3>

                      {/* UPI */}
                      <div className="border border-border rounded-xl p-4">
                        <p className="font-medium text-sm mb-2">UPI / Online Transfer</p>
                        <p className="text-xs text-muted-foreground mb-3">Transfer directly to our UPI ID and share screenshot on WhatsApp</p>
                        <div className="bg-muted rounded-lg p-3 font-mono text-sm text-center font-bold tracking-wider">
                          krishnagroup@upi
                        </div>
                        <p className="text-xs text-muted-foreground text-center mt-2">After payment, send screenshot to WhatsApp: +91 94031 24077</p>
                      </div>

                      {/* Online Pay Button */}
                      <Button onClick={handlePayNow} size="lg" className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <CreditCard className="mr-2 w-4 h-4" /> Pay ₹{selectedCourse?.fee.toLocaleString()} Online
                      </Button>

                      {/* WhatsApp Confirm */}
                      <a href={`https://wa.me/919403124077?text=Hello, I want to enroll for ${encodeURIComponent(selected || '')}. My name is ${encodeURIComponent(form.name)}, phone: ${encodeURIComponent(form.phone)}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg" className="w-full rounded-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
                          <MessageCircle className="mr-2 w-4 h-4" /> Confirm via WhatsApp
                        </Button>
                      </a>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Shield className="w-3.5 h-3.5" /> 100% Secure & Trusted
                    </div>

                    <Button variant="ghost" className="w-full" onClick={() => setStep(1)}>← Back</Button>
                  </motion.div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
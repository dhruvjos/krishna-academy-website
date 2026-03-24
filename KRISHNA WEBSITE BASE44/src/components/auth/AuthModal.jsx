import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, User, Lock, Mail, Phone, LogIn, Eye, EyeOff, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { toast } from "sonner";

const courses = [
  "Success Foundation", "Success Tower", "Success Booster", "IELTS Training",
  "Online English Improvement", "Leadership Development", "Corporate Training",
  "Aarya Maths Academy", "Science Academy", "Robotics & Tech", "Memory Management",
  "Languages", "Antivirus Program", "Personality Development", "4S Meditation", "Voice Modulation",
];

export default function AuthModal({ onClose, defaultTab = "login" }) {
  const [tab, setTab] = useState(defaultTab);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "", username: "", email: "", phone: "", password: "", role: "student", course: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    base44.auth.redirectToLogin(window.location.href);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!signupForm.name || !signupForm.username || !signupForm.phone || !signupForm.password) {
      toast.error("Please fill all required fields");
      return;
    }
    setLoading(true);
    // Invite user via platform
    await base44.users.inviteUser(signupForm.email || `${signupForm.username}@krishnagroup.local`, "user");
    setLoading(false);
    setSuccess(true);
    toast.success("Registration request sent! Admin will approve your account.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-primary to-primary/80 px-8 py-7 text-center">
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
            <span className="font-playfair font-bold text-2xl text-white">KG</span>
          </div>
          <h2 className="font-playfair text-xl font-bold text-white">Krishna Group</h2>
          <p className="text-white/70 text-sm mt-1">Student & Staff Portal</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {["login", "signup"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3.5 text-sm font-semibold capitalize transition-colors ${
                tab === t ? "text-primary border-b-2 border-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t === "login" ? "Log In" : "Sign Up"}
            </button>
          ))}
        </div>

        <div className="p-7 max-h-[65vh] overflow-y-auto">
          {success ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Registration Submitted!</h3>
              <p className="text-sm text-muted-foreground mb-4">Your account request has been sent to the admin. You'll receive login credentials once approved.</p>
              <a href={`https://wa.me/919403124077?text=Hello!%20I%20just%20registered%20on%20Krishna%20Group%20portal.%20My%20name%20is%20${encodeURIComponent(signupForm.name)}%2C%20username%3A%20${encodeURIComponent(signupForm.username)}.%20Please%20activate%20my%20account.`} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full w-full">
                  Confirm on WhatsApp
                </Button>
              </a>
            </div>
          ) : tab === "login" ? (
            <div className="space-y-5 py-2">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                Click below to securely log in to your Krishna Group student account.
              </p>
              <Button onClick={handleLogin} className="w-full rounded-full h-11 text-base">
                <LogIn className="w-4 h-4 mr-2" /> Continue to Login
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button type="button" onClick={() => setTab("signup")} className="text-primary font-medium hover:underline">
                  Sign Up
                </button>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Full Name *</Label>
                  <Input placeholder="Your name" value={signupForm.name} onChange={e => setSignupForm({ ...signupForm, name: e.target.value })} className="rounded-xl h-10" />
                </div>
                <div className="space-y-1.5">
                  <Label>Username *</Label>
                  <Input placeholder="Unique username" value={signupForm.username} onChange={e => setSignupForm({ ...signupForm, username: e.target.value })} className="rounded-xl h-10" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input type="email" placeholder="you@example.com" value={signupForm.email} onChange={e => setSignupForm({ ...signupForm, email: e.target.value })} className="pl-9 rounded-xl h-10" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Phone / WhatsApp *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="+91 XXXXX XXXXX" value={signupForm.phone} onChange={e => setSignupForm({ ...signupForm, phone: e.target.value })} className="pl-9 rounded-xl h-10" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>Password *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input type={showPass ? "text" : "password"} placeholder="Create a password" value={signupForm.password} onChange={e => setSignupForm({ ...signupForm, password: e.target.value })} className="pl-9 pr-9 rounded-xl h-10" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>Role *</Label>
                  <Select value={signupForm.role} onValueChange={v => setSignupForm({ ...signupForm, role: v })}>
                    <SelectTrigger className="rounded-xl h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Course Interest</Label>
                  <Select value={signupForm.course} onValueChange={v => setSignupForm({ ...signupForm, course: v })}>
                    <SelectTrigger className="rounded-xl h-10">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button type="submit" disabled={loading} className="w-full rounded-full h-11 text-base mt-2">
                {loading ? "Submitting..." : "Create Account"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Already registered?{" "}
                <button type="button" onClick={() => setTab("login")} className="text-primary font-medium hover:underline">
                  Log In
                </button>
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
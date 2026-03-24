import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogIn, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { base44 } from "@/api/base44Client";
import AuthModal from "../auth/AuthModal";

const courseCategories = [
  { label: "Communication", courses: ["English Speaking & Communication", "IELTS", "TOEFL"] },
  { label: "Leadership & Corporate", courses: ["Leadership Development", "Corporate Soft Skills", "Corporate Training", "Interview Preparations"] },
  { label: "Academics", courses: ["Aarya Maths Academy", "Memory Management"] },
  { label: "Languages", courses: ["German", "Japanese", "French"] },
  { label: "Wellness & Development", courses: ["Personality Development", "Antivirus: Digital Addiction", "4S Meditation"] },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState("login");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    base44.auth.isAuthenticated().then(setIsLoggedIn).catch(() => {});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLogin = () => { setAuthTab("login"); setShowAuthModal(true); setMobileOpen(false); };
  const openSignup = () => { setAuthTab("signup"); setShowAuthModal(true); setMobileOpen(false); };
  const handleLogout = () => { base44.auth.logout(); };

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-playfair font-bold text-lg md:text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                KG
              </div>
            </div>
            <div className="hidden sm:block">
              <p className={`font-playfair font-bold text-lg leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
                Krishna Group
              </p>
              <p className={`text-[10px] tracking-[0.2em] uppercase ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                Institute of Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${scrolled ? "text-foreground hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`text-sm font-medium bg-transparent ${scrolled ? "text-foreground hover:bg-muted" : "text-white/90 hover:text-white"}`}>
                    Courses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[540px] p-6 grid grid-cols-2 gap-4">
                      {courseCategories.map((cat) => (
                        <div key={cat.label}>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{cat.label}</p>
                          {cat.courses.map((course) => (
                            <Link
                              key={course}
                              to="/Courses"
                              className="block text-sm text-muted-foreground hover:text-primary py-1 transition-colors"
                            >
                              {course}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/Courses" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${scrolled ? "text-foreground hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
              All Courses
            </Link>
            <Link to="/Contact" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${scrolled ? "text-foreground hover:bg-muted" : "text-white/90 hover:text-white hover:bg-white/10"}`}>
              Contact
            </Link>
            <Link to="/Payment" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${scrolled ? "text-accent hover:bg-accent/10" : "text-accent hover:bg-white/10"}`}>
              Enroll & Pay
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button onClick={handleLogout} variant="ghost" size="sm" className={`hidden md:flex rounded-full px-4 font-medium gap-2 ${scrolled ? "" : "text-white hover:bg-white/10"}`}>
                <LogOut className="w-4 h-4" /> Logout
              </Button>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Button onClick={openLogin} variant="ghost" size="sm" className={`rounded-full px-4 font-medium gap-2 ${scrolled ? "" : "text-white hover:bg-white/10"}`}>
                  <LogIn className="w-4 h-4" /> Log In
                </Button>
                <Button onClick={openSignup} size="sm" className="rounded-full px-5 font-medium bg-accent hover:bg-accent/90 text-accent-foreground">
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`lg:hidden ${scrolled ? "" : "text-white"}`}>
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-playfair font-bold text-lg">
                      KG
                    </div>
                    <p className="font-playfair font-bold text-lg">Krishna Group</p>
                  </div>
                  <nav className="space-y-1">
                    <Link to="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-colors">Home</Link>
                    <Link to="/Courses" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-colors">All Courses</Link>
                    <Link to="/Contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-colors">Contact</Link>
                    <Link to="/Payment" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium rounded-lg text-accent hover:bg-accent/10 transition-colors">Enroll & Pay</Link>
                    <div className="pt-4 space-y-2">
                      {isLoggedIn ? (
                        <Button onClick={handleLogout} variant="outline" className="w-full rounded-full">
                          <LogOut className="w-4 h-4 mr-2" /> Logout
                        </Button>
                      ) : (
                        <>
                          <Button onClick={openLogin} variant="outline" className="w-full rounded-full">
                            <LogIn className="w-4 h-4 mr-2" /> Log In
                          </Button>
                          <Button onClick={openSignup} className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                            <User className="w-4 h-4 mr-2" /> Sign Up
                          </Button>
                        </>
                      )}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>

    <AnimatePresence>
      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} defaultTab={authTab} />}
    </AnimatePresence>
    </>
  );
}
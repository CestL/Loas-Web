"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { useLanguage } from "@/lib/translations";

interface NavigationProps {
  currentSection?: "home" | "gallery" | "about";
  onNavigateHome?: () => void;
}

export function Navigation({ currentSection = "home", onNavigateHome }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const handleNavigateHome = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
      return;
    }
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-40 px-6 py-4 md:py-6"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Left - Home Link */}
          <Link
            href="#home"
            onClick={handleNavigateHome}
            className={`hidden md:inline font-serif text-sm md:text-base tracking-widest transition-colors ${
              currentSection === "home"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.nav.home}
          </Link>

          {/* Center - Logo */}
          <Link href="#home" onClick={handleNavigateHome} className="absolute left-1/2 -translate-x-1/2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary/30 flex items-center justify-center bg-background/80 backdrop-blur-sm">
              <span className="font-serif text-lg md:text-xl text-primary">L</span>
            </div>
          </Link>

          {/* Right - Gallery Link + Language Switcher (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#gallery"
              className={`font-serif text-sm md:text-base tracking-widest transition-colors ${
                currentSection === "gallery"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav.gallery}
            </Link>

            {/* Subtle Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="text-xs tracking-wider text-muted-foreground/70 hover:text-muted-foreground transition-colors uppercase"
              aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-6 p-2 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              <Link
                href="#home"
                onClick={handleNavigateHome}
                className="font-serif text-2xl tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="#gallery"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-2xl tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {t.nav.gallery}
              </Link>
              <Link
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="font-serif text-2xl tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {t.nav.about}
              </Link>

              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="mt-4 text-sm tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {language === "es" ? "English" : "Español"}
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
}

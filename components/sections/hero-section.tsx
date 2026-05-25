"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/translations";

// Hero background asset (public/artworks/Backgroundphoto.JPEG — hero backdrop)
const HERO_BACKGROUND_IMAGE = "/artworks/Backgroundphoto.JPEG";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export function HeroSection({ onExploreClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Added hero background image overlay — soft cinematic backdrop on desktop and mobile */}
        <Image
          src={HERO_BACKGROUND_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[1.3] scale-105 blur-[1px]"
        />
        {/* Soft gradient overlay — preserves logo and hero text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-muted/50" />
        
        {/* Decorative circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-primary/20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border border-primary/20"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary/30 mb-4">
            <span className="text-2xl md:text-3xl font-serif text-primary">L</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-4"
        >
          LoArt
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-muted-foreground text-base md:text-lg mb-2 tracking-wide"
        >
          {t.hero.subtitle1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="text-muted-foreground text-base md:text-lg mb-12 tracking-wide"
        >
          {t.hero.subtitle2}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onExploreClick}
          className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-sans text-sm md:text-base tracking-wide uppercase transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          {t.hero.cta}
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs tracking-widest uppercase mb-2">{t.hero.scroll}</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

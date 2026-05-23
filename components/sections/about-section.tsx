"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/translations";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-6">
            {t.about.title}
          </h2>

          {/* Decorative Line */}
          <div className="w-20 h-0.5 bg-primary/30 mx-auto mb-8" />

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 text-pretty">
            {t.about.description1}
          </p>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 text-pretty">
            {t.about.description2}
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-8"
          >
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">400+</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {t.about.yearsOfArt}
              </p>
            </div>
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">50+</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {t.about.masterpieces}
              </p>
            </div>
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">30+</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                {t.about.artists}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export function AboutSection() {
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
            About the Gallery
          </h2>

          {/* Decorative Line */}
          <div className="w-20 h-0.5 bg-primary/30 mx-auto mb-8" />

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 text-pretty">
            LoArt is a virtual museum experience dedicated to showcasing the most 
            influential masterpieces from the 15th to 19th centuries. Our curated 
            collection brings together works from the Dutch Golden Age, Romanticism, 
            Impressionism, and beyond.
          </p>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 text-pretty">
            Experience art like never before with our immersive digital gallery. 
            Each painting tells a story, and we invite you to discover the rich 
            history and emotion behind every brushstroke.
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
                Years of Art
              </p>
            </div>
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">50+</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                Masterpieces
              </p>
            </div>
            <div>
              <span className="font-serif text-3xl md:text-4xl text-foreground">30+</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
                Artists
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

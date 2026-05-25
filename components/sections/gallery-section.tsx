"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, memo } from "react";
import Image from "next/image";
import { type Artwork, type Era, eras } from "@/data/artworks";
import { SlidersHorizontal } from "lucide-react";
import { useLanguage } from "@/lib/translations";
import { getArtworkImageSrcFromArtwork } from "@/lib/artwork-image";

interface GallerySectionProps {
  artworks: Artwork[];
  onArtworkClick: (artwork: Artwork) => void;
}

export function GallerySection({ artworks, onArtworkClick }: GallerySectionProps) {
  const [selectedEra, setSelectedEra] = useState<Era | "all">("all");
  const { t } = useLanguage();

  const filteredArtworks = selectedEra === "all" 
    ? artworks 
    : artworks.filter(artwork => artwork.era === selectedEra);

  return (
    <section className="min-h-screen py-16 px-4 md:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight mb-8">
          {t.gallery.title}
        </h2>

        {/* Era Filter */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedEra("all")}
            className={`px-4 py-2 text-sm tracking-wide transition-all ${
              selectedEra === "all"
                ? "text-foreground font-medium border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.gallery.all}
          </button>
          {eras.map((era) => (
            <button
              key={era}
              onClick={() => setSelectedEra(era)}
              className={`px-4 py-2 text-sm tracking-wide transition-all ${
                selectedEra === era
                  ? "text-foreground font-medium border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.gallery.eras[era]}
            </button>
          ))}
          <button className="p-2 ml-2 text-muted-foreground hover:text-foreground transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEra}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredArtworks.map((artwork, index) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                index={index}
                onClick={() => onArtworkClick(artwork)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredArtworks.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-20"
          >
            {t.gallery.noArtworks}
          </motion.p>
        )}
      </div>
    </section>
  );
}

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
  onClick: () => void;
}

// Optimized gallery lazy loading — memo avoids rerenders when filters change
const ArtworkCard = memo(function ArtworkCard({ artwork, index, onClick }: ArtworkCardProps) {
  const [imageError, setImageError] = useState(false);
  const { t, getArtwork } = useLanguage();
  const localized = getArtwork(artwork);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Oval Frame Container */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="relative aspect-[3/4] overflow-hidden rounded-[50%] bg-muted shadow-lg shadow-primary/5 transition-shadow group-hover:shadow-xl group-hover:shadow-primary/10"
      >
        {/* Image */}
        {!imageError ? (
          <Image
            src={getArtworkImageSrcFromArtwork(artwork)}
            alt={localized.title}
            fill
            loading="lazy"
            fetchPriority="low"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground text-xs text-center px-4">
              {t.detail.imageNotFound}
            </span>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-primary-foreground text-xs md:text-sm font-medium text-center truncate">
            {localized.title}
          </p>
        </div>
      </motion.div>

      {/* Caption below image */}
      <div className="mt-3 text-center">
        <h3 className="font-serif text-sm md:text-base text-foreground truncate">
          {localized.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {artwork.year}
        </p>
      </div>
    </motion.article>
  );
});

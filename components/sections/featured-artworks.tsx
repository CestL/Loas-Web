"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { type Artwork } from "@/data/artworks";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FeaturedArtworksProps {
  artworks: Artwork[];
  onArtworkClick: (artwork: Artwork) => void;
}

export function FeaturedArtworks({ artworks, onArtworkClick }: FeaturedArtworksProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Only show first 5 artworks for featured section
  const featuredArtworks = artworks.slice(0, 5);

  const updateScrollButtons = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-6"
      >
        <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
          Featured Collection
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Masterpieces
        </h2>
      </motion.div>

      {/* Scrollable Gallery */}
      <div className="relative">
        {/* Navigation Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Scrollable Container */}
        <motion.div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 px-6 md:px-12 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          style={{ y }}
        >
          {featuredArtworks.map((artwork, index) => (
            <FeaturedCard
              key={artwork.id}
              artwork={artwork}
              index={index}
              onClick={() => onArtworkClick(artwork)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface FeaturedCardProps {
  artwork: Artwork;
  index: number;
  onClick: () => void;
}

function FeaturedCard({ artwork, index, onClick }: FeaturedCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="flex-shrink-0 w-64 md:w-72 cursor-pointer group snap-center"
    >
      {/* Card Container with depth effect */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Background shadow layer */}
        <div className="absolute inset-0 bg-primary/5 rounded-3xl translate-x-2 translate-y-2" />
        
        {/* Main card */}
        <div className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-xl">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            {!imageError ? (
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 256px, 288px"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <span className="text-muted-foreground text-sm">Image not found</span>
              </div>
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

            {/* Era badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs bg-background/80 backdrop-blur-sm rounded-full text-foreground">
                {artwork.era}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            <h3 className="font-serif text-lg text-foreground mb-1 truncate group-hover:text-primary transition-colors">
              {artwork.title}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {artwork.artist}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

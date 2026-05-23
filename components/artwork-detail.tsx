"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { type Artwork } from "@/data/artworks";
import { useState } from "react";

interface ArtworkDetailProps {
  artwork: Artwork | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export function ArtworkDetail({ 
  artwork, 
  onClose, 
  onNext, 
  onPrevious,
  hasNext = false,
  hasPrevious = false
}: ArtworkDetailProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Navigation arrows */}
          {hasPrevious && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/10 text-foreground hover:bg-primary/20 transition-colors hidden md:flex"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          )}

          {hasNext && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/10 text-foreground hover:bg-primary/20 transition-colors hidden md:flex"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          )}

          {/* Content */}
          <div className="h-full overflow-y-auto">
            <div className="min-h-full flex flex-col lg:flex-row">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:w-1/2 flex items-center justify-center p-8 pt-20 lg:pt-8"
              >
                <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  {!imageError ? (
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <span className="text-muted-foreground">Image not found</span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Info Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-12 lg:pr-16"
              >
                {/* Era badge */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex self-start px-3 py-1 text-xs tracking-wider text-primary bg-primary/10 rounded-full mb-4"
                >
                  {artwork.era}
                </motion.span>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 flex items-start gap-2"
                >
                  <span className="text-balance">{artwork.title}</span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-muted-foreground" />
                </motion.h2>

                {/* Metadata Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  <MetadataItem label="When" value={artwork.year.toString()} />
                  <MetadataItem label="Artist" value={artwork.artist} />
                  <MetadataItem label="Medium" value={artwork.materials} />
                  <MetadataItem label="Place" value={artwork.location} />
                  <MetadataItem label="Period" value={artwork.period} />
                  <MetadataItem label="Current Status" value={artwork.currentStatus} />
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {artwork.description}
                  </p>
                  {artwork.description.length > 200 && (
                    <button className="text-primary text-sm font-medium mt-2 hover:underline">
                      READ MORE
                    </button>
                  )}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="self-start px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm tracking-wide uppercase transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  View in Gallery
                </motion.button>

                {/* Mobile navigation */}
                <div className="flex gap-4 mt-8 lg:hidden">
                  {hasPrevious && (
                    <button
                      onClick={onPrevious}
                      className="flex-1 py-3 px-6 border border-border rounded-full text-foreground text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> Previous
                    </button>
                  )}
                  {hasNext && (
                    <button
                      onClick={onNext}
                      className="flex-1 py-3 px-6 border border-border rounded-full text-foreground text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetadataItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
      <p className="text-sm text-foreground mt-1 line-clamp-2">{value}</p>
    </div>
  );
}

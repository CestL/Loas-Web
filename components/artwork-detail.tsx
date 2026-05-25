"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { type Artwork } from "@/data/artworks";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/translations";
import { getArtworkImageSrcFromArtwork } from "@/lib/artwork-image";

// Limited description2 preview to 300 characters before "Leer más" expands full text
const DESCRIPTION_PREVIEW_LENGTH = 300;

interface ArtworkDetailProps {
  artwork: Artwork | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
  onViewInGallery?: () => void;
}

export function ArtworkDetail({ 
  artwork, 
  onClose, 
  onNext, 
  onPrevious,
  hasNext = false,
  hasPrevious = false,
  onViewInGallery
}: ArtworkDetailProps) {
  const [imageError, setImageError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false); // Added fullscreen artwork viewer
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const { t, getArtwork } = useLanguage();
  const localized = artwork ? getArtwork(artwork) : null;

  // Reset fullscreen and description preview when switching artworks
  useEffect(() => {
    setIsFullscreen(false);
    setIsDescriptionExpanded(false);
  }, [artwork?.id]);

  // Handle "View in Gallery" click
  const handleViewInGallery = () => {
    if (onViewInGallery) {
      onViewInGallery();
    }
  };

  const descriptionText = localized?.description ?? "";
  const isLongDescription = descriptionText.length > DESCRIPTION_PREVIEW_LENGTH;
  const descriptionPreview =
    isLongDescription && !isDescriptionExpanded
      ? `${descriptionText.slice(0, DESCRIPTION_PREVIEW_LENGTH).trimEnd()}…`
      : descriptionText;

  return (
    // Fixed duplicate AnimatePresence key issue — one presence, unique keys per overlay
    <AnimatePresence>
      {artwork && localized && (
        <motion.div
          key={`artwork-detail-${artwork.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
        >
          {/* Close button - Return to gallery */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
            aria-label={t.nav.gallery}
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
              aria-label={t.detail.previous}
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
              aria-label={t.detail.next}
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
  <div className="relative flex items-center justify-center">
    
    {!imageError ? (
      <button
        type="button"
        onClick={() => setIsFullscreen(true)}
        className="cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl"
        aria-label={localized.title}
      >
        <Image
          src={getArtworkImageSrcFromArtwork(artwork)}
          alt={localized.title}
          width={900}
          height={1200}
          className="
          w-auto
          h-auto
          max-h-[80vh]
          max-w-full
          object-contain
          rounded-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          transition-transform
          duration-700
          hover:scale-[1.01]
        "
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          onError={() => setImageError(true)}
        />
      </button>
    ) : (
      <div className="flex items-center justify-center rounded-2xl border border-border/20 px-8 py-16">
        <span className="text-muted-foreground">
          {t.detail.imageNotFound}
        </span>
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
                  {localized.era}
                </motion.span>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 flex items-start gap-2"
                >
                  <span className="text-balance">{localized.title}</span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-muted-foreground" />
                </motion.h2>

                {/* Metadata Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  <MetadataItem label={t.detail.when} value={artwork.year.toString()} />
                  <MetadataItem label={t.detail.artist} value={localized.artist} />
                  <MetadataItem label={t.detail.medium} value={localized.materials} />
                  <MetadataItem label={t.detail.place} value={localized.location} />
                
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {descriptionPreview}
                  </p>
                  {isLongDescription && (
                    <button
                      type="button"
                      onClick={() => setIsDescriptionExpanded((prev) => !prev)}
                      className="text-primary text-sm font-medium mt-2 hover:underline"
                    >
                      {isDescriptionExpanded ? t.detail.readLess : t.detail.readMore}
                    </button>
                  )}
                </motion.div>

                {/* CTA Button - Now functional */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleViewInGallery}
                  className="self-start px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm tracking-wide uppercase transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  {t.detail.viewInGallery}
                </motion.button>

                {/* Mobile navigation */}
                <div className="flex gap-4 mt-8 lg:hidden">
                  {hasPrevious && (
                    <button
                      onClick={onPrevious}
                      className="flex-1 py-3 px-6 border border-border rounded-full text-foreground text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" /> {t.detail.previous}
                    </button>
                  )}
                  {hasNext && (
                    <button
                      onClick={onNext}
                      className="flex-1 py-3 px-6 border border-border rounded-full text-foreground text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors"
                    >
                      {t.detail.next} <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Fullscreen artwork viewer — tap/click image to open; corner close returns to same detail */}
      {isFullscreen && artwork && localized && !imageError && (
          <motion.div
            key={`artwork-fullscreen-${artwork.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/98 p-4 md:p-8"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[61] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
              aria-label={t.nav.gallery}
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={getArtworkImageSrcFromArtwork(artwork)}
                alt={localized.title}
                width={1200}
                height={1600}
                className="max-h-[92vh] max-w-[92vw] w-auto h-auto object-contain rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                sizes="100vw"
              />
            </motion.div>
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

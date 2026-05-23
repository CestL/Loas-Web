"use client";

import { useState, useCallback } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedArtworks } from "@/components/sections/featured-artworks";
import { GallerySection } from "@/components/sections/gallery-section";
import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/footer";
import { ArtworkDetail } from "@/components/artwork-detail";
import { artworks, type Artwork } from "@/data/artworks";

/* ====================================================
   LOART - MAIN PAGE
   
   This is the main entry point for the LoArt gallery.
   
   STRUCTURE:
   - Navigation: Fixed header with Home/Gallery links
   - Hero: Landing section with branding
   - Featured: Horizontal scrollable showcase
   - Gallery: Full gallery grid with era filters
   - About: Information section
   - Footer: Social links and copyright
   
   CUSTOMIZATION:
   - Artwork data is in /data/artworks.ts
   - Place your images in /public/artworks/
   - Component styles are in each component file
   - Design tokens are in /app/globals.css
   
   ==================================================== */

export default function HomePage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  // Handle artwork selection
  const handleArtworkClick = useCallback((artwork: Artwork) => {
    setSelectedArtwork(artwork);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  }, []);

  // Handle closing artwork detail
  const handleCloseDetail = useCallback(() => {
    setSelectedArtwork(null);
    // Restore body scroll
    document.body.style.overflow = "";
  }, []);

  // Navigate to next artwork
  const handleNextArtwork = useCallback(() => {
    if (!selectedArtwork) return;
    const currentIndex = artworks.findIndex((a) => a.id === selectedArtwork.id);
    if (currentIndex < artworks.length - 1) {
      setSelectedArtwork(artworks[currentIndex + 1]);
    }
  }, [selectedArtwork]);

  // Navigate to previous artwork
  const handlePreviousArtwork = useCallback(() => {
    if (!selectedArtwork) return;
    const currentIndex = artworks.findIndex((a) => a.id === selectedArtwork.id);
    if (currentIndex > 0) {
      setSelectedArtwork(artworks[currentIndex - 1]);
    }
  }, [selectedArtwork]);

  // Check if there are next/previous artworks
  const currentIndex = selectedArtwork
    ? artworks.findIndex((a) => a.id === selectedArtwork.id)
    : -1;
  const hasNext = currentIndex < artworks.length - 1;
  const hasPrevious = currentIndex > 0;

  // Scroll to gallery section
  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home">
        <HeroSection onExploreClick={scrollToGallery} />
      </section>

      {/* Featured Artworks - Horizontal Scroll */}
      <FeaturedArtworks artworks={artworks} onArtworkClick={handleArtworkClick} />

      {/* Main Gallery */}
      <section id="gallery">
        <GallerySection artworks={artworks} onArtworkClick={handleArtworkClick} />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Footer */}
      <Footer />

      {/* Artwork Detail Modal */}
      <ArtworkDetail
        artwork={selectedArtwork}
        onClose={handleCloseDetail}
        onNext={handleNextArtwork}
        onPrevious={handlePreviousArtwork}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </main>
  );
}

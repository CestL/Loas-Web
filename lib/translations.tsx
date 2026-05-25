"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Artwork } from "@/data/artworks";
import { getLocalizedArtwork, type LocalizedArtwork } from "@/lib/artwork-i18n";

export type Language = "es" | "en";

interface Translations {
  // Navigation
  nav: {
    home: string;
    gallery: string;
    about: string;
  };
  // Hero
  hero: {
    subtitle1: string;
    subtitle2: string;
    cta: string;
    scroll: string;
  };
  // Featured
  featured: {
    label: string;
    title: string;
  };
  // Gallery
  gallery: {
    title: string;
    all: string;
    noArtworks: string;
    eras: Record<string, string>;
  };
  // Artwork Detail
  detail: {
    when: string;
    artist: string;
    medium: string;
    place: string;
    period: string;
    currentStatus: string;
    readMore: string;
    readLess: string;
    viewInGallery: string;
    previous: string;
    next: string;
    imageNotFound: string;
  };
  // About
  about: {
    title: string;
    description1: string;
    description2: string;
    yearsOfArt: string;
    masterpieces: string;
    artists: string;
  };
  // Footer
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: "INICIO",
      gallery: "GALERÍA",
      about: "ACERCA",
    },
    hero: {
      subtitle1: "Museo Virtual de",
      subtitle2: "Pintura Clásica de Ligia Borett",
      cta: "Explorar Galería",
      scroll: "Deslizar",
    },
    featured: {
      label: "Colección Destacada",
      title: "Obras Maestras",
    },
    gallery: {
      title: "GALERÍA",
      all: "Todo",
      noArtworks: "No se encontraron obras para esta época.",
      eras: {
        Asiático: "Asiático",
        Floral: "Floral",
        Retrato: "Retrato",
        Talleres: "Talleres",
        Valdivia: "Valdivia",
      },
    },
    detail: {
      when: "Año",
      artist: "Artista",
      medium: "Técnica",
      place: "Lugar",
      period: "Período",
      currentStatus: "Ubicación Actual",
      readMore: "LEER MÁS",
      readLess: "LEER MENOS",
      viewInGallery: "Ver en Galería",
      previous: "Anterior",
      next: "Siguiente",
      imageNotFound: "Imagen no encontrada",
    },
    about: {
      title: "Acerca de la Galería",
      description1:
        "LoArt es una galería virtual creada para compartir el arte y la sensibilidad de una vida entera plasmada en cada cuadro. Cada obra refleja recuerdos, emociones y momentos únicos, invitando a descubrir la belleza de una colección profundamente personal y auténtica.",
      description2:
        "Descubre una experiencia artística cercana e inspiradora a través de esta galería digital. Cada pintura transmite una historia, una emoción y una mirada especial del mundo, invitándote a conectar con los detalles, colores y sentimientos detrás de cada pincelada..",
      yearsOfArt: "Años de Arte",
      masterpieces: "Obras Maestras",
      artists: "Artistas",
    },
    footer: {
      rights: "© 2026 LoArt. Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "HOME",
      gallery: "GALLERY",
      about: "ABOUT",
    },
    hero: {
      subtitle1: "Virtual Museum For",
      subtitle2: "Ligia Borett Classical Art Paintings",
      cta: "Explore Gallery",
      scroll: "Scroll",
    },
    featured: {
      label: "Featured Collection",
      title: "Masterpieces",
    },
    gallery: {
      title: "GALLERY",
      all: "All",
      noArtworks: "No artworks found for this era.",
      eras: {
        Asiático: "Asian",
        Floral: "Floral",
        Retrato: "Portrait",
        Talleres: "Workshops",
        Valdivia: "Valdivia",
      },
    },
    detail: {
      when: "When",
      artist: "Artist",
      medium: "Medium",
      place: "Place",
      period: "Period",
      currentStatus: "Current Status",
      readMore: "READ MORE",
      readLess: "READ LESS",
      viewInGallery: "View in Gallery",
      previous: "Previous",
      next: "Next",
      imageNotFound: "Image not found",
    },
    about: {
      title: "About the Gallery",
      description1:
        "LoArt is a virtual gallery created to share the art and sensitivity of a lifetime captured in every painting. Each piece reflects memories, emotions, and meaningful moments, inviting you to discover the beauty of a deeply personal and authentic collection.",
      description2:
        "Discover an intimate and inspiring artistic experience through this digital gallery. Every painting tells a story, conveys emotion, and offers a unique view of the world, inviting you to connect with the details, colors, and feelings behind every brushstroke.",
      yearsOfArt: "Years of Art",
      masterpieces: "Masterpieces",
      artists: "Artists",
    },
    footer: {
      rights: "© 2026 LoArt. All rights reserved.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  getArtwork: (artwork: Artwork) => LocalizedArtwork;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es"); // Default to Spanish

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = translations[language];

  const getArtwork = useCallback(
    (artwork: Artwork) => {
      const eraLabel = (era: string) => {
        if (!era) return "";
        return t.gallery.eras[era] ?? era;
      };
      return getLocalizedArtwork(artwork, language, eraLabel);
    },
    [language, t]
  );

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage, getArtwork }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

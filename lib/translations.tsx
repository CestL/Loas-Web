"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

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
      subtitle2: "Pintura Clásica del Siglo XV al XIX",
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
    },
    detail: {
      when: "Año",
      artist: "Artista",
      medium: "Técnica",
      place: "Lugar",
      period: "Período",
      currentStatus: "Ubicación Actual",
      readMore: "LEER MÁS",
      viewInGallery: "Ver en Galería",
      previous: "Anterior",
      next: "Siguiente",
      imageNotFound: "Imagen no encontrada",
    },
    about: {
      title: "Acerca de la Galería",
      description1:
        "LoArt es una experiencia de museo virtual dedicada a exhibir las obras maestras más influyentes del siglo XV al XIX. Nuestra colección curada reúne obras del Siglo de Oro Holandés, el Romanticismo, el Impresionismo y más allá.",
      description2:
        "Experimenta el arte como nunca antes con nuestra galería digital inmersiva. Cada pintura cuenta una historia, y te invitamos a descubrir la rica historia y emoción detrás de cada pincelada.",
      yearsOfArt: "Años de Arte",
      masterpieces: "Obras Maestras",
      artists: "Artistas",
    },
    footer: {
      rights: "© 2024 LoArt. Todos los derechos reservados.",
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
      subtitle2: "15s - 19s Classical Art Paintings",
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
    },
    detail: {
      when: "When",
      artist: "Artist",
      medium: "Medium",
      place: "Place",
      period: "Period",
      currentStatus: "Current Status",
      readMore: "READ MORE",
      viewInGallery: "View in Gallery",
      previous: "Previous",
      next: "Next",
      imageNotFound: "Image not found",
    },
    about: {
      title: "About the Gallery",
      description1:
        "LoArt is a virtual museum experience dedicated to showcasing the most influential masterpieces from the 15th to 19th centuries. Our curated collection brings together works from the Dutch Golden Age, Romanticism, Impressionism, and beyond.",
      description2:
        "Experience art like never before with our immersive digital gallery. Each painting tells a story, and we invite you to discover the rich history and emotion behind every brushstroke.",
      yearsOfArt: "Years of Art",
      masterpieces: "Masterpieces",
      artists: "Artists",
    },
    footer: {
      rights: "© 2024 LoArt. All rights reserved.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
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

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
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

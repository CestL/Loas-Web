import type { Artwork } from "@/data/artworks";
import { artworkTranslationsEn } from "@/data/artwork-translations-en";
import type { Language } from "@/lib/translations";

export type LocalizedArtwork = {
  title: string;
  artist: string;
  materials: string;
  location: string;
  description: string;
  era: string;
};

export function getLocalizedArtwork(
  artwork: Artwork,
  language: Language,
  eraLabel: (era: string) => string
): LocalizedArtwork {
  if (language === "en") {
    const en = artworkTranslationsEn[artwork.id];
    return {
      title: en?.title ?? artwork.title,
      artist: en?.artist ?? artwork.artist,
      materials: en?.materials ?? artwork.materials,
      location: en?.location ?? artwork.location,
      description: en?.description ?? artwork.description,
      era: eraLabel(artwork.era),
    };
  }

  return {
    title: artwork.title,
    artist: artwork.artist,
    materials: artwork.materials,
    location: artwork.location,
    description: artwork.description,
    era: eraLabel(artwork.era),
  };
}

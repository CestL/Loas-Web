import type { Artwork } from "@/data/artworks";

// Fixed production-safe image extension/case handling for Linux/Vercel hosts
const CASE_SENSITIVE_IMAGE_ALIASES: Record<string, string> = {
  "/artworks/Camelia Blanca.png": "/artworks/Camelia Blanca.PNG",
  "/artworks/El Cielo que Pinta la Tierra.jpg": "/artworks/El cielo que pinta la tierra.jpg",
  "/artworks/Detras de la isla teja.jpg": "/artworks/Detras de la isla teja.JPG",
  "/artworks/Selva Valdiviana.png": "/artworks/Selva Valdiviana.PNG",
  "/artworks/Coco.jpeg": "/artworks/Coco.JPEG",
  "/artworks/Bloom.jpeg": "/artworks/Bloom.JPEG",
  "/artworks/Camelia Rosa.png": "/artworks/Camelia Rosa.PNG",
  "/artworks/Cerro San Cristobal.jpeg": "/artworks/Cerro San Cristobal.JPEG",
};

/** Resolves artwork image paths to exact on-disk filenames for case-sensitive production hosts */
export function getArtworkImageSrc(imagePath: string): string {
  return CASE_SENSITIVE_IMAGE_ALIASES[imagePath] ?? imagePath;
}

export function getArtworkImageSrcFromArtwork(artwork: Artwork): string {
  return getArtworkImageSrc(artwork.image);
}

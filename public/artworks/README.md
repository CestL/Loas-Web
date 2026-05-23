# LoArt - Artwork Images

Place your painting images in this folder.

## Supported formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Usage

1. Add your image files to this folder
2. Open `/data/artworks.ts`
3. Add a new artwork object with `image: "/artworks/your-image-name.jpg"`

## Example

```typescript
{
  id: "my-painting",
  title: "My Beautiful Painting",
  artist: "Your Name",
  year: 2024,
  location: "Your City",
  materials: "Oil on Canvas",
  period: "Contemporary",
  currentStatus: "Private Collection",
  description: "Description of your artwork...",
  image: "/artworks/my-painting.jpg",
  era: "1900s"
}
```

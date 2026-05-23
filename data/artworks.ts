/* ====================================================
   LOART - ARTWORK DATA
   
   IMPORTANT: This is where you add your own paintings!
   
   Each artwork object contains:
   - id: unique identifier
   - title: artwork title
   - artist: artist name
   - year: year created
   - location: where it was created/exhibited
   - materials: medium used (Oil Paint, Watercolor, etc.)
   - period: art period (Rococo, Baroque, Impressionism, etc.)
   - currentStatus: where it's currently located
   - description: brief description of the artwork
   - image: path to the image file
   - era: for filtering (1600s, 1700s, 1800s, 1900s)
   
   ==================================================== */

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  location: string;
  materials: string;
  period: string;
  currentStatus: string;
  description: string;
  image: string;
  era: "1600s" | "1700s" | "1800s" | "1900s";
}

/* ====================================================
   ADD YOUR OWN ARTWORK OBJECTS IN THIS ARRAY
   
   To add a new painting:
   1. Place your image in /public/artworks/ folder
   2. Copy one of the objects below as a template
   3. Update all the fields with your painting info
   4. Make sure the image path matches your file name
   
   Example:
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
   ==================================================== */

export const artworks: Artwork[] = [
  // ===== 1700s ARTWORKS =====
  {
    id: "the-swing",
    title: "The Swing",
    artist: "Jean-Honoré Fragonard",
    year: 1767,
    location: "Paris, France",
    materials: "Oil on Canvas",
    period: "Rococo",
    currentStatus: "The Wallace Collection, London",
    description: "In the history of painting, Jean-Honoré Fragonard's The Swing (1767) is unmatched in its frivolity and over-the-top romance. At the center of the work, a young woman clothed in a billowing, ruffled, ballet-pink dress floats in a dramatically lit clearing, rocking above the ground on a crimson-cushioned swing.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=1000&fit=crop",
    era: "1700s"
  },
  {
    id: "view-of-delft",
    title: "View of Delft",
    artist: "Johannes Vermeer",
    year: 1661,
    location: "Delft, Netherlands",
    materials: "Oil on Canvas",
    period: "Dutch Golden Age",
    currentStatus: "Mauritshuis, The Hague",
    description: "One of only three known landscapes by Vermeer, this stunning cityscape captures Delft under dramatic clouds with remarkable attention to light and atmosphere.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop",
    era: "1600s"
  },
  
  // ===== 1800s ARTWORKS =====
  {
    id: "wanderer-above-sea",
    title: "Wanderer Above the Sea of Fog",
    artist: "Caspar David Friedrich",
    year: 1818,
    location: "Dresden, Germany",
    materials: "Oil on Canvas",
    period: "Romanticism",
    currentStatus: "Hamburger Kunsthalle, Hamburg",
    description: "An iconic work of Romanticism depicting a man standing upon a rocky precipice, his back to the viewer, gazing out over a landscape covered in a thick sea of fog.",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=800&h=1000&fit=crop",
    era: "1800s"
  },
  {
    id: "liberty-leading",
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    year: 1830,
    location: "Paris, France",
    materials: "Oil on Canvas",
    period: "Romanticism",
    currentStatus: "Louvre Museum, Paris",
    description: "This powerful allegorical painting commemorates the July Revolution of 1830, with the personified Liberty leading the people forward over barricades and fallen bodies.",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=1000&fit=crop",
    era: "1800s"
  },
  {
    id: "great-wave",
    title: "The Great Wave off Kanagawa",
    artist: "Katsushika Hokusai",
    year: 1831,
    location: "Edo, Japan",
    materials: "Woodblock Print",
    period: "Ukiyo-e",
    currentStatus: "Metropolitan Museum of Art, New York",
    description: "Perhaps the most recognized work of Japanese art in the world, this dramatic composition shows towering waves threatening boats off the coast of Kanagawa with Mount Fuji in the background.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&h=1000&fit=crop",
    era: "1800s"
  },
  {
    id: "starry-night",
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: 1889,
    location: "Saint-Rémy-de-Provence, France",
    materials: "Oil on Canvas",
    period: "Post-Impressionism",
    currentStatus: "Museum of Modern Art, New York",
    description: "Painted during Van Gogh's stay at the asylum in Saint-Rémy, this swirling night sky over a sleeping village has become one of the most recognized images in Western art.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop",
    era: "1800s"
  },
  
  // ===== 1600s ARTWORKS =====
  {
    id: "girl-pearl-earring",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: 1665,
    location: "Delft, Netherlands",
    materials: "Oil on Canvas",
    period: "Dutch Golden Age",
    currentStatus: "Mauritshuis, The Hague",
    description: "Often called the 'Mona Lisa of the North', this tronie depicts a girl in exotic dress with a large pearl earring, her gaze meeting the viewer with an enigmatic expression.",
    image: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?w=800&h=1000&fit=crop",
    era: "1600s"
  },
  {
    id: "night-watch",
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    year: 1642,
    location: "Amsterdam, Netherlands",
    materials: "Oil on Canvas",
    period: "Dutch Golden Age",
    currentStatus: "Rijksmuseum, Amsterdam",
    description: "Rembrandt's masterpiece depicts the militia company of Captain Frans Banninck Cocq, notable for its effective use of light and shadow and the perception of motion in what would have traditionally been a static portrait.",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&h=1000&fit=crop",
    era: "1600s"
  },
  
  // ===== 1900s ARTWORKS =====
  {
    id: "persistence-memory",
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: 1931,
    location: "Barcelona, Spain",
    materials: "Oil on Canvas",
    period: "Surrealism",
    currentStatus: "Museum of Modern Art, New York",
    description: "Dalí's most famous surrealist work features melting watches in a dreamlike landscape, exploring themes of time and the subconscious mind.",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&h=1000&fit=crop",
    era: "1900s"
  },
  {
    id: "son-of-man",
    title: "The Son of Man",
    artist: "René Magritte",
    year: 1964,
    location: "Brussels, Belgium",
    materials: "Oil on Canvas",
    period: "Surrealism",
    currentStatus: "Private Collection",
    description: "A self-portrait where the artist's face is largely obscured by a hovering green apple, this painting explores the conflict between the visible and the hidden.",
    image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=800&h=1000&fit=crop",
    era: "1900s"
  },
  
  /* ====================================================
     PLACE YOUR PAINTING IMAGES HERE
     
     Add more artwork objects following the same structure.
     Remember to:
     1. Give each artwork a unique id
     2. Place your images in /public/artworks/
     3. Use the correct era for filtering (1600s-1900s)
     
     ==================================================== */
];

// Era options for the gallery filter
export const eras = ["1600s", "1700s", "1800s", "1900s"] as const;
export type Era = typeof eras[number];

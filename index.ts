export interface Artwork {
  id: string;
  title: string;
  author: string;
  style: string;
  imageUrl: string;
  description: string;
  price: number;
  rating: number;
}

export interface User {
  id: string;
  name: string;
  isArtist: boolean;
  artworks?: Artwork[];
}
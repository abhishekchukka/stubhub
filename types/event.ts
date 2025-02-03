export interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  imageurl: string;
  imageUrl?: string;
  price: number;
  likes: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

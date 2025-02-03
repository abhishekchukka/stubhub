export interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  imageurl: string; // If you plan to use `imageUrl` as well, ensure both are handled
  imageUrl?: string; // Optional if you expect `imageUrl` to be used in some cases
  price: number;
  likes: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

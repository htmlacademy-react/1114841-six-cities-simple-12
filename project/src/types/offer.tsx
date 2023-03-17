export type ApartmentType = 'Apartment' | 'Private Room' | 'House' | 'Hotel';

export type Host = {
  src: string;
  name: string;
  status: boolean;
}

export type Reviews = {
  id: number;
  src: string;
  name: string;
  score: number;
  data: string;
  text: string;
}

export type Offer = {
  src: string[];
  premium: boolean;
  price: number;
  title: string;
  description: string;
  type: ApartmentType;
  rating: number;
  bedrooms: number;
  guests: number;
  items: string[];
  host: Host;
  id: number;
}

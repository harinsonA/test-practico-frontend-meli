import { ReactNode } from 'react';

export interface Item {
  id: string;
  title: string;
  condition: string;
  thumbnail: string;
  price: number;
  shipping: {
    free_shipping: boolean;
  };
}

export interface ItemList {
  items: Item[];
}

export interface ItemDetail extends Item {
  plain_text: string;
}

export interface Children {
  children: ReactNode;
}

export interface Categories {
  categories: string[];
}
export interface ProductColor {
  id: string;
  color: string;
  imagesUrl: string[];
  sizes: string[];
}

export interface Product {
  id: string;
  gender: 'men' | 'women';
  sport: string;
  brand: string;
  name: string;
  price: number;
  sizes: string[];
  colors: ProductColor[];
  rating?: number;
}

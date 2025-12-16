import type { Product } from '@/types/product';

export const PRODUCT: Product = {
  id: 'product-1',
  gender: 'men',
  sport: 'basketball',
  brand: 'Air Jordan',
  name: 'Air Jordan 1',
  price: 175,
  sizes: [
    'M6 / W7.5',
    'M6 / W8',
    'M6 / W9',
    'M6 / W10',
    'M6 / W11',
    'M6 / W12',
  ],
  colors: [
    {
      id: 'prodcut-1-color-1',
      color: 'Black White',
      imagesUrl: [
        'https://m.media-amazon.com/images/I/61smfbfj6WS._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61OpyU50O9S._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61sZ1Tn4SoS._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/71DbCPI6eHS._AC_SY695_.jpg',
        'https://m.media-amazon.com/images/I/61fD1lESC+S._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61ec1nph4RS._AC_SX695_.jpg',
      ],
      sizes: ['M6 / W8', 'M6 / W9', 'M6 / W12'],
    },
    {
      id: 'prodcut-1-color-2',
      color: 'White Gray',
      imagesUrl: [
        'https://m.media-amazon.com/images/I/61dLDXdOEhL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61dTGIzp0hL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61YNCLp6p8L._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61RBgl5y03L._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/71+fcVPcFNL._AC_SY695_.jpg',
        'https://m.media-amazon.com/images/I/61ZAtIhRHnL._AC_SX695_.jpg',
      ],
      sizes: [
        'M6 / W7.5',
        'M6 / W8',
        'M6 / W9',
        'M6 / W10',
        'M6 / W11',
        'M6 / W12',
      ],
    },
    {
      id: 'prodcut-1-color-3',
      color: 'Black Gold',
      imagesUrl: [
        'https://m.media-amazon.com/images/I/71ZT+FfvehL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/71rPzIM0CGL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/710lD8wNXSL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/71IusVW+JxL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/71MU6DceP+L._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61sTpEhRLCL._AC_SX695_.jpg',
      ],
      sizes: ['M6 / W10', 'M6 / W12'],
    },

    {
      id: 'prodcut-1-color-5',
      color: 'White Yellow',
      imagesUrl: [
        'https://m.media-amazon.com/images/I/61KH6jsAjFL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61adCwX-wwL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/615abUG8TFL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61FqeT7BgGL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/612s4oV0EcL._AC_SX695_.jpg',
        'https://m.media-amazon.com/images/I/61r3xZIy7DL._AC_SX695_.jpg',
      ],
      sizes: ['M6 / W7.5', 'M6 / W8', 'M6 / W9'],
    },
    {
      id: 'prodcut-1-color-4',
      color: 'White Red',
      imagesUrl: [
        'https://m.media-amazon.com/images/I/51uMayw-9wL._AC_SX695_.jpg',
      ],
      sizes: ['M6 / W9'],
    },
  ],
  rating: 4.5,
};

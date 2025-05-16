import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and our special sauce',
    price: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500',
    category: 'Burgers',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomatoes, and basil on our homemade crust',
    price: 14.99,
    imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=500',
    category: 'Pizza',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Street Tacos',
    description: 'Three authentic Mexican street tacos with your choice of meat',
    price: 10.99,
    imageUrl: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=500',
    category: 'Tacos',
    createdAt: new Date().toISOString(),
  },
];

export const categories = ['All', 'Burgers', 'Pizza', 'Tacos', 'Drinks', 'Desserts']; 
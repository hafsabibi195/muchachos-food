import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and our special sauce',
    price: 599,
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500',
    category: 'Burgers',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, tomatoes, and basil on our homemade crust',
    price: 799,
    imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=500',
    category: 'Pizza',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Chicken Shawarma',
    description: 'Tender marinated chicken with fresh vegetables and garlic sauce in freshly baked pita',
    price: 399,
    imageUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=500',
    category: 'Shawarma',
    createdAt: new Date().toISOString(),
  },
];

export const categories = ['All', 'Burgers', 'Pizza', 'Shawarma', 'Drinks', 'Desserts']; 
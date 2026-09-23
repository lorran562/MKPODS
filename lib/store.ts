'use client';

import { useState, useEffect } from 'react';

export interface Flavor { name: string; available: boolean; }
export interface Product { id: string; brand: string; model: string; capacity: string; price: string; image: string; flavors: Flavor[]; }
export interface SiteSettings { name: string; logo: string; primaryColor: string; }

const DEFAULT_PRODUCTS: Product[] = [
  { id: '1', brand: 'IGNITE', model: 'V50', capacity: '5K', price: '99,99', image: '/product-v50.jpg', flavors: [{ name: 'Green Apple', available: true }, { name: 'Morango Ice', available: true }, { name: 'Uva Gelada', available: true }, { name: 'Menta', available: true }] },
  { id: '2', brand: 'IGNITE', model: 'V55', capacity: '5.5K', price: '109,99', image: '/product-v55.jpg', flavors: [{ name: 'Blueberry', available: true }, { name: 'Manga Ice', available: true }, { name: 'Kiwi', available: true }] },
  { id: '3', brand: 'IGNITE', model: 'V80', capacity: '8K', price: '129,99', image: '/product-v80.jpg', flavors: [{ name: 'Tutti Frutti', available: true }, { name: 'Melão Ice', available: true }, { name: 'Uva', available: true }] },
  { id: '4', brand: 'IGNITE', model: 'V120', capacity: '12K', price: '134,99', image: '/product-v120.jpg', flavors: [{ name: 'Blue Razz', available: true }, { name: 'Watermelon', available: true }, { name: 'Grape Ice', available: true }] },
  { id: '5', brand: 'IGNITE', model: 'V150', capacity: '15K', price: '149,99', image: '/pod-ignite-v150.jpg', flavors: [{ name: 'Strawberry Kiwi', available: true }, { name: 'Passion Fruit', available: true }, { name: 'Mint Ice', available: true }] },
  { id: '6', brand: 'IGNITE', model: 'V200', capacity: '20K', price: '169,99', image: '/pod-ignite-v200.jpg', flavors: [{ name: 'Blueberry Ice', available: true }, { name: 'Peach Mango', available: true }, { name: 'Grape', available: true }] },
  { id: '7', brand: 'LOST MARY', model: 'BM600', capacity: '600', price: '79,99', image: '/pod-lost-mary.jpg', flavors: [{ name: 'Watermelon Ice', available: true }, { name: 'Blueberry', available: true }, { name: 'Cherry Cola', available: true }] },
  { id: '8', brand: 'ELFBAR', model: 'BC5000', capacity: '5K', price: '119,99', image: '/pod-elfbar.jpg', flavors: [{ name: 'Strawberry Banana', available: true }, { name: 'Sour Apple', available: true }, { name: 'Lush Ice', available: true }] },
  { id: '9', brand: 'IGNITE', model: 'V250', capacity: '25K', price: '189,99', image: '/pod-ignite-v250.jpg', flavors: [{ name: 'Lemon Lime', available: true }, { name: 'Raspberry', available: true }, { name: 'Cool Mint', available: true }] },
];

const DEFAULT_SETTINGS: SiteSettings = { name: 'MKPODS', logo: '/mkpods-logo.svg', primaryColor: '#6ee7b7' };

export function useStore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { const savedProducts = localStorage.getItem('mkpods_products_v2'); const savedSettings = localStorage.getItem('mkpods_settings'); setProducts(savedProducts ? JSON.parse(savedProducts) : DEFAULT_PRODUCTS); if (savedSettings) setSettings(JSON.parse(savedSettings)); setIsLoaded(true); }, []);
  const saveProducts = (newProducts: Product[]) => { setProducts(newProducts); localStorage.setItem('mkpods_products_v2', JSON.stringify(newProducts)); };
  const saveSettings = (newSettings: SiteSettings) => { setSettings(newSettings); localStorage.setItem('mkpods_settings', JSON.stringify(newSettings)); };
  return { products, settings, saveProducts, saveSettings, isLoaded };
}

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
];

const DEFAULT_SETTINGS: SiteSettings = { name: 'MKPODS', logo: '', primaryColor: '#6ee7b7' };

export function useStore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { const savedProducts = localStorage.getItem('mkpods_products'); const savedSettings = localStorage.getItem('mkpods_settings'); setProducts(savedProducts ? JSON.parse(savedProducts) : DEFAULT_PRODUCTS); if (savedSettings) setSettings(JSON.parse(savedSettings)); setIsLoaded(true); }, []);
  const saveProducts = (newProducts: Product[]) => { setProducts(newProducts); localStorage.setItem('mkpods_products', JSON.stringify(newProducts)); };
  const saveSettings = (newSettings: SiteSettings) => { setSettings(newSettings); localStorage.setItem('mkpods_settings', JSON.stringify(newSettings)); };
  return { products, settings, saveProducts, saveSettings, isLoaded };
}



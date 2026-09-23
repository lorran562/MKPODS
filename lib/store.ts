'use client';

import { useState, useEffect } from 'react';

export interface Flavor { name: string; available: boolean; }
export interface Product { id: string; brand: string; model: string; capacity: string; price: string; image: string; flavors: Flavor[]; promo?: boolean; }
export interface SiteSettings { name: string; logo: string; primaryColor: string; }

const ready = (name = 'Pronta entrega'): Flavor[] => [{ name, available: true }];
const item = (id: number, brand: string, model: string, capacity: string, price: string, image: string, promo = false, option = 'Pronta entrega'): Product => ({ id: String(id), brand, model, capacity, price, image, promo, flavors: ready(option) });

const DEFAULT_PRODUCTS: Product[] = [
  item(1, 'IGNITE', 'V6', 'VAPE', '23', '/product-v50.jpg'),
  item(2, 'IGNITE', 'V NANO', 'VAPE', '28', '/product-v55.jpg', true),
  item(3, 'IGNITE', 'V35', 'VAPE', '33', '/product-v80.jpg', true),
  item(4, 'IGNITE', 'V55', 'VAPE', '55', '/product-v55.jpg', true),
  item(5, 'IGNITE', 'V80', 'VAPE', '70', '/product-v80.jpg'),
  item(6, 'IGNITE', 'V150', 'VAPE', '75', '/pod-ignite-v150.jpg'),
  item(7, 'IGNITE', 'V155', 'VAPE', '70', '/pod-ignite-v150.jpg', true),
  item(8, 'IGNITE', 'V120', 'VAPE', '73', '/product-v120.jpg'),
  item(9, 'IGNITE', 'P100 KIT', 'KIT', '70', '/pod-ignite-v200.jpg'),
  item(10, 'IGNITE', 'V250', 'VAPE', '83', '/pod-ignite-v250.jpg'),
  item(11, 'IGNITE', 'V300', 'VAPE', '88', '/pod-ignite-v200.jpg'),
  item(12, 'IGNITE', 'V400 ICE', 'VAPE', '90', '/pod-ignite-v250.jpg'),
  item(13, 'IGNITE', 'V400 MIX', 'VAPE', '93', '/pod-ignite-v250.jpg'),
  item(14, 'IGNITE', 'IGNITE SWEET', 'VAPE', '85', '/pod-ignite-v150.jpg'),
  item(15, 'MARCAS DIVERSAS', 'DINNER LADY 50K', '50K', '95', '/pod-ignite-v150.jpg'),
  item(16, 'MARCAS DIVERSAS', 'WEFUME 30K', '30K', '70', '/pod-ignite-v200.jpg', true),
  item(17, 'MARCAS DIVERSAS', 'BLACK SHEEP 30K', '30K', '87', '/pod-ignite-v200.jpg'),
  item(18, 'MARCAS DIVERSAS', 'OXBAR 30K', '30K', '65', '/pod-ignite-v250.jpg', true),
  item(19, 'MARCAS DIVERSAS', 'OXBAR 50K', '50K', '93', '/pod-ignite-v250.jpg'),
  item(20, 'LIFE POD', 'LIFE POD REFIL 8K', 'REFIL', '40', '/product-v120.jpg', true),
  item(21, 'LIFE POD', 'LIFE POD 10K KIT', 'KIT', '75', '/product-v120.jpg'),
  item(22, 'LIFE POD', 'LIFE POD 10K REFIL', 'REFIL', '60', '/product-v120.jpg'),
  item(23, 'LIFE POD', 'LIFE POD 40K ONE', '40K', '90', '/product-v120.jpg'),
  item(24, 'ELFBAR', 'ELFBAR EW KIT 9K', 'KIT', '70', '/pod-elfbar.jpg'),
  item(25, 'ELFBAR', 'ELFBAR SHISHA 18K', '18K', '70', '/pod-elfbar.jpg'),
  item(26, 'ELFBAR', 'ELFBAR DUKE 35K', '35K', '90', '/pod-elfbar.jpg'),
  item(27, 'ELFBAR', 'ELFBAR 15K', '15K', '60', '/pod-elfbar.jpg', true),
  item(28, 'ELFBAR', 'ELFBAR 23K', '23K', '77', '/pod-elfbar.jpg'),
  item(29, 'ELFBAR', 'ELFBAR 30K', '30K', '83', '/pod-elfbar.jpg'),
  item(30, 'ELFBAR', 'ELFBAR ICE KING 40K', '40K', '85', '/pod-elfbar.jpg'),
  item(31, 'ELFBAR', 'ELFBAR 45K', '45K', '93', '/pod-elfbar.jpg'),
  item(32, 'ELFBAR', 'ELFBAR TRIO', 'VAPE', '87', '/pod-elfbar.jpg'),
  item(33, 'ELFBAR', 'ELFBAR 25K KIT', 'KIT', '85', '/pod-elfbar.jpg'),
  item(34, 'ELFBAR', 'ELFBAR 25K REFIL', 'REFIL', '68', '/pod-elfbar.jpg'),
  item(35, 'ELFBAR', 'ELFBAR 10K', '10K', '55', '/pod-elfbar.jpg', true),
  item(36, 'RABBEATS', 'RABBEATS 50K', '50K', '75', '/pod-ignite-v200.jpg'),
  item(37, 'OUTROS', 'LÍQUIDO BLVK', 'LÍQUIDO', '60', '/pod-lost-mary.jpg', false, 'BLVK'),
  item(38, 'OUTROS', 'XROS PRO', 'KIT', '205', '/product-v80.jpg', false, 'Aparelho'),
];

const DEFAULT_SETTINGS: SiteSettings = { name: 'MKPODS', logo: '/mkpods-logo.svg', primaryColor: '#6ee7b7' };

export function useStore() {
  const [products, setProducts] = useState<Product[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => { const savedProducts = localStorage.getItem('mkpods_products_v3'); const savedSettings = localStorage.getItem('mkpods_settings'); setProducts(savedProducts ? JSON.parse(savedProducts) : DEFAULT_PRODUCTS); if (savedSettings) setSettings(JSON.parse(savedSettings)); setIsLoaded(true); }, []);
  const saveProducts = (newProducts: Product[]) => { setProducts(newProducts); localStorage.setItem('mkpods_products_v3', JSON.stringify(newProducts)); };
  const saveSettings = (newSettings: SiteSettings) => { setSettings(newSettings); localStorage.setItem('mkpods_settings', JSON.stringify(newSettings)); };
  return { products, settings, saveProducts, saveSettings, isLoaded };
}


'use client';

import { useState } from 'react';
import { Product } from '@/lib/store';
import ProductCard from './ProductCard';
import CheckoutModal from './CheckoutModal';

interface ProductGridProps { products: Product[]; }

export default function ProductGrid({ products }: ProductGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState('');

  const handleBuy = (product: Product, flavor: string) => {
    if (!flavor) { alert('Por favor, selecione um sabor antes de comprar.'); return; }
    setSelectedProduct(product);
    setSelectedFlavor(flavor);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="mb-7 flex items-center justify-between"><p className="text-xs font-bold uppercase tracking-[.2em] text-zinc-500">{products.length} produtos disponíveis</p><span className="hidden text-xs text-zinc-600 sm:block">Atualizado hoje · estoque limitado</span></div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} onBuy={handleBuy} />)}</div>
      {selectedProduct && <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} selectedFlavor={selectedFlavor} />}
    </>
  );
}



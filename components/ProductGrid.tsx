'use client';

import { useState } from 'react';
import { Product } from '@/lib/store';
import ProductCard from './ProductCard';
import CheckoutModal from './CheckoutModal';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState('');

  const handleBuy = (product: Product, flavor: string) => {
    if (!flavor) {
      alert('Por favor, selecione um sabor antes de comprar.');
      return;
    }
    setSelectedProduct(product);
    setSelectedFlavor(flavor);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={handleBuy} />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <CheckoutModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
          selectedFlavor={selectedFlavor}
        />
      )}
    </section>
  );
}

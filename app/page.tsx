'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { useStore } from '@/lib/store';

export default function Home() {
  const { products, isLoaded } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => 
    product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.flavors.some(f => f.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950">
      <Navbar onSearch={setSearchTerm} />
      
      {/* Main Content Area */}
      <div className="pt-24">
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="py-24 text-center">
            <p className="text-zinc-500 text-lg">Nenhum pod encontrado para &quot;{searchTerm}&quot;</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/store';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product, flavor: string) => void;
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    product.flavors.find(f => f.available)?.name || ''
  );

  return (
    <div className="bg-[#0a0a0a] rounded-3xl overflow-hidden border border-zinc-900 flex flex-col h-full group">
      <div className="relative aspect-square p-4">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.model}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 right-2 z-10">
            <span className="px-2 py-1 bg-[#22c55e]/20 text-[#22c55e] text-[10px] font-bold rounded-full border border-[#22c55e]/30">
              {product.capacity}
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest block mb-1">
            {product.brand}
          </span>
          <h3 className="text-3xl font-display font-bold text-white leading-none">
            {product.model}
          </h3>
        </div>

        <div className="mb-6">
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block mb-2">
            SABORES:
          </span>
          <div className="flex flex-wrap gap-2">
            {product.flavors.map((flavor, idx) => (
              <button
                key={idx}
                disabled={!flavor.available}
                onClick={() => setSelectedFlavor(flavor.name)}
                className={`px-3 py-1 text-[11px] font-medium rounded-full border transition-all ${
                  !flavor.available
                    ? 'bg-zinc-900 text-zinc-500 border-zinc-800 cursor-not-allowed opacity-50'
                    : selectedFlavor === flavor.name
                    ? 'bg-[#22c55e] text-zinc-950 border-[#22c55e] shadow-[0_0_10px_rgba(34,197,94,0.3)]'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-600'
                }`}
              >
                {flavor.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <div className="mb-4">
            <div className="text-3xl font-display font-bold text-[#22c55e]">
              R$ {product.price}
            </div>
            <div className="text-[11px] text-zinc-600 font-medium">
              à vista no Pix
            </div>
          </div>

          <button 
            onClick={() => onBuy(product, selectedFlavor)}
            className="w-full py-4 bg-[#22c55e] hover:bg-[#1eb054] text-zinc-950 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <ShoppingCart size={20} fill="currentColor" />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

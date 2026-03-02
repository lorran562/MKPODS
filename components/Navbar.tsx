'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { useStore } from '@/lib/store';
import Image from 'next/image';

interface NavbarProps {
  onSearch?: (term: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { settings, isLoaded } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  if (!isLoaded) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <Image src={settings.logo} alt="Logo" width={40} height={40} className="object-cover" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white hidden sm:block">
            {settings.name.split('PODS')[0]}<span className="text-[#22c55e]">PODS</span>
          </span>
        </Link>

        {/* Search Input */}
        <div className="flex-grow max-w-md relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Pesquisar pods..."
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl pl-12 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#22c55e] transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 text-zinc-950 text-[10px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Simplified */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <span className="text-sm text-zinc-500">MKPODS - Os melhores pods</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

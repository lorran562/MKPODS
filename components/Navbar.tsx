'use client';

import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps { onSearch?: (term: string) => void; }

export default function Navbar({ onSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-white/[0.08] bg-[#080a0a]/85 py-3 backdrop-blur-xl' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-400 text-[#07100b] shadow-[0_0_25px_rgba(52,211,153,.25)]"><span className="font-display text-lg font-bold">M</span></span>
          <span className="hidden font-display text-xl font-bold tracking-[-.06em] text-white sm:block">MK<span className="text-emerald-400">PODS</span><sup className="ml-1 text-[8px] tracking-normal text-zinc-500">™</sup></span>
        </a>
        <div className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[.18em] text-zinc-400 lg:flex"><a href="#catalogo" className="transition hover:text-emerald-400">Catálogo</a><a href="#categorias" className="transition hover:text-emerald-400">Categorias</a><a href="#beneficios" className="transition hover:text-emerald-400">Por que MKPODS?</a></div>
        <div className="flex flex-1 justify-end gap-2 md:gap-3"><div className="relative w-full max-w-[240px]"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} /><input value={searchTerm} onChange={handleSearchChange} placeholder="Buscar produto" className="w-full rounded-full border border-white/10 bg-white/[0.06] py-2.5 pl-10 pr-4 text-xs text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/50" /></div><button aria-label="Carrinho" className="relative rounded-full border border-white/10 p-2.5 text-zinc-300 transition hover:border-emerald-400/50 hover:text-emerald-300"><ShoppingBag size={18} /><span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-emerald-400 text-[9px] font-bold text-[#07100b]">0</span></button><button aria-label="Abrir menu" className="rounded-full border border-white/10 p-2.5 text-zinc-300 md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}</button></div>
      </div>
      <AnimatePresence>{isMobileMenuOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 overflow-hidden border-t border-white/[0.08] bg-[#080a0a] md:hidden"><div className="container mx-auto flex flex-col gap-5 px-5 py-6 text-xs font-bold uppercase tracking-[.18em] text-zinc-400"><a href="#catalogo" onClick={() => setIsMobileMenuOpen(false)}>Catálogo</a><a href="#categorias" onClick={() => setIsMobileMenuOpen(false)}>Categorias</a><a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)}>Por que MKPODS?</a></div></motion.div>}</AnimatePresence>
    </nav>
  );
}



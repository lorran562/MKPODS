'use client';

import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';

interface NavbarProps { onSearch?: (term: string) => void; }

export default function Navbar({ onSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${isScrolled ? 'border-white/[.1] bg-[#080a0a]/95 backdrop-blur-xl' : 'border-white/[.06] bg-[#080a0a]/90'}`}>
      <div className="container mx-auto flex h-[68px] items-center gap-3 px-4 sm:h-[76px] sm:px-6 md:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2" aria-label="77SMOKE - início">
          <Image src="/mkpods-logo.svg" alt="77SMOKE" width={34} height={34} className="rounded-[10px]" />
          <span className="hidden font-display text-xl font-bold tracking-[-.06em] text-white sm:block">77<span className="text-emerald-400">SMOKE</span></span>
        </a>
        <a href="#catalogo" className="hidden text-xs font-bold uppercase tracking-[.16em] text-zinc-400 transition hover:text-emerald-400 md:block">Catálogo</a>
        <div className="relative ml-auto w-full max-w-[290px] sm:max-w-[360px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
          <input value={searchTerm} onChange={handleSearchChange} placeholder="Buscar modelo ou sabor" aria-label="Buscar modelo ou sabor" className="h-10 w-full rounded-full border border-white/10 bg-white/[.06] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-400/50" />
        </div>
      </div>
    </nav>
  );
}


'use client';

import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useStore } from '@/lib/store';

export default function Footer() {
  const { settings, isLoaded } = useStore();

  if (!isLoaded) return null;

  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-display font-bold tracking-tighter text-white">
                {settings.name.split('PODS')[0]}<span className="text-[#22c55e]">PODS</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              A maior e melhor loja de vaporizadores do Brasil. Qualidade, procedência e o melhor preço do mercado.
            </p>
            <div className="flex items-center gap-4">
              <button className="p-2 bg-zinc-900 hover:bg-[#22c55e] hover:text-zinc-950 text-zinc-400 rounded-lg transition-all">
                <Instagram size={20} />
              </button>
              <button className="p-2 bg-zinc-900 hover:bg-[#22c55e] hover:text-zinc-950 text-zinc-400 rounded-lg transition-all">
                <Facebook size={20} />
              </button>
              <button className="p-2 bg-zinc-900 hover:bg-[#22c55e] hover:text-zinc-950 text-zinc-400 rounded-lg transition-all">
                <Twitter size={20} />
              </button>
              <button className="p-2 bg-zinc-900 hover:bg-[#22c55e] hover:text-zinc-950 text-zinc-400 rounded-lg transition-all">
                <Youtube size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Sobre Nós', 'Contatos', 'Termos de Uso', 'Política de Privacidade', 'Trocas e Devoluções', 'Painel Admin'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Painel Admin' ? '/admin' : '#'} className="text-zinc-500 hover:text-[#22c55e] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Categorias</h4>
            <ul className="space-y-4">
              {['Pods Descartáveis', 'Juices Freebase', 'Juices Nic Salt', 'Kits Iniciais', 'Coils e Cartuchos'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-500 hover:text-[#22c55e] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Atendimento</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <Phone size={18} className="text-[#22c55e] shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <Mail size={18} className="text-[#22c55e] shrink-0" />
                <span>contato@mkpods.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-500 text-sm">
                <MapPin size={18} className="text-[#22c55e] shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-xs">
            © 2024 MKPODS - Todos os direitos reservados. Proibida a venda para menores de 18 anos.
          </p>
          <div className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            <Image src="https://picsum.photos/seed/visa/40/25" alt="Visa" width={40} height={25} referrerPolicy="no-referrer" />
            <Image src="https://picsum.photos/seed/master/40/25" alt="Mastercard" width={40} height={25} referrerPolicy="no-referrer" />
            <Image src="https://picsum.photos/seed/pix/40/25" alt="PIX" width={40} height={25} referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

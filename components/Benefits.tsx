'use client';

import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

const benefits = [
  { icon: Truck, title: 'Despacho rápido', description: 'Seu pedido sai em até 24h úteis.' },
  { icon: ShieldCheck, title: 'Procedência real', description: 'Marcas originais e seleção transparente.' },
  { icon: CreditCard, title: 'Compra segura', description: 'Pix, cartão e parcelamento em até 12x.' },
  { icon: Headphones, title: 'Suporte humano', description: 'Ajuda de verdade quando você precisar.' },
];

export default function Benefits() {
  return <section id="beneficios" className="border-y border-white/[.06] bg-[#080a0a] py-14"><div className="container mx-auto grid grid-cols-1 gap-8 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-4">{benefits.map(({ icon: Icon, title, description }) => <div key={title} className="flex gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-400/[.08] text-emerald-400"><Icon size={20} /></div><div><h3 className="text-sm font-bold text-white">{title}</h3><p className="mt-1 text-xs leading-5 text-zinc-500">{description}</p></div></div>)}</div></section>;
}



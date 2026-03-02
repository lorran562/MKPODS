'use client';

import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: <Truck className="text-emerald-500" size={32} />,
    title: 'Frete Rápido',
    description: 'Enviamos para todo o Brasil com as melhores transportadoras.',
  },
  {
    icon: <ShieldCheck className="text-emerald-500" size={32} />,
    title: 'Produtos Originais',
    description: 'Trabalhamos apenas com marcas autênticas e certificadas.',
  },
  {
    icon: <CreditCard className="text-emerald-500" size={32} />,
    title: 'Pagamento Seguro',
    description: 'Parcele em até 12x ou pague via PIX com desconto.',
  },
  {
    icon: <Headphones className="text-emerald-500" size={32} />,
    title: 'Suporte 24h',
    description: 'Nossa equipe está pronta para tirar todas as suas dúvidas.',
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-zinc-950 border-y border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-zinc-900 rounded-2xl border border-zinc-800">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

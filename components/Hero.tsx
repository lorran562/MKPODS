'use client';

import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/[0.06] bg-[#080a0a] pb-12 pt-24 sm:pb-16 sm:pt-28 md:min-h-[840px] md:pb-0 md:pt-32">
      <div className="absolute -left-40 top-32 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[24rem] w-[24rem] rounded-full bg-lime-300/[0.06] blur-[150px]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:42px_42px] sm:[background-size:56px_56px]" />
      <div className="container relative z-10 mx-auto grid items-center gap-8 px-4 sm:px-6 md:gap-12 md:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-4">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300 sm:mb-7 sm:text-[10px] sm:tracking-[0.25em]"><Sparkles size={12} /> Pods originais · pronta entrega</div>
          <h1 className="max-w-3xl font-display text-[3.25rem] font-bold leading-[.9] tracking-[-0.09em] text-white sm:text-6xl md:text-[6.5rem]">Mais sabor.<br /><span className="text-emerald-400">Menos ruído.</span></h1>
          <p className="mt-6 max-w-lg text-sm leading-6 text-zinc-400 sm:mt-8 sm:text-base sm:leading-7 md:text-lg">Pods descartáveis, juices e acessórios escolhidos para transformar cada pausa em uma experiência premium — sem complicação.</p>
          <div className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:gap-3"><a href="#catalogo" className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-emerald-400 px-5 py-3.5 text-sm font-bold text-[#07100b] transition hover:bg-emerald-300 sm:px-6 sm:py-4">Explorar catálogo <ArrowRight size={17} className="transition group-hover:translate-x-1" /></a><a href="#categorias" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-bold text-white transition hover:border-emerald-400/40 hover:bg-white/[0.08] sm:px-6 sm:py-4">Ver categorias <ArrowDownRight size={17} /></a></div>
          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 sm:mt-14 sm:gap-8 sm:pt-6 md:gap-12"><div><strong className="font-display text-2xl text-white sm:text-3xl">4.9</strong><span className="mt-1 block text-[8px] uppercase tracking-[.14em] text-zinc-500 sm:text-[10px] sm:tracking-[.2em]">avaliação média</span></div><div><strong className="font-display text-2xl text-white sm:text-3xl">10k<span className="text-emerald-400">+</span></strong><span className="mt-1 block text-[8px] uppercase tracking-[.14em] text-zinc-500 sm:text-[10px] sm:tracking-[.2em]">clientes felizes</span></div><div><strong className="font-display text-2xl text-white sm:text-3xl">24h</strong><span className="mt-1 block text-[8px] uppercase tracking-[.14em] text-zinc-500 sm:text-[10px] sm:tracking-[.2em]">suporte real</span></div></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .15 }} className="relative mx-auto flex h-[330px] w-full max-w-[420px] items-center justify-center sm:h-[430px] md:h-[620px]"><div className="absolute h-[285px] w-[285px] rounded-full border border-emerald-300/10 bg-emerald-300/[0.04] shadow-[0_0_130px_rgba(52,211,153,.12)] sm:h-[370px] sm:w-[370px] md:h-[520px] md:w-[520px]" /><div className="absolute right-0 top-3 rounded-xl border border-white/10 bg-[#111515]/90 px-3 py-2 backdrop-blur-md sm:right-2 sm:top-8 sm:rounded-2xl sm:px-4 sm:py-3 md:right-0 md:top-20"><p className="text-[8px] uppercase tracking-[.16em] text-zinc-500 sm:text-[10px] sm:tracking-[.2em]">Escolha da casa</p><p className="mt-1 text-[11px] font-bold text-white sm:text-sm">V150 · Strawberry Kiwi</p></div><div className="relative h-[310px] w-[310px] sm:h-[410px] sm:w-[410px] md:h-[560px] md:w-[560px]"><Image src="/pod-ignite-v150.jpg" alt="Pod descartável Ignite V150" fill className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,.65)]" priority /></div><div className="absolute bottom-1 left-0 rounded-xl border border-white/10 bg-[#111515]/90 px-3 py-2 backdrop-blur-md sm:bottom-5 sm:left-2 sm:rounded-2xl sm:px-4 sm:py-3 md:bottom-9 md:left-0"><p className="text-[8px] uppercase tracking-[.16em] text-emerald-300 sm:text-[10px] sm:tracking-[.2em]">Envio nacional</p><p className="mt-1 text-[11px] font-bold text-white sm:text-sm">Despacho em até 24h</p></div></motion.div>
      </div>
    </section>
  );
}


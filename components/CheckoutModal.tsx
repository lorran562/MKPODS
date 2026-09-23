'use client';

import { useState } from 'react';
import { X, ShoppingCart, User, Phone, MapPin, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Product } from '@/lib/store';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  selectedFlavor: string;
}

export default function CheckoutModal({ isOpen, onClose, product, selectedFlavor }: CheckoutModalProps) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !whatsapp || !address || !paymentMethod) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const message = `*NOVO PEDIDO - 77SMOKE*%0A%0A` +
      `*Produto:* ${product.brand} ${product.model} (${product.capacity})%0A` +
      `*Sabor:* ${selectedFlavor}%0A` +
      `*Valor:* R$ ${product.price}%0A%0A` +
      `*DADOS DO CLIENTE*%0A` +
      `*Nome:* ${name}%0A` +
      `*WhatsApp:* ${whatsapp}%0A` +
      `*Endereço:* ${address}%0A` +
      `*Pagamento:* ${paymentMethod}`;

    const whatsappUrl = `https://wa.me/556992057239?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0f0f0f] rounded-[32px] border border-zinc-800 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-900">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#22c55e]/10 rounded-xl text-[#22c55e]">
                  <ShoppingCart size={24} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white tracking-tight">Finalizar Pedido</h2>
              </div>
              <button onClick={onClose} className="p-2 text-zinc-500 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="p-8 space-y-8">
                <p className="text-zinc-500 text-sm font-medium">Preencha seus dados para enviar o pedido via WhatsApp</p>

                {/* Product Summary */}
                <div className="bg-[#161616] rounded-2xl p-4 border border-zinc-800 flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-zinc-900 shrink-0">
                    <Image src={product.image} alt={product.model} fill className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{product.brand}</span>
                      <span className="px-2 py-0.5 bg-[#22c55e]/10 text-[#22c55e] text-[9px] font-bold rounded-full border border-[#22c55e]/20">{product.capacity}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">{product.model}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">Sabor: <span className="text-white font-bold">{selectedFlavor}</span></span>
                      <span className="text-lg font-display font-bold text-[#22c55e]">R$ {product.price}</span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleConfirmOrder} className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 ml-1">
                      <User size={14} className="opacity-50" /> NOME COMPLETO
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full bg-[#161616] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 ml-1">
                      <Phone size={14} className="opacity-50" /> WHATSAPP
                    </label>
                    <input
                      type="text"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-[#161616] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 ml-1">
                      <MapPin size={14} className="opacity-50" /> ENDEREÇO COMPLETO
                    </label>
                    <textarea
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Rua, número, bairro, cidade, CEP..."
                      rows={3}
                      className="w-full bg-[#161616] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 ml-1">
                      <CreditCard size={14} className="opacity-50" /> FORMA DE PAGAMENTO
                    </label>
                    <select
                      required
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full bg-[#161616] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors appearance-none"
                    >
                      <option value="" disabled>Selecione...</option>
                      <option value="Pix">Pix</option>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Débito">Débito</option>
                      <option value="Crédito">Crédito</option>
                    </select>
                  </div>

                  <div className="pt-4 space-y-4">
                    <div className="w-full py-3 bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-xl text-center">
                      <span className="text-[10px] font-bold text-[#22c55e] uppercase tracking-widest">ENTREGA RÁPIDA APÓS CONFIRMAÇÃO DO PAGAMENTO</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-5 bg-[#22c55e] hover:bg-[#1eb054] text-zinc-950 font-bold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                    >
                      <Phone size={20} fill="currentColor" />
                      Confirmar Pedido
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

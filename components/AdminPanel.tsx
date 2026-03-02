'use client';

import { useState } from 'react';
import { useStore, Product, Flavor } from '@/lib/store';
import { 
  ChevronDown, 
  ChevronRight, 
  Plus, 
  Trash2, 
  Save, 
  LogOut, 
  ArrowLeft,
  Settings,
  Package
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminPanel() {
  const { products, settings, saveProducts, saveSettings, isLoaded } = useStore();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'products' | 'settings'>('products');
  const [expandedBrands, setExpandedBrands] = useState<string[]>([]);
  const [expandedProducts, setExpandedProducts] = useState<string[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedUser = username.trim();
    const trimmedPass = password.trim();
    
    if (trimmedUser === 'administrador' && trimmedPass === 'administrador') {
      setIsLoggedIn(true);
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  const toggleBrand = (brand: string) => {
    setExpandedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleProduct = (productId: string) => {
    setExpandedProducts(prev => 
      prev.includes(productId) ? prev.filter(p => p !== productId) : [...prev, productId]
    );
  };

  const updateProduct = (id: string, field: keyof Product, value: any) => {
    const newProducts = products.map(p => p.id === id ? { ...p, [field]: value } : p);
    saveProducts(newProducts);
  };

  const updateFlavor = (productId: string, flavorIdx: number, field: keyof Flavor, value: any) => {
    const newProducts = products.map(p => {
      if (p.id === productId) {
        const newFlavors = [...p.flavors];
        newFlavors[flavorIdx] = { ...newFlavors[flavorIdx], [field]: value };
        return { ...p, flavors: newFlavors };
      }
      return p;
    });
    saveProducts(newProducts);
  };

  const addFlavor = (productId: string) => {
    const newProducts = products.map(p => {
      if (p.id === productId) {
        return { ...p, flavors: [...p.flavors, { name: 'Novo Sabor', available: true }] };
      }
      return p;
    });
    saveProducts(newProducts);
  };

  const removeFlavor = (productId: string, flavorIdx: number) => {
    const newProducts = products.map(p => {
      if (p.id === productId) {
        const newFlavors = p.flavors.filter((_, idx) => idx !== flavorIdx);
        return { ...p, flavors: newFlavors };
      }
      return p;
    });
    saveProducts(newProducts);
  };

  const addProduct = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      brand: 'NOVA MARCA',
      model: 'Novo Modelo',
      capacity: '5K',
      price: '0,00',
      image: 'https://picsum.photos/seed/new/400/400',
      flavors: [{ name: 'Sabor 1', available: true }],
    };
    saveProducts([...products, newProduct]);
  };

  const removeProduct = (id: string) => {
    if (confirm('Tem certeza que deseja remover este produto?')) {
      saveProducts(products.filter(p => p.id !== id));
    }
  };

  if (!isLoaded) return null;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#111111] rounded-[40px] p-10 border border-zinc-900 shadow-2xl">
          <div className="flex flex-col items-center mb-10">
            <div className="w-24 h-24 rounded-3xl overflow-hidden mb-6 border-2 border-[#22c55e]/30 p-1 bg-zinc-900">
              <Image src={settings.logo} alt="Logo" width={96} height={96} className="object-cover rounded-2xl" />
            </div>
            <h1 className="text-4xl font-display font-bold text-white mb-2">Painel Admin</h1>
            <p className="text-zinc-500 font-medium">{settings.name} - Acesso restrito</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 ml-1">
                <span className="opacity-50">👤</span> CPF / USUARIO
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuario"
                className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
              />
            </div>
            <div>
              <label className="flex items-center gap-2 text-[11px] font-bold text-zinc-500 uppercase tracking-widest mb-3 ml-1">
                <span className="opacity-50">🔑</span> SENHA
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-[#22c55e] hover:bg-[#1eb054] text-zinc-950 font-bold rounded-2xl transition-all active:scale-[0.98] mt-4 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  const brands = Array.from(new Set(products.map(p => p.brand)));

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      {/* Header */}
      <header className="bg-[#111111] border-b border-zinc-900 px-6 py-4 sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-bold">
            <ArrowLeft size={18} /> Voltar
          </Link>
          <h1 className="text-xl font-display font-bold">Painel Admin</h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => alert('Alterações salvas com sucesso!')}
            className="flex items-center gap-2 px-4 py-2 bg-[#22c55e] text-zinc-950 rounded-lg font-bold text-sm hover:bg-[#1eb054] transition-all"
          >
            <Save size={18} /> Salvar Tudo
          </button>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-zinc-400 rounded-lg font-bold text-sm hover:bg-zinc-800 transition-all border border-zinc-800"
          >
            <LogOut size={18} /> Sair
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'products' ? 'bg-[#22c55e] text-zinc-950' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'
            }`}
          >
            <Package size={18} /> Produtos
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
              activeTab === 'settings' ? 'bg-[#22c55e] text-zinc-950' : 'bg-zinc-900 text-zinc-500 border border-zinc-800'
            }`}
          >
            <Settings size={18} /> Configuracoes
          </button>
        </div>

        {activeTab === 'products' ? (
          <div className="space-y-6">
            <div className="flex justify-end">
              <button 
                onClick={addProduct}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-[#22c55e] border border-zinc-800 rounded-lg font-bold text-sm hover:bg-zinc-800 transition-all"
              >
                <Plus size={18} /> Novo Produto
              </button>
            </div>

            {brands.map(brand => (
              <div key={brand} className="bg-[#111111] rounded-2xl border border-zinc-900 overflow-hidden">
                <button
                  onClick={() => toggleBrand(brand)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {expandedBrands.includes(brand) ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    <span className="text-lg font-bold text-[#22c55e] uppercase tracking-widest">{brand}</span>
                    <span className="px-2 py-0.5 bg-zinc-900 text-zinc-500 text-[10px] font-bold rounded-full border border-zinc-800">
                      {products.filter(p => p.brand === brand).length} produtos
                    </span>
                  </div>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    if(confirm(`Remover todos os produtos da marca ${brand}?`)) {
                      saveProducts(products.filter(p => p.brand !== brand));
                    }
                  }} className="text-zinc-700 hover:text-red-500 transition-colors">
                    <Trash2 size={18} />
                  </button>
                </button>

                {expandedBrands.includes(brand) && (
                  <div className="p-4 space-y-4 border-t border-zinc-900">
                    {products.filter(p => p.brand === brand).map(product => (
                      <div key={product.id} className="bg-[#0a0a0a] rounded-xl border border-zinc-900 overflow-hidden">
                        <button
                          onClick={() => toggleProduct(product.id)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-zinc-900/30 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            {expandedProducts.includes(product.id) ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                            <span className="font-bold text-white">{product.model}</span>
                            <span className="px-2 py-0.5 bg-zinc-900 text-zinc-500 text-[10px] font-bold rounded-full border border-zinc-800">
                              {product.capacity}
                            </span>
                            <span className="text-[#22c55e] font-bold">R$ {product.price}</span>
                          </div>
                          <button onClick={(e) => {
                            e.stopPropagation();
                            removeProduct(product.id);
                          }} className="text-zinc-700 hover:text-red-500 transition-colors">
                            <Trash2 size={16} />
                          </button>
                        </button>

                        {expandedProducts.includes(product.id) && (
                          <div className="p-6 space-y-6 border-t border-zinc-900">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block ml-1">MODELO</label>
                                <input
                                  type="text"
                                  value={product.model}
                                  onChange={(e) => updateProduct(product.id, 'model', e.target.value)}
                                  className="w-full bg-[#111111] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e]"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block ml-1">CAPACIDADE</label>
                                <input
                                  type="text"
                                  value={product.capacity}
                                  onChange={(e) => updateProduct(product.id, 'capacity', e.target.value)}
                                  className="w-full bg-[#111111] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e]"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block ml-1">PRECO (R$)</label>
                                <input
                                  type="text"
                                  value={product.price}
                                  onChange={(e) => updateProduct(product.id, 'price', e.target.value)}
                                  className="w-full bg-[#111111] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e]"
                                />
                              </div>
                              <div>
                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block ml-1">URL DA IMAGEM</label>
                                <input
                                  type="text"
                                  value={product.image}
                                  onChange={(e) => updateProduct(product.id, 'image', e.target.value)}
                                  className="w-full bg-[#111111] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e]"
                                />
                              </div>
                            </div>

                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">SABORES</label>
                                <button 
                                  onClick={() => addFlavor(product.id)}
                                  className="flex items-center gap-1 text-[10px] font-bold text-[#22c55e] bg-[#22c55e]/10 px-3 py-1 rounded-full border border-[#22c55e]/20"
                                >
                                  <Plus size={12} /> Sabor
                                </button>
                              </div>
                              <div className="space-y-2">
                                {product.flavors.map((flavor, fIdx) => (
                                  <div key={fIdx} className="flex items-center gap-4 bg-[#111111] p-3 rounded-xl border border-zinc-800">
                                    <input
                                      type="text"
                                      value={flavor.name}
                                      onChange={(e) => updateFlavor(product.id, fIdx, 'name', e.target.value)}
                                      className="flex-grow bg-transparent border-none focus:outline-none text-sm text-white"
                                    />
                                    <div className="flex items-center gap-4">
                                      <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">DISPONIVEL</span>
                                        <button
                                          onClick={() => updateFlavor(product.id, fIdx, 'available', !flavor.available)}
                                          className={`w-10 h-5 rounded-full transition-colors relative ${flavor.available ? 'bg-[#22c55e]' : 'bg-zinc-800'}`}
                                        >
                                          <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${flavor.available ? 'left-6' : 'left-1'}`} />
                                        </button>
                                      </div>
                                      <button 
                                        onClick={() => removeFlavor(product.id, fIdx)}
                                        className="text-zinc-700 hover:text-red-500 transition-colors"
                                      >
                                        <Trash2 size={14} />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#111111] rounded-2xl border border-zinc-900 p-8 max-w-2xl">
            <h2 className="text-xl font-bold mb-8">Configurações do Site</h2>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block ml-1">NOME DA LOJA</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => saveSettings({ ...settings, name: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e]"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block ml-1">URL DO LOGO</label>
                <input
                  type="text"
                  value={settings.logo}
                  onChange={(e) => saveSettings({ ...settings, logo: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e]"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block ml-1">COR PRINCIPAL</label>
                <div className="flex gap-4 items-center">
                  <input
                    type="color"
                    value={settings.primaryColor}
                    onChange={(e) => saveSettings({ ...settings, primaryColor: e.target.value })}
                    className="w-12 h-12 bg-transparent border-none cursor-pointer"
                  />
                  <input
                    type="text"
                    value={settings.primaryColor}
                    onChange={(e) => saveSettings({ ...settings, primaryColor: e.target.value })}
                    className="flex-grow bg-[#0a0a0a] border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#22c55e]"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

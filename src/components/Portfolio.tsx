'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
    'Todos',
    'Saúde',
    'Beleza',
    'Comida',
    'Indústria',
    'E-commerce',
    'Advogado',
    'Psicologia'
];

// Mapeando os projetos existentes para algumas das categorias solicitadas
const projects = [
    {
        id: 1,
        name: 'VetCare',
        cat: 'Saúde',
        link: 'https://carlososf.github.io/vetcare/',
        size: 'col-span-1 md:col-span-2',
        stats: { problem: 'Site antigo', solution: 'Redesign Premium', result: '+ Leads' }
    },
    {
        id: 2,
        name: 'PlasticoGT',
        cat: 'Indústria',
        link: 'https://carlososf.github.io/Garrafas-GT/',
        size: 'col-span-1',
        stats: { problem: 'Catálogo Físico', solution: 'Vitrine Digital', result: 'Alcance B2B' }
    },
    {
        id: 3,
        name: 'Injesopro',
        cat: 'Indústria',
        link: 'https://injesopro.com.br/',
        size: 'col-span-1 md:col-span-2',
        stats: { problem: 'Sem Presença', solution: 'E-commerce', result: 'Vendas Online' }
    },
    {
        id: 4,
        name: 'L´atelier',
        cat: 'Beleza',
        link: 'https://carlososf.github.io/sal-o-de-beleza-v1/',
        size: 'col-span-1',
        stats: { problem: 'Marca Offline', solution: 'Posicionamento Digital', result: 'Agendamentos' }
    },
    {
        id: 5,
        name: 'Maison Elysian',
        cat: 'Beleza',
        link: 'https://carlososf.github.io/sal-o-de-beleza-v2/',
        size: 'col-span-1 md:col-span-2',
        stats: { problem: 'Baixa Conversão', solution: 'UX Premium', result: 'Clientes High-Ticket' }
    },
    {
        id: 6,
        name: 'ESTRATÉGIA SERENA',
        cat: 'Advogado',
        link: 'https://carlososf.github.io/advogado-v1/',
        size: 'col-span-1 md:col-span-2',
        stats: { problem: 'Falta de Autoridade', solution: 'Experiência Imersiva', result: 'Leads Qualificados' }
    },
    {
        id: 7,
        name: 'VETCLINIC',
        cat: 'Saúde',
        link: 'https://carlososf.github.io/VETCLINIC/',
        size: 'col-span-1',
        stats: { problem: 'Clínica Tradicional', solution: 'Site Moderno', result: 'Agendamentos' }
    },
    {
        id: 8,
        name: 'Boteco Premium',
        cat: 'Comida',
        link: 'https://boteco1.vercel.app/',
        size: 'col-span-1 md:col-span-2',
        stats: { problem: 'Cardápio Estático', solution: 'Experiência Digital', result: 'Aumento de Pedidos' }
    },
    {
        id: 9,
        name: 'Advogado Criminal',
        cat: 'Advogado',
        link: 'https://carlososf.github.io/advogado-v1/',
        size: 'col-span-1',
        stats: { problem: 'Falta de Presença', solution: 'Landing Page', result: 'Credibilidade' }
    }
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filteredProjects = activeCategory === 'Todos'
        ? projects
        : projects.filter(p => p.cat === activeCategory);

    return (
        <section className="py-32 bg-[#FAFAFA] dark:bg-[#050505] relative text-black dark:text-white transition-colors duration-500" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 mb-12 flex flex-col md:flex-row items-end justify-between gap-8">
                <div>
                    <span className="text-[#10A000] dark:text-[#39FF14] font-mono text-xs tracking-widest uppercase mb-4 block transition-colors duration-500">// SELECTED WORK</span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1] md:leading-[0.9]">
                        CASES QUE <span className="text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-600 transition-colors duration-500">FALAM POR SI.</span>
                    </h2>
                </div>
                <p className="text-black/50 dark:text-white/40 max-w-sm text-sm font-light leading-relaxed transition-colors duration-500">
                    Nossos projetos combinam estética premium com engenharia de conversão.
                </p>
            </div>

            {/* Categorias / Filtro */}
            <div className="max-w-7xl mx-auto px-4 mb-16 overflow-x-auto hide-scrollbar">
                <div className="flex gap-4 p-1 w-max">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-mono tracking-wider transition-all duration-300 border ${activeCategory === category
                                ? 'bg-black dark:bg-[#39FF14] text-white dark:text-black border-black dark:border-[#39FF14]'
                                : 'bg-black/5 dark:bg-black/50 text-black/60 dark:text-white/60 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((p, i) => (
                        <motion.a
                            href={p.link}
                            target="_blank"
                            key={p.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className={`${p.size} min-h-[350px] md:min-h-[500px] relative group rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-black dark:bg-[#0A0A0A] text-white transition-colors duration-500 case-card block cursor-pointer`}
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0">
                                <img
                                    src={`https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.link)}?w=1200`}
                                    alt={`Preview do projeto ${p.name}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

                                {/* Ver ao Vivo Badge */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <span className="px-6 py-2 bg-[#39FF14] text-black font-black text-xs tracking-widest uppercase rounded-full shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                                        VER AO VIVO
                                    </span>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                                <div className="flex justify-between items-start">
                                    <span className="px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14] transition-colors duration-500">
                                        {p.cat}
                                    </span>
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-[#39FF14] group-hover:text-black group-hover:border-[#39FF14] transition-all duration-500 backdrop-blur-sm">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-500 tracking-tight">{p.name}</h3>

                                    {/* Hidden Details - Reveal on Hover */}
                                    <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                                        <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-4 text-xs">
                                            <div>
                                                <span className="text-white/40 block mb-1 uppercase tracking-wider">Problema</span>
                                                <span className="font-semibold">{p.stats.problem}</span>
                                            </div>
                                            <div>
                                                <span className="text-white/40 block mb-1 uppercase tracking-wider">Solução</span>
                                                <span className="font-semibold text-[#39FF14]">{p.stats.solution}</span>
                                            </div>
                                            <div>
                                                <span className="text-white/40 block mb-1 uppercase tracking-wider">Resultado</span>
                                                <span className="font-semibold">{p.stats.result}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </AnimatePresence>
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center"
                    >
                        <p className="text-black/40 dark:text-white/40 font-mono transition-colors duration-500">Nenhum case disponível para esta categoria no momento.</p>
                    </motion.div>
                )}
            </div>

            <div className="text-center mt-24">
                <button className="relative px-8 py-4 bg-transparent text-black dark:text-white font-bold uppercase tracking-widest text-sm group overflow-hidden transition-colors duration-500">
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300">Ver Todos os Projetos</span>
                    <div className="absolute inset-0 bg-[#39FF14] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                    <div className="absolute inset-0 border border-black/20 dark:border-white/20 group-hover:border-[#39FF14] dark:group-hover:border-[#39FF14] transition-colors duration-300 pointer-events-none" />
                </button>
            </div>
        </section>
    );
}


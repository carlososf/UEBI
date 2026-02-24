'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MousePointer2 } from 'lucide-react';
import InjesoproImg from '@/assets/portfolio-injesopro.png';

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

const projects = [
    {
        id: 1,
        name: 'Cantina Famiglia',
        cat: 'Comida',
        link: 'https://cantina-2.vercel.app/',
        size: 'md:col-span-8',
        stats: { problem: 'Layout Genérico', solution: 'Design Sensorial', result: '+85% Engajamento' },
        color: '#1F5E3B'
    },
    {
        id: 11,
        name: 'Mente Segura',
        cat: 'Psicologia',
        link: 'https://psicologo-v1.vercel.app/',
        size: 'md:col-span-4',
        stats: { problem: 'Falta de Confiança', solution: 'Design Terapêutico', result: 'Agenda Lotada' },
        color: '#2a4a5a'
    },
    {
        id: 2,
        name: 'VetCare',
        cat: 'Saúde',
        link: 'https://carlososf.github.io/vetcare/',
        size: 'md:col-span-4',
        stats: { problem: 'Site Antigo', solution: 'Redesign Premium', result: '+40% Leads' },
        color: '#10A000'
    },
    {
        id: 3,
        name: 'PlasticoGT',
        cat: 'Indústria',
        link: 'https://carlososf.github.io/Garrafas-GT/',
        size: 'md:col-span-4',
        stats: { problem: 'Catálogo Offline', solution: 'Vitrine Digital', result: 'Expansão B2B' },
        color: '#333'
    },
    {
        id: 4,
        name: 'Injesopro',
        cat: 'Indústria',
        link: 'https://injesopro.com.br/',
        image: InjesoproImg.src,
        size: 'md:col-span-4',
        stats: { problem: 'Sem Presença', solution: 'E-commerce High-End', result: 'Vendas 24/7' },
        color: '#1a1a1a'
    },
    {
        id: 5,
        name: 'L´atelier',
        cat: 'Beleza',
        link: 'https://carlososf.github.io/sal-o-de-beleza-v1/',
        size: 'md:col-span-6',
        stats: { problem: 'Marca Comum', solution: 'Brand Experience', result: 'Agenda Lotada' },
        color: '#551a1a'
    },
    {
        id: 6,
        name: 'Maison Elysian',
        cat: 'Beleza',
        link: 'https://carlososf.github.io/sal-o-de-beleza-v2/',
        size: 'md:col-span-6',
        stats: { problem: 'Baixa Conversão', solution: 'UX Sensorial', result: 'Ticket Médio ↑' },
        color: '#2a2a2a'
    },
    {
        id: 7,
        name: 'ESTRATÉGIA SERENA',
        cat: 'Advogado',
        link: 'https://carlososf.github.io/advogado-v1/',
        size: 'md:col-span-7',
        stats: { problem: 'Falta de Autoridade', solution: 'Imersão Jurídica', result: 'Cases Ganhos' },
        color: '#1a1a3a'
    },
    {
        id: 8,
        name: 'VETCLINIC',
        cat: 'Saúde',
        link: 'https://carlososf.github.io/VETCLINIC/',
        size: 'md:col-span-5',
        stats: { problem: 'Visual Datado', solution: 'Clean UI', result: 'Confiança' },
        color: '#005500'
    },
    {
        id: 9,
        name: 'Boteco Premium',
        cat: 'Comida',
        link: 'https://boteco1.vercel.app/',
        size: 'md:col-span-5',
        stats: { problem: 'Estático', solution: 'Dynamic App', result: 'Pedidos Online' },
        color: '#8b4513'
    },
    {
        id: 10,
        name: 'Advogado Criminal',
        cat: 'Advogado',
        link: 'https://advogado-criminal-v4.vercel.app/',
        size: 'md:col-span-7',
        stats: { problem: 'Offline', solution: 'Lid Magnético', result: 'Autoridade' },
        color: '#111'
    }
];

const INITIAL_LIMIT = 4;
const INCREMENT = 2;

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [displayLimit, setDisplayLimit] = useState(INITIAL_LIMIT);
    const containerRef = useRef<HTMLDivElement>(null);
    const categoryRef = useRef<HTMLDivElement>(null);

    const filteredProjects = activeCategory === 'Todos'
        ? projects
        : projects.filter(p => p.cat === activeCategory);

    const visibleProjects = activeCategory === 'Todos'
        ? filteredProjects.slice(0, displayLimit)
        : filteredProjects;

    const hasMore = activeCategory === 'Todos' && displayLimit < filteredProjects.length;

    useEffect(() => {
        setDisplayLimit(INITIAL_LIMIT);
    }, [activeCategory]);

    const handleLoadMore = () => {
        if (hasMore) {
            setDisplayLimit(prev => prev + INCREMENT);
        } else if (activeCategory === 'Todos') {
            categoryRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={containerRef}
            className="py-20 md:py-32 bg-[#FAFAFA] dark:bg-[#050505] relative text-black dark:text-white transition-colors duration-500 overflow-hidden"
            id="portfolio"
        >
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#39FF14]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 mb-16 md:mb-24">
                <div className="flex flex-col gap-4 md:gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#10A000] dark:text-[#39FF14] font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6 block">
                            // PORTFÓLIO ESTRATÉGICO
                        </span>
                        <h2 className="text-4xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic">
                            CASES QUE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/40 to-black dark:from-white dark:via-white/40 dark:to-white drop-shadow-sm">
                                FALAM POR SI.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-4 md:mt-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-black/60 dark:text-white/40 max-w-xl text-base md:text-lg font-light leading-relaxed transition-colors duration-500"
                        >
                            Não apenas criamos sites. Desenvolvemos ecossistemas digitais de alta performance que elevam o seu posicionamento de mercado.
                        </motion.p>

                        {/* Legenda Solicitada */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 w-fit backdrop-blur-sm self-start md:self-auto"
                        >
                            <div className="relative">
                                <MousePointer2 className="w-4 h-4 text-[#10A000] dark:text-[#39FF14] animate-bounce" />
                                <div className="absolute inset-0 bg-[#39FF14]/20 blur-md rounded-full animate-pulse" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
                                Clique no projeto para <span className="text-black dark:text-white">ver ao vivo</span>
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Categorias / Filtro - World Class UI */}
            <div ref={categoryRef} className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-20 overflow-x-auto hide-scrollbar">
                <div className="flex gap-2 md:gap-3 items-center border-b border-black/5 dark:border-white/5 pb-6 whitespace-nowrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`group relative px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-sm font-bold tracking-widest uppercase transition-all duration-500 ${activeCategory === category
                                ? 'text-[#10A000] dark:text-[#39FF14]'
                                : 'text-black/30 dark:text-white/20 hover:text-black dark:hover:text-white'
                                }`}
                        >
                            {category}
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#10A000] dark:bg-[#39FF14]"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid Assimétrico Moderno - Otimizado Mobile */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                <AnimatePresence mode="popLayout">
                    {visibleProjects.map((p, i) => (
                        <motion.a
                            href={p.link}
                            target="_blank"
                            key={p.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            className={`${p.size} group relative min-h-[450px] md:h-[600px] rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#111] border border-black/5 dark:border-white/5 block`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-700" />

                            <div className="absolute inset-0 overflow-hidden">
                                <motion.img
                                    src={p.image || `https://s.wordpress.com/mshots/v1/${encodeURIComponent(p.link)}?w=1200`}
                                    alt={p.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            <div className="relative z-20 h-full p-6 md:p-12 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white">
                                        {p.cat}
                                    </div>
                                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center -rotate-45 group-hover:rotate-0 group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-700">
                                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6 md:mb-8 group-hover:translate-x-2 transition-transform duration-700">
                                        {p.name.split(' ').map((word, idx) => (
                                            <span key={idx} className={idx === 1 ? "block italic font-light opacity-80" : "block"}>
                                                {word}
                                            </span>
                                        ))}
                                    </h3>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 opacity-80 md:opacity-0 group-hover:opacity-100 translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-all duration-700 border-t border-white/10 pt-6 md:pt-8 mt-4">
                                        <div>
                                            <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest block mb-1">Problema</span>
                                            <span className="text-[11px] md:text-sm font-medium text-white">{p.stats.problem}</span>
                                        </div>
                                        <div>
                                            <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest block mb-1">Solução</span>
                                            <span className="text-[11px] md:text-sm font-medium text-[#39FF14]">{p.stats.solution}</span>
                                        </div>
                                        <div className="hidden md:block">
                                            <span className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest block mb-1">Resultado</span>
                                            <span className="text-[11px] md:text-sm font-medium text-white">{p.stats.result}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 border-2 border-[#39FF14]/0 group-hover:border-[#39FF14]/30 rounded-[24px] md:rounded-[32px] transition-colors duration-700 pointer-events-none z-30" />
                        </motion.a>
                    ))}
                </AnimatePresence>
            </div>

            {/* CTA Mobile-Ready */}
            <motion.div
                className="text-center mt-20 md:mt-32 px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="inline-block relative group w-full md:w-auto">
                    <button
                        onClick={handleLoadMore}
                        className="w-full md:w-auto relative px-8 md:px-16 py-6 md:py-8 bg-black dark:bg-white text-white dark:text-black font-black uppercase tracking-[0.2em] text-xs md:text-sm overflow-hidden transition-all duration-500 hover:pr-12 md:hover:pr-24 cursor-pointer"
                    >
                        <span className="relative z-10">
                            {hasMore ? 'Exibir Mais Projetos' : 'Ver Categorias'}
                        </span>
                        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                        </div>
                        <div className="absolute inset-0 bg-[#39FF14] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 z-0" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}

'use client';
import { motion } from 'framer-motion';
import { Bot, Cpu, Gauge, Smartphone, Target, Zap } from 'lucide-react';

const services = [
    { icon: Smartphone, title: 'Interface & UX', desc: 'Design imersivo focado na jornada do usuário e conversão.' },
    { icon: Target, title: 'Estratégia Digital', desc: 'Posicionamento de marca e arquitetura de informação.' },
    { icon: Bot, title: 'Automação IA', desc: 'Chatbots, CRM e fluxos inteligentes para escalar vendas.' },
    { icon: Zap, title: 'Alta Performance', desc: 'Core Web Vitals otimizados para velocidade extrema.' },
    { icon: Gauge, title: 'SEO Técnico', desc: 'Estrutura semântica para ranqueamento orgânico.' },
    { icon: Cpu, title: 'Sistemas Web', desc: 'Dashboards e aplicações complexas sob medida.' },
];

export default function Services() {
    return (
        <section className="py-32 px-4 bg-[#0A0A0A] relative overflow-hidden" id="services">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-[#39FF14] font-mono text-xs tracking-widest uppercase mb-4 block">// CAPABILITIES</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        ECOSSISTEMA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-600">DIGITAL COMPLETO</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Do design à infraestrutura, entregamos soluções que posicionam sua marca no topo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-6 md:p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#39FF14]/30 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 group-hover:bg-[#39FF14] group-hover:text-black transition-colors duration-300">
                                    <s.icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#39FF14] transition-colors">{s.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

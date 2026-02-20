'use client';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Diamond, ArrowRight } from 'lucide-react';

const plans = [
    {
        name: 'ESSENTIAL',
        price: 'R$ 2.500',
        desc: 'Presença digital otimizada para negócios em crescimento.',
        icon: Zap,
        features: [
            'Landing Page de Alta Conversão',
            'Design Responsivo Completo',
            'Otimização SEO Básica',
            'Integração com WhatsApp',
            'Suporte por 30 dias',
        ],
        highlight: false,
    },
    {
        name: 'PREMIUM',
        price: 'R$ 5.800',
        desc: 'A versão mais completa e exclusiva do nosso estúdio.',
        icon: Diamond,
        features: [
            'Site Multi-páginas ou E-commerce',
            'UX/UI Design Sob Medida',
            'Animações Avancadas (GSAP/Framer)',
            'SEO Técnico & Copywriting',
            'Painel CMS Customizado',
            'Integração com CRM',
            'Suporte Prioritário 24/7'
        ],
        highlight: true,
        badge: 'A VERSÃO CARA',
    }
];

export default function Pricing() {
    return (
        <section className="py-32 px-4 bg-[#050505] relative overflow-hidden" id="pricing">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#39FF14]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-[#39FF14] font-mono text-xs tracking-widest uppercase mb-4 block inline-flex items-center gap-2">
                        <Star className="w-3 h-3" /> // INVESTIMENTO
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                        O PREÇO DA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-600">EXCELÊNCIA</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
                        Não fazemos sites genéricos. Construímos máquinas de conversão para quem busca o topo do mercado.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className={`relative p-8 md:p-12 rounded-2xl border transition-all duration-500 overflow-hidden group ${plan.highlight
                                    ? 'bg-black/80 border-[#39FF14]/50 hover:border-[#39FF14]'
                                    : 'bg-white/[0.02] border-white/10 hover:border-white/30'
                                }`}
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {plan.badge && (
                                <div className="absolute top-0 right-0 py-1.5 px-4 bg-[#39FF14] text-black text-xs font-bold font-mono tracking-wider rounded-bl-2xl">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl ${plan.highlight ? 'bg-[#39FF14]/20 text-[#39FF14]' : 'bg-white/10 text-white'}`}>
                                        <plan.icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h3 className={`text-2xl font-bold tracking-tight ${plan.highlight ? 'text-[#39FF14]' : 'text-white'}`}>
                                        {plan.name}
                                    </h3>
                                </div>

                                <div className="mb-6 border-b border-white/10 pb-6">
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
                                        {plan.price}
                                    </div>
                                    <p className="text-white/50 font-light text-sm leading-relaxed min-h-[40px]">
                                        {plan.desc}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-white/80 text-sm font-light">
                                            <Check className={`w-5 h-5 shrink-0 ${plan.highlight ? 'text-[#39FF14]' : 'text-white/40'}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn ${plan.highlight
                                        ? 'bg-[#39FF14] text-black hover:bg-white hover:text-black hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(57,255,20,0.3)]'
                                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/30 hover:scale-[1.02] active:scale-95'
                                    }`}>
                                    <span>Solicitar Orçamento</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

'use client';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    { id: '01', title: 'Start', desc: 'Análise estrutural e definição de KPIs.' },
    { id: '02', title: 'Build', desc: 'Design System, Dev e Integrações.' },
    { id: '03', title: 'Scale', desc: 'Otimização, SEO e Automação de Vendas.' },
    { id: '04', title: 'Lead', desc: 'Gestão baseada em dados e crescimento.' },
];

export default function Process() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="py-32 px-4 bg-[#FAFAFA] dark:bg-[#0A0A0A] text-black dark:text-white overflow-hidden relative transition-colors duration-500" id="process">
            {/* Background Tech Elements */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#10A000]/5 dark:from-[#39FF14]/5 to-transparent pointer-events-none transition-colors duration-500" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center" ref={ref}>
                {/* Assessoria Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10A000]/30 dark:border-[#39FF14]/30 bg-[#10A000]/5 dark:bg-[#39FF14]/5 backdrop-blur-md mb-8 transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10A000] dark:bg-[#39FF14] animate-pulse transition-colors duration-500" />
                        <span className="text-xs tracking-widest text-[#10A000] dark:text-[#39FF14] font-mono uppercase transition-colors duration-500">Assessoria Premium</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                        ELEVE O NÍVEL DA <span className="text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-500 transition-colors duration-500">SUA EMPRESA.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-black/60 dark:text-white/60 mb-8 leading-relaxed font-light transition-colors duration-500">
                        Site premium, CRM integrado, automações, SEO técnico e estrutura de conversão. Não entregamos apenas código, entregamos um ativo digital.
                    </p>

                    <ul className="space-y-4 md:space-y-5 mb-12">
                        {['Arquitetura de Conversão & UX', 'Desenvolvimento Next.js High-End', 'Implementação de CRM & Funis', 'Dashboards de Performance'].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-base md:text-lg font-light text-black/80 dark:text-white/80 transition-colors duration-500">
                                <span className="flex items-center justify-center min-w-[24px] w-6 h-6 rounded-full bg-[#10A000]/20 dark:bg-[#39FF14]/20 text-[#10A000] dark:text-[#39FF14] transition-colors duration-500">
                                    <CheckCircle2 size={14} />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <motion.a
                        href="https://wa.me/5511972362554"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-[#39FF14] dark:hover:bg-[#39FF14] hover:text-black dark:hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all duration-300 group"
                    >
                        Solicitar Consultoria <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>

                {/* Futurisic Roadmap */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#10A000] dark:from-[#39FF14] via-[#10A000]/20 dark:via-[#39FF14]/20 to-transparent opacity-30 transition-colors duration-500" />

                    <div className="flex flex-col gap-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                className="flex items-center gap-8 group relative"
                            >
                                <div className="relative z-10 w-14 h-14 rounded-xl bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 flex items-center justify-center text-xl font-mono font-bold text-black/30 dark:text-white/30 group-hover:text-[#10A000] dark:group-hover:text-[#39FF14] group-hover:border-[#10A000] dark:group-hover:border-[#39FF14] group-hover:shadow-[0_0_20px_rgba(16,160,0,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] transition-all duration-500 shadow-xl">
                                    {step.id}
                                </div>
                                <div className="flex-1 p-6 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-all duration-500 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold mb-1 text-black dark:text-white group-hover:text-[#10A000] dark:group-hover:text-[#39FF14] transition-colors">{step.title}</h3>
                                    <p className="text-black/50 dark:text-white/40 text-sm font-light transition-colors">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

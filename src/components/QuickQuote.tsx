'use client';
import { motion } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';

const categories = [
    'Saúde', 'Beleza', 'Comida', 'Indústria',
    'E-commerce', 'Advogado', 'Psicologia', 'Outros'
];

export default function QuickQuote() {
    const handleQuote = (category: string) => {
        const message = `Olá! Gostaria de fazer um orçamento automático para um site ou landing page na área de *${category}*.`;
        const whatsappUrl = `https://wa.me/5511972362554?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-24 bg-white dark:bg-black relative border-y border-black/10 dark:border-white/10 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <span className="text-[#10A000] dark:text-[#39FF14] font-mono text-xs tracking-widest uppercase mb-4 block">// ORÇAMENTO INTELIGENTE</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-6">
                        SELECIONE O SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-500">NICHO ABAIXO.</span>
                    </h2>
                    <p className="text-black/60 dark:text-white/60 mb-8 max-w-lg font-light leading-relaxed">
                        Escolha sua área de atuação para iniciar uma cotação rápida pelo WhatsApp.
                        Temos a estrutura digital perfeita para transformar o seu negócio.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                key={category}
                                onClick={() => handleQuote(category)}
                                className="px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border border-black/10 dark:border-white/10 hover:border-[#39FF14] dark:hover:border-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all duration-300 flex items-center gap-2"
                            >
                                <MessageSquareText className="w-4 h-4 opacity-70" />
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="md:w-1/3 w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] p-8 md:p-12 rounded-3xl border border-black/10 dark:border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#39FF14]/10 blur-3xl rounded-full pointer-events-none group-hover:bg-[#39FF14]/20 transition-all duration-700" />

                    <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Vantagens UEBI</h3>

                    <ul className="space-y-4 font-mono text-sm dark:text-white/70 text-black/70">
                        <li className="flex items-start gap-3">
                            <span className="text-[#10A000] dark:text-[#39FF14] font-bold">✓</span>
                            <span>Sites e Landing Pages premium e de alta performance</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#10A000] dark:text-[#39FF14] font-bold">✓</span>
                            <span>Aceitamos Pix, Crédito e Débito</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#10A000] dark:text-[#39FF14] font-bold">✓</span>
                            <span>Parcelamos em até 12x</span>
                        </li>
                        <li className="flex items-start gap-3 mt-4 pt-4 border-t border-white/10">
                            <span className="text-[#10A000] dark:text-[#39FF14] font-bold">»</span>
                            <span className="text-black dark:text-white font-black text-lg">A partir de R$ 399,00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

'use client';
import { motion } from 'framer-motion';

export default function PricingBanner() {
    return (
        <section className="w-full bg-[#050505] text-[#39FF14] py-4 overflow-hidden relative flex items-center border-y border-white/10 transition-colors duration-500">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                }}
                className="flex whitespace-nowrap w-max"
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center mx-4">
                        <span className="text-sm md:text-base font-mono tracking-widest uppercase mx-8">
                            ACEITAMOS PIX, CRÉDITO E DÉBITO
                        </span>
                        <span className="text-[#39FF14] opacity-50">•</span>
                        <span className="text-sm md:text-base font-mono tracking-widest uppercase mx-8">
                            PARCELAMOS EM ATÉ 12X
                        </span>
                        <span className="text-[#39FF14] opacity-50">•</span>
                        <span className="text-sm md:text-base font-mono tracking-widest uppercase mx-8 font-bold">
                            SITES E LANDING PAGES A PARTIR DE R$ 399,00
                        </span>
                        <span className="text-[#39FF14] opacity-50">•</span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

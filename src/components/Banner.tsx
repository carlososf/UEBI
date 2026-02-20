'use client';
import { motion } from 'framer-motion';

export default function Banner() {
    return (
        <section className="w-full bg-[#10A000] dark:bg-[#39FF14] text-white dark:text-black py-6 md:py-8 overflow-hidden relative flex items-center border-y border-black/10 dark:border-white/10 transition-colors duration-500">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
                className="flex whitespace-nowrap w-max"
            >
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-center mx-4 md:mx-8">
                        <span className="text-xl md:text-3xl font-black tracking-tighter uppercase mx-4">
                            SEU SITE, SEM COMPLICAÇÕES, BEM ESTRUTURADO POR UM PREÇO MAIS BAIXO!
                        </span>
                        <span className="text-xl md:text-3xl font-black mx-4">•</span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

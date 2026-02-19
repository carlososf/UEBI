'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import CinematicBackground from '@/components/ui/CinematicBackground';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">

            {/* Cinematic Background: Minimal & Tech */}
            <CinematicBackground />

            <motion.div
                style={{ y: y1, opacity }}
                className="z-20 text-center flex flex-col items-center px-4 relative max-w-7xl mx-auto"
            >
                {/* 1. Top Brand Line (Minimal) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-10"
                >
                    <span className="text-white font-black text-xl md:text-2xl tracking-[0.5em] uppercase hover:text-[#39FF14] drop-shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all duration-300 cursor-default">
                        UEBI STUDIO
                    </span>
                </motion.div>

                {/* 2. Main Headline (Authority & Power) */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] select-none text-center mix-blend-screen max-w-6xl mx-auto mb-6">
                    DESIGN <span className="text-white/30">+</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#39FF14] to-white bg-300% animate-gradient">TECNOLOGIA.</span>
                </h1>

                {/* 3. Subheadline (Engineering Focus) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-8 text-xl md:text-3xl font-light text-white/80 max-w-3xl text-center leading-tight tracking-wide space-y-2"
                >
                    <p>Sites que posicionam.</p>
                    <p className="text-white/40">Sistemas que convertem.</p>
                </motion.div>

                {/* 4. CTAs (High Contrast) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 mt-16 items-center"
                >
                    {/* Primary CTA */}
                    <a href="#contact" className="relative px-10 py-5 bg-[#39FF14] text-black font-bold rounded-full overflow-hidden group shadow-[0_0_50px_rgba(57,255,20,0.2)] hover:shadow-[0_0_80px_rgba(57,255,20,0.5)] transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2 text-sm tracking-widest uppercase">
                            Começar Projeto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                    </a>

                    {/* Secondary CTA */}
                    <a href="#portfolio" className="px-10 py-5 border border-white/10 text-white/60 font-medium rounded-full hover:bg-white/5 hover:border-white/40 hover:text-white transition-all duration-300 text-sm tracking-widest uppercase backdrop-blur-sm">
                        Ver Portfolio
                    </a>
                </motion.div>
            </motion.div>

            {/* Elegant Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 opacity-30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            </motion.div>
        </section>
    );
}

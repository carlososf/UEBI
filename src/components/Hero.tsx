'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import CinematicBackground from '@/components/ui/CinematicBackground';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA]">

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
                    className="mb-6 md:mb-10"
                >
                    <span className="text-black font-black text-sm sm:text-xl md:text-2xl tracking-[0.3em] sm:tracking-[0.5em] uppercase hover:text-[#39FF14] transition-all duration-300 cursor-default">
                        UEBI STUDIO
                    </span>
                </motion.div>

                {/* 2. Main Headline (Authority & Power) */}
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black leading-[1.1] md:leading-[0.9] select-none text-center mix-blend-multiply max-w-6xl mx-auto mb-6">
                    DESIGN <span className="text-black/30">+</span> <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-[#10A000] to-black bg-300% animate-gradient">TECNOLOGIA.</span>
                </h1>

                {/* 3. Subheadline (Engineering Focus) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-6 md:mt-8 text-lg sm:text-xl md:text-3xl font-light text-black/80 max-w-3xl text-center leading-tight tracking-wide space-y-1 md:space-y-2"
                >
                    <p>Sites que posicionam.</p>
                    <p className="text-black/50">Sistemas que convertem.</p>
                </motion.div>

                {/* 4. CTAs (High Contrast) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 md:mt-16 items-center w-full sm:w-auto px-4 sm:px-0"
                >
                    {/* Primary CTA */}
                    <a href="#contact" className="relative w-full sm:w-auto justify-center px-10 py-4 md:py-5 bg-black text-white font-bold rounded-full overflow-hidden group shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] transition-all duration-300">
                        <span className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-widest uppercase">
                            Começar Projeto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-[#39FF14] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </a>

                    {/* Secondary CTA */}
                    <a href="#portfolio" className="w-full sm:w-auto text-center px-10 py-4 md:py-5 border border-black/10 text-black/60 font-medium rounded-full hover:bg-black/5 hover:border-black/30 hover:text-black transition-all duration-300 text-sm tracking-widest uppercase backdrop-blur-sm">
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
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-black to-transparent" />
            </motion.div>
        </section>
    );
}

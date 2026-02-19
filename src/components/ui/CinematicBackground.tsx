'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingCard = ({ className, delay = 0 }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute border border-white/5 bg-[#0F0F0F]/50 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl ${className}`}
    >
        <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-16 h-2 bg-white/5 rounded-full" />
        </div>
        <div className="space-y-3 opacity-60">
            <div className="h-2 bg-gradient-to-r from-[#39FF14]/20 to-transparent rounded w-3/4" />
            <div className="h-2 bg-white/5 rounded w-1/2" />
        </div>
    </motion.div>
);

export default function CinematicBackground() {
    const { scrollY } = useScroll();
    const yParallax = useTransform(scrollY, [0, 1000], [0, -150]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#0A0A0A]">
            {/* 1. Deep Atmospheric Base */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#111] via-[#0A0A0A] to-[#0A0A0A]" />

            {/* 2. Cinematic Volumetric Lighting (Subtle Green) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-[#39FF14] opacity-[0.03] blur-[180px] rounded-full mix-blend-screen"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-white opacity-[0.02] blur-[150px] rounded-full mix-blend-screen"
            />

            {/* 3. Minimal Tech Grid (Perspective) */}
            <div
                className="absolute inset-x-0 bottom-0 h-[60vh] opacity-[0.06]"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                                      linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    transform: 'perspective(1200px) rotateX(70deg) translateY(100px) translateZ(-300px)',
                    maskImage: 'linear-gradient(to top, black, transparent 80%)'
                }}
            />

            {/* 4. Floating Elements (Reduced Clutter - Just 2 minimal cards) */}
            <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-full perspective-[1200px]">
                {/* Card 1: Main Interface Element */}
                <FloatingCard
                    className="top-[25%] -right-[5%] md:right-[10%] w-80 h-48 opacity-40 rotate-[-12deg] z-0"
                    delay={0.5}
                />

                {/* Card 2: Background Element */}
                <FloatingCard
                    className="bottom-[15%] -left-[5%] md:left-[5%] w-64 h-40 opacity-20 rotate-[12deg] z-0"
                    delay={1}
                />
            </motion.div>

            {/* 5. Vignette for Focus */}
            <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,_#0A0A0A_80%)] z-10" />
        </div>
    );
}

'use client';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function CinematicBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* 1. Base Layer: Solid Technical Background */}
            <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500" />

            {/* 2. Structured Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-100 dark:opacity-50 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:160px_160px] opacity-100 dark:opacity-20 transition-colors duration-500" />

            {/* 3. Deep Architectural Gradients */}
            {/* Main top structural light */}
            <div className="absolute -top-[20%] right-0 w-[70vw] h-[80vh] bg-[#10A000]/10 dark:bg-[#39FF14]/10 rounded-full blur-[100px] opacity-60 dark:opacity-80 mix-blend-multiply dark:mix-blend-screen transition-colors duration-500" />

            {/* Bottom left counter-balance fill */}
            <div className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[60vh] bg-black/10 dark:bg-emerald-900/20 rounded-full blur-[120px] opacity-40 dark:opacity-50 mix-blend-multiply dark:mix-blend-screen transition-colors duration-500" />

            {/* 4. Elegant Vignette (focuses attention to center) */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#FAFAFA]/90 dark:to-[#0A0A0A]/90 dark:opacity-90 transition-colors duration-500" />

            {/* 5. Minimalist Floating Architectural Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[15%] left-[10%] w-[30vh] md:w-[25vw] aspect-square rounded-[40px] border border-black/10 dark:border-white/5 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent backdrop-blur-3xl opacity-30 shadow-2xl transition-colors duration-500"
            />

            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, -10, 0],
                    rotate: [0, -2, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[20%] right-[5%] w-[40vh] md:w-[35vw] aspect-[4/3] rounded-[60px] border border-black/10 dark:border-[#39FF14]/10 bg-gradient-to-tl from-black/5 dark:from-[#39FF14]/5 to-transparent backdrop-blur-3xl opacity-20 shadow-2xl dark:shadow-[#39FF14]/5 transition-colors duration-500"
            />

            {/* 6. Precision Crosshairs / Registration marks */}
            <div className="absolute top-[10%] left-[10%] w-6 h-6 border-l border-t border-black/20 dark:border-white/20 transition-colors duration-500" />
            <div className="absolute top-[10%] right-[10%] w-6 h-6 border-r border-t border-black/20 dark:border-white/20 transition-colors duration-500" />
            <div className="absolute bottom-[10%] left-[10%] w-6 h-6 border-l border-b border-black/20 dark:border-white/20 transition-colors duration-500" />
            <div className="absolute bottom-[10%] right-[10%] w-6 h-6 border-r border-b border-black/20 dark:border-white/20 transition-colors duration-500" />

            {/* Center target UI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-black/5 dark:border-white/5 rounded-full opacity-50 dark:opacity-30 flex items-center justify-center transition-colors duration-500">
                <div className="w-[1px] h-4 absolute top-0 bg-black/20 dark:bg-white/20 transition-colors duration-500" />
                <div className="w-[1px] h-4 absolute bottom-0 bg-black/20 dark:bg-white/20 transition-colors duration-500" />
                <div className="w-4 h-[1px] absolute left-0 bg-black/20 dark:bg-white/20 transition-colors duration-500" />
                <div className="w-4 h-[1px] absolute right-0 bg-black/20 dark:bg-white/20 transition-colors duration-500" />
                <div className="w-1 h-1 rounded-full bg-[#10A000]/30 dark:bg-[#39FF14]/30 transition-colors duration-500" />
            </div>

            {/* 7. Subtle vertical tracking lines */}
            <div className="absolute left-[33%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/10 dark:via-white/5 to-transparent transition-colors duration-500" />
            <div className="absolute right-[33%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/10 dark:via-white/5 to-transparent transition-colors duration-500" />

            {/* 8. Modern Noise Overlay (for texture) */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
        </div>
    );
}

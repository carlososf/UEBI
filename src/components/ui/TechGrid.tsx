'use client';
import { motion } from 'framer-motion';

export default function TechGrid() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Gradient Fog */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#050505] z-10" />

            {/* Perspective Grid */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                              linear-gradient(to bottom, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
                    maskImage: 'linear-gradient(to bottom, transparent, black)'
                }}
            />

            {/* Moving Light Beam */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#39FF14] opacity-[0.03] blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        </div>
    );
}

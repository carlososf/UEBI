'use client';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <footer className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]" id="contact">
            {/* Background Glow */}
            <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-[#39FF14]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-white/40 font-mono text-sm tracking-widest uppercase mb-8 block">Ready to scale?</span>
                    <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter leading-[0.8]">
                        LET'S BUILD <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 group-hover:to-[#39FF14] transition-colors duration-500">THE FUTURE.</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
                    <a href="https://wa.me/5511999999999" className="px-12 py-6 bg-[#39FF14] text-black font-bold text-xl rounded-full hover:bg-white hover:shadow-[0_0_50px_rgba(57,255,20,0.5)] transition-all duration-300 flex items-center gap-3 group">
                        <MessageCircle className="w-6 h-6" /> INICIAR PROJETO
                    </a>
                    <a href="#portfolio" className="px-12 py-6 border border-white/10 text-white font-bold text-xl rounded-full hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3">
                        Ver Cases <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-white/5 pt-12 text-white/40 text-sm gap-8">
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-[#39FF14] transition-colors">INSTAGRAM</a>
                        <a href="#" className="hover:text-[#39FF14] transition-colors">LINKEDIN</a>
                        <a href="#" className="hover:text-[#39FF14] transition-colors">GITHUB</a>
                    </div>
                    <p className="font-mono">
                        © 2024 UEBI STUDIO. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}

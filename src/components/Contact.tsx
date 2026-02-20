'use client';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
    return (
        <footer className="py-24 bg-[#FAFAFA] text-black relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]" id="contact">
            {/* Background Glow */}
            <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-[#10A000]/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-black/40 font-mono text-sm tracking-widest uppercase mb-8 block">Ready to scale?</span>
                    <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter leading-[0.8]">
                        LET'S BUILD <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/40 group-hover:to-[#10A000] transition-colors duration-500">THE FUTURE.</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
                    <a href="https://wa.me/5511972362554" className="px-12 py-6 bg-black text-white font-bold text-xl rounded-full hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all duration-300 flex items-center gap-3 group">
                        <MessageCircle className="w-6 h-6" /> INICIAR PROJETO
                    </a>
                    <a href="#portfolio" className="px-12 py-6 border border-black/10 text-black font-bold text-xl rounded-full hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-3">
                        Ver Cases <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-black/5 pt-12 text-black/40 text-sm gap-8">
                    <div className="flex gap-8">
                        <a href="http://instagram.com/uebi.studio/" target="_blank" rel="noopener noreferrer" className="hover:text-[#10A000] transition-colors">INSTAGRAM</a>
                    </div>
                    <p className="font-mono text-center md:text-left">
                        © 2026 UEBI STUDIO. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
}

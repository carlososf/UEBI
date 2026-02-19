'use client';
import { useEffect, useRef } from 'react';

export default function DigitalRain() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Setting canvas width and height
        const setDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setDimensions();

        // Matrix characters - katakana + latin
        const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()';
        const charArray = chars.split('');

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const drops: number[] = [];
        for (let x = 0; x < columns; x++) {
            drops[x] = Math.random() * canvas.height; // Start at random positions
        }

        // Drawing the characters
        const draw = () => {
            // Black background with slight opacity for trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#39FF14'; // Matrix neon green
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = charArray[Math.floor(Math.random() * charArray.length)];

                // x = i * fast_s, y = value of drops[i] * font_size
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Sending the drop back to the top randomly after it has crossed the screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Incrementing Y coordinate
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        window.addEventListener('resize', setDimensions);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', setDimensions);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
        />
    );
}

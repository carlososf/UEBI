import type { Metadata } from 'next';
import { Sora, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'UEBI STUDIO | Sites do Futuro',
  description: 'Transformo presença digital em máquina de conversão: site ultra rápido, visual premium e automações.',
  icons: {
    icon: '/favicon.ico', // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-black text-white selection:bg-[#39FF14] selection:text-black overflow-x-hidden">
        {children}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </body>
    </html>
  );
}

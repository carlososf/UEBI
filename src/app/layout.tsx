import type { Metadata } from 'next';
import { Sora, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';

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
  title: 'UEBI STUDIO | Seu amigo na digitalização',
  description: 'Transformo presença digital em máquina de conversão: site ultra rápido, visual premium e automações.',
  icons: {
    icon: '/logo-uebi.png',
    apple: '/logo-uebi.png',
  },
  openGraph: {
    title: 'UEBI STUDIO | Seu amigo na digitalização',
    description: 'Transformo presença digital em máquina de conversão: site ultra rápido, visual premium e automações.',
    url: 'https://uebistudio.com.br',
    siteName: 'UEBI STUDIO',
    images: [
      {
        url: '/logo-uebi.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt-BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UEBI STUDIO | Seu amigo na digitalização',
    description: 'Transformo presença digital em máquina de conversão: site ultra rápido, visual premium e automações.',
    images: ['/logo-uebi.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-black text-black dark:text-white selection:bg-[#39FF14] selection:text-black overflow-x-hidden transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ThemeToggle />
          <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </ThemeProvider>
      </body>
    </html>
  );
}

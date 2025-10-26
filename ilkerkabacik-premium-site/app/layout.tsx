import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const playfair = Playfair_Display({ subsets: ['latin'], style: ['italic'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'İlker Kabacık — FinTech & DeFi Architect',
  description: 'Building Tomorrow’s Payment Systems. Aligned with Celestial Design.',
  openGraph: {
    title: 'İlker Kabacık — FinTech & DeFi Architect',
    description: 'FinTech, blockchain, token-economics, DeFi payment systems.',
    type: 'website',
    url: 'https://ilkerkabacik.com',
    images: [{ url: '/og-cover.png', width: 1200, height: 630, alt: 'İlker Kabacık' }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${space.variable} ${playfair.variable} bg-midnight text-ice`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
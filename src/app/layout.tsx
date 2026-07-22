import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Pinyon_Script } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-signature',
});

export const metadata: Metadata = {
  title: 'CMG – Cabinet Mourad Guellaty (MG & Associés) | Audit & Advisory',
  description:
    'Cabinet Mourad Guellaty (MG & Associés) — audit, conseil et expertise comptable en Tunisie.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable} ${pinyon.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

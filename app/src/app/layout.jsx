'use client';

import './globals.css';
import HeaderDefault from '@/components/HeaderDefault';
import Footer from '@/components/Footer';
import { Noto_Sans_JP } from 'next/font/google';
import { usePathname } from 'next/navigation';

export const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = ['/auth/login', '/auth/forgot-password'].includes(pathname);

  return (
    <html lang="ja" className={`${noto.variable}`}>
      <body suppressHydrationWarning>
        {!hideHeaderFooter && <HeaderDefault />}
        {children}
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}

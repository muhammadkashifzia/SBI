'use client';
import './globals.css';
import HeaderDefault from '@/components/HeaderDefault';
import Footer from '@/components/Footer';
import { Noto_Sans_JP} from 'next/font/google';


export const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto',
});


const metadata = {
  title: 'SBI',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${noto.variable}`}>
      <body suppressHydrationWarning>
           <HeaderDefault />
          {children}
          <Footer />
      </body>
    </html>
  );
}

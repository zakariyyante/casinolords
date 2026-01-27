import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import GclidHandler from '@/components/GclidHandler';
import { Analytics } from '@vercel/analytics/react';

export const revalidate = 0;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "BritWager - UK's Premier Affiliate Platform",
  description:
    'Discover the best UK platforms with exclusive bonuses and offers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('en-GB', { month: 'long' });

  return (
    <html lang='en' data-click-id=''>
      <head>
        {/* Privacy-friendly analytics by Plausible */}
        <script
          async
          src='https://plausible.io/js/pa-M2PPa2udWaKWdrLwkcYLu.js'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init()
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <GclidHandler />
        <Header />
        <main className='min-h-screen bg-gradient-to-b from-background to-background-light'>
          {children}
        </main>
        <Footer currentYear={currentYear} currentMonth={currentMonth} />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}

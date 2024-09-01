import { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import localFont from 'next/font/local';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'Advanced E-Commerce Product Listing',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const defaultFontFamily = localFont({
  src: '../public/font/IRANYekanXVF.woff2',
  variable: '--default-font-family',
});

const RootLayout = ({ children }: Props) => (
  <html lang="fa" dir="rtl" className={`${defaultFontFamily.variable} font-display`}>
    <body className="m-0 p-0 w-full h-screen">{children}</body>
  </html>
);

export default RootLayout;

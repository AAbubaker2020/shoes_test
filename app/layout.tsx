import './globals.css';
import { Playfair_Display } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata = {
  title: 'Luxe Elegance | Exclusive Shoes and Bags for Women and Men',
  description: "Discover unparalleled luxury in our exclusive collection of women's and men's shoes and bags. Each piece is a masterpiece of craftsmanship and design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-black text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

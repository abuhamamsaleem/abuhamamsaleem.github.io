import { Geist, Geist_Mono, Inter, Noto_Sans_Arabic, Aref_Ruqaa } from "next/font/google";
import localFont from 'next/font/local';

const bFantezyFont = localFont({
  src: '../../../public/fonts/BHamid.woff',
  variable: '--font-BFantezy',
  weight: '400',
  style: 'normal'
});

const arefRuqaa = Aref_Ruqaa({
  variable: '--font-aref-ruqaa',
  weight: '400',
  style: 'normal'
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-sans-arabic',
});

export const fonts = {
  inter,
  bFantezyFont,
  arefRuqaa
};
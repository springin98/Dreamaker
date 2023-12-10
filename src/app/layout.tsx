import type { Metadata } from 'next';
import '@/styles/common/globals.css';

import { Noto_Serif_KR } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Dream Waker',
  description: 'AI Image Making',
};

const NotoSerifKR = Noto_Serif_KR({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={NotoSerifKR.className}>{children}</body>
    </html>
  );
}

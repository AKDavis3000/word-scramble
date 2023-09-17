import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Word Scramble',
  description: 'Created by Akilah Davis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

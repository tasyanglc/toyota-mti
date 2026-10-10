import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Toyota Manufacturing Copilot · Prototype',
  description: 'Prototype alur insiden manufaktur berbasis data simulasi.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

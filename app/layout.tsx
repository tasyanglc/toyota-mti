import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Toyota AI Kaizen Copilot',
  description: 'Human-Centered Manufacturing Intelligence Platform · simulated frontend prototype.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

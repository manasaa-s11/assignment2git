import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Your Name | Portfolio',
    template: '%s | Your Name'
  },
  description: 'Personal website and portfolio.'
};

const links = [
  { name: 'github', url: 'https://github.com/yourusername' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/yourusername' },
  { name: 'email', url: 'mailto:you@example.com' }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
        
        <footer style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textTransform: 'capitalize' }}
            >
              {link.name}
            </a>
          ))}
        </footer>
      </body>
    </html>
  );
}

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
    
      
        
          {children}
          
            {links.map((link) => (
              
                {link.name}
              
            ))}
          
        
      
    
  );
}

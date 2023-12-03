import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'XonSol',
  description: 'X on solana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0e14]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

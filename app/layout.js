import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Movie Database',
  description: 'Show current popular movies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}</body>
    </html>
  )
}

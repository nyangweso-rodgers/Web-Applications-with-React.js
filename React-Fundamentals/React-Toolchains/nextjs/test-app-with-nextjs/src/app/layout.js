import './globals.css'
import { Trirong } from 'next/font/google'

const trirong = Trirong({ 
  subsets: ['latin'],
  weight: ['300']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={trirong.className}>{children}</body>
    </html>
  )
}

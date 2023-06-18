
import './globals.css'
import { Inter } from 'next/font/google'
import { AppProvider } from "./Context/AppProvider"

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Garden249',
  description: 'EventSpace Managemement Web App developed by Keino Chichester',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppProvider >
        {children}
    </AppProvider>
        </body>
    </html>
  )
}

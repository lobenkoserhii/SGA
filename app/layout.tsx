import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout'


export const metadata: Metadata = {
  title: 'SGA Immigration & Legal services',
  description: 'SGA Immigration & Legal services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
         <main className="mx-auto">
         
          {children}</main>
         
        
      
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'

import './globals.css'


const m_plus_rounded_1c = M_PLUS_Rounded_1c({ subsets: ['latin'], weight: ['300', '400', '500', '700'] })


export const metadata: Metadata = {
  title: 'Otimize os resultados dos seus fluxos de pagamentos • Tuna',
  description: 'Plataforma completa para você otimizar seus pagamentos online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={m_plus_rounded_1c.className}>
        <div className='w-full flex justify-center'>
          <header className='flex justify-between px-4 sm:px-6 py-3 flex-grow max-w-7xl'>
            <img src='/tuna.svg' />
          </header>
        </div>
        {children}
      </body>
    </html>
  )
}

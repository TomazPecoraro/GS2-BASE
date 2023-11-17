import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Cabecalho from '@/components/cabecalho/cabecalho'
import Rodape from '@/components/rodape/rodape'

const monteserrat = Montserrat({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GS-2',
}

export default function RootLayout({children}) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  )
}
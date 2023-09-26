import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalsStyles } from '@/styles/GlobalsStyles'
import StyledComponentsRegistry from '@/lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '+ Flavor',
  description: 'Authentic flavors and exceptional culinary experience. Explore our diverse menu and fresh ingredients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />

          {children}

          <Footer />
          <GlobalsStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
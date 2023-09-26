import { Inter } from 'next/font/google'
import { GlobalsStyles } from '@/styles/GlobalsStyles'
import StyledComponentsRegistry from '@/lib/registry'
import HeaderSignInSignUp from '@/components/HeaderSignInSignUp/HeaderSignInSignUp'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <HeaderSignInSignUp />

          {children}
          
          <GlobalsStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
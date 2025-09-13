import { Header } from '@/components/Header'
import type { ReactNode } from 'react'

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr]">
      <Header />
      <main className="grid place-items-center">{children}</main>
    </div>
  )
}

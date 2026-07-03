import type { ReactNode } from 'react'
import { Sidebar, type PageId } from './Sidebar'
import './Layout.css'

interface LayoutProps {
  activePage: PageId
  onNavigate: (page: PageId) => void
  children: ReactNode
}

export function Layout({ activePage, onNavigate, children }: LayoutProps) {
  return (
    <div className="layout">
      <Sidebar activePage={activePage} onNavigate={onNavigate} />
      <main className="main-content">{children}</main>
    </div>
  )
}

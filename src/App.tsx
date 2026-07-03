import { useState, type ReactNode } from 'react'
import { Layout } from './components/Layout'
import type { PageId } from './components/Sidebar'
import { Home } from './pages/Home'
import { Download } from './pages/Download'
import { Docs } from './pages/Docs'
// import { Examples } from './pages/Examples'
import { About } from './pages/About'
import { Community } from './pages/Community'

const pages: Record<PageId, ReactNode> = {
  home: <Home />,
  download: <Download />,
  docs: <Docs />,
  // examples: <Examples />,
  about: <About />,
  community: <Community />,
}

function App() {
  const [activePage, setActivePage] = useState<PageId>('home')

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {pages[activePage]}
    </Layout>
  )
}

export default App

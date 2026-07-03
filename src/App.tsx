import { useState, type ReactNode } from 'react'
import { Layout } from './components/Layout'
import type { PageId } from './components/Sidebar'
import { Home } from './pages/Home'
import { Download } from './pages/Download'
import { Docs } from './pages/Docs'
// import { Examples } from './pages/Examples'
import { About } from './pages/About'
import { Community } from './pages/Community'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const pages: Record<PageId, ReactNode> = {
//   home: <Home />,
//   download: <Download />,
//   docs: <Docs />,
//   examples: <Examples />,
//   about: <About />,
//   community: <Community />,
// }

function App() {
  //const [activePage, setActivePage] = useState<PageId>('home')

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/docs" element={<Docs />} />
            {/*<Route path="/examples" element={<Examples />} />*/}
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
}

export default App

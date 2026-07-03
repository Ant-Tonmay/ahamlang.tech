import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Download } from './pages/Download'
import { Docs } from './pages/Docs'
// import { Examples } from './pages/Examples'
import { About } from './pages/About'
import { Community } from './pages/Community'
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";


function App() {

  return (
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/docs" element={<Docs />} />
            {/*<Route path="/examples" element={<Examples />} />*/}
            <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    );
}

export default App

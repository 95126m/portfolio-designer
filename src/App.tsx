import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import GlobalStyles from '@/theme/GlobalStyles'
import Header from '@/layouts/Header'
import Home from '@/pages/Home'
import Works from '@/pages/Works'
import Overview from '@/pages/Overview'
import About from '@/pages/About'
import Carrer from '@/pages/Carrer'
import Education from '@/pages/Education'
import Skills from '@/pages/Skills'
import Footer from '@/layouts/Footer'

function AppContent() {
  const location = useLocation()
  const isOverview =
    location.pathname === '/about' || location.pathname === '/carrer' || location.pathname === '/education' || location.pathname === '/skills'

  return (
    <>
      <GlobalStyles />
      {!isOverview && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <section id="home">
                <Home />
              </section>
              <section id="works">
                <Works />
              </section>
              <section id="overview">
                <Overview />
              </section>
            </main>
          }
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/carrer"
          element={<Carrer />}
        />
        <Route
          path="/education"
          element={<Education />}
        />
        <Route
          path="/skills"
          element={<Skills />}
        />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

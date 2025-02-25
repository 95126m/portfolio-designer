import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from '@/theme/GlobalStyles'
import Header from '@/layouts/Header'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Works from '@/pages/Works'
import Footer from '@/layouts/Footer'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
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
              <section id="about">
                <About />
              </section>
            </main>
          }
        />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

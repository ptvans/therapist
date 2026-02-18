import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import NewClient from './pages/NewClient'
import Individuals from './pages/Individuals'
import IndividualsAnxiety from './pages/IndividualsAnxiety'
import IndividualsSexLoveAddiction from './pages/IndividualsSexLoveAddiction'
import Couples from './pages/Couples'
import CouplesCommunication from './pages/CouplesCommunication'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main-content" className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/new-client" element={<NewClient />} />
            <Route path="/individuals" element={<Individuals />} />
            <Route path="/individuals/anxiety" element={<IndividualsAnxiety />} />
            <Route path="/individuals/sex-love-addiction" element={<IndividualsSexLoveAddiction />} />
            <Route path="/couples" element={<Couples />} />
            <Route path="/couples/communication" element={<CouplesCommunication />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App


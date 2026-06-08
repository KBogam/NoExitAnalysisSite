import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import AboutBook from './pages/AboutBook'
import Characters from './pages/Characters'
import Themes from './pages/Themes'
import Setting from './pages/Setting'
import Timeline from './pages/Timeline'
import Symbolism from './pages/Symbolism'
import Author from './pages/Author'


import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about-book">About the Book</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/themes">Themes</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/timeline">Plot Timeline</Link>
        <Link to="/symbolism">Symbolism</Link>
        <Link to="/author">Author</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-book" element={<AboutBook />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/symbolism" element={<Symbolism />} />
        <Route path="/author" element={<Author />} />
      </Routes>

      <footer>
        Krish Bogam | Enriched English | Mr. Porter | No Exit | 6/9/2026
      </footer>
    </>
  )
}

export default App
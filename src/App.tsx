import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar
      <nav className="flex gap-6 p-4 bg-gray-900 text-white">
        <Link className="hover:text-sky-400" to="/">Home</Link>
        <Link className="hover:text-sky-400" to="/about">About</Link>
        <Link className="hover:text-sky-400" to="/contact">Contact</Link>
      </nav> */}

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  )
}

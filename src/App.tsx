import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"
import ActiveCounter from "../assets/components/ActiveCounter.jsx"
import ScheduleTable from "../assets/components/ScheduleTable.jsx"
import Skillsboard from "../assets/components/Skills.jsx"

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <ActiveCounter />
      <ScheduleTable />
      <Skillsboard />

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

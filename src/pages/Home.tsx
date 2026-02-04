import { useState } from "react"
import mainImage from "../assets/images/main-w.jpg"

export default function Home() {
  const [showWork, setShowWork] = useState(false)



  return (
    
    <div className="relative min-h-screen bg-gradient-to-b from-teal-800 to-emerald-900 overflow-x-hidden">

      {/* Profile Section */}
      <div
        className={`absolute top-1/2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]`}
        style={{
          left: showWork ? "16%" : "50%", // slide from center to left
          transform: "translate(-50%, -50%)", // keep vertical centered and maintain alignment
        }}
      >
        <div className="flex flex-col items-center text-center">
          <img
            src={mainImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white mb-6"
          />
          <h1 className="text-5xl font-extrabold text-green-200 mb-2 tracking-tight">
            Wilcah S. Quibo, RAgr.
          </h1>

          <p className="text-green-100 text-sm uppercase tracking-widest mb-6">
            Agriculturist · Instructor · Portfolio
          </p>

          <button onClick={() => setShowWork(true)} className="bg-sky-500 text-white px-8 py-3 rounded-1 font-semibold hover:bg-sky-600 transition ease-in-out duration-300">
            My Work
          </button>

        </div>
        
      </div>
      {showWork && (
      <div
      className={`absolute inset-0 bg-black/20 backdrop-blur transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]`}
      style={{
        opacity: showWork ? 1 : 0,
        backdropFilter: showWork ? "blur(8px)" : "blur(0px)",
      }}
      onClick={() => setShowWork(false)}
    />
)}


      {/* Work Panel */}
      <div
        className="absolute top-0 h-full bg-teal-50 shadow-lg p-6 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          width: "95%",
          right: showWork ? "0%" : "-95%",
        }}
      >
        {/* Hamburger / Close button */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setShowWork(false)}
            className="p-3 rounded-full hover:bg-gray-200 transition"
            aria-label="Close panel"
          >
            <span className="text-2xl font-bold">☰</span>
          </button>

          {/* Navbar inside panel */}
          <nav className="flex gap-4">
            <button className="px-3 py-1 text-xl font-semibold text-slate-900 hover:text-green-300 transition">
              Projects
            </button>
            <button className="px-3 py-1 text-xl font-semibold text-slate-900 hover:text-green-300 transition">
              About Me
            </button>
            <button className="px-3 py-1 text-xl font-semibold text-slate-900 hover:text-green-300 transition">
              Contact
            </button>
          </nav>
        </div>

        {/* Panel Content */}
        <h2 className="text-3xl font-bold mb-6 text-sky-900">About Me</h2>

        <div className="text-gray-800 text-lg mb-6 p-4 rounded shadow-inner min-h-[100px] flex items-center justify-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I am a registered agriculturist and instructor with experience in
              agricultural systems, education, and technology-driven solutions.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Smart irrigation & farm systems</li>
              <li>Educational content & instruction</li>
              <li>Data-driven agricultural analysis</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    
  )
}

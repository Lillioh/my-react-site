import { useState } from "react"
import mainImage from "../assets/images/main-w.jpg"

export default function Home() {
  const [showWork, setShowWork] = useState(false)

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-teal-800 to-emerald-900 overflow-x-hidden">

      {/* Profile Section */}
      <div
        className="absolute top-1/2 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          left: showWork ? "18%" : "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex flex-col items-center text-center px-4">

          <img
            src={mainImage}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-xl border-4 border-white mb-6"
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-200 mb-2 tracking-tight">
            Wilcah S. Quibo, RAgr.
          </h1>

          <p className="text-green-100 text-xs sm:text-sm uppercase tracking-widest mb-6">
            Agriculturist · Instructor · Portfolio
          </p>

          <button
            onClick={() => setShowWork(true)}
            className="bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-sky-600 transition duration-300"
          >
            My Work
          </button>
        </div>
      </div>

      {/* Blur Background */}
      {showWork && (
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-700"
          onClick={() => setShowWork(false)}
        />
      )}

      {/* Work Panel */}
      <div
        className="absolute top-0 h-full bg-teal-50 shadow-lg p-4 sm:p-6 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          width: "95%",
          right: showWork ? "0%" : "-95%",
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

          <button
            onClick={() => setShowWork(false)}
            className="p-3 rounded-full hover:bg-gray-200 transition w-fit"
            aria-label="Close panel"
          >
            <span className="text-2xl font-bold">☰</span>
          </button>

          {/* Navbar inside panel */}
          <nav className="flex flex-wrap gap-2 sm:gap-4">
            <button className="px-3 py-1 text-base sm:text-lg font-semibold text-slate-900 hover:text-green-500 transition">
              Projects
            </button>
            <button className="px-3 py-1 text-base sm:text-lg font-semibold text-slate-900 hover:text-green-500 transition">
              About Me
            </button>
            <button className="px-3 py-1 text-base sm:text-lg font-semibold text-slate-900 hover:text-green-500 transition">
              Contact
            </button>
          </nav>
        </div>

        {/* Panel Content */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-sky-900">
          About Me
        </h2>

        <div className="text-gray-800 text-base sm:text-lg p-4 rounded-lg bg-white shadow-inner">
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

import { useState } from "react";
import mainImage from "../assets/images/main-w.jpg";
import ScheduleTable from "../assets/components/ScheduleTable";
import SkillsBoard from "../assets/components/SkillsBoard";

export default function Home() {
  const [showWork, setShowWork] = useState(false);
  const [activeTab, setActiveTab] = useState("Projects");

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
            className="bg-sky-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-sky-600 transition duration-300"
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
          <div className="flex w-full h-12 items-center justify-between">

            {/* Hamburger Button */}
            <button
              onClick={() => setShowWork(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition"
              aria-label="Close panel"
            >
              <span className="text-2xl font-bold">☰</span>
            </button>

            {/* Navbar */}
            <nav className="flex flex-wrap gap-3 sm:gap-6 justify-center items-center flex-1">
              <button
                onClick={() => setActiveTab("Projects")}
                className={`px-3 py-1 text-base sm:text-lg font-semibold transition ${
                  activeTab === "Projects"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-slate-900 hover:text-green-500"
                }`}
              >
                About me
              </button>

              <button
                onClick={() => setActiveTab("Class Schedule")}
                className={`px-3 py-1 text-base sm:text-lg font-semibold transition ${
                  activeTab === "Class Schedule"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-slate-900 hover:text-green-500"
                }`}
              >
                Class Schedule
              </button>

              <button
                onClick={() => setActiveTab("Contact")}
                className={`px-3 py-1 text-base sm:text-lg font-semibold transition ${
                  activeTab === "Contact"
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text-slate-900 hover:text-green-500"
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Spacer */}
            <div className="w-10"></div>
          </div>
        </div>

        {/* Panel Content */}
        <div className="p-4 sm:p-6">
          
          {/* ABOUT ME TAB */}
          {activeTab === "Projects" && (
            <>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-sky-900 tracking-tight">
                Agriculturist
              </h2>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-10">
                I am a registered agriculturist and instructor of Tubod College with experience in
                agricultural systems, education, and technology-driven solutions.
              </p>

              {/* Skills Board Component */}
              <SkillsBoard />
            </>
          )}

          {/* CLASS SCHEDULE TAB */}
          {activeTab === "Class Schedule" && (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-sky-900 tracking-tight">
                Class Schedule
              </h2>
              <ScheduleTable />
            </>
          )}

          {/* CONTACT TAB */}
          {activeTab === "Contact" && (
            <>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-sky-900 tracking-tight">
                Contact
              </h2>

              <p className="text-gray-700 text-base sm:text-lg">
                Email: wilcahsy@gmail.com <br />
                Facebook: fb.com/sample <br />
                Phone: +63 900 000 0000
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

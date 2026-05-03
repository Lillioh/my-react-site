import { useState } from "react";
import mainImage from "../assets/images/main-w.jpg";
import ScheduleTable from "../assets/components/ScheduleTable.jsx";
import SkillsBoard from "../assets/components/SkillsBoard.jsx";
import ActiveCounter from "../assets/components/ActiveCounter.jsx";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">

      {/* ================= HERO SECTION ================= */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-teal-800 to-emerald-900 text-center px-4 snap-start">
        <div className="flex flex-col items-center">
          <img
            src={mainImage}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-xl border-4 border-white mb-6"
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-200 mb-2">
            Wilcah S. Quibo, RAgr.
          </h1>

          <p className="text-green-100 text-xs sm:text-sm uppercase tracking-widest mb-6">
            Agriculturist · Instructor · Portfolio
          </p>

          <ActiveCounter />
        </div>
      </section>

      {/* ================= WORK SECTION ================= */}
      <section className="h-screen bg-teal-50 p-4 sm:p-6 snap-start overflow-hidden">

        {/* NAVBAR */}
        <div className="flex justify-center mb-8 flex-wrap gap-4">
          <button
            onClick={() => setActiveTab("Projects")}
            className={`px-3 py-1 text-lg font-semibold transition ${
              activeTab === "Projects"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-slate-900 hover:text-green-500"
            }`}
          >
            About Me
          </button>

          <button
            onClick={() => setActiveTab("Class Schedule")}
            className={`px-3 py-1 text-lg font-semibold transition ${
              activeTab === "Class Schedule"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-slate-900 hover:text-green-500"
            }`}
          >
            Class Schedule
          </button>

          <button
            onClick={() => setActiveTab("Skills")}
            className={`px-3 py-1 text-lg font-semibold transition ${
              activeTab === "Skills"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-slate-900 hover:text-green-500"
            }`}
          >
            Skills
          </button>

          <button
            onClick={() => setActiveTab("Contact")}
            className={`px-3 py-1 text-lg font-semibold transition ${
              activeTab === "Contact"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-slate-900 hover:text-green-500"
            }`}
          >
            Contact
          </button>
        </div>

        {/* CONTENT AREA */}
        <div className="max-w-4xl mx-auto h-full overflow-hidden">

          {/* ================= ABOUT ================= */}
          {activeTab === "Projects" && (
            <div className="transition-all duration-300">
              <h2 className="text-4xl font-bold mb-6 text-sky-900">
                Agriculturist
              </h2>

              <p className="text-gray-700 mb-10">
                I am a registered agriculturist and instructor of Tubod College
                with experience in agricultural systems, education, and
                technology-driven solutions.
              </p>
            </div>
          )}

          {/* ================= SCHEDULE ================= */}
          {activeTab === "Class Schedule" && (
            <div className="transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-sky-900">
                Class Schedule
              </h2>

              <ScheduleTable />
            </div>
          )}

          {/* ================= SKILLS ================= */}
          {activeTab === "Skills" && (
            <div className="transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-sky-900">
                Skills
              </h2>

              <SkillsBoard />
            </div>
          )}

          {/* ================= CONTACT ================= */}
          {activeTab === "Contact" && (
            <div className="transition-all duration-300">
              <h2 className="text-3xl font-bold mb-6 text-sky-900">
                Contact
              </h2>

              <p className="text-gray-700">
                Email: wilcahsy@gmail.com <br />
                Facebook: fb.com/sample <br />
                Phone: +63 900 000 0000
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
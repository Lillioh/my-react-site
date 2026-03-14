import { Plus } from "lucide-react";

export default function SkillsBoard() {
  const columns = [
    {
      title: "Language",
      count: 2,
      items: [
        { name: "English", badge: "Classroom Study", badgeColor: "bg-gray-500/30 text-gray-200" },
        { name: "Bisaya", badge: "Fluent", badgeColor: "bg-red-500/30 text-red-200" },
        { name: "Tagalog", badge: "Conversational", badgeColor: "bg-gray-500/30 text-gray-200" },
      ],
    },
    {
      title: "Technical Skills",
      count: 3,
      items: [
        { name: "MS Office", badge: "Advanced", badgeColor: "bg-yellow-500/30 text-yellow-200" },
        { name: "MS Ppt", badge: "Advanced", badgeColor: "bg-yellow-500/30 text-yellow-200" },
        { name: "Canva", badge: "Intermediate", badgeColor: "bg-yellow-500/30 text-yellow-200" },
      ],
    },
    {
      title: "Agricultural Skills",
      count: 3,
      items: [
        { name: "Crop Production", badge: "NCIII", badgeColor: "bg-yellow-500/30 text-yellow-200" },
        { name: "Irrigation", badge: "Advanced", badgeColor: "bg-yellow-500/30 text-yellow-200" },
        { name: "Soil Management", badge: "Advanced", badgeColor: "bg-yellow-500/30 text-yellow-200" },
      ],
    },
    {
      title: "Teaching Skills",
      count: 3,
      items: [
        { name: "Lesson Planning", badge: "Developed", badgeColor: "bg-yellow-500/30 text-yellow-200" },
        { name: "Classroom Management", badge: "Developed", badgeColor: "bg-yellow-500/30 text-yellow-200" },
        { name: "Student Assessment", badge: "Developed", badgeColor: "bg-yellow-500/30 text-yellow-200" },
      ],
    },
    {
      title: "Soft Skills",
      count: 2,
      items: [
        { name: "Leadership", badge: "Developed", badgeColor: "bg-purple-500/30 text-purple-200" },
        { name: "Communication", badge: "Developed", badgeColor: "bg-purple-500/30 text-purple-200" },
      ],
    },
    {
      title: "Certified",
      count: 1,
      items: [
        { name: "Project Management", badge: "Scrum Certified", badgeColor: "bg-sky-500/30 text-sky-200" },
        { name: "Crop Production", badge: "NCIII", badgeColor: "bg-sky-500/30 text-sky-200" },

      ],
    },
  ];

  return (
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">
        Skills Board
      </h3>

      <div className="flex gap-6 overflow-x-auto pb-6">
        {columns.map((col, idx) => (
          <div
            key={idx}
            className="min-w-[260px] sm:min-w-[280px] rounded-xl bg-slate-800/90 border border-white/10 shadow-lg p-4 text-white"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold bg-slate-700/70 px-2 py-1 rounded-md">
                  {col.title}
                </span>
                <span className="text-sm text-white/60">{col.count}</span>
              </div>

              <button className="text-white/50 hover:text-white transition">
                <Plus size={18} />
              </button>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3">
              {col.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-slate-900/60 border border-white/10 p-4 hover:bg-slate-900/80 transition cursor-pointer"
                >
                  <p className="font-semibold text-white/90">{item.name}</p>

                  <span
                    className={`inline-block mt-3 text-xs px-2 py-1 rounded-md ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

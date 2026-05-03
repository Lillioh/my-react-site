import SkillsBoard from "../assets/components/SkillsBoard.jsx";

export default function Skills() {
  return (
    <div className="min-h-screen bg-teal-50 p-6 flex flex-col items-center">
      
      <h1 className="text-4xl font-bold text-sky-900 mb-10">
        Skills & Expertise
      </h1>

      <div className="w-full max-w-4xl">
        <SkillsBoard />
      </div>

    </div>
  );
}
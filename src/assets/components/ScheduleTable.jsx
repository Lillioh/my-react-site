export default function ScheduleTable() {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md border border-gray-300">
      <table className="min-w-full border-collapse text-center text-sm">
        
        {/* Header */}
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Time</th>
            <th className="border border-gray-300 px-4 py-2">Monday</th>
            <th className="border border-gray-300 px-4 py-2">Tuesday</th>
            <th className="border border-gray-300 px-4 py-2">Wednesday</th>
            <th className="border border-gray-300 px-4 py-2">Thursday</th>
            <th className="border border-gray-300 px-4 py-2">Friday</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody className="text-gray-700">
          {/* 8:00 - 9:00 */}
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-50">
              8:00 - 9:00 AM
            </td>
            <td className="border border-gray-300 px-4 py-2">
              CRS 8 <br /> Lec
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">
              ABM 2 <br /> Lec
            </td>
            <td className="border border-gray-300 px-4 py-2">
              ABM 2 <br /> Lec
            </td>
            <td className="border border-gray-300 px-4 py-2">
              CRS 8 <br /> Lec
            </td>
          </tr>

          {/* 9:00 - 10:00 */}
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-50">
              9:00 - 10:00 AM
            </td>
            <td className="border border-gray-300 px-4 py-2">
              CRS 8 <br /> Lab
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">
              ABM 2 <br /> Lab
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>

          {/* 10:00 - 11:00 */}
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-50">
              10:00 - 11:00 AM
            </td>
            <td className="border border-gray-300 px-4 py-2">
              CRS 8 <br /> Lab
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">
              ABM 2 <br /> Lab
            </td>
            <td className="border border-gray-300 px-4 py-2">
              ABM 2 <br /> Lab
            </td>
            <td className="border border-gray-300 px-4 py-2">
              CRS 8 <br /> Lab
            </td>
          </tr>

          {/* 11:00 - 12:00 */}
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-50">
              11:00 - 12:00 PM
            </td>
            <td className="border border-gray-300 px-4 py-2">
              CRS 8 <br /> Lab
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">
              ABM 2 <br /> Lab
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>

          {/* 1:00 - 2:00 */}
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-50">
              1:00 - 2:00 PM
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">
              ABM 2 <br /> Lec
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>

          {/* 2:00 - 5:00 */}
          <tr className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2 font-semibold bg-gray-50">
              2:00 - 5:00 PM
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2"></td>
            <td className="border border-gray-300 px-4 py-2">
              ABM 2 <br /> Lab
            </td>
            <td className="border border-gray-300 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



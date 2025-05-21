import { dummyData } from "../data/dummyData";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DataTable = () => {
  const [filter, setFilter] = useState("");
  const filtered = dummyData.filter(row => row.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <Input
          placeholder="Search by name"
          className="w-1/3"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

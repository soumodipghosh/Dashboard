import { Home, Table, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <Home size={18} /> Home
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <Table size={18} /> Data
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-400">
          <Settings size={18} /> Settings
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;

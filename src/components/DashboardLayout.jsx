import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import DataTable from "./DataTable";
import { BarChart, Users, DollarSign, Activity } from 'lucide-react';

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-semibold mb-6">Dashboard Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <DashboardCard title="Total Revenue" value="$45,231.89" icon={<DollarSign />} />
          <DashboardCard title="Subscriptions" value="+2,350" icon={<Users />} />
          <DashboardCard title="Sales" value="+12,234" icon={<BarChart />} />
          <DashboardCard title="Active Now" value="+573" icon={<Activity />} />
        </div>
        <DataTable />
      </main>
    </div>
  );
};

export default DashboardLayout;

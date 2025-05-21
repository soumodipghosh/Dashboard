const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
      <div className="text-3xl text-gray-500">{icon}</div>
    </div>
  );
};

export default DashboardCard;

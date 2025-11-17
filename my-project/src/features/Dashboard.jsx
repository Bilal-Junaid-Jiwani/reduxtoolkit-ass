import { useSelector } from 'react-redux';

function Dashboard() {
  const name = useSelector((state) => state.user.name);

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>
      <p className="text-center text-2xl">Welcome, <span className="font-bold text-indigo-400">{name}</span>!</p>
    </div>
  );
}

export default Dashboard;

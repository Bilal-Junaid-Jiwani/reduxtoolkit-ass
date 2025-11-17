import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const name = useSelector((state) => state.user.name);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">TodoList</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
          <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
          <span className="text-white">Welcome, {name}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

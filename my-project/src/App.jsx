import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import Dashboard from './features/Dashboard';
import Profile from './features/user/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="container mx-auto pt-10">
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

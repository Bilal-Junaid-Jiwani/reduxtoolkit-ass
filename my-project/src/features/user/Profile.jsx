import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, deleteName } from './userSlice';

function Profile() {
  const currentName = useSelector((state) => state.user.name);
  const [input, setInput] = useState(currentName === 'Guest' ? '' : currentName);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(setName(input));
    }
  };

  const handleDelete = () => {
    dispatch(deleteName());
    setInput('');
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Profile</h2>
      <p className="text-center text-lg mb-6">Current Name: <span className="font-bold">{currentName}</span></p>
      <form onSubmit={handleUpdate} className="flex items-center mb-4">
        <input
          type="text"
          className="flex-grow bg-gray-700 rounded-l-lg border-2 border-transparent focus:border-indigo-500 focus:ring-0 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter your name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-r-lg text-lg"
        >
          Update
        </button>
      </form>
      <button
        onClick={handleDelete}
        className="w-full text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-lg text-lg"
      >
        Delete Name
      </button>
    </div>
  );
}

export default Profile;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="flex items-center mb-6">
      <input
        type="text"
        className="flex-grow bg-gray-700 rounded-l-lg border-2 border-transparent focus:border-indigo-500 focus:ring-0 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-r-lg text-lg"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;

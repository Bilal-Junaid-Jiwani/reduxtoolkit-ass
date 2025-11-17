import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from './todoSlice';
import { useState } from 'react';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [newText, setNewText] = useState('');

  const handleUpdate = (id) => {
    if (newText.trim()) {
      dispatch(updateTodo({ id, text: newText }));
      setIsEditing(null);
      setNewText('');
    }
  };

  return (
    <div className="mt-6">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet. Add one above!</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              className="flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow"
              key={todo.id}
            >
              {isEditing === todo.id ? (
                <input
                  type="text"
                  className="flex-grow bg-gray-600 rounded-lg border-2 border-transparent focus:border-indigo-500 focus:ring-0 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
              ) : (
                <span className="text-white text-lg">{todo.text}</span>
              )}
              <div className="flex items-center space-x-2">
                {isEditing === todo.id ? (
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded-lg text-md"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setIsEditing(todo.id);
                      setNewText(todo.text);
                    }}
                    className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded-lg text-md"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded-lg text-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;

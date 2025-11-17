import AddTodo from '../features/todo/AddTodo';
import TodoList from '../features/todo/TodoList';

function Todo() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default Todo;

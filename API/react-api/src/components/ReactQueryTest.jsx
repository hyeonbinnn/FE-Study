import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-query';

const fetchTodos = async () => {
  const response = await fetch('https://api.example.com/todos');
  if (!response.ok) {
    throw new Error('네트워크 요청 실패');
  }
  return response.json();
};

const addTodo = (newTodo) => {
  const response = fetch('https://api.example.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newTodo),
  });
  if (!response.ok) {
    throw new Error('todo 추가 실패');
  }
  return response.json();
};

const ReactQueryTest = () => {
  const { data: todos, isLoading, isError, refetch } = useQuery('todos', fetchTodos);
  const [newTodo, setNewTodo] = useState('');
  const { mutate: addNewTodo, isLoading: isAdding } = useMutation(addTodo, {
    onSuccess: () => {
      setNewTodo('');
      refetch();
    },
  });

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addNewTodo({ text: newTodo });
    }
  };

  if (isLoading) return <div>Loading todos...</div>;
  if (isError) return <div>Error fetching todos</div>;

  return (
    <>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="입력해주세요."
        />
        <button onClick={handleAddTodo} disabled={isAdding}>
          {isAdding ? 'Adding...' : 'Add Todo'}
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
};

export default ReactQueryTest;

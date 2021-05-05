import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'learning javascript',
    }
  ]);
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: value,
      },
    ]);
    setValue('');
  }
  return (
    <>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item?.text}</li>
        ))}
      </ul>
      <input type="text" value={value} onChange={handleInputChange} />
      <button onClick={addTodo}>添加 todo</button>
    </>
  )
}

export default TodoList;

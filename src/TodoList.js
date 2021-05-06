import React, { useState } from 'react';
import styles from './todoList.scss';

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
    <div className={styles.wrap}>
      <h3 className={styles.title}>待办</h3>
      <ul className={styles.list}>
        {todos.map((item) => (
          <li
            key={item.id}
          >
            {item?.text}
          </li>
        ))}
      </ul>
      <div className={styles.operate}>
        <input type="text" value={value} onChange={handleInputChange} />
        <button onClick={addTodo}>添 加</button>
      </div>
    </div>
  )
}

export default TodoList;

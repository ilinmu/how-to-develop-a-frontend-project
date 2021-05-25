import React, { useState } from 'react';
import styles from './todoList.scss';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleCheckboxChange = (e, item) => {
    if (e.target.checked) {
      const newDones = dones.concat(item);
      setDones(newDones);
      const newTodos = todos.filter((todo) => todo.id !== item.id);
      setTodos(newTodos);
    }
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: value,
      },
    ]);
    setValue('');
  };

  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>待办</h3>
      <ul className={styles.list}>
        {todos.map((item) => (
          <li key={item.id}>
            <input type="checkbox" onChange={(e) => handleCheckboxChange(e, item)} />
            {item?.text}
          </li>
        ))}
      </ul>
      <div className={styles.operate}>
        <input type="text" placeholder="add a todo" value={value} onChange={handleInputChange} />
        <button onClick={addTodo}>添 加</button>
      </div>
      <h3 className={styles.title}>已完成</h3>
      <ul className={styles.list}>
        {dones.map((item) => (
          <li key={`${item.id}-${item.text}`}>
            <input type="checkbox" readOnly checked />
            <del>{item?.text}</del>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

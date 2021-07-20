import React, { useState } from 'react';
import styles from './todoList.scss';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [dones, setDones] = useState([]);
  const [value, setValue] = useState('');

  const handleChangeInput = (e) => {
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

  const handleAddTodo = () => {
    const flag = true;
    const tempList = [{
      id: 1,
      text: '01',
    }];
    let tempString = 'test';

    console.warn('tempList 0', tempList);
    console.warn('tempString 0', tempString);

    tempList.push({
      id: 2,
      text: '02',
    });
    tempString = 'string';
    console.warn('tempList 1', tempList);
    console.warn('tempString 1', tempString);

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
      <ul className={styles.todosList}>
        {todos.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, item)}
            />
            <span>{item?.text}</span>
          </li>
        ))}
      </ul>
      <div className={styles.operate}>
        <input
          type="text"
          placeholder="add a todo"
          value={value}
          aria-label="todo-input"
          className={styles.todoInput}
          onChange={handleChangeInput}
        />
        <button className={styles.addBtn} onClick={handleAddTodo}>添 加</button>
      </div>
      <h3 className={styles.title}>已完成</h3>
      <ul className={styles.donesList}>
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

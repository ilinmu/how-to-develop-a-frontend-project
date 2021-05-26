/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, createEvent, render, RenderResult } from '@testing-library/react';

import TodoList from './TodoList';

describe('should render the correct TodoList', () => {
  it('should render correct', () => {
    const renderTodoList = render(<TodoList />);
    const titleNode = renderTodoList.getByText('待办');
    const wrapperNode = titleNode.parentNode;
    expect(wrapperNode.tagName).toMatch('DIV');
    expect(wrapperNode.className).toMatch('wrap');
    
    const todosWrap = wrapperNode.querySelector('.todosList');
    expect(todosWrap.querySelectorAll(':scope li').length).toBe(0);
    
    const donesWrap = wrapperNode.querySelector('.donesList');
    expect(donesWrap.querySelectorAll(':scope li').length).toBe(0);
    
    const inputNode = wrapperNode.querySelector('.todoInput');
    // const inputNode = renderTodoList.getByLabelText('todo-input')
    fireEvent.change(inputNode, { target: { value: 'learning js' } });
    expect(inputNode.value).toMatch('learning js');

    const btnNode = wrapperNode.querySelector('.addBtn');
    fireEvent.click(btnNode);
    expect(todosWrap.querySelectorAll(':scope li').length).toBe(1);

    const firstTodo = todosWrap.querySelectorAll(':scope li')[0];
    expect(firstTodo.querySelector('span').innerHTML).toMatch('learning js');

    // fireEvent.change(firstTodo.querySelector('input'), { target: { checked: true } });
    // const inputChange = createEvent(
    //   'inputChange',
    //   firstTodo.querySelector('input'),
    //   {
    //     id: 1,
    //     text: 'learning js',
    //   },
    //   {
    //     EventType: 'change',
    //     defaultInit: { target: { checked: true }}
    //   }
    // )

    // expect(todosWrap.querySelectorAll(':scope li').length).toBe(0);
    
    // expect(donesWrap.querySelectorAll(':scope li').length).toBe(0);
    

  });
});

/**
 * @jest-environment jsdom
 */

import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';

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
  });
});

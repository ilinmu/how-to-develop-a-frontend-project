import React from "react";
import ReactDOM from "react-dom";
import TodoList from './TodoList';

const App = () => {
    return <TodoList />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
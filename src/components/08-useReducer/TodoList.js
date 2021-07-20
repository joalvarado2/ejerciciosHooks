import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ state, handleDelete, handleToogle }) => {
  return (
    <ul className="list-group list-group-flush">
      {state.map((tarea, i) => (
        <TodoListItem
          key={tarea.id}
          tarea={tarea}
          index={i}
          handleDelete={handleDelete}
          handleToogle={handleToogle}
        />
      ))}
    </ul>
  );
};

export default TodoList;

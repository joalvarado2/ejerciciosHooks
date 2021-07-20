import React from "react";

const TodoListItem = ({tarea, index , handleDelete , handleToogle}) => {
  return (
    <li className="list-group-item" key={tarea.id}>
      <p
        className={`${tarea.done && "complete"}`}
        onClick={() => handleToogle(tarea.id)}
      >
        {index + 1}. {tarea.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(tarea.id)}>
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;

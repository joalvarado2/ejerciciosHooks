import React, { useReducer, useState } from "react";

const types = {
  add: "add",
  update: "update",
  delete: "delete",
};

const initialTareas = [
  { id: "1", title: "tarea #1" },
  { id: "2", title: "tarea #2" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case types.delete:
      return state.filter((todo) => todo.id != action.payload);

    case types.add:
      return [...state, action.payload];

    case types.update:
      return state.map((tarea) =>
        tarea.id === action.payload.id ? action.payload : tarea
      );

    default:
      return state;
  }
};

const ListTareas = () => {
  const [tareas, dispatch] = useReducer(reducer, initialTareas);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTarea = { id: Date.now(), title: text };
    dispatch({
      type: types.add,
      payload: newTarea,
    });
  };
  return (
    <div>
      <h1>Lista de tareas</h1>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.title}
            <button
              onClick={() =>
                dispatch({
                  type: types.delete,
                  payload: tarea.id,
                })
              }
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: types.update,
                  payload: { ...tarea, title: text },
                })
              }
            >
              Actualizar
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="texto"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ListTareas;

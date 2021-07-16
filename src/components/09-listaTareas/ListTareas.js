import React, { useReducer } from "react";

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

    default:
      return state;
  }
};

const ListTareas = () => {
  const [tareas, dispatch] = useReducer(reducer, initialTareas);

  //   const handleDelete = () => {
  //       dispatch({
  //           type: types.delete
  //           })
  //   };

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTareas;

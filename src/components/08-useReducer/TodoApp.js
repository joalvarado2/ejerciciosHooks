import React, { useReducer } from "react";
import { todoReducer } from "../07-tarea-memo/todoReducer";
import styles from "../08-useReducer/styles.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "aprender react",
    done: false,
  },
];

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTarea = {
      id: new Date().getTime(),
      desc: "nueva tarea",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTarea,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1>Todo App {state.length}</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {state.map((e, i) => (
              <li className="list-group-item" key={e.id}>
                <p className="text-center">
                  {i + 1}. {e.desc}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Tarea</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="agregar tarea ..."
              autoComplete="off"
            />
            <button
              className="btn btn-outline-primary mt-1 btn-block"
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;

import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import TodoList from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("tareas")) || [];
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(state));
  }, [state]);

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const handleToogle = (tarea) => {
    dispatch({
      type: "toogle",
      payload: tarea,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTarea = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTarea,
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>Todo App ({state.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            state={state}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
          />
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
              value={description}
              onChange={handleInputChange}
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

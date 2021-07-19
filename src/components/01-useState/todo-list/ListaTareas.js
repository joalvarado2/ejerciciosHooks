import React, { useState } from "react";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([
    { id: "1", tarea: "tarea #1" },
    { id: "2", tarea: "tarea #2" },
    { id: "3", tarea: "tarea #3" },
  ]);

  const handleDelete = (id) => {
    const eliminar = tareas.filter((tarea) => tarea.id != id);
    setTareas(eliminar);
    // console.log(arrayFiltrado);
  };

  return (
    <div>
      <h1>Tareas</h1>

      <ul>
        {tareas.map((tarea) => (
          <li key={tarea}>
            {tarea.tarea}
            <button onClick={() => handleDelete(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;

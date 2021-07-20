export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((tarea) => tarea.id !== action.payload);

    case "toogle":
      return state.map((tarea) =>
        tarea.id === action.payload ? { ...tarea, done: !tarea.done } : tarea
      );

    default:
      return state;
  }
};

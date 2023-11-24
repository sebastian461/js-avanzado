export const arrayWith = () => {
  const state = [
    {
      id: 1,
      name: "Batman",
    },
    {
      id: 2,
      name: "Superman",
    },
    {
      id: 3,
      name: "Flash",
    },
    {
      id: 4,
      name: "Wonderwoman",
    },
  ];

  const index = 1;
  const newName = "Green Lantern";

  /* Este método permite crear un copia del arreglo cambiando el valor que se le indica
    pero no rompe la referencia, se podría encadenar 'structuredClone' */
  const newState = state.with(index, {
    id: index,
    name: newName,
  });
  console.table(newState);
  console.table(state);
};

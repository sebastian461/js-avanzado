export const functionStructuredClone = () => {
  const superHeroes = [
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

  /* Se usa el método 'structuredClone' para hacer copias de objetos que no contengan variables primitivas
    si se usase el operador spret '[...objeto]' en objetos que contienen objetos literales estos se pasarian por referencia
  */
  const superHeroesCopy = structuredClone(superHeroes);
  superHeroesCopy[0].name = "Green Lanter";
  console.table(superHeroes);
  console.table(superHeroesCopy);
};

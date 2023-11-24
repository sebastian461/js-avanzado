export const arrayToMethods = () => {
  const heroes = ["Batman", "Superman", "Flash", "Wonderwoman"];

  /* Exten varios métodos como el 'sort' al que se le agrega la palabra 'to' y se escribe en pasado
  para romper la relación al aplicar los métodos 
  REVISAR MÁS EN LA DOCUMENTACIÓN MDN*/
  const sortedHeroes = heroes.toSorted();

  console.table(heroes);
  console.table(sortedHeroes);
};

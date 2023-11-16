import { heroes } from "../data/heroes";

/**
 * Para poder usar 'await' se debe definir la función que lo envuelve como un método asíncrono
 * y también a la función a la que se apunta
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async (element) => {
  console.log("asyncAwaitComponent");
  const id1 = "5d86371f9f80b591f499df32";
  const id2 = "5d86371f1efebc31def272e2";

  /* Para manejar errores en 'asyn-await' se usan 'try-catch' donde el error del catch es el error de la promesa */
  try {
    /* Esta sintaxis se maneja cuando el resto de 'awaits' dependen del primero o anterior
    (este no es el caso)
  */
    const h1 = await findHeore(id1);
    const h2 = await findHeore(id2);

    element.innerHTML = `${h1.name} / ${h2.name}`;
  } catch (error) {
    element.innerHTML = error;
  }
};

const findHeore = async (id) => {
  const heroe = heroes.find((h) => h.id === id);
  if (!heroe) throw `Heroe with id ${id} not found`;
  return heroe;
};

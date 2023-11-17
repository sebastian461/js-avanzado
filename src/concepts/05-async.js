import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  console.log("asyncComponent");
  const id = "5d86371fd55e2e2a30fe1ccb";
  /* Como la función retorna una promesa, tiene acceso a los métodos 'then' y 'catch' */
  findHero(id)
    .then((h) => (element.innerHTML = h.name))
    .catch((e) => (element.innerHTML = e));
};

/**
 * Esta es la manera de definir una función asíncrona
 * que devuelve una promesa en lugar del objeto
 * @param {String} id
 * @returns {Promise}
 */
const findHero = async (id) => {
  const heroe = heroes.find((h) => h.id === id);
  /* Dentro de una función asíncrona, el 'return' equivale a un 'resolve' y throw a un 'reject' */
  if (!heroe) throw `Heroe with id ${id} not found`;
  return heroe;
};

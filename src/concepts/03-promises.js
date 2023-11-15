import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promisesComponent = (element) => {
  console.log("promisesComponent");
  const id = "5d86371fd55e2e2a30fe1cc3";

  const renderHeroe = (heroe) => {
    element.innerHTML = heroe.name;
  };

  const renderError = (error) => {
    element.innerHTML = `
      <h2>Error:</h2>
      <h3>${error}</h3>
    `;
  };

  findHero(id)
    .then((h) => renderHeroe(h))
    .catch((e) => renderError(e));
};

/**
 *
 * @param {String} id
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
  /* está es la sintaxis para definir una promesa */
  return new Promise((resolve, reject) => {
    const heroe = heroes.find((h) => h.id === id);

    if (heroe) {
      resolve(heroe);
      return;
    }

    reject(`Heroe with id ${id} not found`);
  });
};

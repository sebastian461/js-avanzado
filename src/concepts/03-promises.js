import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promisesComponent = (element) => {
  console.log("promisesComponent");
  const id1 = "5d86371fd55e2e2a30fe1cc3";
  const id2 = "5d86371f97c29d020f1e1f6d";

  const renderHeroe = (heroe) => {
    element.innerHTML = heroe.name;
  };

  const renderError = (error) => {
    element.innerHTML = `
      <h2>Error:</h2>
      <h3>${error}</h3>
    `;
  };

  /* Manera en la que se ejecuta un promesa */
  findHero(id1)
    .then((h) => renderHeroe(h))
    .catch((e) => renderError(e));

  /* Manera en la que se ejecutan varias promesas que dependen entre si
   evitando el promise hell (promesas dentro de promesas) */

  const renderTwoHeroe = (heroe1, heroe2) => {
    element.innerHTML = `${heroe1.name} </br> ${heroe2.name}`;
  };

  let heroe1;
  findHero(id1)
    .then((h1) => {
      heroe1 = h1;
      return findHero(id2);
    })
    .then((h2) => {
      renderTwoHeroe(heroe1, h2);
    })
    .catch(renderError);

  /* Manera en la que se ejecutan varias promesas que no dependen entre si */
  Promise.all([findHero(id1), findHero(id2)])
    .then(([h1, h2]) => renderTwoHeroe(h1, h2))
    .catch(renderError);
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

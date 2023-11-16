import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {
  console.log("forAwaitComponent");
  const id = "5d86371fd55e2e2a30fe1cc4";
  const heroIds = heroes.map((h) => h.id);
  //if (await getHeroAsync(id)) element.innerHTML = "El heroe existe";
  const heroePromises = getHeroesAsync(heroIds); //la función retorna un arreglo de promesas

  /* Por eso se usa el 'for-await' para recorrer cada una de las promesas */
  for await (const hero of heroePromises) {
    element.innerHTML += `${hero.name} </br>`;
  }
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
  const heroPromises = [];

  heroIds.forEach((id) => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

const getHeroAsync = async (id) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  return heroes.find((hero) => hero.id === id);
};

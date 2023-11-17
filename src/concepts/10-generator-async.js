import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const ayncGeneratorComponent = async (element) => {
  console.log("ayncGeneratorComponent");

  const heroeGenerator = getHeroeGenerator();
  let finish = false;

  do {
    const { value, done } = await heroeGenerator.next();
    finish = done;
    element.innerHTML = value;
  } while (!finish);
};

async function* getHeroeGenerator() {
  for (const heroe of heroes) {
    await sleep();
    yield heroe.name;
  }
  return "No hay más heroes";
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

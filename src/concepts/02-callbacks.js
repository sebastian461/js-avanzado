import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  //console.log("callbacksComponent");
  const id = "5d86371f2343e37870b91ef1";
  findHeroe(id, (h) => {
    element.innerHTML = h.name;
  });
};

/**
 *un callback es una función que recibe como argumento una función y la ejecuta
 * @param {String} id
 * @param {(heroe: Object) => void} callback
 */
const findHeroe = (id, callback) => {
  const heroe = heroes.find((h) => h.id === id);
  callback(heroe);
};

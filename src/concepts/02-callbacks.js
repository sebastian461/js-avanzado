import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  //console.log("callbacksComponent");
  const id = "5d86371f2343e37870b91ef1";
  findHeroe(id, (error, h) => {
    //element.innerHTML = h?.name || "No existe ese heroe";
    if (error) {
      element.innerHTML = error;
      return;
    }
    element.innerHTML = h.name;
  });
};

/**
 *un callback es una función que recibe como argumento una función y la ejecuta
 * @param {String} id
 * @param {(error: String|null, heroe: Object) => void} callback
 */
const findHeroe = (id, callback) => {
  const heroe = heroes.find((h) => h.id === id);
  if (!heroe) {
    callback(`Hero with id ${id} not found`);
    return;
  }
  callback(null, heroe);
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {
  console.log("promiseRaceComponent");
  const renderValue = (value) => {
    element.innerHTML = value;
  };

  /* Obtiene o maneja el resultado de la promesa que se resuelva primero o más rápido */
  Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
    renderValue
  );
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Medium Promise");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast Promise");
    }, 1000);
  });

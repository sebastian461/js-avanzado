/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitOptiComponent = async (element) => {
  console.log("asyncAwaitOptiComponent");
  /* Esto hace que cada promesa se ejecute una a continuación de otra
    haciendo que el proceso se demore (sirve cuando un resultado depende de otro)
    (el tiempo de respuesta debería ser 4s)
  */
  //const v1 = await slowPromise();
  //const v2 = await mediumPromise();
  //const v3 = await fastPromise();

  /* Esta sintaxis corrige la ejecución y dispara todas las promesas
    (debería responder en 2s)
  */
  const [v1, v2, v3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);

  element.innerHTML = `${v1} / ${v2} / ${v3}`;
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

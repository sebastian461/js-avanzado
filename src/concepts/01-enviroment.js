/**
 *
 * @param {HTMLDivElement} element
 */
export const enviromentComponent = (element) => {
  //Para acceder a las varibles de entorno se usa "process.env", pero en vite no funciona así
  //console.log(import.meta.env);

  const html = `
    Dev: ${import.meta.env.DEV} </br>
    Prod: ${import.meta.env.PROD} </br>
    Variable: ${import.meta.env.VITE_VARIABLE} </br>
  `;
  element.innerHTML = html;
};

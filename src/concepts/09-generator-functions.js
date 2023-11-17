/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
  console.log("generatorFunctionsComponent");

  /* const generador = funcionGenerador();
  console.log(generador.next());
  console.log(generador.next());
  console.log(generador.next());
  console.log(generador.next()); */

  const genId = idGenerator();
  const button = document.createElement("button");
  button.innerText = "Click";
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", () => {
    renderButton();
  });
};

/* Esta es la sintaxis de una función generadora
un 'yield' indica una pausa en la ejecución de la función y puede ser retomado a partir
del llamado a la función con el método 'next' */
function* funcionGenerador() {
  yield "primer valor";
  yield "segundo valor";

  return "ultimo valor";
}

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}

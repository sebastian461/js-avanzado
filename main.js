import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import {
  asyncAwaitComponent,
  asyncAwaitOptiComponent,
  asyncComponent,
  ayncGeneratorComponent,
  callbacksComponent,
  enviromentComponent,
  forAwaitComponent,
  generatorFunctionsComponent,
  promiseRaceComponent,
  promisesComponent,
} from "./src/concepts/index";
import { functionStructuredClone } from "./src/esNext";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
    
  </div>
`;

const element = document.querySelector(".card");

//enviromentComponent(element);
//callbacksComponent(element);
//promisesComponent(element);
//promiseRaceComponent(element);
//asyncComponent(element);
//asyncAwaitComponent(element);
//asyncAwaitOptiComponent(element);
//forAwaitComponent(element);
//generatorFunctionsComponent(element);
//ayncGeneratorComponent(element);
functionStructuredClone();

import resetProject from "./resetProject.js";
import { imgProject } from "../project.js";
import { DescH1 } from "../project.js";
import { DescP } from "../project.js";
import { DescLink } from "../project.js";
import { TecnoLi } from "../project.js";

export default function Project5() {
  resetProject();
  imgProject.insertAdjacentHTML("afterbegin", '<img src="./img/jogodavelha.png" draggable="false" class="x-s" />');
  DescH1.innerHTML = "Jogo Da Velha";
  DescP.innerHTML = "<br><br><br>Jogo da velha clássico, feito principalmente para desenvolver exercícios envolvendo lógica em JavaScript.<br><br>";
  DescLink.setAttribute("href", "https://github.com/GabrielRosendo27/jogodavelha");
  const valores = {
    0: '<img src="img/html.svg" draggable="false" class="icon-svg" />',
    1: '<img src="img/css.svg" draggable="false" class="icon-svg" />',
  };
  TecnoLi.forEach((item, pos) => {
    item.innerHTML = valores[pos];
    if (pos === 1) {
      (newLi.innerHTML = '<img src="img/js.svg" draggable="false" class="icon-svg" />'), item.insertAdjacentElement("afterend", newLi);
    }
  });
  //
}

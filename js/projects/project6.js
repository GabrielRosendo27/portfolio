import resetProject from "./resetProject.js";
import { imgProject } from "../project.js";
import { DescH1 } from "../project.js";
import { DescP } from "../project.js";
import { DescLink } from "../project.js";
import { TecnoLi } from "../project.js";

export default function Project6() {
  resetProject();
  imgProject.insertAdjacentHTML("afterbegin", '<img src="./img/bikcraft.png" draggable="false" class="x" />');
  DescH1.innerHTML = "Bikcraft";
  DescP.innerHTML =
    "<br>Site fictício de uma empresa chamada Bikcraft feito apenas com HTML e CSS. <br><br>Contém 6 páginas<br> • Home <br>• Orçamento <br>• Seguros<br>• Termos<br>• Bicicletas <br>• Contato<br><br> Foi fundamental para consolidar meus conhecimentos nessas tecnologias e em como elas interagem entre si.";
  DescLink.setAttribute("href", "https://github.com/GabrielRosendo27/projetobikcraft");
  const valores = {
    0: '<img src="img/html.svg" draggable="false" class="icon-svg" />',
    1: '<img src="img/css.svg" draggable="false" class="icon-svg" />',
  };
  TecnoLi.forEach((item, pos) => {
    item.innerHTML = valores[pos];
  });
  //
}

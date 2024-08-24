import resetProject from "./resetProject.js";
import { imgProject } from "../project.js";
import { DescH1 } from "../project.js";
import { DescP } from "../project.js";
import { DescLink } from "../project.js";
import { TecnoLi } from "../project.js";

export default function Project4() {
  resetProject();
  imgProject.insertAdjacentHTML("afterbegin", '<img src="./img/telaLogin.PNG" draggable="false" class="x-s" />');
  DescH1.innerHTML = "Tela de Login e Cadastro com mySQL";
  DescP.innerHTML =
    "<br>O usuário pode criar uma nova conta que será salva em um banco de dados, caso já tenha uma conta, é possível acessar diretamente com o Login e a Senha.<br><br>Utiliza o JOptionPane para criar a interface com a tela de Login e Cadastro.<br><br>O banco de dados mySQL salva as informações do usuário.<br> ";
  DescLink.setAttribute("href", "https://github.com/GabrielRosendo27/TelaLogin");
  const valores = {
    0: '<img src="img/java-icon.svg" draggable="false" class="icon-svg" />',
    1: '<img src="img/mysql.svg" draggable="false" class="icon-svg mysql" />',
  };
  TecnoLi.forEach((item, pos) => {
    item.innerHTML = valores[pos];
  });
}

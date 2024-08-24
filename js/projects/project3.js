import resetProject from "./resetProject.js";
import { imgProject } from "../project.js";
import { DescH1 } from "../project.js";
import { DescP } from "../project.js";
import { DescLink } from "../project.js";
import { TecnoLi } from "../project.js";

export default function Project3() {
  resetProject();
  imgProject.insertAdjacentHTML("afterbegin", '<img src="./img/telaExame.PNG" draggable="false" class="x-s" />');
  DescH1.innerHTML = "Exame";
  DescP.innerHTML =
    " O programa tem como objetivo monitorar 3 tipos de exames, o de glicemia, colesterol e triglicerídeo. <br> Todos os exames armazenam algumas características em comum, nome do paciente, tipo sanguíneo e ano de nascimento. <br><br> • Exame de Glicemia: além dos dados do exame, armazena a quantidade de glicose por mg/l <br><br> • Exame de Colesterol: além dos dados do exame, armazena a quantidade de LDL e HDL por mg/l e o risco do paciente (B - baixo, M - medio e A - alto) <br><br> • Exame de Triglicerídeos: além dos dados do exame, armazena a quantidade de triglicerídeo por ml/l <br><br> Os exames possuem alguns métodos. <br><br> • Para Glicemia: Normoglicemia: Inferior a 100 mg/dL <br> • Pré-diabetes: Superior ou igual a 100 mg/dL eles Inferior a 126 mg/dL <br> • Diabetes estabelecido: Superior ou igual a 126 mg/dL <br><br> Para Colesterol HDL: <br> • De 0 a 19 anos..: superior a 45 mg/dL (HDL - BOM) <br> • Acima de 20 anos: superior a 40 mg/dL (HDL - BOM) <br> Para Colesterol LDL:<br> • Se o paciente for risco baixo, o colesterol LDL deve estar abaixo de 100 mg/dL <br> •  Se o paciente for risco médio, o colesterol LDL deve estar abaixo de 70 mg/dL <br> • Se o paciente for risco alto, o colesterol LDL deve estar abaixo de 50 mg/dL <br> Para Triglicerídeos: <br> • De 0 a 9 anos: Com jejum: inferior a 75 mg/dL <br> • De 10 a 19 anos: Com jejum: inferior a 90 mg/dL <br> • Acima de 20 anos: Com Jejum: inferior a 150 mg/dL <br> <br> Projeto desenvolvido para a faculdade, com foco em adquirir conhecimentos em Orientação a Objetos em Java. ";

  DescLink.setAttribute("href", "https://github.com/GabrielRosendo27/Exame-Java");
  const valores = {
    0: '<img src="img/java-icon.svg" draggable="false" class="icon-svg" />',
    1: '<img src="img/java-icon.svg" draggable="false" class="icon-svg rmv"/>',
  };
  TecnoLi.forEach((item, pos) => {
    item.innerHTML = valores[pos];
  });
}

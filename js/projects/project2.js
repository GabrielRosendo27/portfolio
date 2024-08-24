import resetProject from "./resetProject.js";
import { imgProject } from "../project.js";
import { DescH1 } from "../project.js";
import { DescP } from "../project.js";
import { DescLink } from "../project.js";
import { TecnoLi } from "../project.js";

export default function Project2() {
  resetProject();
  imgProject.insertAdjacentHTML("afterbegin", '<img src="./img/botDiscImg/imgBotDisc.PNG" draggable="false" class="x-s" />');
  DescH1.innerHTML = "Discord Bot";
  DescP.innerHTML =
    "<br>Bot de Discord que utiliza Web Scraping, feito em Python, para obter informações de jogadores de um jogo chamado Tibia.<br><br> O bot, a partir de um comando específico recebido pelo Discord, executa operações assíncronas de scraping no site escolhido, recolhe as informações pertinentes e as traz de volta em forma de mensagem no próprio Discord.<br><br> Exemplo utilizando o comando '!add *NomeDoPersonagem*'<br>";
  DescP.insertAdjacentHTML("beforeend", '<br><img src="./img/botDiscImg/comandoAdd.PNG" alt="Imagem do Bot de Discord" class="x-x" /> <br> ');
  DescP.insertAdjacentHTML(
    "beforeend",
    "<br>Após utilizar o comando, o bot retorna as informações do personagem diretamente no canal do Discord.<br>Adicionado um personagem através do nome, ele fica com suas informações salvas no banco de dados SQLite.<br><br> Uma vez salvo o personagem, o bot também faz uma verificação, a cada minuto após ser iniciado, onde ele compara as informações do site com as encontradas no banco de dados, e se há alguma alteração ele informa qual mudança de estado teve naquele personagem. Ele faz isso com todos os personagens no banco de dados. <br> Exemplo de alterações no estado de um personagem: <br>"
  );
  DescP.insertAdjacentHTML("beforeend", '<br><img src="./img/botDiscImg/botStatus.PNG" alt="Imagem do Bot de Discord" class="x-x" /> <br> ');
  DescP.insertAdjacentHTML(
    "beforeend",
    "<br> Nas alterações de estado ele atualiza as novas informações trazidas do site, como se o personagem evoluiu ou desceu de nível, ficou offline, e se o personagem foi morto no jogo.<br> Também é possível remover um personagem existente no banco de dados com o comando '!remove *NomeDoPersonagem*'<br>"
  );
  DescP.insertAdjacentHTML("beforeend", '<br><img src="./img/botDiscImg/comandoRemove.PNG" alt="Imagem do Bot de Discord" class="x-x" /> <br> <br>');
  DescP.insertAdjacentHTML(
    "beforeend",
    "O bot tem dependência com a biblioteca Selenium que é utilizada para usar as funções de um navegador e fazer a pesquisa de informações dos jogadores no site."
  );

  DescLink.setAttribute("href", "https://github.com/GabrielRosendo27/botDisc");
  const valores = {
    0: '<img src="img/python-icon.svg" draggable="false" class="icon-svg" />',
    1: '<img src="img/sqlite-icon.svg" draggable="false" class="icon-svg" />',
  };
  TecnoLi.forEach((item, pos) => {
    item.innerHTML = valores[pos];
  });
}

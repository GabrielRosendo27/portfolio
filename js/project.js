document.addEventListener("DOMContentLoaded", function () {
  const imgTrack = document.getElementById("image-track");
  const imgs = document.querySelectorAll(".image");
  const arrow = document.querySelector(".arrow");
  const arrow2 = document.querySelector(".arrow-2");
  //
  const containerProject = document.querySelector(".project-container");
  const imgProject = document.querySelector(".img-project");
  const DescH1 = document.querySelector(".desc-project h1");
  const DescP = document.querySelector(".desc-project p");
  const DescLink = document.querySelector(".desc-project a");
  const TecnoLi = document.querySelectorAll(".tecno-project ul li");
  //
  const newLi = document.createElement("li");
  //
  function addClass() {
    imgTrack.removeAttribute("id");
    imgTrack.classList.add("image-slide");
    imgs.forEach((i) => {
      i.classList.remove("image");
      i.classList.add("images");
      containerProject.classList.remove("anim");
      void containerProject.offsetWidth;
      containerProject.classList.add("anim");
    });
    arrow.style.display = "block";
    arrow2.style.display = "none";
    containerProject.style.display = "grid";
  }
  //
  function removeClass() {
    if (imgTrack.classList.contains("image-slide")) {
      imgTrack.classList.remove("image-slide");
      imgTrack.setAttribute("id", "image-track");
      imgs.forEach((i) => {
        i.classList.remove("images");
        i.classList.add("image");
        arrow.style.display = "none";
        arrow2.style.display = "block";
        i.style.opacity = "1";
      });
      containerProject.style.display = "none";
    }
  }
  //
  function showProject() {
    const actions = {
      0: () => {
        projectOne();
      },
      1: () => {
        projectTwo();
      },
      2: () => {
        projectThree();
      },
      3: () => {
        projectFour();
      },
      4: () => {
        projectFive();
      },
      5: () => {
        projectSix();
      },
    };
    //
    imgs.forEach((i, p) => {
      i.addEventListener("click", () => {
        if (!i.dataset.clicked) {
          imgs.forEach((img) => {
            img.style.opacity = "1";
            img.removeAttribute("data-clicked");
          });

          if (actions[p]) {
            actions[p]();
            i.style.opacity = "0.3";
            i.dataset.clicked = true;
          } else {
            console.log("Clicou em outra imagem");
          }
        }
      });
    });
    //
  }
  imgs.forEach((i) => {
    i.onclick = addClass;
    showProject();
  });
  //
  arrow.onclick = removeClass;
  //
  function projectSix() {
    resetProject();
    imgProject.insertAdjacentHTML("afterbegin", '<img src="./img/bikcraft.png" draggable="false" class="x" />');
    DescH1.innerHTML = "Bikcraft";
    DescP.innerHTML =
      "<br>Site fictício de uma empresa chamada Bikcraft feito apenas com HTML e CSS. <br><br>Contém 6 páginas<br> • Home <br>• Orçamento <br>• Seguros<br>• Termos<br>• Bicicletas <br>• Contato.<br><br> Foi fundamental para consolidar meus conhecimentos nessas tecnologias e em como elas interagem entre si.";
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
  //
  function projectFive() {
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
  //

  //
  function projectThree() {
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
  //
  function projectFour() {
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
  //
  function projectTwo() {
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
    //
  }
  function projectOne() {
    resetProject();
    imgProject.insertAdjacentHTML("afterbegin", '<img src="./img/applistafilmesx.PNG" draggable="false" class="x" />');
    DescH1.innerHTML = "Lista Filmes App (Não Finalizado)";
    DescP.innerHTML =
      "<br>Projeto pessoal de uma lista de filmes feito em React.<br> Possuo uma lista de filmes em um bloco de notas, e resolvi criar uma aplicação em cima disso, aproveitando para aprender mais sobre React.<br><br> A aplicação consiste em fazer uma busca de um filme com o nome do título podendo ser em português ou inglês.<br><br>Na aplicação fazemos requisições a duas APIs gratuitas diferentes, a API do OMDB (Open Movie Database) e a API do TMDB (The Movie Database).<br><br> As duas APIs são utilizadas como complemento a cada uma, fornecendo informações diferentes sobre cada filme, a API do OMDB não suporta pesquisa de títulos em diferentes idiomas, então é necessário o uso de uma segunda API como a do TMDB pois na minha lista os filmes estão com o título em português.<br><br>Então primero fazemos a pesquisa de um filme que faz a requisição na API do TMDB, dessa API o que retornamos é: o título do filme (em português), o título original do filme (o qual é usado para pesquisar na API do OMDB para o resto das informações), a sinopse ou descrição do filme, e o caminho para imagem do pôster do filme.<br><br> Ja a API do OMDB é usada para complementar as informações recebidas da API do TMDB, ela retorna dados como: ano de lançamento, duração, gênero, país de origem, avaliação no IMDB, avaliação e classificação no Rotten Tomatoes.<br><br> Os dados de ambas APIs são combinados e apresentados fornecendo informações mais detalhadas de cada filme.<br><br> Os filmes adicionados e seus respectivos dados são salvos no banco de dados do Firebase.<br><br>Também é possível remover o filme da lista clicando no ícone de lixeira em cada filme e que também é apagado do banco de dados. <br><br>";
    DescP.innerHTML += '<a href="https://lista-filmes-app.vercel.app/" target="_blank">Projeto ↵</a>';
    DescLink.setAttribute("href", "https://github.com/GabrielRosendo27/ListaFilmesApp");
    const valores = {
      0: '<img src="img/react.svg" draggable="false" class="icon-svg" />',
      1: '<img src="img/firebase.svg" draggable="false" class="icon-svg" />',
    };
    TecnoLi.forEach((item, pos) => {
      item.innerHTML = valores[pos];
    });
  }
  function resetProject() {
    const imgX = document.querySelector(".img-project img");
    if (imgX && newLi) {
      imgX.remove();
      newLi.remove();
    }
  }
});

import resetProject from "./resetProject.js";
import { imgProject } from "../project.js";
import { DescH1 } from "../project.js";
import { DescP } from "../project.js";
import { DescLink } from "../project.js";
import { TecnoLi } from "../project.js";
import { vercel } from "./resetProject.js";

export default function Project1() {
  resetProject();
  imgProject.insertAdjacentHTML("afterbegin", '<img src="./img/applistafilmesx.png" draggable="false" class="x" />');
  DescH1.innerHTML = "Lista Filmes App";
  DescP.innerHTML =
    "<br>Projeto pessoal de uma lista de filmes feito em React.<br> Possuo uma lista de filmes em um bloco de notas, e resolvi criar uma aplicação em cima disso, aproveitando para aprender mais sobre React.<br><br> A aplicação consiste em fazer uma busca de um filme com o nome do título podendo ser em português ou inglês.<br><br>Na aplicação fazemos requisições a duas APIs gratuitas diferentes, a API do OMDB (Open Movie Database) e a API do TMDB (The Movie Database).<br><br> As duas APIs são utilizadas como complemento a cada uma, fornecendo informações diferentes sobre cada filme, a API do OMDB não suporta pesquisa de títulos em diferentes idiomas, então é necessário o uso de uma segunda API como a do TMDB pois na minha lista os filmes estão com o título em português.<br><br>Então primero fazemos a pesquisa de um filme que faz a requisição na API do TMDB, dessa API o que retornamos é: o título do filme (em português), o título original do filme (o qual é usado para pesquisar na API do OMDB para o resto das informações), a sinopse ou descrição do filme, e o caminho para imagem do pôster do filme.<br><br> Ja a API do OMDB é usada para complementar as informações recebidas da API do TMDB, ela retorna dados como: ano de lançamento, duração, gênero, país de origem, avaliação no IMDB, avaliação e classificação no Rotten Tomatoes.<br><br> Os dados de ambas APIs são combinados e apresentados fornecendo informações mais detalhadas de cada filme.<br><br> Os filmes adicionados e seus respectivos dados são salvos no banco de dados do Firebase.<br><br>Também é possível remover o filme da lista clicando no ícone de lixeira em cada filme e que também é apagado do banco de dados. <br><br>";
  vercel.setAttribute("href", "https://lista-filmes-app.vercel.app/");
  vercel.setAttribute("target", "_blank");
  vercel.innerHTML = "Projeto ↵";
  // DescLink.innerHTML += '<a href="https://lista-filmes-app.vercel.app/" target="_blank">Projeto ↵</a>';
  DescLink.setAttribute("href", "https://github.com/GabrielRosendo27/ListaFilmesApp");
  DescLink.before(vercel);

  const valores = {
    0: '<img src="img/react.svg" draggable="false" class="icon-svg" />',
    1: '<img src="img/firebase.svg" draggable="false" class="icon-svg" />',
  };
  TecnoLi.forEach((item, pos) => {
    item.innerHTML = valores[pos];
  });
}

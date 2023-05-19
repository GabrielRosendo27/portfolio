const imagens = document.getElementsByClassName("image");
const descricaoProjetos = [
  "Descrição do Projeto 1",
  "Descrição do Projeto 2",
  "Descrição do Projeto 3",
  // Adicione as descrições dos projetos restantes aqui
];

for (let i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("mouseover", function () {
    exibirDescricaoProjeto(descricaoProjetos[i]);
  });

  imagens[i].addEventListener("mouseout", function () {
    ocultarDescricaoProjeto();
  });
}

function exibirDescricaoProjeto(descricao) {
  const divDescricao = document.createElement("div");
  divDescricao.className = "descricao-projeto";
  divDescricao.textContent = descricao;

  document.body.appendChild(divDescricao);
}

function ocultarDescricaoProjeto() {
  const divDescricao = document.querySelector(".descricao-projeto");
  if (divDescricao) {
    divDescricao.remove();
  }
}

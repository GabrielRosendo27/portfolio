const track = document.getElementById("image-track");
// criando scroll invisivel
// 1. Pegando a posição do mouse no Eixo X / -> (mousedown) quando um botão é pressionado sobre o elemento
// 2. Criando escutador de eventos com mousemove

window.onmousedown = (e) => {
  // atualizando o datamousedown a cada novo movimento do mouse
  track.dataset.mouseDownAt = e.clientX;
};
// retornando o valor para Zero ao soltar o botão do mouse
window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage; // guardando o valor da porcentagem após o usuário terminar de scrollar as imagens, assim o scroll não retorna a posição original
};
// Precisamos de uma maneira de saber o quão longe o caminho que o mouse percorre do ponto de início
// mouseDownAt, MouseDelta, maxDelta
window.onmousemove = (e) => {
  // o escutador de eventos onmousemove não tem como saber que o mousedown foi acionado
  // sabemos que o datamousedown se inicia com o valor 0, que atribuímos no HTML
  // então nesse caso, se (if) o mousedown for 0 = return, e não aciona o código que faz o track se movimentar
  if (track.dataset.mouseDownAt === "0") return;

  // posição relativa do mouse
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2; // <- máximo até onde o mouse deve ir = largura da tela do usuário / 2

  // dividindo a posição relativa (mouseDelta) pela distância máxima (max delta) assim convertendo o valor para decimal
  // e multiplicando o decimal por 100, obtemos a porcentagem
  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage; // porcentagem do scroll após o usuário dar a primeira scrollada

  proximaPorcentagem = Math.max(Math.min(nextPercentage, 0), -100); // colocando um limite até onde é possível scrollar com a função Math

  track.dataset.percentage = proximaPorcentagem;

  // movendo a div image-track com base na porcentagem da posição do mouse
  track.style.transform = `translate(${proximaPorcentagem}%, -50%)`;
  // efeito de suavização ao scrollar as imagens
  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );
  // efeito paralax nas imagens
  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

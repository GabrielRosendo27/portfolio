document.addEventListener("DOMContentLoaded", function () {
  const imgTrack = document.getElementById("image-track");
  const imgs = document.querySelectorAll(".image");
  const arrow = document.querySelector(".arrow");
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
  function projectOne() {
    resetProject();
    imgProject.insertAdjacentHTML("afterbegin", '<img src="img/bikcraft.png" draggable="false" class="x" />');
    DescH1.innerHTML = "Bikcraft";
    DescP.innerHTML =
      "Site fictício de uma empresa chamada Bikcraft, feito totalmente em HTML e CSS, foi fundamental para consolidar conhecimentos nessas tecnologias e em como elas interagem entre si.";
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
  function projectTwo() {
    resetProject();
    imgProject.insertAdjacentHTML("afterbegin", '<img src="img/jogodavelha.png" draggable="false" class="x-s" />');
    DescH1.innerHTML = "Jogo Da Velha";
    DescP.innerHTML = "Jogo da velha clássico, feito principalmente para desenvolver exercícios envolvendo lógica em JavaScript.";
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
  function projectThree() {
    resetProject();
    imgProject.insertAdjacentHTML("afterbegin", '<img src="img/gbx.png" draggable="false" class="x-s" />');
    DescH1.innerHTML = "GBX Converter";
    DescP.innerHTML =
      "GBX Converter, é um projeto feito com o objetivo de adquirir conhecimento sobre Web Scrapping. <br>O usuário insere um link de vídeo do youtube, esse link é capturado e enviado a outro site que faz a conversão para o formato mp3 e retorna o link com o download.<br><br> • Utiliza o framework Express do Node.js para criar o servidor <br> • Utiliza a biblioteca Puppeteer do Node.js para controlar o Chrome, automatizando a interação com o navegador.<br> • Projeto desatualizado ";
    DescLink.setAttribute("href", "https://github.com/GabrielRosendo27/gbx-converter");
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
  function resetProject() {
    const imgX = document.querySelector(".img-project img");
    if (imgX && newLi) {
      imgX.remove();
      newLi.remove();
    }
  }
});

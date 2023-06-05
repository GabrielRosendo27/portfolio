const imgTrack = document.getElementById("image-track");
const imgs = document.querySelectorAll(".image");
const arrow = document.querySelector(".arrow");
//
const containerProject = document.querySelector(".project-container");
const imgProject = document.querySelector(".img-project");
const DescH1 = document.querySelector(".desc-project h1");
const DescP = document.querySelector(".desc-project p");
const TecnoLi = document.querySelectorAll(".tecno-project ul li");
//
function addClass() {
  imgTrack.removeAttribute("id");
  imgTrack.classList.add("image-slide");
  imgs.forEach((i) => {
    i.classList.remove("image");
    i.classList.add("images");
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
  imgProject.insertAdjacentHTML("afterbegin", '<img src="img/bikcraft.png" draggable="false" class="x" />');
  DescH1.innerHTML = "Bikcraft";
  DescP.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quos, eligendi explicabo itaque, quam nam consequuntur perferendis vitae saepe culpa nostrum dolorem. Architecto, alias fugiat. Maxime officiis repudiandae ipsam adipisci!";
  const valores = {
    0: "HTML",
    1: "CSS",
  };
  TecnoLi.forEach((item, pos) => {
    item.innerHTML = valores[pos];
  });
}
//
function projectTwo() {
  imgProject.insertAdjacentHTML("afterbegin", '<img src="img/jogodavelha.png" draggable="false" class="x" />');
  DescH1.innerHTML = "Jogo Da Velha";
  DescP.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quos, eligendi explicabo itaque, quam nam consequuntur perferendis vitae saepe culpa nostrum dolorem. Architecto, alias fugiat. Maxime officiis repudiandae ipsam adipisci!";
  const valores = {
    0: "HTML",
    1: "CSS",
  };
  TecnoLi.forEach((item, pos) => {
    item.innerHTML = valores[pos];
    if (pos === 1) {
      const newLi = document.createElement("li");
      newLi.innerHTML = "JavaScript";
      item.insertAdjacentElement("afterend", newLi);
    }
  });
}

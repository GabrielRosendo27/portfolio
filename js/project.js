const imgTrack = document.getElementById("image-track");
const imgs = document.querySelectorAll(".image");
const arrow = document.querySelector(".arrow");
//
function addClass() {
  imgTrack.removeAttribute("id");
  imgTrack.classList.add("image-slide");
  imgs.forEach((i) => {
    i.classList.remove("image");
    i.classList.add("images");
  });
  arrow.style.display = "block";
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
  }
}
//
function showProject() {
  const actions = {
    0: () => {
      console.log("Clicou na imagem da posição 0");
    },
    1: () => {
      console.log("Clicou na imagem da posição 1");
    },
  };
  imgs.forEach((i, p) => {
    i.addEventListener("click", () => {
      imgs.forEach((i) => {
        i.style.opacity = "1";
      });
      if (actions[p]) {
        actions[p]();
        i.style.opacity = "0.3";
      } else {
        console.log("Clicou em outra imagem");
      }
    });
  });
}
imgs.forEach((i) => {
  i.onclick = addClass;
  showProject();
});
//
arrow.onclick = removeClass;
//

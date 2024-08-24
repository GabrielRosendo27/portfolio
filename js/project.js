import Project1 from "./projects/project1.js";
import Project2 from "./projects/project2.js";
import Project3 from "./projects/project3.js";
import Project4 from "./projects/project4.js";
import Project5 from "./projects/project5.js";
import Project6 from "./projects/project6.js";

export const Descpj = document.querySelector(".desc-project");
export const imgProject = document.querySelector(".img-project");
export const newLi = document.createElement("li");
export const DescH1 = document.querySelector(".desc-project h1");
export const DescP = document.querySelector(".desc-project p");
export const DescLink = document.querySelector(".desc-project a");
export const TecnoLi = document.querySelectorAll(".tecno-project ul li");

const imgTrack = document.getElementById("image-track");
const imgs = document.querySelectorAll(".image");
const arrow = document.querySelector(".arrow");
const arrow2 = document.querySelector(".arrow-2");
const containerProject = document.querySelector(".project-container");

//
//
document.addEventListener("DOMContentLoaded", function () {
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
        Project1();
      },
      1: () => {
        Project2();
      },
      2: () => {
        Project3();
      },
      3: () => {
        Project4();
      },
      4: () => {
        Project5();
      },
      5: () => {
        Project6();
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
});

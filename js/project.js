const imgTrack = document.getElementById("image-track");
const imgs = document.querySelectorAll(".image");
const arrow = document.querySelector(".arrow");
//
const imgSlide = document.querySelector(".image-slide");
const imgsR = document.querySelector(".images");
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
  if (imgSlide) {
    imgSlide.classList.remove(imgSlide);
    imgSlide.classList.add(imgTrack);
    imgsR.forEach((i) => {
      i.classList.remove(imgsR);
      i.classList.add(imgs);
    });
  }
}
//

imgs.forEach((i) => {
  i.onclick = addClass;
});

arrow.onclick = removeClass;

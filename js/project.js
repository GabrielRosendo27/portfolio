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
    });
  }
}
//
imgs.forEach((i) => {
  i.onclick = addClass;
});
//
arrow.onclick = removeClass;
//

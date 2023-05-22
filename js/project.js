const imgTrack = document.getElementById("image-track");
const imgs = document.querySelectorAll(".image");

function addClass() {
  imgTrack.removeAttribute("id");
  imgTrack.classList.add("image-slide");
  imgs.forEach((i) => {
    i.classList.remove("image");
    i.classList.add("images");
  });
}
imgs.forEach((i) => {
  i.onclick = addClass;
});

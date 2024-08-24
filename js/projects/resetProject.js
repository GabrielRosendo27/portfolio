import { Descpj } from "../project.js";
import { newLi } from "../project.js";

export const vercel = document.createElement("a");

export default function resetProject() {
  vercel.remove();
  Descpj.scrollTop = 0;
  const imgX = document.querySelector(".img-project img");
  if (imgX && newLi) {
    imgX.remove();
    newLi.remove();
  }
}

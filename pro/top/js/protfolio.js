const dropDown = document.querySelector(".manue");
const drop = document.querySelector(".drop");
let data = () => {
  let data = JSON.parse(sessionStorage.getItem("drop")) || [];
  return data;
};
dropDown.addEventListener("click", (e) => {
  let arr = data();
  if (!arr[0]) {
    drop.style.display = "inline";
    sessionStorage.setItem("drop", JSON.stringify([true]));
  } else {
    drop.style.display = "none";
    sessionStorage.removeItem("drop");
  }
});
document.body.addEventListener("keydown", () => {
  drop.style.display = "none";
  sessionStorage.removeItem("drop");
});
document.body.addEventListener("mousedown", (e) => {
  if (!e.target.classList.contains("drop_child")) {
    sessionStorage.removeItem("drop");
    drop.style.display = "none";
  }
  if (e.target.classList.contains("drop_child")&&!e.target.classList.contains("manue")) {
  setTimeout(() => {
    sessionStorage.removeItem("drop");
    drop.style.display = "none";
  }, 10);
  }
});
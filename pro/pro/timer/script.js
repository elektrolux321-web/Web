let adder = document.querySelector(".adder");
let timer = document.querySelector(".timer");
const start = document.querySelector(".btns1");
const stopt = document.querySelector(".btns2");
const restart = document.querySelector(".btns3");
const timeOut = document.querySelector(".btns4");
const clear = document.querySelector(".btns5");
let sec = 0;
let localVar = 0;
let id;
let time = () => {
  sec += 1000;
  var s = new Date(sec);
  s=`M:${s.getMinutes()}  S:${s.getSeconds()}`;
  timer.innerText = s;
}
start.addEventListener("click", () => {
  if (sec === 0) {
    id = setInterval(() => {
      time();
    }, 1000);
  }
  var pt;
  var lt;
  setTimeout(() => {
    pt = timer.innerText;
    setTimeout(() => {
      lt = timer.innerText;
    }, 1010);
  }, 100);
  setTimeout(() => {
    if (pt == lt) {
      id = setInterval(() => {
        time();
      }, 1000);
    }
  }, 2000);
});
stopt.addEventListener("click", () => {
  setTimeout(() => {
    clearInterval(id);
  }, 1);
});
restart.addEventListener("click", () => {
  sec = 0;
});
timeOut.addEventListener("click", () => {
  localStorage.setItem("local", JSON.stringify(localVar));
  if (JSON.parse(localStorage.getItem("local") < 6)) {
    localVar += 1;
    let li = document.createElement("li");
    li.innerText = `stop on ${timer.innerText}`;
    li.classList.add("li");
    adder.append(li);
  }
});
clear.addEventListener("click", () => {
  adder.innerText = "";
  localVar = 0;
  localStorage.setItem("local", JSON.stringify(localVar));
  sec=0;
  timer.innerText = "M:0  S:0";
  setTimeout(() => {
    clearInterval(id);
  }, 1);
});

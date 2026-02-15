const btn = document.querySelector(".btn");
const addDiv= document.querySelector(".add");
let inp = document.getElementById("inp");
let arr = [];
let item = [];
let getItem = function () {
  return JSON.parse(localStorage.getItem("massage")) || [];
};
let getChecks = function () {
  return JSON.parse(localStorage.getItem("check")) || [];
};
let itemChecks = getChecks();
addDiv.addEventListener("change", (e) => {
  e.stopPropagation()
  if (e.target.classList.contains("check")) {
    if (e.target.checked === true) {
      let ind = item.indexOf(e.target.nextElementSibling.innerText);
      arr.splice(ind, 1, true);
    } else {
      let ind = item.indexOf(e.target.nextElementSibling.innerText);
      arr.splice(ind, 1, false);
    }
    localStorage.setItem("check", JSON.stringify(arr));
  }
});
function addElem() {
  let input = inp.value.trim();
  input = input.replace(/\s+/g, " ");
  if (input !== "") {
    item = getItem();
    item.push(input);
    item = [...new Set(item)];
    localStorage.setItem("massage", JSON.stringify(item));
    inp.value = "";
    location.reload();
  }
}
item = getItem();
for (let index = 0; index < item.length; index++) {
  if (itemChecks[index] === true) {
    arr.splice(index, 1, true);
  } else {
    arr.splice(index, 1, false);
  }
  localStorage.setItem("check", JSON.stringify(arr));
}

if (item !== null) {
  for (const i of item) {
    let ccDiv = document.createElement("div");
    if (i !== null) {
      ccDiv.innerHTML = ` 
      <input type="checkbox" class="check h-5 w-5 accent-transparent cursor-pointer  outline-none" id="check${item.indexOf(
        i
      )}" title="check">
      <label class="p-[2px] min-h-9 w-[30rem] flex place-items-center font-medium text-[20px] text-slate-200 " for="check${item.indexOf(
        i
      )}"> ${i}</label>
     <a class="del px-1 h-8 w-17 font-bold text-[17px] grid place-items-center bg-slate-200 text-slate-700 cursor-pointer  rounded-md hover:bg-red-500 hover:text-slate-200" title="delete">Delete</a>`;
      ccDiv.classList.add("cc");
      ccDiv.firstElementChild.checked = itemChecks[item.indexOf(i)];
      addDiv.append(ccDiv);
    }
  }
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    addElem();
  });
  addDiv.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
      let ind = item.indexOf(e.target.previousElementSibling.innerText);
      item.splice(ind, 1);
      arr.splice(ind, 1);
      localStorage.setItem("check", JSON.stringify(arr));
      localStorage.setItem("massage", JSON.stringify(item));
      e.target.parentElement.remove();
    }
  });
}
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addElem();
});
let cc = document.querySelectorAll(".cc");
for (const iterator of cc) {
  iterator.setAttribute(
    "class",
    "p-3 h-17 w-[38.5rem] relative flex justify-center items-center rounded-md text-slate-700 gap-3 bg-slate-700"
  );
}

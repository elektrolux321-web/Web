const btn = document.querySelector(".btn");
const addDiv = document.querySelector(".add");
let inp = document.getElementById("inp");
let form=document.querySelector("form").addEventListener("formdata",(e)=>{
  e.preventDefault();
})
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
      <input type="checkbox" class="check" id="check${item.indexOf(i)}" title="check">
      <label for="check${item.indexOf(i)}"> ${i}</label>
     <a class="del" title="close">X</a>`;
      ccDiv.classList.add("cc");
      ccDiv.firstElementChild.checked = itemChecks[item.indexOf(i)];
      addDiv.append(ccDiv);
    }
  }
  btn.addEventListener("click", (e) => {
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

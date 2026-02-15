# `Todo-app description:`

> ## **It is an app which contain tasks that you do today . It is made by `html,css,JavaScript. `**
> ## **Which task you done you can uncheck that task. It use your browser storage.**
> ## **If you reset the browser your task will be delete.**

## `Code :`

```javascript
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
```

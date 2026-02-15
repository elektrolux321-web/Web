const btn = document.querySelector("a");
const p = document.querySelector(".para");
const inp = document.querySelector("input");
const btnr = document.querySelector("button");
const random = Math.floor(Math.random() * 100);
let count = 1;
btnr.addEventListener("click",() => {
  location.reload();
})
// p.innerText = random;
try {
  btn.addEventListener("click", (e) => {
    let val = inp.value;
        if (val   > 0 && val < 101) {
      if (count == 5) {
        p.innerText = `Your guess number is wrong 5's time ,try again 😂`;
        btnr.style.display = `block`;
      } else {
        if (val == random) {
          p.innerText = `Your guess number is correct 🥳 🎉`;
        } else if (val > random) {
          p.innerText = `Your guess is too high ,try again 😣`;
          count++;
        } else if (val < random) {
          p.innerText = `Your guess is too low ,try again 😣`;
          count++;
        }
      }
    } else {
      p.innerText = `Your guess number is't vaild 📣 `;
      count++;
    }
  });
} catch (error) {
  p.innerText = error;
}

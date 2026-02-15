let btns=document.querySelector(".btns");
let on=document.querySelector(".btn1");
let off=document.querySelector(".btn2");
let del=document.querySelector(".btn3");
let upsc=document.querySelector(".calculation");
let equal=document.querySelector(".btn16");
let same=document.querySelector(".same");
btns.addEventListener("click",(e)=>{
    if (e.target.classList.contains("same")) {
        let x= e.target.innerText;
        upsc.innerText= upsc.innerText+x;
     console.log(x);
    }
})
off.addEventListener("click",()=>{
   same.setAttribute("disabled","true");
console.log(same);
})  
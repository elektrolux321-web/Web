class User {
  constructor(userName, email,password, isSign) {
    this.userName = userName;
    this.email = email;
    this.password=password;
    this.isSign = isSign;
  }
}
// ==========================================================================
let  userName =document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userPass = document.querySelector("#password");
const submit = document.querySelector(".submit");
const regEx =
  /^[a-zA-Z\d]+(?:[.%+-_][a-zA-Z\d]+)*@[a-zA-Z\d]+\.[a-zA-Z\d]{2,}$/;
// ==========================================================================
submit.addEventListener("click",(e)=>{
 try {
  let username=userName.value;
  username=username.trim();
   username= username.replace(/\s+/g," ");
   console.log(username);
  let check=regEx.test(userEmail.value);
  console.log(userEmail.value);
  console.log(userPass.value);
  console.log(check);
  if (check) {
   let user1=new User(username,userEmail.value,userPass.value,check);
    console.log("you are successfully sign up!");
    console.log(user1);
    location.replace('../main/top/index.html');
  } else {
    document.querySelector(".div").style.display="block";
    setTimeout(() => {
    document.querySelector(".div").style.display="none";
    userName.value="";
    userEmail.value="";
    userPass.value="";
    }, 3000);
  }
 } catch (error) {
  console.log(error);
 }
});
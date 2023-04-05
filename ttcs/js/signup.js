
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");
const inputUsername = document.querySelector(".input-login-username");
var email_c=document.querySelector("#email");
var checkp=document.querySelector("#password");
var checkp2=document.querySelector("#confirmpassword");
const user_check = JSON.parse(localStorage.getItem(inputUsername.value));

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else if(checkp.value!== checkp2.value){alert("mật khẩu không trùng khớp");} 
  else if(user_check.username === email_c.value){alert("tài khoản đã tồn tại");}
  else {

    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };

    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});
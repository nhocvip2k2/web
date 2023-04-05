// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      let checklogin=true;
      console.log(checklogin);
      alert("Đăng Nhập Thành Công");
      window.location.href = "home.html";
    } else {
      let checklogin=false;
      console.log(checklogin);
      alert("Đăng Nhập Thất Bại");
    }
  }
});
// Javascript password comparison and validation
// Source code referenced from https://medium.com/@vishal_kr/javascript-password-confirmation-while-typing-6e96cc0367c0

const pass1 = document.getElementById("password");
const pass2 = document.getElementById("confirm_password");

let password, re_password;

pass1.addEventListener("input", () => {
  password = pass1.value;
  password === re_password
    ? ((pass1.style.backgroundColor = "rgba(32,178,170,0.4)"),
      (pass2.style.backgroundColor = "rgba(32,178,170,0.4)"))
    : ((pass1.style.backgroundColor = "rgba(255,69,0,0.3)"),
      (pass2.style.backgroundColor = "rgba(255,69,0,0.3)"));
});

pass2.addEventListener("input", () => {
  re_password = pass2.value;
  password === re_password
    ? ((pass1.style.backgroundColor = "rgba(32,178,170,0.4)"),
      (pass2.style.backgroundColor = "rgba(32,178,170,0.4)"))
    : ((pass1.style.backgroundColor = "rgba(255,69,0,0.3)"),
      (pass2.style.backgroundColor = "rgba(255,69,0,0.3)"));
});

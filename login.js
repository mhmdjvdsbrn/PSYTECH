const passField = document.querySelector("#id_password"),
  showBtn = document.querySelector("i");

showBtn.addEventListener("click", () => {
  if (passField.type === "password") {
    passField.type = "text";
    showBtn.classList.add("hide");
    console.log("hiii");
  } else {
    passField.type = "password";
    showBtn.classList.remove("hide");
    console.log("hiii2");
  }
});
const clc = document.querySelector(".cancel");
const arr = document.querySelector(".arr_container");
const leftContainer = document.querySelector(".left_container");

arr.addEventListener("click", () => {
  arr.classList.add("active_arr");
  if (leftContainer.classList.contains("off")) {
    leftContainer.classList.remove("off");
    leftContainer.classList.add("active");
  }
});

clc.addEventListener("click", () => {
  arr.classList.add("active_arr");
  if (leftContainer.classList.contains("active")) {
    leftContainer.classList.remove("active");
    leftContainer.classList.add("off");
  }
});

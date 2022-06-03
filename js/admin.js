const submit = document.getElementById("submit");
const result = document.querySelector("p");

submit.addEventListener("click", () => {
  return setText();
});

// result.innerText = submit.setText();
function setText() {
  const text = document.getElementById("text").value;
  localStorage.setItem("text", text);
  result.innerText = text;
  // console.log(localStorage);
}

console.log(localStorage);

function getText() {
  let textResult = localStorage.getItem("text");
  const result = document.getElementById("result");

  result.innerText = textResult;
}

getText();

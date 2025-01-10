function add() {
  var result = 
      Number(document.getElementById("firstNo").value) +
      Number(document.getElementById("secondNo").value);
  document.getElementById("result").innerText = "Resultado da Adição: " + result;
}

function sub() {
  var result = 
      Number(document.getElementById("firstNo").value) -
      Number(document.getElementById("secondNo").value);
  document.getElementById("result").innerText = "Resultado da Subtração: " + result;
}
function mult() {
  var result = 
      Number(document.getElementById("firstNo").value) *
      Number(document.getElementById("secondNo").value);
  document.getElementById("result").innerText = "Resultado da Subtração: " + result;
  console.log(result);
}
function div() {
  var result = 
      Number(document.getElementById("firstNo").value) /
      Number(document.getElementById("secondNo").value);
  document.getElementById("result").innerText = "Resultado da Subtração: " + result;
  if (secondNo === 0 {
      document.getElementById("result").innerText = "Erro 
)
}

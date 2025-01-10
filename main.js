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
  document.getElementById("result").innerText = "Resultado da Multiplicação: " + result;
  console.log(result);
}
function div() {
      var firstNo = Number(document.getElementById("firstNo").value);
      var secondNo= Number(document.getElementById("secondNo").value);
  if (secondNo === 0) {
      document.getElementById("result").innerText = "Erro dividir por 0";}
  else {
    var result = firstNo / secundNo;
    document.getElementById("result").innerText = "Resultado da Divisão: " + result;
  }
}
  //// 

function checarQuadradoPerfeito(event) {
    event.preventDefault();

    var number = parseInt(document.getElementById("number").value);
    var raizQuadrada = Math.sqrt(number);
  
    if (Number.isInteger(raizQuadrada)) { //verifica se o número digitado da variável 'raizQuadrada' é 
      document.getElementById("resultado").innerText = number + " é um quadrado perfeito.";
    } else {
      document.getElementById("resultado").innerText = number + " não é um quadrado perfeito.";
    }
  }
  
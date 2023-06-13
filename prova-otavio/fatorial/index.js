function calcularFatorial(event) {
    event.preventDefault(); //previne que a página recarregue quando o formulário     for enviado

    var numberInput = document.getElementById("numberInput"); 
  
    var resultado = document.getElementById("resultado"); 
  
    var number = parseInt(numberInput.value); // converte o valor  para um número           inteiro 
    if (number < 0 || number > 10) {  // Verifica se o número é um número válido            ou menor que zero
        resultado.innerHTML = "Por Favor, digite um número inteiro de 1 a 10";       
        return; 
    }

    var factorial = 1; // a variável inicia com 1
    for (var i = number; //define a variável 'i' como o 'number'
        i > 1; //enquanto o número digitado for maior que 1, o loop continua
        i =i-1) { //o valor de 'i' será diminuído a cada loop 
        factorial *= i; // multiplica a variável factorial pelo valor atual de i          e armazena o resultado em factorial
    }
    
  resultado.innerHTML = "O fatorial de " + number + " é " + factorial + "."; //           exibe o resultado do fatorial no elemento de resultado do HTML
    
}

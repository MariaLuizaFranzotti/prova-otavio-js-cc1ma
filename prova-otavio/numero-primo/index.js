function isPrime(num) { 
  if (num === 1) {
     return false;
   }

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
        isPrime = false;
      }
    }
  
  return true;
    
}

function ListarPrimos() {
  var ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '';

  for (var num = 1; <= 1000; num++) {
    if (isPrime(num)) {
      var li = document.createElement('li');
      li.textContent = num;
      ulResultado.appendChild(li);
    }
  }

}

  
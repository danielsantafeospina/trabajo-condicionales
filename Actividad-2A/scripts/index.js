import '../styles/index.scss';

import 'bootstrap';

console.log('webpack starterkit');

function calculate(){
  const factorialnum = document.getElementById('numerofactorial').value;
  
  document.getElementById('factorialnum').innerHTML = factorial(factorialnum);
}

const factorial = function(n){
  var result = 1;
  
  for(var i = 1; i <= n; i++){
    result *= i;
  }
  return result;
};

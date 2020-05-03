import '../styles/index.scss';

import 'bootstrap';

console.log('webpack starterkit');

const inputNumberOne = document.getElementById("numberOne");
const inputNumberTwo = document.getElementById("numberTwo");
const inputNumberThree = document.getElementById("numberThree");
const h5Result = document.getElementById("result");

function calculate() {
  const n1 = parseInt(inputNumberOne.value);
  const n2 = parseInt(inputNumberTwo.value);
  const n3 = parseInt(inputNumberThree.value);
 
  
  
   if(n1 > n2 && n1 > n3){
   h5Result.innerHTML = "El mayor es:" + n1;
   }else{
   if(n2 > n1 && n2 > n3){
   h5Result.innerHTML = "El mayor es:" + n2;
   }else{
   h5Result.innerHTML = "El mayor es:" + n3;
  
  
}}}
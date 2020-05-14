
console.log('webpack starterkit');

const inputnumberOne = document.getElementById("numberOne");
const h5Result = document.getElementById("result");



function calculate(){
  let numberOne = parseInt(document.getElementById("numberOne").value);
  
  
  if(numberOne % 2 == 0){
    h5Result.innerHTML = "Es par";

}else{
     h5Result.innerHTML = "Es impar";
}}




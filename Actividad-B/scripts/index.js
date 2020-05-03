import '../styles/index.scss';

import 'bootstrap';

console.log('webpack starterkit');


const inputnumberOne = document.getElementById("numberOne");
const h5Result = document.getElementById("result");



function calculate(){
  let numberOne = parseInt(document.getElementById("numberOne").value);
  
  if(numberOne >= 18){
    h5Result.innerHTML = "Es mayor de edad";

}else{
     h5Result.innerHTML = "Es menor de edad";
}}
 
$(document).ready(function() {
    $('div').hover(
        function () {
            // código a ejecutarse cuando el apuntador pasa por encima
            $(this).css({"background-color":"green"});
        }, 
        function () {
            // código a ejecutarse cuando el apuntador sale del elemento
            $(this).css({"background-color":"red"});
        }
    );
});


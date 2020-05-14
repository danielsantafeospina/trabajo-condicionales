

console.log('webpack starterkit');


const inputNumberOne = document.getElementById("numberOne");
const inputNumberTwo = document.getElementById("numberTwo");
const inputNumberThree = document.getElementById("numberThree");
const h5Result = document.getElementById("result");
const h5nota = document.getElementById("nota");

function calculate() {
  const n1 = parseInt(inputNumberOne.value);
  const n2 = parseInt(inputNumberTwo.value);
  const n3 = parseInt(inputNumberThree.value);
 
  if(hasDataAnError(n1, n2, n3)){
    onError();
    return;
  }
  onSuccess(n1, n2, n3);
}

function hasDataAnError(n1, n2, n3){
  return !n1 || !n2  || !n3;
}

function onError(){
    h5Result.innerHTML = "ingrese datos validos";
    h5Result.classList.add("text-danger");
}

function onSuccess(n1, n2, n3){
    h5Result.innerHTML = add(n1, n2, n3);
    h5Result.classList.remove("text-danger");
}

function add(n1, n2, n3,){
  return n1+n2+n3 /3; 
}

function nota(n1, n2, n3,){

if (n1+n2+n3 /3 >=7 ) {
 h5nota.innerHTML = "Aprobado";

} else {
 h5Resulnota.innerHTML = "Reprobado";
}
}


 





var resultado = document.getElementById('display');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');
var sumar = document.getElementById('mas');
var restar = document.getElementById('menos');
var mutiplicar = document.getElementById('por');
var dividir = document.getElementById('dividido');
var punto = document.getElementById('punto');
var limpiar = document.getElementById('on');

uno.onclick = function(e){
  if (resultado.textContent = "0"){
    resultado.textContent = "1"
  } else{
    resultado.textContent = resultado.textContent  + "1"
  }
  return resultado;
}
dos.onclick = function(e){
  if (resultado.textContent = "0"){
    resultado.textContent = "2"
  } else{
    resultado.textContent = resultado.textContent  + "2"
  }
  return resultado;
}
tres.onclick = function(e){

    resultado.textContent = resultado.textContent  + "3";

}
cuatro.onclick = function(e){

    resultado.textContent = resultado.textContent  + "4";

}
cinco.onclick = function(e){

    resultado.textContent = resultado.textContent  + "5";

}
seis.onclick = function(e){

    resultado.textContent = resultado.textContent  + "6";

}
siete.onclick = function(e){

    resultado.textContent = resultado.textContent  + "7";

}
ocho.onclick = function(e){

    resultado.textContent = resultado.textContent  + "8";

}
nueve.onclick = function(e){

    resultado.textContent = resultado.textContent  + "9";

}
punto.onclick = function(e){
    resultado.textContent = resultado.textContent  + ".";

}
limpiar.onclick = function(e){
    resultado.textContent = "0";
}

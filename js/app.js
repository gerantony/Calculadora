var uno1 = document.getElementById("1");
var dos2 = document.getElementById("2");
var tres3 = document.getElementById("3");
var cuatro4 = document.getElementById("4");
var cinco5 = document.getElementById("5");
var seis6 = document.getElementById("6");
var siete7 = document.getElementById("7");
var ocho8 = document.getElementById("8");
var nueve9 = document.getElementById("9");
var cero = document.getElementById("0");
var limpiar = document.getElementById("on");
var puntop = document.getElementById("punto");
var signo = document.getElementById("sign");
var pantalla = "0";

limpiar.addEventListener('click', function(){
  document.getElementById("display").innerHTML = "0";
})

function validar(texto){
	if (texto.length >7){ //si el texo es mayor a 8
		var limitado = document.getElementById("display").innerHTML;
    texto = limitado.substring(length()-1);
    document.getElementById("display").innerHTML = texto;
	}
}

uno1.addEventListener('click', function(){
    pantalla = document.getElementById("display").innerHTML;
    validar(pantalla);
    if (pantalla == '0'){
      document.getElementById("display").innerHTML = "1";
    } else {
      document.getElementById("display").innerHTML =  pantalla + "1";
    }
})

dos2.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "2";
  } else {
    document.getElementById("display").innerHTML =  pantalla + "2";
  }
})

tres3.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "3";
  } else {
    document.getElementById("display").innerHTML =  pantalla = pantalla + "3";
  }
})

cuatro4.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "4";
  } else {
    document.getElementById("display").innerHTML =  pantalla + "4";
  }
})

cinco5.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "5";
  } else {
    document.getElementById("display").innerHTML =  pantalla + "5";
  }
})

seis6.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "6";
  } else {
    document.getElementById("display").innerHTML =  pantalla + "6";
  }
})

siete7.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "7";
  } else {
    document.getElementById("display").innerHTML =  pantalla + "7";
  }
})

ocho8.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "8";
  } else {
    document.getElementById("display").innerHTML =  pantalla + "8";
  }
})

nueve9.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "9";
  } else {
    document.getElementById("display").innerHTML =  pantalla + "9";
  }
})

cero.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla == '0'){
    document.getElementById("display").innerHTML = "0";
  } else {
    document.getElementById("display").innerHTML =  pantalla + "0";
  }
})

puntop.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla.indexOf(".") == -1){
     document.getElementById("display").innerHTML =  pantalla  + ".";
   } else{
     alert("No se puede ingresar mas puntos decimales");
   }
})

signo.addEventListener('click', function(){
  pantalla = document.getElementById("display").innerHTML;
  validar(pantalla);
  if (pantalla != "0") {
      var valor = pantalla;
      if(valor.indexOf('-') == 0)
        document.getElementById("display").innerHTML = valor.substring(1);
      else
        document.getElementById("display").innerHTML = '-' + pantalla;
  } else{
    document.getElementById("display").innerHTML = "0"
  }
})

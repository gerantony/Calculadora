//VARIABLES-----------------------------------------------
var calculadora = {
  uno1 = document.getElementById("1");
  dos2 = document.getElementById("2");
  tres3 = document.getElementById("3");
  cuatro4 = document.getElementById("4");
  cinco5 = document.getElementById("5");
  seis6 = document.getElementById("6");
  siete7 = document.getElementById("7");
  ocho8 = document.getElementById("8");
  nueve9 = document.getElementById("9");
  cero = document.getElementById("0");
  limpiar = document.getElementById("on");
  puntop = document.getElementById("punto");
  signo = document.getElementById("sign");
  suma = document.getElementById("mas");
  resta = document.getElementById("menos");
  mult = document.getElementById("por");
  dividir = document.getElementById("dividido");
  igualres = document.getElementById("igual");
  efecto = document.getElementsByClassName("tecla");
}
var pantalla = "0";
var operacion = "0";
var numero1 = "0";
var numero2 = "0";


// FUNCIONES------------------------------------
limpiar.addEventListener('click', function(){
  document.getElementById("display").innerHTML = "0";
  numero1 = "0";
  numero2 = "0";
  operacion = "";
})

// *********FUNCION DE CALCULAR LAS OPERACIONES*************
function calcular(resultado){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(numero1) + parseFloat(numero2);
      break;
    case "-":
    res = parseFloat(numero1) - parseFloat(numero2);
    break;
    case "x":
      res = parseFloat(numero1) * parseFloat(numero2);
      break;
    case "/":
      res = parseFloat(numero1) / parseFloat(numero2);
      break;
  }
  document.getElementById("display").innerHTML = res;
  pantalla = document.getElementById("display").innerHTML;
  if (pantalla.indexOf(".") == -1){
     document.getElementById("display").innerHTML = res;
   } else {
     document.getElementById("display").innerHTML = res.toFixed(3);
   }
}

function limpiars(){
  document.getElementById("display").innerHTML = "";
}

function validar(texto){
	if (texto.length >7){ //si el texo es mayor a 8
		var limitado = document.getElementById("display").innerHTML;
    texto = limitado.substring(length()-1);
    document.getElementById("display").innerHTML = texto;
    return texto;
	}
}

//----------EFECTOS DE LAS TECLAS-------------------------------------------
function botonon1(){
    document.getElementById("on").style.transform = "scale(0.9, 0.9)";
}
function botonon2(){
    document.getElementById("on").style.transform = "scale(1, 1)";
}
function botonsg1(){
    document.getElementById("sign").style.transform = "scale(0.9, 0.9)";
}
function botonsg2(){
    document.getElementById("sign").style.transform = "scale(1, 1)";
}
function botonrz1(){
    document.getElementById("raiz").style.transform = "scale(0.9, 0.9)";
}
function botonrz2(){
    document.getElementById("raiz").style.transform = "scale(1, 1)";
}
function botondiv1(){
    document.getElementById("dividido").style.transform = "scale(0.9, 0.9)";
}
function botondiv2(){
    document.getElementById("dividido").style.transform = "scale(1, 1)";
}
function botonx1(){
    document.getElementById("por").style.transform = "scale(0.9, 0.9)";
}
function botonx2(){
    document.getElementById("por").style.transform = "scale(1, 1)";
}
function botonmn1(){
    document.getElementById("menos").style.transform = "scale(0.9, 0.9)";
}
function botonmn2(){
    document.getElementById("menos").style.transform = "scale(1, 1)";
}

function boton11(){
    document.getElementById("1").style.transform = "scale(0.9, 0.9)";
}
function boton12(){
    document.getElementById("1").style.transform = "scale(1, 1)";
}
function boton21(){
    document.getElementById("2").style.transform = "scale(0.9, 0.9)";
}
function boton22(){
    document.getElementById("2").style.transform = "scale(1, 1)";
}
function boton31(){
    document.getElementById("3").style.transform = "scale(0.9, 0.9)";
}
function boton32(){
    document.getElementById("3").style.transform = "scale(1, 1)";
}

function boton41(){
    document.getElementById("4").style.transform = "scale(0.9, 0.9)";
}
function boton42(){
    document.getElementById("4").style.transform = "scale(1, 1)";
}
function boton51(){
    document.getElementById("5").style.transform = "scale(0.9, 0.9)";
}
function boton52(){
    document.getElementById("5").style.transform = "scale(1, 1)";
}
function boton61(){
    document.getElementById("6").style.transform = "scale(0.9, 0.9)";
}
function boton62(){
    document.getElementById("6").style.transform = "scale(1, 1)";
}

function boton71(){
    document.getElementById("7").style.transform = "scale(0.9, 0.9)";
}
function boton72(){
    document.getElementById("7").style.transform = "scale(1, 1)";
}
function boton81(){
    document.getElementById("8").style.transform = "scale(0.9, 0.9)";
}
function boton82(){
    document.getElementById("8").style.transform = "scale(1, 1)";
}
function boton91(){
    document.getElementById("9").style.transform = "scale(0.9, 0.9)";
}
function boton92(){
    document.getElementById("9").style.transform = "scale(1, 1)";
}

function boton01(){
    document.getElementById("0").style.transform = "scale(0.9, 0.9)";
}
function boton02(){
    document.getElementById("0").style.transform = "scale(1, 1)";
}
function botonp1(){
    document.getElementById("punto").style.transform = "scale(0.9, 0.9)";
}
function botonp2(){
    document.getElementById("punto").style.transform = "scale(1, 1)";
}
function botoni1(){
    document.getElementById("igual").style.transform = "scale(0.9, 0.9)";
}
function botoni2(){
    document.getElementById("igual").style.transform = "scale(1, 1)";
}
function botonm1(){
    document.getElementById("mas").style.transform = "scale(0.9, 0.9)";
}
function botonm2(){
    document.getElementById("mas").style.transform = "scale(1, 1)";
}

//LISTENER DE LOS BOTONES------------------------------
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

suma.addEventListener('click', function(){
  numero1 = document.getElementById("display").innerHTML;
  operacion = "+";
  limpiars();
})
resta.addEventListener('click', function(){
  numero1 = document.getElementById("display").innerHTML;
  operacion = "-";
  limpiars();
})
mult.addEventListener('click', function(){
  numero1 = document.getElementById("display").innerHTML;
  operacion = "x";
  limpiars();
})
dividir.addEventListener('click', function(){
  numero1 = document.getElementById("display").innerHTML;
  operacion = "/";
  limpiars();
})

igualres.addEventListener('click', function(){
  numero2 = document.getElementById("display").innerHTML;
  calcular();
})

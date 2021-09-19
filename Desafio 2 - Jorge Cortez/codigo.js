
var numeroActivo = document.getElementById("nroActivo");
var operador = document.getElementById("operador");
var numeroGuardado = document.getElementById("nroGuardado");

var uno = document.getElementById("nro1");
var dos = document.getElementById("nro2");
var tres = document.getElementById("nro3");
var cuatro = document.getElementById("nro4");
var cinco = document.getElementById("nro5");
var seis = document.getElementById("nro6");
var siete = document.getElementById("nro7");
var ocho = document.getElementById("nro8");
var nueve = document.getElementById("nro9");
var cero = document.getElementById("nro0");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var resultado = document.getElementById("resultado");
var punto = document.getElementById("punto");
var ultimoDigito = document.getElementById("ultimoDigito");
var reset = document.getElementById("reset");
var menos1 = document.getElementById("menos1");

menos1.addEventListener("click", function(){
    var n1 = numeroActivo.textContent;
    numeroActivo.innerHTML = -1*parseFloat(n1)
});

reset.addEventListener("click", function(){
    numeroActivo.innerHTML = "";
    numeroGuardado.innerHTML = "";
    operador.innerHTML = "";
});

ultimoDigito.addEventListener("click", function(){
    var n1 = numeroActivo.textContent;
    numeroActivo.innerHTML = n1.slice(0,-1);
});


resultado.addEventListener("click", function(){
    var n1 = numeroActivo.textContent;
    var n2 = numeroGuardado.textContent;
    var operacion = operador.textContent;



    if (operacion == "*") {
        numeroActivo.innerHTML = parseFloat(n1) * parseFloat(n2);
    } else if (operacion == "/") {
        numeroActivo.innerHTML = parseFloat(n2) / parseFloat(n1);
    } else if (operacion == "+") {
        numeroActivo.innerHTML = parseFloat(n1) + parseFloat(n2);
    } else if (operacion == "-") {
        numeroActivo.innerHTML = parseFloat(n1) - parseFloat(n2);
    }
});

uno.addEventListener("click",function(){
    var n1 = uno.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n1;
});

dos.addEventListener("click",function(){
    var n2 = dos.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n2;
});

tres.addEventListener("click",function(){
    var n3 = tres.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n3;
});

cuatro.addEventListener("click",function(){
    var n4 = cuatro.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n4;
});

cinco.addEventListener("click",function(){
    var n5 = cinco.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n5;
});

seis.addEventListener("click",function(){
    var n6 = seis.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n6;
});

siete.addEventListener("click",function(){
    var n7 = siete.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n7;
});

ocho.addEventListener("click",function(){
    var n8 = ocho.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n8;
});

nueve.addEventListener("click",function(){
    var n9 = nueve.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n9;
});

cero.addEventListener("click",function(){
    var n0 = cero.value;
    numeroActivo.innerHTML = numeroActivo.textContent+n0;
});

suma.addEventListener("click",function(){
    var simboloSuma = suma.value;
    operador.innerHTML = operador.textContent+simboloSuma;
    numeroGuardado.innerHTML = numeroActivo.textContent;
    numeroActivo.innerHTML = "";
});

resta.addEventListener("click",function(){
    var simboloResta = resta.value;
    operador.innerHTML = operador.textContent+simboloResta;
    numeroGuardado.innerHTML = numeroActivo.textContent;
    numeroActivo.innerHTML = "";
});

division.addEventListener("click",function(){
    var simboloDivision = division.value;
    operador.innerHTML = operador.textContent+simboloDivision;
    numeroGuardado.innerHTML = numeroActivo.textContent;
    numeroActivo.innerHTML = "";
});

multiplicacion.addEventListener("click",function(){
    var simboloMultiplicacion = multiplicacion.value;
    operador.innerHTML = operador.textContent+simboloMultiplicacion;
    numeroGuardado.innerHTML = numeroActivo.textContent;
    numeroActivo.innerHTML = "";
});

punto.addEventListener("click",function(){
    var simboloPunto = punto.value;
    numeroActivo.innerHTML = numeroActivo.textContent + simboloPunto;
});




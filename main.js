var segundos= 00;
var milesimos = 00;
var appendMilesimos = document.querySelector(".milesimos");
var appendSegundos = document.querySelector(".segundos");
var botaoComecar = document.querySelector(".botaoComecar");
var botaoParar = document.querySelector(".botaoParar");
var botaoReiniciar = document.querySelector(".botaoReiniciar");
var intervalo;

function comecaCronometro(){
    milesimos++;

    if(milesimos < 9){
        appendMilesimos.innerHTML = "0" ;
    }
    if(milesimos > 9){
        appendMilesimos.innerHTML = milesimos;
    }
    if(milesimos > 99){
        segundos++;
        appendSegundos.innerHTML = "0" + segundos;
        milesimos = 0;
        appendMilesimos.innerHTML = "0" + 0;
    }
    if(segundos > 9){
        appendSegundos.innerHTML = segundos;
    }
}

botaoComecar.onclick = function(){
    intervalo = setInterval(comecaCronometro);
}
botaoParar.onclick = function(){
    clearInterval(intervalo);
}
botaoReiniciar.onclick = function(){
    clearInterval(intervalo);
    milesimos = "00";
    segundos = "00";
    appendSegundos.innerHTML = segundos;
    appendMilesimos.innerHTML = milesimos;
}
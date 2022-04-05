var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

//CALCULAR IMC = MASSA/(ALTURA * ALTURA)
var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if (peso <= 0 || peso >= 600){
    var imc = "Peso inválido!";
} else if(altura <= 0 || altura >= 3.00){
    var imc = "Altura inválida!";
} else {
    var imc = peso / (altura * altura);
}

tdImc.textContent = imc;

console.log(paciente); 
console.log(tdPeso);
console.log(peso);
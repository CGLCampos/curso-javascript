var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista";

//CALCULAR IMC = MASSA/(ALTURA * ALTURA)
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validarPeso(peso);
    var alturaValida = validarAltura(altura);

    if (!pesoValido){
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        alturaValida = false
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    } 
    
    if (pesoValido && alturaValida) {
        tdImc.textContent = calcularImc(peso, altura);
    }
}

function validarPeso(peso) {
    if (peso > 0 && peso < 600){
        return true;
    }
    return false;
}

function validarAltura(altura) {
    if(altura > 0 && altura < 3.00){
        return true;
    } 
    return false;
}

function calcularImc (peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

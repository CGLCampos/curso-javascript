var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //EXTRAINDO INFORMAÇÕES DO FORMULÁRIO
    var form = document.querySelector("#form-adiciona");
    var paciente = obterNovoPaciente(form);

    //ADICIONANDO O PACIENTE A TABELA
    var pacienteTr = montarTr(paciente);
    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(pacienteTr);

    form.reset();
});

//CRIANDO OBJETO DO PACIENTE
function obterNovoPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

//CRIANDO A <tr> E <TD> DO PACIENTE E ADICIONANDO SUAS RESPECTIVAS CLASSES
function montarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
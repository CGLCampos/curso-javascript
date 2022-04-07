var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    //EXTRAINDO INFORMAÇÕES DO FORMULÁRIO
    var form = document.querySelector("#form-adiciona");
    var paciente = obterNovoPaciente(form);

    //VALIDAR O PACIENTE
    var erros = validarPaciente(paciente);
    if(erros.length > 0){
        exibirErros(erros);
        return;
    }

    //ADICIONANDO O PACIENTE A TABELA
    adicionarPaciente(paciente);

    form.reset();
});

//ADICIONANDO O PACIENTE A TABELA
function adicionarPaciente(paciente) {
    var pacienteTr = montarTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

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

function validarPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0)
        erros.push("O nome não pode estar em branco.");

    if(paciente.peso.length == 0)
        erros.push("O peso não pode estar em branco.");
    else {
        if (!validarPeso(paciente.peso))
            erros.push("O peso é inválido!");
    }

    if(paciente.altura.length == 0)
        erros.push("A altura não pode estar em branco.");
    else {
        if (!validarAltura(paciente.altura))
            erros.push("A altura é inválida!");
    }
    
    if(paciente.gordura.length == 0)
        erros.push("A gordura não pode estar em branco.");

    return erros;
}

function exibirErros(erros) {
    var ul = document.querySelector("#erro-form");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
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
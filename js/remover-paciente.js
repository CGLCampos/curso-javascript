var pacientes = document.querySelectorAll(".paciente");
var table = document.querySelector("#tabela-pacientes");

table.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeout");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
})


/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    })
}); */
//essa funcao faz com que a cor de background da atividade que foi completa mude para verde.
function chanceBackGround(){
    document.getElementById("nameAtv").style.backgroundColor = "#02732A"
}
//caso o usuario queira desmarcar uma atividade que ele tinha completado, essa funcao muda a cor de volta a original
function chanceBackGroundOriginal(){
    document.getElementById("nameAtv").style.backgroundColor = "#FFFFFF"
}


// Essa funcao add o que o usuario colocar como atvidade em um array
var listaAtividade = new Array();
function addAtividade(){
    listaAtividade.push(document.getElementById("nameAtv").value)
}


//essa função vai reconhecer quando o usuario pressionar a tecla "enter" e vai add uma nova tarefa 
function tecla(){
    if(event.keyCode === 13){
        alert("tecla enter foi pressionada e nova atividade add ao Array") //isso aqui é so teste, pode ser retirado depois
        addAtividade()
    }
}

//essa funcao aqui o Gabs fez por algum motivo que eu nao sei.
function createTesk() {
    alert(document.getElementById("nameAtv").value);
}

//isso aqui é só para ver o que tem no array pelo console
console.log(listaAtividade)
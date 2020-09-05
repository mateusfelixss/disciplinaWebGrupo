//essa funcao faz com que a cor de background da atividade que foi completa mude para verde.
function chanceBackGround(){
    document.getElementById("nameAtv").style.backgroundColor = "#02732A"
}
//caso o usuario queira desmarcar uma atividade que ele tinha completado, essa funcao muda a cor de volta a original
function chanceBackGroundOriginal(){
    document.getElementById("nameAtv").style.backgroundColor = "#FFFFFF"
}


var listaAtividade = new Array();

function addAtividade(){
    document.getElementById("atv").listaAtividade.push(value)
}

console.log(listaAtividade)
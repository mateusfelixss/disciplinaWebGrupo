//essa funcao faz com que a cor de background da atividade que foi completa mude para verde.
function chanceBackGround(){
    document.getElementById("nameAtv").style.backgroundColor = "#02732A"
}
//caso o usuario queira desmarcar uma atividade que ele tinha completado, essa funcao muda a cor de volta a original
function chanceBackGroundOriginal(){
    document.getElementById("nameAtv").style.backgroundColor = "#FFFFFF"
}

var removeTodo = function(){
	var id = this.getAttribute('id');
	listaAtividade.splice(id, 1);

}

// Essa funcao add o que o usuario colocar como atvidade em um array
var listaAtividade = new Array();
function addAtividade(){
    listaAtividade.push(document.getElementById("nameAtv").value)

    document.getElementById("nameAtv").value = ''; // Retorna para vazio o input após um item ser inserido.
    
    var html = '<ul>'; // Criamos uma variável 'html' que irá concatenando a nossa estrutura HTML.
    listaAtividade.forEach(function(elemento, index){ // Criamos um forEach para iterar todos os elementos do nosso Array.
        html += '<li> 📌 ' + elemento + ' ' +'<button class="remove" id="'+ index +'" onclick="atualiza()">X</button></li>'; // Novamente utilizamos a variável 'html' para concatenar nosso HTML passando o 'elemento' que referencia os itens pertencentes os todos. 'index' representa nosso index dentro do array.
    });

    html += '</ul>'; // Fechamos a concatenação.
    document.getElementById('listAtv').innerHTML = html; // Inserimos o conteúdo da variável 'html' dentro da 'div' que contém o id 'listAtv'. O innerHTML serve justamente para inserir novos conteúdos.
    
    var id = 0;
    var buttons = document.getElementsByClassName('remove'); // Pegamos todos os elementos do DOM que possuem a class 'remove' e armazenamos na variável 'buttons'.
    for (var i=0; i < buttons.length; i++){ // Iteramos nossos elementos e adicionamos para cada elemento com a class 'remove' o addEventListener conectado com o evento 'click' e o callback da função 'removeTodo'.
        buttons[i].addEventListener('click', removeTodo);
   
 	};
}

function atualiza(){
	
}	
//essa função vai reconhecer quando o usuario pressionar a tecla "enter" e vai add uma nova tarefa 
function tecla(){
    if(event.keyCode === 13){
        alert("tecla enter foi pressionada e nova atividade add ao Array") //isso aqui é so teste, pode ser retirado depois
        addAtividade()
    }
}

//essa funcao aqui o Gabs fez por algum motivo que eu nao sei. Robi:KKKKK
function createTesk() {
    alert(document.getElementById("nameAtv").value);
}

//isso aqui é só para ver o que tem no array pelo console
console.log(listaAtividade)

/*
PARTE DE SUBSTITUIR OS NÓS DA LISTA
var item = document.getElementById("listAtv")
		//item.replaceChild(item.childNodes[1], item.childNodes[0]);
		if (item) {
	    // replace it
	    item.replaceChild(item, item.childNodes[id]);
	  } else {
	    // otherwise append it to the end of the list
	    list.append(item);
	  }
*/
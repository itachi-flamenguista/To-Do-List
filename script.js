function adicionaNovoElemento()
{
    const novoElemento = document.getElementById("elemento");
    const espacoLista = document.createElement("li");
    if (novoElemento.value == "")
    {
        alert("Insira um elemento válido!");
        return;
    }
    espacoLista.innerText = novoElemento.value;
    lista.appendChild(espacoLista);
    novoElemento.value = "";

}

function excluiElemento()
{
    var elementoTexto = document.getElementById("elemento").value;
    console.log(elementoTexto);
    const todosEl = lista.getElementsByTagName("li");
    for (let valor of todosEl)
    {
        if (valor.innerText == elementoTexto) // todosEl é uma lista de li e não strings, portanto temos que comparar o innerText do li;
        {
            lista.removeChild(valor);
            elementoTexto = "";
            return;
        }
    }
    
    alert("Valor não existente");
}

const lista = document.getElementById("minha-lista");
const adiciona = document.getElementById("adiciona-elemento");
const remove = document.getElementById("remove-elemento");
adiciona.onclick = adicionaNovoElemento;
remove.onclick = excluiElemento;

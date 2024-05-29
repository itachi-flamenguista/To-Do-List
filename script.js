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
    const elementoTexto = document.getElementById("elemento").value;
    for (let valor of lista)
    {
        if (elementoTexto == valor)
        {
            lista.removeChild("li");
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

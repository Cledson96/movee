// Remove elementos
function removeElement(id) 
{
	// Declara variavel lista que indica  onde o elemento será removido.
	var lista    = document.getElementById('lista');
	
	// Declara variavel elemento que indica qual elemento será removido.
	var elemento = document.getElementById(id);
	 
	// Função removeChild irá procurar elementos que estão dentro da variavel lista com o valor
	// da variavel elemento para remover.
	lista.removeChild(elemento);
}
 
// Adiciona elementos basedo no valor dos combo box (select)
function adicionar(id) 
{
	// Cria uma variavel que captura o valor do elemento selecionado no combo box.
	var valor   = document.getElementById(id).value;
	 
	// Cria uma variavel com referencia ao Id do Elemento
	var lista    = document.getElementById('lista');
	// Cria uma variavel para inidicar a quantidade de elementos com o mesmo Id. Com valor inicial 1.
	var qtd = 1;
	 
	// Verifica se elemento com o Id informado existe.
	if(document.getElementById('element_' + valor))
	{
		// Caso o elemento exista é atribuido o valor referente a quandide de vezes que foi adicionado
		// este elemento.
		qtd = document.getElementById('item_' + valor).value;
		 
		// Apos pegar o valor da quantidade. O elemento é removido para que não ocorra duplicação.
		removeElement('element_' + valor);
		 
		// Incrementa a quantidade do elemento para o proximo registro.
		qtd++;
	}
	 
	// Variavel que contem dados dos novos elementos na lista.
	// É criado uma tag <li> que contem informação do elemento adicionado.
	// Dentro deste registro é adicionado um link <a> para remover o elemento.
	// Tambem é adicionado um <input> do tipo hidden com o valor e a quantidade do elemento.
	
	var dado = '<li id="element_' + valor + '"><span><strong>'
	+ valor +
	'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantidade&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '
	+ qtd +
	'</strong> <a title="Remover Item" onclick="removeElement(\'element_' + valor +  '\'); return false;" href="javascript:void(0);">&nbsp;&nbsp;&nbsp;[ - ]&nbsp;&nbsp;&nbsp; Remover</a></span><input id="item_'
	+ valor +
	'" type="hidden" value="'
	+ qtd +
	'" name="itensOrcamento['
	+ valor +
	']"/></li>';


	// Pega o codigo HTML dento da lista e adiciona novos registros.
	lista.innerHTML = lista.innerHTML + dado;
}
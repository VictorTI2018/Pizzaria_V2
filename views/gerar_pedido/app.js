const items = []

let rbPizza = document.getElementById('rbPizza')
let rbBebida = document.getElementById('rbBebida')


const montarPayload = (dados) => {
    let itemSelecionado = 0
    let detalhesDoPedido = ""
    if (rbPizza.checked) {
        itemSelecionado = dados.pizza.selectedIndex
        detalhesDoPedido = dados.pizza[itemSelecionado].text
    } else {
        itemSelecionado = dados.bebida.selectedIndex
        detalhesDoPedido = dados.bebida[itemSelecionado].text
    }

    let valorDoDetalhe = dados.detalhes.value
    let valorDaMesa = dados.mesa.value
    const detalhesPayload = `Mesa: ${valorDaMesa} - ${detalhesDoPedido}: ${valorDoDetalhe}`
    const payload = {
        detalhes: valorDoDetalhe,
        mesa: valorDaMesa,
        descricaoPedido: detalhesPayload
    }
    gerarPedido(payload)
}

const validarDados = () => {
    let message = document.getElementById('message')
    const dados = {
        pizza: document.getElementById('pizza'),
        bebida: document.getElementById('bebida'),
        detalhes: document.getElementById('detalhes'),
        mesa: document.getElementById('mesa')
    }
    if (Number(dados.mesa.value) > 0 && Number(!isNaN(dados.mesa.value))) {
        if (dados.detalhes.value !== '') {
            montarPayload(dados)
        } else {
            message.innerHTML = alertCustom({
                message: "Por favor, informe os detalhes do pedido.",
                tipo: "danger"
            })
            clearAlertCustom({ message: 'Dados do Pedido', el: message, time: 2500 })
        }

    } else {
        message.innerHTML = alertCustom({
            message: "Por favor, informe o número da mesa.",
            tipo: "danger"
        })
        clearAlertCustom({ message: 'Dados do Pedido', el: message, time: 2500 })
    }

}


const gerarPedido = (payload) => {
    items.push(payload)
    addItemInLocalStorage('pedido', items)
    resetarDados()
}

const mostrarDetalhesDoPedido = () => {
    let pizza = document.getElementById('pizza')
    let bebida = document.getElementById('bebida')
    let detalhes = document.getElementById('detalhes')

    if (rbPizza.checked) {
        let detalhesDaPizza = detalhesDoTipoDePizza(pizza.value)
        detalhes.placeholder = `Até ${detalhesDaPizza}`
    } else {
        let detalhesDaBebida = detalhesDoTipoBebida(bebida.value)
        detalhes.placeholder = `${detalhesDaBebida}`
    }
}

const detalhesDoTipoDePizza = (value) => {
    let detalhesDaPizza = ""
    switch (value) {
        case 'broto':
            detalhesDaPizza = "1 Sabor";
            break;
        case 'media':
            detalhesDaPizza = "2 Sabores"
            break;
        case 'grande':
            detalhesDaPizza = "3 Sabores";
            break;
        case 'familia':
            detalhesDaPizza = "4 Sabores"
    }

    return detalhesDaPizza
}

const detalhesDoTipoBebida = (value) => {
    let detalheDaBebida = ""
    switch (value) {
        case 'refrigerante':
            detalheDaBebida = "Guarana: Poty, Cotuba - Cola: Coca-Cola, Roller. Todos 2 Litros"
            break;
        case 'suco':
            detalheDaBebida = "Laranja, Acerola, Abacaxi, Caju. Todos 1 Litro"
            break;
        case 'agua':
            detalheDaBebida = 'Sem gás, Com Gás, Tônica.'
            break;
        case 'cerveja':
            detalheDaBebida = 'Brahma, Skol, Crystal, Lokal. Todas Latas'
            break;
    }
    return detalheDaBebida
}

const trocarTipoDoPedido = () => {
    let pizza = document.getElementById('pizza')
    let bebida = document.getElementById('bebida')

    if (rbPizza.checked) {
        bebida.className = 'd-none'
        pizza.className = 'd-block form-control'
    } else {
        pizza.className = 'd-none'
        bebida.className = 'd-block form-control'
    }
}

const resetarDados = () => {
    document.getElementById('bebida').className = 'd-none'
    document.getElementById('pizza').className = 'd-block form-control'
    document.getElementById('mesa').value = 0
    document.getElementById('detalhes').value = ''
    document.getElementById('pizza').selectedIndex = 0
    rbPizza.checked = true
    rbPizza.focus()
}

rbPizza.addEventListener('change', trocarTipoDoPedido)
rbBebida.addEventListener('change', trocarTipoDoPedido)

let detalhes = document.getElementById('detalhes')
detalhes.addEventListener('focus', mostrarDetalhesDoPedido)

detalhes.addEventListener('blur', () => detalhes.placeholder = 'Detalhe do pedido')

detalhes.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        validarDados()
    }
})

let btnGerarPedido = document.getElementById('btnGerarPedido')
let btnResetarDados = document.getElementById('btnResetarDados')
btnResetarDados.addEventListener("click", resetarDados)
btnGerarPedido.addEventListener("click", validarDados)
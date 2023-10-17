let num = document.getElementById('txtn')
let lista = document.getElementById('selist')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    res.innerHTML = ''
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Número ${Number(num.value)} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
}


function finalizar() {
    res.innerHTML += `<br>Ao todo, temos ${valores.length} números cadastrados.<br>`

    const maxNumber = valores.reduce((max, current) => {
        return Math.max(max, current);
      });
    res.innerHTML += `<br>O maior número informado foi ${maxNumber}.<br>`

    const minNumber = valores.reduce((min, current) => {
        return Math.min(min, current);
      });
    res.innerHTML += `<br>O menor número informado foi ${minNumber}.<br>`

    let soma = 0
    for(let i = 0; i < valores.length; i++){
        soma += valores[i]
    }
    res.innerHTML += `<br>Somando todos os valores, temos ${soma}.<br>`
    
    let media = soma / valores.length
    res.innerHTML += `<br>A média dos valores digitados é ${media}.`
}

function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let button = document.getElementById('button')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.valuelength == 0) {
        window.alert('[ERRO] Preencha os espaços por favor')
    } else {
        res.innerHTML = `Contando: `
        let ini = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (f > ini && p < f) {
            for (let i = ini; i <= f; i += p) {
                res.innerHTML += ` 👉 ${i} `
                }
            if (i = f) {
            res.innerHTML += `🏁`
            }
        } else if (f < ini && p < ini){
            for (let i = f; i <= ini; i += p) {
                res.innerHTML += ` 👉 ${i} `
                }
            if (i = ini) {
                    res.innerHTML += `🏁`
            }
        } else if (p > f) {
            res.innerHTML += `Não dê o "Passo" maior que a perna!`
        }
    }
}


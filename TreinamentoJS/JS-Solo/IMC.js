//IMC = peso / (altura * altura)

function calcularIMC(peso, altura){
    const IMC = peso / (altura * 2)
    return(`Seu IMC é: ${IMC}`)
}

console.log(calcularIMC(50, 1.79))
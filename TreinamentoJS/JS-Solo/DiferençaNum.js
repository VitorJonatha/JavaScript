// Calcula a diferênça dentre dois números

const num1 = 7
const num2 = 500

if (num1 > num2) {
    const res = num1 - num2
    console.log(` ${num1} é maior que ${num2}, e a diferença entre deles é: ${res}`)
} else if (num2 > num1) {
    const res = num2 - num1
    console.log(`${num2} é maior que ${num1}, e a diferença entre deles eles é: ${res}`)
} else {
    console.log(`${num1} e ${num2} são iguais, logo, a diferença entre eles é: 0`)
}
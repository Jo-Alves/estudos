/*
** O método toLocaleString()  retorna ua representção de elementos de um array. Os elementos são convertidos para strings utilizados seus respectivos métodos toLocaleString e essas cadeias são separados por uma sequencia específica de localidade(separados por virgula)
*/

let numbers = [1,2,3,4,5]
let names = ["valdirene", "Joelmir", "Maria Lídia", "Alexina"]

let mistura = [numbers, names]

console.log(mistura.toLocaleString())


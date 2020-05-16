let texto = 'CFB Cursos - Curso de Javascript - aula 46 do curso de javascript'

// let res = texto.search(/Curso/i)
// let res = texto.replace(/curso/ig, "aula")
// let res = texto.charAt(11)
let res = texto.charCodeAt(0)

console.log(`${res} - ${String.fromCharCode(res)}`)

let text1 = 'CFB Cursos - Curso de Javascript '
let text2 = "- aula 46 do curso de javascript"
res = text1.concat(text2)
console.log(`Primeiro concat -`, res)
res = text1.concat(`- aula 46 do curso de javascript`)
console.log(" Segundo concat -", res)
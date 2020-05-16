let texto = 'CFB Cursos - Curso de Javascript - aula 46 do curso de javascript'

// let result = texto.match(/[oa]/gi)
// let result = texto.match(/[o|a]/gi)
// let result = texto.match(/[^oa]/gi)
// let result = texto.match(/[a-g]/gi)
// let result = texto.match(/[^a-g]/gi)
// let result = texto.match(/\W/gi)
let result = texto.match(/\d/gi)

console.log(`${result} - ${result.length}`)

console.log(`${result[0]}`)
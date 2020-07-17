const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.splice(2, 1)

console.log(number)

const pedido = [
    { id: 1, descricao: "Notebook", precoUnitario: 2000.50, qtd: 2, precoTotal: 2001.00 },
    { id: 2, descricao: "Celular", precoUnitario: 800.50, qtd: 2, precoTotal: 1600.00 },
    { id: 3, descricao: "Iphone", precoUnitario: 600.00, qtd: 2, precoTotal: 1200.00 },
    { id: 4, descricao: "tablet", precoUnitario: 1000.50, qtd: 1, precoTotal: 1000.00 }
]

let ValorTotal = 0;
pedido.forEach(e => {
    ValorTotal += e.precoTotal
})

console.log(`Valor Total: R$ ${ValorTotal}`)

const lista = [
    { hora: "6:00", tarefa: "tomar café" },
    { hora: "7:00", tarefa: "Programar" },
    { hora: "11:00", tarefa: "Almoçar" },
    { hora: "12:00", tarefa: "Voltar ao trabalho" },
    { hora: "16:00", tarefa: "Parar de programar" },
    { hora: "18:00", tarefa: "Jantar" },
    { hora: "19:00", tarefa: "Estudar" },
    { hora: "21:00", tarefa: "Namorar" },
    { hora: "22:00", tarefa: "Fazer amor" }
]

filterList = lista.filter(list => list.tarefa.includes('amor'))

console.log(filterList)

const pedidos = [
    { id: 1, descricao: "Notebook", precoUnitario: 2000.50, qtd: 2, precoTotal: 2001.00 },
    { id: 2, descricao: "Celular", precoUnitario: 800.50, qtd: 2, precoTotal: 1600.00 },
    { id: 3, descricao: "Iphone", precoUnitario: 600.00, qtd: 2, precoTotal: 1200.00 },
    { id: 4, descricao: "tablet", precoUnitario: 1000.50, qtd: 1, precoTotal: 1000.00 }
]

let num = 1
filterPedido = pedidos.filter(p => p.id.toString().includes(parseInt(1)))

console.log(filterPedido)


pessoa = []

pessoa.push({ nome: 'Valdirene Aparecida Ferreira', idade: 33 })
pessoa.push({ nome: 'Joelmir Rogério Carvalho', idade: 30 })
console.log(pessoa)

const pedido = [
    { id: 1, descricao: "Notebook", precoUnitario: 2000.50, qtd: 2, precoTotal: 2001.00 },
    { id: 2, descricao: "Celular", precoUnitario: 800.50, qtd: 2, precoTotal: 1600.00 },
    { id: 3, descricao: "Iphone", precoUnitario: 600.00, qtd: 2, precoTotal: 1200.00 },
    { id: 4, descricao: "tablet", precoUnitario: 1000.50, qtd: 1, precoTotal: 1000.00 }
]

let p = false;
pedido.forEach(e => {
    if (e.id.toString().includes(5 .toString()))
        p = true
})

console.log(p)
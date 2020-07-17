(function () {
    const inp = document.querySelectorAll(".inp")
    const btnCloseWindow = document.querySelector(".fa-window-close")
    const btnAdicionar = document.querySelector(".btn-adicionar")
    const btnCancelar = document.querySelector(".btn-cancelar")
    const msgError = document.querySelector(".msg")
    const msgErrorSpan = document.querySelector(".msg span")
    const gridView = document.querySelector(".table-produto")
    const gridViewBody = document.querySelector(".table-produto tbody")
    const gridViewFoot = document.querySelector(".table-produto tfoot")
    let pencil, trash, trs, goEditar = false, indexRow;

    const pedido = []
    gridView.classList.add('table-zero')
    // const pedido = [
    //     { id: 1, descricao: "Notebook", precoUnitario: 2000.00, qtd: 2, precoTotal: 4000.00 },
    //     { id: 2, descricao: "Celular", precoUnitario: 800.00, qtd: 2, precoTotal: 1600.00 },
    //     { id: 3, descricao: "Iphone", precoUnitario: 600.00, qtd: 2, precoTotal: 1200.00 },
    //     { id: 4, descricao: "tablet", precoUnitario: 1000.00, qtd: 1, precoTotal: 1000.00 }
    // ]

    let PedidoUnitario


    function ListarPedido() {
        let ValorTotal = 0;
        gridViewBody.innerHTML = ""
        gridViewFoot.innerHTML = ""
        pedido.forEach(p => {
            gridViewBody.innerHTML += `
            <tr class="row">
                <td>${p.id}</td>
                <td>${p.descricao}</td>
                <td>R$ ${p.precoUnitario.toFixed(2)}</td>
                <td>${p.qtd}</td>
                <td>R$ ${p.precoTotal.toFixed(2)}</td>
                <td>
                    <i class="fa fa-pencil" aria-hidden="true"></i> 
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </td>
            </tr>`

            pencil = document.querySelectorAll(".fa-pencil")
            trash = document.querySelectorAll(".fa-trash")
            trs = document.querySelectorAll("tbody tr")
            ValorTotal += p.precoTotal
        })

        gridViewFoot.innerHTML += `
        <td colspan="6">Valor Total: R$ ${ValorTotal.toFixed(2)}</td>
    `
        if (pedido.length === 0)
            return

        pencil.forEach((e, i) => {
            e.addEventListener("click", () => {
                PedidoUnitario = pedido.filter(p => p.id.toString().includes(trs[i].cells[0].innerText))
                inp[0].value = PedidoUnitario[0].id
                inp[1].value = PedidoUnitario[0].descricao
                inp[2].value = PedidoUnitario[0].precoUnitario
                inp[3].value = PedidoUnitario[0].qtd
                goEditar = true
                indexRow = i
                btnAdicionar.innerText = "Editar"
            })
        })


        trash.forEach((e, i) => {
            e.addEventListener("click", () => {
                pedido.splice(i, 1)
                ListarPedido()
                if (pedido.length === 0)
                    gridView.classList.add('table-zero')
                else
                    gridView.classList.remove('table-zero')

                Clear();
            })
        })
    }

    ListarPedido()

    btnAdicionar.addEventListener("click", () => {
        temValor = true
        inp.forEach(e => {
            if (!e.value.trim())
                temValor = false
        })

        if (temValor) {
            msgError.classList.remove("msg-error")
        }
        else {
            msgErrorSpan.innerText = "Preencha todos os campos!"
            msgError.classList.add("msg-error")
            return
        }

        gridView.classList.remove('table-zero')
        if (!goEditar) {
            let temPedidosComEsteID = false

            pedido.forEach(e => {
                if (e.id.toString().includes(parseInt(inp[0].value)))
                    temPedidosComEsteID = true
            })

            if (temPedidosComEsteID) {
                msgErrorSpan.innerText = "Existe um produto adicionado com o mesmo código!"
                msgError.classList.add("msg-error")
                return
            }

            pedido.push({ id: parseInt(inp[0].value), descricao: inp[1].value, precoUnitario: parseFloat(inp[2].value), qtd: inp[3].value, precoTotal: (parseFloat(inp[2].value) * parseFloat(inp[3].value)) })
        }
        else {
            pedido[indexRow].id = parseFloat(inp[0].value)
            pedido[indexRow].descricao = inp[1].value
            pedido[indexRow].precoUnitario = parseFloat(inp[2].value)
            pedido[indexRow].qtd = parseInt(inp[3].value)
            pedido[indexRow].precoTotal = (parseFloat(inp[2].value) * parseInt(inp[3].value));
        }
        ListarPedido()
        Clear()
    })

    function Clear() {
        inp.forEach((e, i) => {
            e.value = ""
            if (i === 4) {
                e.value = 1
            }
        })
        btnAdicionar.innerText = "Adicionar"
        goEditar = false
    }

    btnCloseWindow.addEventListener("click", () => {
        msgError.classList.remove("msg-error")
    })

    btnCancelar.addEventListener("click", () => {
        Clear()
    })
})()
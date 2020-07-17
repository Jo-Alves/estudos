(function () {
    const textInput = document.querySelector(".text-tarefa")
    const btnListar = document.querySelector(".btn-listar")
    const textSearch = document.querySelector(".text-search")
    const btnLimpar = document.querySelector(".btn-limpar")
    const btnReiniciar = document.querySelector(".btn-reset")
    const tarefa = document.querySelector(".list-tarefa")
    const horario = document.querySelector(".text-horario")

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

    let filterList;

    let novaLista = []

    function PreencherNovaLista() {
        novaLista = lista.map(e => {
            return { hora: e.hora, tarefa: e.tarefa }
        })
    }

    PreencherNovaLista()

    function Search() {
        filterList = novaLista.filter(list => list.tarefa.toLowerCase().includes(textSearch.value.toLowerCase()))
        tarefa.innerHTML = "";
        filterList.forEach(nl => {
            tarefa.innerHTML += `<li><span>${nl.hora}</span> -  ${nl.tarefa} </li>`
        })
    }

    textSearch.addEventListener("input", Search)

    function Listar() {
         tarefa.innerHTML = ""
        novaLista.forEach(list => {
            tarefa.innerHTML += `<li><span>${list.hora}</span> -  ${list.tarefa} </li>`
        })
    }

    Listar()

    btnListar.addEventListener("click", () => {
        if (textInput.value.trim() && horario.value.trim()) {

            novaLista.push({
                hora: horario.value.trim(),
                tarefa: textInput.value.trim()
            })

            Listar()
            textInput.value = ""
            horario.value = ""
            horario.focus()
        }
    })

    function Reset() {
        tarefa.innerHTML = "";
        LimparCampos();
        horario.focus()
        novaLista.splice(0, novaLista.length)
    }

    function LimparCampos() {
        document.querySelectorAll("input").forEach(e => {
            e.value = ""
        })
    }

    btnLimpar.addEventListener("click", Reset)

    btnReiniciar.addEventListener('click', () => {
        Reset()
        PreencherNovaLista()
        Listar()
    })


})()
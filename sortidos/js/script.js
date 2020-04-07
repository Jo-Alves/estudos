(function () {
    let inpNumberLimit = document.querySelectorAll(".num-limit input")
    let error = document.querySelectorAll(".error")
    let inpNumberDrawn = document.querySelector(".num-drawn input")
    let btnSortear = document.querySelector(".btn-draw")
    let result = document.querySelector(".result span")

    btnSortear.addEventListener("click", () => {
        error.forEach((e, i) => {
            if (ValidarCampos(i) !== undefined) {
                e.innerHTML = ValidarCampos(i)
                return
            }
        })

        SortearNumber(inpNumberLimit[0].value, inpNumberLimit[1].value, inpNumberDrawn.value)
    })

    function SortearNumber(valorInicial, valorFinal, inpNumberDrawn) {
        let min = Math.ceil(valorInicial)
        let max = Math.floor(valorFinal)

        let numRandom = []
        for (let i = 1; i <= inpNumberDrawn; i++) {
            let result = Math.floor(Math.random() * (max - min + 1) + min)
            // let num = numRandom.filter(e =>{
                
            // })
            numRandom.push(result)
        }
        result.innerHTML = numRandom
    }

    inpNumberLimit.forEach((e, i) => {
        e.addEventListener("change", () => {
            error[i].innerHTML = "";
        })
    })

    function ValidarCampos(index) {

        if (inpNumberLimit[index].value === "") {
            return "Campo Vazio! Preencha este campo para prosseguir"
        }
    }
})()
(function () {
    let inp = document.querySelector("#pass");
    let inpPass = document.querySelector(".inp-Pass");

    document.addEventListener("click", (event) => {
        let id_inp = inp.id;

        window.event.srcElement.id === id_inp ?
            inpPass.classList.add("outline")
            : inpPass.classList.remove("outline")
    })
})()
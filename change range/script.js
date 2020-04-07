(function () {
    let $input = document.querySelector("input")
    let $middle = document.querySelector(".middle")

    $input.addEventListener("change", () => {
        $middle.style.filter = "brightness(" + $input.value + "%)"
    })
})()
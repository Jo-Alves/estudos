(function () {
    let $range = document.querySelector("#range");
    let $container = document.querySelector(".container");

    $range.addEventListener("change", () => {
        $container.style.filter = "brightness(" + $range.value + "%)"
        console.log($range.value);
    })
})()
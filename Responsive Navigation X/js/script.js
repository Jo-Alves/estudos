(function () {
    let menuToggle = document.querySelector(".menu-toggle");
    let nav = document.querySelector("nav")
    menuToggle.addEventListener('click', ()=>{
        nav.classList.toggle("active")
    })
})()
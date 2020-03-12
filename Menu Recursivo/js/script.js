(function () {
    let menu = document.querySelector('nav ul');
    let navBar = document.querySelector('.menu-icon i')
    let nav = document.querySelector('nav')

    navBar.addEventListener("click", () => {
        menu.classList.toggle("showing");
    })

    window.addEventListener("scroll", (e) => {

        const windowTop = window.pageYOffset;

        if (windowTop > nav.offsetTop)
            nav.classList.add('black')
        else
            nav.classList.remove('black')
    })
})()
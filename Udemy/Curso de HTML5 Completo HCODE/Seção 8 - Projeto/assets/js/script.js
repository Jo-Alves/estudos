const btnOpenMenu = document.querySelector(".open-menu")
const btncloseMenu = document.querySelector(".close-menu button")
const menu = document.querySelector("header .menu")
const backdrop = document.querySelector(".menu .backdrop")

btnOpenMenu.addEventListener("click", OpenMenu)
btncloseMenu.addEventListener("click", CloseMenu)
backdrop.addEventListener("click", CloseMenu)

function OpenMenu(e){
	menu.classList.add('open')
}

function CloseMenu(e){
	menu.classList.remove('open')
}
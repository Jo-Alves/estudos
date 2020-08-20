menuToggle = document.querySelector(".menuToggle")
navigation = document.querySelector(".navigation")

menuToggle.addEventListener("click", toggleMenu)

function toggleMenu(){
	menuToggle.classList.toggle('active')
	navigation.classList.toggle('active')
}
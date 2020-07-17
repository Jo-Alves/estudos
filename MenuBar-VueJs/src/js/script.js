let app = new Vue({
	el: "#app",
	data: {
		isMenuTriggered: false,
		isSizeWindowBigger: (window.innerWidth > 680) ? true : false,
		itemsList: ["Home", "Portfólio", "Sobre mim", "Contato"]
	},
	methods:{
		toggleMenu(){
			this.isMenuTriggered  = !this.isMenuTriggered
		}
	},
	watch: {
		isSizeWindowBigger(newValue){
			if(!newValue)
				this.isMenuTriggered = false
		}
	},
	created(){
		window.addEventListener("resize", () => {
			this.isSizeWindowBigger = (window.innerWidth > 680) ? true : false
		})
	}
})
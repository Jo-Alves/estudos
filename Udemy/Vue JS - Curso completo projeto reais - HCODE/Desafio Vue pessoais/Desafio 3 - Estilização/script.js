new Vue({
    el: "#app",
    data: {
        msg: "Deus é amor",
        color: "black",
        styles: [{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
            width: "480"
        }],
        isTransition: false,
        mudouCor: false, 
        paddingStyle: "paddingStyle"      
    },
    computed: {
        mudar() {
            this.isTransition = !this.isTransition
        },
        mudarCor() {
            this.mudouCor = !this.mudouCor
        }
    }
})
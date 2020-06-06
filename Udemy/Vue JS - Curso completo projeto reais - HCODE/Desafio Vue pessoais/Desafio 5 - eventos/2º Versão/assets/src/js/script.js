new Vue({
    el: "#app",
    data: {
        source: "../assets/src/img/lampada-apagada.jpg",
        isbroken: false,
        checked: false
    },
    methods: {
        toggle() {
            if (this.isbroken) return

            this.source = (!this.checked) ? "../assets/src/img/lampada-acesa.jpg" : "../assets/src/img/lampada-apagada.jpg"
        },
        toBreakLamp() {
            this.source = "../assets/src/img/lampada-quebrada.jpg"
            this.isbroken = true;
        },
        reset() {
            this.source = "../assets/src/img/lampada-apagada.jpg";
            this.isbroken = false
            this.checked = false
        }
    }
})
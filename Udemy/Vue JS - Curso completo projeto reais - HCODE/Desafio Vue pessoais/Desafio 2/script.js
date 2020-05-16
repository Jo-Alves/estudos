new Vue({
    el: "#app",
    data: {
        isAdd: false,
        person: {
            id:"",
            nome: "",
            sobrenome: "",
            sexo: "Masculino",
            idade: "",
        },
        persons: []
    },
    methods: {
        addPerson() {
           this.persons.push(this.person)

            this.clearPerson()

            this.isAdd = true
        },
        clearPerson() {
            this.person = {
                id: "",
                nome: "",
                sobrenome: "",
                sexo: "Masculino",
                idade: ""
            }
        },
        cancelPerson() {
            this.clearPerson()
        }
    }
})
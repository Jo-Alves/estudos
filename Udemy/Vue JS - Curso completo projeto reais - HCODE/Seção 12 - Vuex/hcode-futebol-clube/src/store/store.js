import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        championship: "Campeonato Brasileiro",
        clubName: "Hcode Treinamentos",
        news: [{
            id: 1,
            title: "Começam os treinos para a nova temporada",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            date: "2020-05-03",
            imgName: "news1.jpg",
            imgInfo: "Notícia 1"
        },
        {
            id: 2,
            title: "Jogo de quarta termina empatado",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            date: "2020-05-07",
            imgName: "news2.jpg",
            imgInfo: "Notícia 2"
        },
        {
            id: 3,
            title: "A inauguração do estádio será ano que vem",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            date: "2020-05-10",
            imgName: "news3.jpg",
            imgInfo: "Notícia 3"
        }]
    },
    getters: {
        getChampionship(state) {
            return state.championship
        },
        getClubName(state) {
            return state.clubName
        },
        getNews(state) {
            return state.news
        }
    },
    mutations: {
        setChampionship(state, newValue) {
            state.championship = newValue
        }
    }
})
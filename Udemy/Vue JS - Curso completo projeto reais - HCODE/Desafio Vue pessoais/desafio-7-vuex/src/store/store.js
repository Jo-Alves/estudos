import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: true
    },
	getters: {
		getClassIcon(state){
			return state.isMenuVisible ? 'fa fa-angle-down' : 'fa fa-angle-left'
		}
	},
	mutations:{
		toggleMenu(state){
			state.isMenuVisible = !state.isMenuVisible
		}
	}
})
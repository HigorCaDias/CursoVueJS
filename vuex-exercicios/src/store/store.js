import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters'

Vue.use(Vuex)

// Função construtora
export default new Vuex.Store({
//    Estado central que é gerenciado pelo vue ex
    state: {
        nome: 'Maria',
        sobrenome: 'Silva',
    },
    getters,
    modules: { carrinho, parametros }
})
import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vuejs-5f3ba-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }


})

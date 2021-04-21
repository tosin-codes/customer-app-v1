  
import Vue from 'vue'
import { mapGetters } from 'vuex'

const User = {
    install(Vue, options){
        Vue.mixin({
            computed:{
              ...mapGetters({
                loggedIn:'authenticated',
                user:'user'
              })
            }
        })
    }
}

Vue.use(User)
import Vuex from 'vuex'
import userTypes from './modules/userTypes'
import users from './modules/users'


const store = new Vuex.Store({
    modules: {
        userTypes,
        users
    }
});
export default store
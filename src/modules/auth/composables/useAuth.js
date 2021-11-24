import { computed } from 'vue'
import { useStore } from 'vuex'

const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {
        //dispatch llama al action, auth hace referencia al módulo y createUser al action de la carpeta store
        const resp = await store.dispatch('auth/createUser', user)
        return resp
    }

    const loginUser = async (user) => {
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }
    //Guardamos en la constante checkStatus la respuesta a la llamada al action checkAuthentication 
    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = () => {
        store.commit('auth/logout')
        store.commit('journal/clearEntries')
    }

    return {
        checkAuthStatus,
        createUser, 
        loginUser, 
        logout,
        //Ponemos corchetes pq hacemos referencia a un objeto, no a una función.
       authStatus: computed(()=> store.getters['auth/currentState'] ), 
       username: computed(()=> store.getters['auth/username'] ) 
    }
}

export default useAuth
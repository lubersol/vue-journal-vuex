import authApi from '@/api/authApi'
// export const myAction = async ({commit }) => { }

// eslint-disable-next-line no-unused-vars
export const createUser = async ({ commit }, user) => {

    // eslint-disable-next-line no-unused-vars
    const { name, email, password } = user

    try {

        const { data } = await authApi.post(':signUp',{ email, password, returnSecureToken: true })
        // eslint-disable-next-line no-unused-vars
        const { idToken, refreshToken } = data

       await authApi.post(':update', { displayName: name, idToken, refreshToken })
        //no necesitamos la password
       delete user.password
        //llamamos a la mutación.NO HACE FALTA PONER EL MÓDULO PQ SE SOBREENTIENDE
       commit('loginUser', { user, idToken, refreshToken })
         
        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}

export const signInUser = async ({ commit }, user) => {

    // eslint-disable-next-line no-unused-vars
    const { name, email, password } = user

    try {

        const { data } = await authApi.post(':signInWithPassword',{ email, password, returnSecureToken: true })
        const { displayName, idToken, refreshToken } = data

        user.name = displayName

       commit('loginUser', { user, idToken, refreshToken })
         
        return { ok: true }

    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
}

export const checkAuthentication = async ({ commit }) => { 

    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if(!idToken) {
        //llamo a la mutación de logout
        commit('logout')
        return { ok: false, message: 'No hay token' }
    }

    try {
        //Extraemos la data q viene del endpoint de firebase :lookup
        const { data } = await authApi.post(':lookup', { idToken })
        // console.log(data);
        const { displayName, email } = data.users[0]
        //Creamos la constante user q mandaremos a la mutación de loginUser
        const user = {
            name: displayName,
            email
        }
        //Establece toda la información en el store
        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }
        
    } catch (error) {

        commit('logout')
        //Mostramos el mensaje que venga de firebase si sale mal
        return { ok: false, message: error.response.data.error.message }

    }

}
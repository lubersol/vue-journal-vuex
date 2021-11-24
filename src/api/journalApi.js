
import axios from 'axios'


const journalApi = axios.create({
    baseURL: 'https://vue-demos-cbaf1-default-rtdb.europe-west1.firebasedatabase.app'
})
//Se use el interceptors para firebase y las peticiones auth
journalApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    return config

})

export default journalApi
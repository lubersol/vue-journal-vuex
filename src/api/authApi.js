
import axios from 'axios'


const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDNVJhlCHg_46ki82DIky5SeWUy80YcbHc'
    }
})

//console.log( process.env.NODE_ENV ) // TEST durante testing

export default authApi
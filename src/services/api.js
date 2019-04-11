import axios from 'axios'

const api = axios.create({
    baseURL: 'https://node-goweek.herokuapp.com'
})

export default api
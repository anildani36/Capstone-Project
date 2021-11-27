const axios = require('axios')

const api = axios.create({
    baseURL: 'https://capstone-project-backend.herokuapp.com/'
})

export default api
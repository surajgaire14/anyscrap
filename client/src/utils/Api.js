import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : 'https://anyscrap.onrender.com/api'
export default  axios.create({
    baseURL: baseURL,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    })



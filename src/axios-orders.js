import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://my-burger-react-js.firebaseio.com/'
})

export default axiosInstance
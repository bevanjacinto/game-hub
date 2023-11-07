import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{        
        key:'a11768e07ed84910bcb04c00b73350e4'
    }
})
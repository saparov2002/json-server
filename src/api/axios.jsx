import axios from "axios";


const instance = () => {
 const env = process.env.REACT_ENV_FILE;
 return axios.create({
    baseURL : env,
    headers : {
        "Content-type" : "application/json",
        "Accept" : "*/*"
    },
    timeout :10000
 })
}

export default instance
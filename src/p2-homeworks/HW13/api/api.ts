import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const API = {
    setSuccess: () => {
        debugger
        return instance.post('', {success: true})
            .then(response => response.data)
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }
}
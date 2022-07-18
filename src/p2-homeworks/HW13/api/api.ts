import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test',
})

export const API = {
    setSuccess: (success: boolean) => {
        instance.put('', {success})
            .then(response => response.data)
    }
}
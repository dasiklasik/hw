import React from "react";
import axios from "axios";
import {Request} from "./Request";


export const HW13 = () => {

    const onClickHandler = () => {
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: true})
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div>
            <h2>HW13</h2>
            <Request/>
        </div>
    )
}



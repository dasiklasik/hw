import React from "react";
import axios from "axios";


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
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}



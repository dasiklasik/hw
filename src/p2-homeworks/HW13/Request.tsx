import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {juniorPlusStoreType} from "./bll/junior+Store";
import {changeSuccess, setSuccess} from "./bll/requestReducer";
import {Dispatch} from "@reduxjs/toolkit";

export const Request = () => {

    const checked = useSelector<juniorPlusStoreType, boolean>(state => state.request.success)
    const dispatch = useDispatch<Dispatch>()


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSuccess(e.currentTarget.checked))
    }

    const onClickHandler = () => {

    }

    return (
        <div>
            <input type={'checkbox'} checked={checked} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}